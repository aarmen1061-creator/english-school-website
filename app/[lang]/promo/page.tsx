import Link from "next/link"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"

export default async function PromoPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  const lang = params.lang

  const steps = [
    {
      title: dict.promo.step1Title,
      desc: dict.promo.step1Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
      ),
    },
    {
      title: dict.promo.step2Title,
      desc: dict.promo.step2Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
    },
    {
      title: dict.promo.step3Title,
      desc: dict.promo.step3Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
  ]

  const conditions = [
    dict.promo.condition1,
    dict.promo.condition2,
    dict.promo.condition3,
    dict.promo.condition4,
    dict.promo.condition5,
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white/30 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm">
              {dict.promo.title}
            </h1>
            <p className="text-xl text-white/90 mt-4 leading-relaxed">
              {dict.promo.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            {dict.promo.description}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {dict.promo.howItWorks}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-md">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-orange-500 mb-2">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {dict.promo.conditionsTitle}
            </h2>
            <ul className="space-y-4">
              {conditions.map((condition, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700 text-lg">{condition}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {dict.promo.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mt-3">
            {dict.promo.ctaDesc}
          </p>
          <Link
            href={`/${lang}/enroll`}
            className="inline-block mt-8 bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {dict.promo.ctaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
