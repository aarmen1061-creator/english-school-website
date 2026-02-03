import Link from "next/link"
import { notFound } from "next/navigation"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"
import { branches } from "@/lib/data"

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
            <Link
              href={`/${lang}/schedule?branch=${branch.slug}`}
              className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold text-center hover:bg-primary/5 transition-colors"
            >
              {dict.branches.schedule}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
