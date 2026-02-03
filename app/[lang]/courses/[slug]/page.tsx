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
            className="w-full h-64 md:h-80 object-cover"
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
    </section>
  )
}
