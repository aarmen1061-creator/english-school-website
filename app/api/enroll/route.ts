import { NextRequest, NextResponse } from "next/server"
import { appendFile, mkdir } from "node:fs/promises"
import { dirname } from "node:path"
import nodemailer from "nodemailer"

// The journal is the primary record — Telegram and email are notifications.
// 152-FZ: personal data of RF citizens must be recorded in RF first, and this file
// lives on the Moscow server. It is also the only machine-readable source of leads:
// counting applications by scrolling a Telegram chat is not measurement.
const LEADS_FILE = process.env.LEADS_FILE || ".data/leads.jsonl"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.yandex.ru"
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || "465")
const EMAIL_USER = process.env.EMAIL_USER || "eweschool@yandex.ru"
const EMAIL_PASS = process.env.EMAIL_PASS || ""
const EMAIL_TO = process.env.EMAIL_TO || "eweschool@yandex.ru"

const text = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max)

async function appendToJournal(lead: Record<string, unknown>) {
  await mkdir(dirname(LEADS_FILE), { recursive: true })
  await appendFile(LEADS_FILE, JSON.stringify(lead) + "\n", "utf8")
}

export async function POST(request: NextRequest) {
  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: "bad_json" }, { status: 400 })
  }

  const parentName = text(data.parentName, 200)
  const phone = text(data.phone, 50)
  const childName = text(data.childName, 200)

  if (!parentName || !phone) {
    return NextResponse.json({ success: false, error: "missing_fields" }, { status: 400 })
  }

  const lead = {
    ts: new Date().toISOString(),
    site: "eweschool.ru",
    parentName,
    phone,
    email: text(data.email, 200) || null,
    childName: childName || null,
    childAge: text(data.childAge, 20) || null,
    branch: text(data.branch, 100) || null,
    course: text(data.course, 100) || null,
    message: text(data.message, 1000) || null,
    consent: data.agree === true,
    attribution: data.attribution ?? null,
    ip: request.headers.get("x-real-ip") || null,
    ua: text(request.headers.get("user-agent"), 300) || null,
  }

  // If the primary record fails, the lead is not accepted — better a visible error
  // than a lead that exists only as a chat message nobody can count later.
  try {
    await appendToJournal(lead)
  } catch (error) {
    console.error("journal write failed:", error)
    return NextResponse.json({ success: false, error: "storage_failed" }, { status: 500 })
  }

  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    const message = `
🎓 <b>Новая заявка на запись!</b>

👤 <b>Родитель:</b> ${parentName}
📱 <b>Телефон:</b> ${phone}
${lead.email ? `📧 <b>Email:</b> ${lead.email}` : ""}

👶 <b>Ребёнок:</b> ${childName || "не указан"}
${lead.childAge ? `🎂 <b>Возраст:</b> ${lead.childAge}` : ""}
${lead.branch ? `🏢 <b>Филиал:</b> ${lead.branch}` : ""}
${lead.course ? `📚 <b>Курс:</b> ${lead.course}` : ""}
${lead.message ? `💬 <b>Комментарий:</b> ${lead.message}` : ""}

🕐 <b>Дата:</b> ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
    `.trim()

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        },
      )
      if (!res.ok) console.error("telegram notify failed for", lead.ts)
    } catch (error) {
      console.error("telegram notify error:", error)
    }
  } else {
    console.error("telegram not configured — lead saved to journal only")
  }

  if (EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: EMAIL_PORT === 465,
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      })

      const row = (label: string, value: string) => `
        <tr>
          <td style="padding: 8px; font-weight: bold;">${label}</td>
          <td style="padding: 8px;">${value}</td>
        </tr>`

      await transporter.sendMail({
        from: `"EWE School" <${EMAIL_USER}>`,
        to: EMAIL_TO,
        subject: `Новая заявка: ${parentName} - ${childName || "без имени ребёнка"}`,
        html: `
          <h2>🎓 Новая заявка на запись!</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            ${row("👤 Родитель:", parentName)}
            ${row("📱 Телефон:", phone)}
            ${lead.email ? row("📧 Email:", lead.email) : ""}
            ${childName ? row("👶 Ребёнок:", childName) : ""}
            ${lead.childAge ? row("🎂 Возраст:", lead.childAge) : ""}
            ${lead.branch ? row("🏢 Филиал:", lead.branch) : ""}
            ${lead.course ? row("📚 Курс:", lead.course) : ""}
            ${lead.message ? row("💬 Комментарий:", lead.message) : ""}
            ${row("🕐 Дата:", new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }))}
          </table>
        `,
      })
    } catch (error) {
      console.error("email sending error:", error)
    }
  }

  return NextResponse.json({ success: true })
}
