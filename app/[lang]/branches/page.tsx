import Link from "next/link"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"
import { branches } from "@/lib/data"
import { YandexMap } from "@/components/yandex-map"

export default async function BranchesPage({
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
          <h1 className="text-4xl md:text-5xl font-bold">{dict.branches.title}</h1>
          <p className="text-gray-600 mt-3 text-lg">{dict.branches.subtitle}</p>
        </div>

        {/* Yandex Map */}
        <div className="max-w-5xl mx-auto mb-12">
          <YandexMap
            lang={lang}
            branches={branches.map((b) => ({
              id: b.id,
              name: b.name[lang],
              address: b.address[lang],
              phone: b.phone,
              coordinates: b.coordinates,
            }))}
          />
        </div>

        {/* Branches grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {branches.map((branch) => (
            <Link
              key={branch.id}
              href={`/${lang}/branches/${branch.slug}`}
              className="bg-white border rounded-2xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                {branch.name[lang]}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">{branch.address[lang]}</p>
              <p className="text-primary font-medium mt-2 text-sm">{branch.phone}</p>
              <span className="inline-block mt-3 text-sm text-primary font-semibold">
                {dict.branches.details} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
