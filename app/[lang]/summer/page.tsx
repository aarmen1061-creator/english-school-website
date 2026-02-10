import Link from "next/link"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"

export default async function SummerPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  const lang = params.lang

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            {lang === "ru" ? "Летние программы" : "Summer Programs"}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {lang === "ru"
              ? "Английский язык + активный отдых для детей"
              : "English + active recreation for kids"}
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {lang === "ru" ? "Скоро открытие!" : "Coming Soon!"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {lang === "ru"
                ? "Информация о летних программах 2026 года появится в ближайшее время. Оставьте заявку, и мы сообщим вам первыми!"
                : "Information about summer programs 2026 will be available soon. Leave your request and we'll notify you first!"}
            </p>
            <Link
              href={`/${lang}/enroll`}
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {lang === "ru" ? "Оставить заявку" : "Leave a Request"}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-10">
            {lang === "ru" ? "Что вас ждёт" : "What to expect"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">
                {lang === "ru" ? "Интенсивный английский" : "Intensive English"}
              </h4>
              <p className="text-gray-600 text-sm">
                {lang === "ru"
                  ? "Ежедневные занятия с носителями языка"
                  : "Daily classes with native speakers"}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">
                {lang === "ru" ? "Активный отдых" : "Active Recreation"}
              </h4>
              <p className="text-gray-600 text-sm">
                {lang === "ru"
                  ? "Игры, мастер-классы, экскурсии"
                  : "Games, workshops, excursions"}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">
                {lang === "ru" ? "Новые друзья" : "New Friends"}
              </h4>
              <p className="text-gray-600 text-sm">
                {lang === "ru"
                  ? "Общение в международной среде"
                  : "Communication in an international environment"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
