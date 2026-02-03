import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const enrollSchema = z.object({
  parentName: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email().optional().or(z.literal("")),
  childName: z.string().min(2),
  childAge: z.string().min(1),
  branch: z.string().min(1),
  course: z.string().optional(),
  message: z.string().optional(),
})

async function sendTelegramNotification(data: z.infer<typeof enrollSchema>) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) return

  const text = [
    "📝 Новая заявка на обучение!",
    "",
    `👤 Родитель: ${data.parentName}`,
    `📞 Телефон: ${data.phone}`,
    data.email ? `📧 Email: ${data.email}` : "",
    `👦 Ребёнок: ${data.childName}, ${data.childAge} лет`,
    `📍 Филиал: ${data.branch}`,
    data.course ? `📚 Курс: ${data.course}` : "",
    data.message ? `💬 Комментарий: ${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n")

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    })
  } catch (err) {
    console.error("Telegram notification failed:", err)
  }
}

async function sendEmailNotification(data: z.infer<typeof enrollSchema>) {
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.FROM_EMAIL
  const toEmail = process.env.NOTIFICATION_EMAIL

  if (!apiKey || !fromEmail || !toEmail) return

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Новая заявка: ${data.parentName} — ${data.childName}`,
        html: `
          <h2>Новая заявка на обучение</h2>
          <p><strong>Родитель:</strong> ${data.parentName}</p>
          <p><strong>Телефон:</strong> ${data.phone}</p>
          ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
          <p><strong>Ребёнок:</strong> ${data.childName}, ${data.childAge} лет</p>
          <p><strong>Филиал:</strong> ${data.branch}</p>
          ${data.course ? `<p><strong>Курс:</strong> ${data.course}</p>` : ""}
          ${data.message ? `<p><strong>Комментарий:</strong> ${data.message}</p>` : ""}
        `,
      }),
    })
  } catch (err) {
    console.error("Email notification failed:", err)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = enrollSchema.parse(body)

    // Send notifications in parallel
    await Promise.allSettled([
      sendTelegramNotification(data),
      sendEmailNotification(data),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: err.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
