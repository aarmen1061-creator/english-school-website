import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.rules.metaTitle,
    description: dict.rules.metaDescription,
    alternates: {
      canonical: `https://eweschool.ru/${params.lang}/rules`,
      languages: {
        ru: "https://eweschool.ru/ru/rules",
        en: "https://eweschool.ru/en/rules",
      },
    },
  }
}

export default async function RulesPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  const t = dict.rules

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{t.title}</h1>
        <p className="text-gray-600 text-lg">{t.subtitle}</p>
        <p className="text-gray-500 text-sm mt-2">{t.updated}</p>

        <div className="mt-10 space-y-8">
          {t.sections.map((section) => (
            <div key={section.id} className="bg-white border rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 leading-relaxed">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {section.id === "payment" && (
                <a
                  href={t.portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  {t.portal.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">{t.questions}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
            <a href="tel:+79252630088" className="font-medium hover:text-primary transition-colors">
              +7 (925) 263-00-88
            </a>
            <a href="https://t.me/EwE_school_admin" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
              Telegram
            </a>
            <a href="https://wa.link/cac4r4" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
