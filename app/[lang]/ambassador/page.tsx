import Link from "next/link"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"

export default async function AmbassadorPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  const lang = params.lang

  const steps = [
    {
      number: "1",
      title: dict.ambassador.step1Title,
      description: dict.ambassador.step1Description,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
      ),
    },
    {
      number: "2",
      title: dict.ambassador.step2Title,
      description: dict.ambassador.step2Description,
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
      ),
    },
    {
      number: "3",
      title: dict.ambassador.step3Title,
      description: dict.ambassador.step3Description,
      icon: (
        <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-pink-100 px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-4">
            {dict.ambassador.navTitle}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{dict.ambassador.title}</h1>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">{dict.ambassador.subtitle}</p>
        </div>

        {/* How it works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{dict.ambassador.howItWorks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reward options */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{dict.ambassador.chooseReward}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Discount */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{dict.ambassador.option1Title}</h3>
              <p className="text-gray-600 mb-6">{dict.ambassador.option1Description}</p>
              <ul className="space-y-3">
                {[dict.ambassador.option1Feature1, dict.ambassador.option1Feature2, dict.ambassador.option1Feature3].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Option 2: Cashback */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-8 border border-pink-200">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{dict.ambassador.option2Title}</h3>
              <p className="text-gray-600 mb-6">{dict.ambassador.option2Description}</p>
              <ul className="space-y-3">
                {[dict.ambassador.option2Feature1, dict.ambassador.option2Feature2, dict.ambassador.option2Feature3].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-pink-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">{dict.ambassador.ctaTitle}</h2>
          <p className="mt-3 text-lg opacity-90">{dict.ambassador.ctaDescription}</p>
          <Link
            href={`/${lang}/enroll`}
            className="inline-block mt-6 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {dict.ambassador.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  )
}
