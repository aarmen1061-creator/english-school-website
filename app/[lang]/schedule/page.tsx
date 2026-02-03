"use client"

import { useState } from "react"
import { branches, courses } from "@/lib/data"
import type { Locale } from "@/lib/i18n/settings"

// Sample schedule data - will be replaced with real data
const scheduleData = [
  { branch: "kommunarka-monakhovoy", course: "preschool", day: "mon", time: "10:00–10:40" },
  { branch: "kommunarka-monakhovoy", course: "preschool", day: "wed", time: "10:00–10:40" },
  { branch: "kommunarka-monakhovoy", course: "preschool", day: "fri", time: "10:00–10:40" },
  { branch: "kommunarka-monakhovoy", course: "school", day: "mon", time: "15:00–16:00" },
  { branch: "kommunarka-monakhovoy", course: "school", day: "wed", time: "15:00–16:00" },
  { branch: "kommunarka-monakhovoy", course: "school", day: "thu", time: "15:00–16:00" },
  { branch: "kommunarka-monakhovoy", course: "teens", day: "tue", time: "16:30–18:00" },
  { branch: "kommunarka-monakhovoy", course: "teens", day: "thu", time: "16:30–18:00" },
  { branch: "troitsk", course: "preschool", day: "tue", time: "10:00–10:40" },
  { branch: "troitsk", course: "preschool", day: "thu", time: "10:00–10:40" },
  { branch: "troitsk", course: "school", day: "mon", time: "14:00–15:00" },
  { branch: "troitsk", course: "school", day: "wed", time: "14:00–15:00" },
  { branch: "troitsk", course: "teens", day: "tue", time: "17:00–18:30" },
  { branch: "troitsk", course: "teens", day: "fri", time: "17:00–18:30" },
]

const days = ["mon", "tue", "wed", "thu", "fri", "sat"] as const

const dayLabels: Record<string, Record<string, string>> = {
  ru: { mon: "Пн", tue: "Вт", wed: "Ср", thu: "Чт", fri: "Пт", sat: "Сб" },
  en: { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" },
}

export default function SchedulePage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang
  const [selectedBranch, setSelectedBranch] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")

  const filtered = scheduleData.filter((item) => {
    if (selectedBranch && item.branch !== selectedBranch) return false
    if (selectedCourse && item.course !== selectedCourse) return false
    return true
  })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            {lang === "ru" ? "Расписание занятий" : "Class Schedule"}
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            {lang === "ru" ? "Выберите филиал и возрастную группу" : "Choose a branch and age group"}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10">
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{lang === "ru" ? "Все филиалы" : "All branches"}</option>
            {branches.map((b) => (
              <option key={b.slug} value={b.slug}>{b.name[lang]}</option>
            ))}
          </select>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{lang === "ru" ? "Все возрасты" : "All ages"}</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name[lang]} ({c.ageRange[lang]})
              </option>
            ))}
          </select>
        </div>

        {/* Schedule table */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  {lang === "ru" ? "Филиал / Курс" : "Branch / Course"}
                </th>
                {days.map((day) => (
                  <th key={day} className="border-b-2 border-gray-200 px-3 py-3 text-center text-sm font-semibold text-gray-600">
                    {dayLabels[lang][day]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-500">
                    {lang === "ru" ? "Нет занятий по выбранным фильтрам" : "No classes for selected filters"}
                  </td>
                </tr>
              ) : (
                // Group by branch + course
                Array.from(new Set(filtered.map((f) => `${f.branch}|${f.course}`))).map((key) => {
                  const [branchSlug, courseId] = key.split("|")
                  const branch = branches.find((b) => b.slug === branchSlug)
                  const course = courses.find((c) => c.id === courseId)
                  const items = filtered.filter((f) => f.branch === branchSlug && f.course === courseId)

                  return (
                    <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-sm">{branch?.name[lang]}</p>
                        <p className="text-xs text-gray-500">{course?.name[lang]} ({course?.ageRange[lang]})</p>
                      </td>
                      {days.map((day) => {
                        const slot = items.find((i) => i.day === day)
                        return (
                          <td key={day} className="px-3 py-3 text-center">
                            {slot ? (
                              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                                {slot.time}
                              </span>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          {lang === "ru"
            ? "* Расписание может изменяться. Уточняйте актуальное расписание по телефону."
            : "* Schedule is subject to change. Please confirm the current schedule by phone."}
        </p>
      </div>
    </section>
  )
}
