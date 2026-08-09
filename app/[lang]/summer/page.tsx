import Link from "next/link"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"
import { SummerCarousel } from "@/components/summer-carousel"

export default async function SummerPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  const lang = params.lang

  const slides = [
    {
      src: "/images/photos/summer/slide-1.jpg",
      alt: lang === "ru" ? "Дети на занятии с поднятыми руками" : "Kids raising hands in class",
    },
    {
      src: "/images/photos/summer/slide-2.jpg",
      alt: lang === "ru" ? "Групповое занятие за круглым столом" : "Group lesson at a round table",
    },
    {
      src: "/images/photos/summer/slide-3.jpg",
      alt: lang === "ru" ? "Обучающая игра в EWE School" : "Learning game at EWE School",
    },
    {
      src: "/images/photos/summer/slide-4.jpg",
      alt: lang === "ru" ? "Занятие в игровой форме в EWE School" : "Playful class at EWE School",
    },
  ]

  const benefits =
    lang === "ru"
      ? [
          "повторить материал",
          "восстановить разговорную практику",
          "подготовиться к новому учебному году",
        ]
      : [
          "review the material",
          "restore speaking practice",
          "get ready for the new school year",
        ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            {lang === "ru" ? "Подготовка к учебному году" : "Back-to-School Preparation"}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {lang === "ru"
              ? "С 17 августа во всех филиалах EWE School"
              : "From August 17 at all EWE School branches"}
          </p>
        </div>
      </section>

      {/* Offer */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            <SummerCarousel slides={slides} />

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {lang === "ru"
                  ? "Ежедневные занятия по будням помогут:"
                  : "Daily weekday classes will help you:"}
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${lang}/enroll`}
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {lang === "ru" ? "Оставить заявку" : "Leave a Request"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
