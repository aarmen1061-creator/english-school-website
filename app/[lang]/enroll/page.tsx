"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { branches, courses } from "@/lib/data"
import { getAttribution } from "@/lib/attribution"
import type { Locale } from "@/lib/i18n/settings"

export default function EnrollPage({
  params,
}: {
  params: { lang: Locale }
}) {
  return (
    <Suspense>
      <EnrollForm lang={params.lang} />
    </Suspense>
  )
}

function EnrollForm({ lang }: { lang: Locale }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedBranch = searchParams.get("branch") || ""
  const preselectedCourse = searchParams.get("course") || ""

  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    branch: preselectedBranch,
    course: preselectedCourse,
    message: "",
  })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          agree: consent,
          attribution: getAttribution(),
        }),
      })

      if (res.ok) {
        router.push(`/${lang}/enroll/success`)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const formatPhoneNumber = (value: string) => {
    // Удаляем все символы кроме цифр
    const cleaned = value.replace(/\D/g, "")

    // Если начинается с 8, заменяем на 7
    let formatted = cleaned.startsWith("8") ? "7" + cleaned.slice(1) : cleaned

    // Если начинается с 9, добавляем 7 в начало
    if (formatted.startsWith("9")) {
      formatted = "7" + formatted
    }

    // Форматируем номер
    if (formatted.length === 0) return ""
    if (formatted.length <= 1) return "+7"
    if (formatted.length <= 4) return `+7 (${formatted.slice(1)}`
    if (formatted.length <= 7) return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4)}`
    if (formatted.length <= 9) return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4, 7)}-${formatted.slice(7)}`
    return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4, 7)}-${formatted.slice(7, 9)}-${formatted.slice(9, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formatted }))
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const t = {
    ru: {
      title: "Запись на курс",
      subtitle: "Заполните форму и мы свяжемся с вами",
      parentName: "Имя родителя",
      phone: "Телефон",
      email: "Email",
      childName: "Имя ребёнка",
      childAge: "Возраст ребёнка",
      selectBranch: "Выберите филиал",
      selectCourse: "Выберите курс",
      message: "Комментарий",
      submit: "Отправить заявку",
      sending: "Отправка...",
      error: "Произошла ошибка. Попробуйте ещё раз или позвоните нам.",
    },
    en: {
      title: "Course Enrollment",
      subtitle: "Fill out the form and we will contact you",
      parentName: "Parent Name",
      phone: "Phone",
      email: "Email",
      childName: "Child's Name",
      childAge: "Child's Age",
      selectBranch: "Select Branch",
      selectCourse: "Select Course",
      message: "Comment",
      submit: "Submit Application",
      sending: "Sending...",
      error: "An error occurred. Please try again or call us.",
    },
  }[lang]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">{t.title}</h1>
          <p className="text-gray-600 mt-3">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.parentName} *</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.phone} *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.childName} *</label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.childAge} *</label>
                <input
                  type="number"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  min="3"
                  max="17"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.selectBranch}</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.selectBranch}</option>
                {branches.map((b) => (
                  <option key={b.slug} value={b.slug}>
                    {b.name[lang]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.selectCourse}</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.selectCourse}</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name[lang]} ({c.ageRange[lang]})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary flex-shrink-0"
              />
              <span className="text-xs text-gray-500">
                {lang === "ru" ? (
                  <>Я даю согласие на обработку персональных данных в соответствии с{" "}
                    <Link href={`/${lang}/privacy`} className="text-primary underline" target="_blank">политикой конфиденциальности</Link>
                  </>
                ) : (
                  <>I consent to the processing of personal data in accordance with the{" "}
                    <Link href={`/${lang}/privacy`} className="text-primary underline" target="_blank">privacy policy</Link>
                  </>
                )}
              </span>
            </label>

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                {t.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !consent}
              className="w-full bg-primary text-white py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? t.sending : t.submit}
            </button>
          </form>
      </div>
    </section>
  )
}
