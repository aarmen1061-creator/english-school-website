import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"
import { courses } from "@/lib/data"

export default async function CoursesPage({
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
          <h1 className="text-4xl md:text-5xl font-bold">{dict.courses.title}</h1>
          <p className="text-gray-600 mt-3 text-lg">{dict.courses.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.name[lang]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                  {course.ageRange[lang]}
                </span>
                <h2 className="text-2xl font-bold mt-4">{course.name[lang]}</h2>
                <p className="text-gray-600 mt-3">{course.description[lang]}</p>

                <ul className="mt-4 space-y-2">
                  {course.features[lang].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href={`/${lang}/enroll?course=${course.id}`}
                    className="block text-center bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {dict.courses.enrollNow}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Блок: Как мы обучаем дошкольников */}
        <MethodBlock
          title={dict.courses.preschoolTitle}
          steps={[
            { num: "1", title: dict.courses.preschoolStep1Title, desc: dict.courses.preschoolStep1Desc },
            { num: "2", title: dict.courses.preschoolStep2Title, desc: dict.courses.preschoolStep2Desc },
            { num: "3", title: dict.courses.preschoolStep3Title, desc: dict.courses.preschoolStep3Desc },
            { num: "4", title: dict.courses.preschoolStep4Title, desc: dict.courses.preschoolStep4Desc },
          ]}
          result={dict.courses.preschoolResult}
          resultLabel={dict.courses.resultLabel}
          enrollLabel={dict.courses.enrollNow}
          lang={lang}
          color="bg-orange-500"
        />

        {/* Блок: Как мы обучаем школьников */}
        <MethodBlock
          title={dict.courses.kidsTitle}
          steps={[
            { num: "1", title: dict.courses.kidsStep1Title, desc: dict.courses.kidsStep1Desc },
            { num: "2", title: dict.courses.kidsStep2Title, desc: dict.courses.kidsStep2Desc },
            { num: "3", title: dict.courses.kidsStep3Title, desc: dict.courses.kidsStep3Desc },
            { num: "4", title: dict.courses.kidsStep4Title, desc: dict.courses.kidsStep4Desc },
          ]}
          result={dict.courses.kidsResult}
          resultLabel={dict.courses.resultLabel}
          enrollLabel={dict.courses.enrollNow}
          lang={lang}
          color="bg-green-600"
        />

        {/* Блок: Как мы обучаем подростков */}
        <MethodBlock
          title={dict.courses.teensTitle}
          steps={[
            { num: "1", title: dict.courses.teensStep1Title, desc: dict.courses.teensStep1Desc },
            { num: "2", title: dict.courses.teensStep2Title, desc: dict.courses.teensStep2Desc },
            { num: "3", title: dict.courses.teensStep3Title, desc: dict.courses.teensStep3Desc },
            { num: "4", title: dict.courses.teensStep4Title, desc: dict.courses.teensStep4Desc },
          ]}
          result={dict.courses.teensResult}
          resultLabel={dict.courses.resultLabel}
          enrollLabel={dict.courses.enrollNow}
          lang={lang}
          color="bg-primary"
        />

        {/* Блок: Как мы обучаем взрослых */}
        <MethodBlock
          title={dict.courses.adultsTitle}
          steps={[
            { num: "1", title: dict.courses.adultsStep1Title, desc: dict.courses.adultsStep1Desc },
            { num: "2", title: dict.courses.adultsStep2Title, desc: dict.courses.adultsStep2Desc },
            { num: "3", title: dict.courses.adultsStep3Title, desc: dict.courses.adultsStep3Desc },
            { num: "4", title: dict.courses.adultsStep4Title, desc: dict.courses.adultsStep4Desc },
          ]}
          result={dict.courses.adultsResult}
          resultLabel={dict.courses.resultLabel}
          enrollLabel={dict.courses.enrollNow}
          lang={lang}
          color="bg-[#1a2744]"
        />

      </div>
    </section>
  )
}

function MethodBlock({
  title, steps, result, resultLabel, enrollLabel, lang, color,
}: {
  title: string
  steps: { num: string; title: string; desc: string }[]
  result: string
  resultLabel: string
  enrollLabel: string
  lang: string
  color: string
}) {
  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#1a2744] mb-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step) => (
          <div key={step.num} className="bg-white rounded-2xl border p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center font-bold text-lg flex-shrink-0`}>
              {step.num}
            </div>
            <div>
              <h3 className="font-bold text-[#1a2744] text-lg leading-tight">{step.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-8 rounded-2xl p-5 text-white text-center ${color}`}>
        <span className="font-bold">{resultLabel} </span>{result}
      </div>
      <div className="text-center mt-6">
        <Link href={`/${lang}/enroll`} className={`inline-block ${color} text-white px-8 py-3 rounded-full font-semibold opacity-90 hover:opacity-100 transition-opacity`}>
          {enrollLabel}
        </Link>
      </div>
    </div>
  )
}
