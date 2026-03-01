import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"
import { courses } from "@/lib/data"

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }))
}

export default async function CourseDetailPage({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  const course = courses.find((c) => c.slug === params.slug)
  if (!course) notFound()

  const dict = await getDictionary(params.lang)
  const lang = params.lang

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href={`/${lang}/courses`}
          className="text-primary hover:underline mb-6 inline-block"
        >
          ← {dict.common.back}
        </Link>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            src={course.image}
            alt={course.name[lang]}
            width={1200}
            height={500}
            className="w-full aspect-[4/3] object-cover object-center"
            priority
          />
        </div>

        <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
          {course.ageRange[lang]}
        </span>
        <h1 className="text-4xl font-bold mt-4">{course.name[lang]}</h1>
        <p className="text-xl text-gray-600 mt-4">{course.description[lang]}</p>

        <div className="mt-8 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            {lang === "ru" ? "Что включено" : "What's included"}
          </h2>
          <ul className="space-y-3">
            {course.features[lang].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href={`/${lang}/enroll?course=${course.id}`}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            {dict.courses.enrollNow}
          </Link>
        </div>
      </div>

      {/* Блок методики обучения */}
      {(() => {
        const methodMap: Record<string, {
          title: string
          steps: { num: string; title: string; desc: string }[]
          result: string
          color: string
        }> = {
          preschool: {
            title: dict.courses.preschoolTitle,
            steps: [
              { num: "1", title: dict.courses.preschoolStep1Title, desc: dict.courses.preschoolStep1Desc },
              { num: "2", title: dict.courses.preschoolStep2Title, desc: dict.courses.preschoolStep2Desc },
              { num: "3", title: dict.courses.preschoolStep3Title, desc: dict.courses.preschoolStep3Desc },
              { num: "4", title: dict.courses.preschoolStep4Title, desc: dict.courses.preschoolStep4Desc },
            ],
            result: dict.courses.preschoolResult,
            color: "bg-orange-500",
          },
          school: {
            title: dict.courses.kidsTitle,
            steps: [
              { num: "1", title: dict.courses.kidsStep1Title, desc: dict.courses.kidsStep1Desc },
              { num: "2", title: dict.courses.kidsStep2Title, desc: dict.courses.kidsStep2Desc },
              { num: "3", title: dict.courses.kidsStep3Title, desc: dict.courses.kidsStep3Desc },
              { num: "4", title: dict.courses.kidsStep4Title, desc: dict.courses.kidsStep4Desc },
            ],
            result: dict.courses.kidsResult,
            color: "bg-green-600",
          },
          teens: {
            title: dict.courses.teensTitle,
            steps: [
              { num: "1", title: dict.courses.teensStep1Title, desc: dict.courses.teensStep1Desc },
              { num: "2", title: dict.courses.teensStep2Title, desc: dict.courses.teensStep2Desc },
              { num: "3", title: dict.courses.teensStep3Title, desc: dict.courses.teensStep3Desc },
              { num: "4", title: dict.courses.teensStep4Title, desc: dict.courses.teensStep4Desc },
            ],
            result: dict.courses.teensResult,
            color: "bg-primary",
          },
          adults: {
            title: dict.courses.adultsTitle,
            steps: [
              { num: "1", title: dict.courses.adultsStep1Title, desc: dict.courses.adultsStep1Desc },
              { num: "2", title: dict.courses.adultsStep2Title, desc: dict.courses.adultsStep2Desc },
              { num: "3", title: dict.courses.adultsStep3Title, desc: dict.courses.adultsStep3Desc },
              { num: "4", title: dict.courses.adultsStep4Title, desc: dict.courses.adultsStep4Desc },
            ],
            result: dict.courses.adultsResult,
            color: "bg-[#1a2744]",
          },
        }

        const method = methodMap[course.slug]
        if (!method) return null

        return (
          <div className="container mx-auto px-4 max-w-3xl pb-16">
            <h2 className="text-3xl font-bold text-center text-[#1a2744] mt-16 mb-10">{method.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {method.steps.map((step) => (
                <div key={step.num} className="bg-white rounded-2xl border p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-full ${method.color} text-white flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2744] text-lg leading-tight">{step.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`mt-8 rounded-2xl p-5 text-white text-center ${method.color}`}>
              <span className="font-bold">{dict.courses.resultLabel} </span>{method.result}
            </div>
            <div className="text-center mt-6">
              <Link
                href={`/${lang}/enroll?course=${course.id}`}
                className={`inline-block ${method.color} text-white px-8 py-3 rounded-full font-semibold opacity-90 hover:opacity-100 transition-opacity`}
              >
                {dict.courses.enrollNow}
              </Link>
            </div>
          </div>
        )
      })()}
    </section>
  )
}
