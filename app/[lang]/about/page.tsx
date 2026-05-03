import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  const lang = params.lang

  const stats = [
    { value: "9", label: lang === "ru" ? "Филиалов" : "Branches" },
    { value: "1000+", label: lang === "ru" ? "Учеников" : "Students" },
    { value: "50+", label: lang === "ru" ? "Преподавателей" : "Teachers" },
    { value: "10+", label: lang === "ru" ? "Лет опыта" : "Years of experience" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">{dict.about.title}</h1>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">{dict.about.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-blue-50 rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team photo */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/photos/about/team.jpg"
              alt={lang === "ru" ? "Команда EwE School" : "EwE School team"}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* About content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              {lang === "ru" ? (
                <>
                  <p>
                    <strong>EwE School</strong> — это сеть школ иностранных языков для детей и взрослых
                    в Москве. Мы работаем с 2015 года и за это время помогли более чем тысяче учеников
                    полюбить английский язык.
                  </p>
                  <p>
                    Наш подход основан на коммуникативной методике: дети учатся общаться на английском,
                    а не просто заучивать правила. Для каждого возраста — своя программа, свои методы
                    и свой темп обучения.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>EwE School</strong> is a network of foreign language schools for children and adults
                    in Moscow. We have been working since 2015 and have helped over a thousand students
                    fall in love with English.
                  </p>
                  <p>
                    Our approach is based on communicative methodology: children learn to communicate in English,
                    not just memorize rules. For each age group — its own program, methods and learning pace.
                  </p>
                </>
              )}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/photos/about/materials.jpg"
                alt={lang === "ru" ? "Учебные материалы" : "Learning materials"}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
            <div className="rounded-2xl overflow-hidden shadow-md order-2 md:order-1">
              <Image
                src="/images/photos/about/classroom.jpg"
                alt={lang === "ru" ? "Наш класс" : "Our classroom"}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed order-1 md:order-2">
              {lang === "ru" ? (
                <>
                  <p>
                    9 филиалов в Москве — в Коммунарке, Троицке, Московском, Ватутинках,
                    Сосенском, Щербинке и Первомайском. Мы постоянно расширяемся, чтобы быть ближе к вам.
                  </p>
                  <p>
                    Все наши преподаватели имеют профильное образование и международные сертификаты
                    (CELTA, TESOL, TKT). Они регулярно повышают квалификацию и следят за
                    новейшими методиками преподавания.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    9 branches in Moscow — in Kommunarka, Troitsk, Moskovskiy, Vatutinki,
                    Sosenskoye, Shcherbinka and Pervomayskoye. We are constantly expanding to be closer to you.
                  </p>
                  <p>
                    All our teachers have specialized education and international certificates
                    (CELTA, TESOL, TKT). They regularly improve their skills and follow
                    the latest teaching methods.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${lang}/enroll`}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            {dict.hero.ctaEnroll}
          </Link>
        </div>
      </div>
    </section>
  )
}
