import { NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8504752869:AAHhS3MQSovi33lsgm-ul6PBnw0xpjXjvBM"
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "301635514"

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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing enrollment:", error)
    return NextResponse.json(
      { success: false, error: "Failed to process enrollment" },
      { status: 500 }
    )
  }
}
