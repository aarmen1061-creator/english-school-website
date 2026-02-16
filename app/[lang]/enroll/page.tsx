"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { courses } from "@/lib/data"
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
  const searchParams = useSearchParams()
  const preselectedCourse = searchParams.get("course") || ""

  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    course: preselectedCourse,
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({
          parentName: "",
          phone: "",
          email: "",
          childName: "",
          childAge: "",
          course: "",
          message: "",
        })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
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
      success: "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
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
      success: "Application sent! We will contact you shortly.",
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

        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className="text-green-800 text-lg font-medium">{t.success}</p>
          </div>
        ) : (
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
                  onChange={handleChange}
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

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                {t.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary text-white py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? t.sending : t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
