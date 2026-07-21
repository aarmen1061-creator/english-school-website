import Link from "next/link"
import { notFound } from "next/navigation"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"
import { branches, getPricesForBranch } from "@/lib/data"

export function generateStaticParams() {
  return branches.map((branch) => ({ slug: branch.slug }))
}

export default async function BranchDetailPage({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  const branch = branches.find((b) => b.slug === params.slug)
  if (!branch) notFound()

  const dict = await getDictionary(params.lang)
  const lang = params.lang
  const prices = getPricesForBranch(branch.slug)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href={`/${lang}/branches`}
          className="text-primary hover:underline mb-6 inline-block"
        >
          ← {dict.common.back}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold">EwE School — {branch.name[lang]}</h1>

        <div className="mt-8 space-y-6">
          {/* Address */}
          <div className="bg-white border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{dict.branches.address}</h3>
                <p className="text-gray-600">{branch.address[lang]}</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{dict.branches.phone}</h3>
                <a href={`tel:${branch.phone.replace(/\D/g, '')}`} className="text-primary hover:underline">
                  {branch.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Prices */}
          {prices.length > 0 && (
            <div className="bg-white border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{dict.branches.pricingTitle}</h3>

                  <ul className="mt-4 divide-y">
                    {prices.map((item, idx) => (
                      <li key={idx} className="py-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <div>
                          <p className="font-medium">{item.format[lang]}</p>
                          <p className="text-sm text-gray-500">{item.schedule[lang]}</p>
                        </div>
                        <p className="font-semibold text-primary whitespace-nowrap">{item.price[lang]}</p>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm text-gray-500">{dict.branches.pricingNote}</p>
                  <Link href={`/${lang}/rules`} className="text-sm text-primary hover:underline mt-2 inline-block">
                    {dict.branches.pricingRules} →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Map placeholder */}
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-500">
              {branch.yandexMapsUrl ? (
                <a
                  href={branch.yandexMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  {dict.branches.viewOnMap} →
                </a>
              ) : (
                <p>{lang === "ru" ? "Карта" : "Map"}</p>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${lang}/enroll?branch=${branch.slug}`}
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-primary/90 transition-colors"
            >
              {dict.nav.enroll}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
