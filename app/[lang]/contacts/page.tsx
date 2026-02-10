import Link from "next/link"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"
import { branches } from "@/lib/data"

export default async function ContactsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  const lang = params.lang

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">{dict.contacts.title}</h1>
          <p className="text-gray-600 mt-3 text-lg">{dict.contacts.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* General contacts */}
          <div className="bg-white border rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <a href="tel:+79252630088" className="font-semibold text-lg hover:text-primary transition-colors">
                  +7 (925) 263-00-88
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a href="mailto:info@eweschool.ru" className="font-semibold text-lg hover:text-primary transition-colors">
                  info@eweschool.ru
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p className="font-semibold">{dict.contacts.workingHours}</p>
                <p className="text-gray-600 text-sm mt-1">{dict.contacts.weekdays}</p>
                <p className="text-gray-600 text-sm">{dict.contacts.weekends}</p>
              </div>
            </div>
          </div>

          {/* Branches list */}
          <h2 className="text-2xl font-bold mb-6">{dict.branches.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {branches.map((branch) => (
              <Link
                key={branch.id}
                href={`/${lang}/branches/${branch.slug}`}
                className="bg-white border rounded-xl p-4 hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{branch.name[lang]}</p>
                  <p className="text-sm text-gray-500">{branch.address[lang]}</p>
                  <p className="text-sm text-primary">{branch.phone}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Yandex Map */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7e682775-516a-403a-947c-352f67ca8809&amp;source=constructor"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
