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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/${lang}/courses/${course.slug}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    {dict.courses.learnMore}
                  </Link>
                  <Link
                    href={`/${lang}/enroll?course=${course.id}`}
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {dict.courses.enrollNow}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
