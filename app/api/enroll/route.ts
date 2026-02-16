import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8504752869:AAHhS3MQSovi33lsgm-ul6PBnw0xpjXjvBM"
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "301635514"

// Email configuration
const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.yandex.ru"
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || "465")
const EMAIL_USER = process.env.EMAIL_USER || "eweschool@yandex.ru"
const EMAIL_PASS = process.env.EMAIL_PASS || ""
const EMAIL_TO = process.env.EMAIL_TO || "eweschool@yandex.ru"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Формируем сообщение для Telegram
    const message = `
🎓 <b>Новая заявка на запись!</b>

👤 <b>Родитель:</b> ${data.parentName}
📱 <b>Телефон:</b> ${data.phone}
${data.email ? `📧 <b>Email:</b> ${data.email}` : ''}

👶 <b>Ребёнок:</b> ${data.childName}
🎂 <b>Возраст:</b> ${data.childAge} ${data.childAge === '1' ? 'год' : data.childAge >= 2 && data.childAge <= 4 ? 'года' : 'лет'}
${data.branch ? `🏢 <b>Филиал:</b> ${data.branch}` : ''}
${data.course ? `📚 <b>Курс:</b> ${data.course}` : ''}
${data.message ? `💬 <b>Комментарий:</b> ${data.message}` : ''}

🕐 <b>Дата:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    `.trim()

    // Отправляем в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    )

    const telegramData = await telegramResponse.json()

    if (!telegramData.ok) {
      console.error("Telegram API error:", telegramData)
      throw new Error("Failed to send Telegram message")
    }

    // Отправляем на email
    if (EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: EMAIL_HOST,
          port: EMAIL_PORT,
          secure: EMAIL_PORT === 465, // true для 465, false для других портов
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
          },
        })

        const emailHtml = `
          <h2>🎓 Новая заявка на запись!</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">👤 Родитель:</td>
              <td style="padding: 8px;">${data.parentName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">📱 Телефон:</td>
              <td style="padding: 8px;">${data.phone}</td>
            </tr>
            ${data.email ? `
            <tr>
              <td style="padding: 8px; font-weight: bold;">📧 Email:</td>
              <td style="padding: 8px;">${data.email}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; font-weight: bold;">👶 Ребёнок:</td>
              <td style="padding: 8px;">${data.childName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">🎂 Возраст:</td>
              <td style="padding: 8px;">${data.childAge} ${data.childAge === '1' ? 'год' : data.childAge >= 2 && data.childAge <= 4 ? 'года' : 'лет'}</td>
            </tr>
            ${data.branch ? `
            <tr>
              <td style="padding: 8px; font-weight: bold;">🏢 Филиал:</td>
              <td style="padding: 8px;">${data.branch}</td>
            </tr>
            ` : ''}
            ${data.course ? `
            <tr>
              <td style="padding: 8px; font-weight: bold;">📚 Курс:</td>
              <td style="padding: 8px;">${data.course}</td>
            </tr>
            ` : ''}
            ${data.message ? `
            <tr>
              <td style="padding: 8px; font-weight: bold;">💬 Комментарий:</td>
              <td style="padding: 8px;">${data.message}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; font-weight: bold;">🕐 Дата:</td>
              <td style="padding: 8px;">${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</td>
            </tr>
          </table>
        `

        await transporter.sendMail({
          from: `"EWE School" <${EMAIL_USER}>`,
          to: EMAIL_TO,
          subject: `Новая заявка: ${data.parentName} - ${data.childName}`,
          html: emailHtml,
        })

        console.log("Email sent successfully")
      } catch (emailError) {
        console.error("Email sending error:", emailError)
        // Не прерываем процесс, если email не отправился
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing enrollment:", error)
    return NextResponse.json(
      { success: false, error: "Failed to process enrollment" },
      { status: 500 }
    )
  }
}
