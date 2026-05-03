"use client"

import { useEffect } from "react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/settings"

declare global {
  interface Window {
    ym?: (id: number, action: string, target: string) => void
    gtag?: (action: string, event: string, params?: Record<string, unknown>) => void
  }
}

const t = {
  ru: {
    title: "Спасибо за заявку!",
    subtitle: "Мы свяжемся с вами в ближайшее время — обычно в течение 30 минут в рабочее время.",
    nextStepsTitle: "Что дальше?",
    step1: "Менеджер позвонит и подберёт удобное время пробного урока",
    step2: "Назначим преподавателя и филиал ближе к вам",
    step3: "Первое занятие — бесплатно, без обязательств",
    quickContact: "Хотите быстрее?",
    backHome: "На главную",
    courses: "Посмотреть курсы",
  },
  en: {
    title: "Thank you for your application!",
    subtitle: "We will contact you shortly — usually within 30 minutes during business hours.",
    nextStepsTitle: "What's next?",
    step1: "A manager will call to schedule a convenient trial lesson time",
    step2: "We'll assign a teacher and a branch close to you",
    step3: "First lesson is free, no commitment",
    quickContact: "Want faster?",
    backHome: "Back to home",
    courses: "View courses",
  },
}

export default function EnrollSuccessPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = t[lang]

  useEffect(() => {
    // Yandex.Метрика goal — settable in dashboard as conversion target
    if (typeof window !== "undefined" && window.ym) {
      window.ym(107144239, "reachGoal", "enroll_submit")
    }
    // Google Analytics event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "enroll_submit", { event_category: "conversion" })
    }
  }, [])

  return (
    <section className="py-16 min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="bg-green-50 border border-green-200 rounded-3xl p-8 md:p-12 text-center">
          <svg className="w-20 h-20 text-green-500 mx-auto mb-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900">{dict.title}</h1>
          <p className="text-green-800 mt-4 text-lg">{dict.subtitle}</p>
        </div>

        <div className="mt-10 bg-white border rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-5">{dict.nextStepsTitle}</h2>
          <ol className="space-y-4">
            {[dict.step1, dict.step2, dict.step3].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-700 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">{dict.quickContact}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://t.me/EwE_school_admin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Telegram
            </a>
            <a
              href="https://wa.link/cac4r4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="tel:+79252630088"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              +7 (925) 263-00-88
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-sm">
          <Link href={`/${lang}`} className="text-primary hover:underline">
            ← {dict.backHome}
          </Link>
          <Link href={`/${lang}/courses`} className="text-primary hover:underline">
            {dict.courses} →
          </Link>
        </div>
      </div>
    </section>
  )
}
