import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/settings"
import { courses, branches, reviews } from "@/lib/data"
import { PromoSlider } from "@/components/promo-slider"

export default async function HomePage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  const lang = params.lang

  return (
    <>
      {/* Hero + Promo — fill first screen */}
      <div className="flex flex-col min-h-[calc(100vh-64px)]">
        <section className="relative overflow-hidden flex-1">
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image
              src="/images/photos/hero/hero-lesson.jpg"
              alt=""
              fill
              className="object-cover object-[center_30%]"
              priority
            />
            <div className="absolute inset-0 bg-white/70" />
          </div>
          {/* Text content */}
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex items-center h-full">
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-[#1a2744] font-medium uppercase tracking-wider">
                EWE School
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#1a2744] mt-4 font-bold leading-tight">
                {dict.hero.subtitle}
              </h1>
              <div className="mt-5 space-y-2">
                <p className="flex items-center gap-3 text-base md:text-lg text-[#1a2744] leading-relaxed font-bold">
                  <span className="w-3 h-3 rounded-full bg-[#1a2744] flex-shrink-0" />
                  {dict.hero.tagline}
                </p>
                <p className="flex items-center gap-3 text-base md:text-lg text-[#1a2744] leading-relaxed font-bold">
                  <span className="w-3 h-3 rounded-full bg-[#1a2744] flex-shrink-0" />
                  {dict.hero.freeLesson}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href={`/${lang}/enroll`}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
                >
                  {dict.hero.ctaEnroll}
                </Link>
                <Link
                  href={`/${lang}/branches`}
                  className="inline-block bg-white/80 hover:bg-white text-gray-800 px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-200"
                >
                  {dict.hero.ctaBranches}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Slider — bottom of first screen */}
        <PromoSlider
        slides={[
          {
            title: dict.promo.title,
            text: dict.promo.bannerText,
            button: dict.promo.bannerButton,
            href: `/${lang}/promo`,
            icon: "gift",
            gradient: "bg-yellow-400",
            buttonClass: "bg-white text-yellow-700 hover:bg-yellow-50",
            textClass: "text-[#1a2744]",
          },
          {
            title: dict.ambassador.homeTitle,
            text: dict.ambassador.homeDescription,
            button: dict.ambassador.homeButton,
            href: `/${lang}/ambassador`,
            icon: "people",
            gradient: "bg-[#1a2744]",
            buttonClass: "bg-white text-[#1a2744] hover:bg-blue-50",
          },
        ]}
      />
      </div>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href={`/${lang}/about`} className="bg-blue-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{dict.features.teachers.title}</h3>
              <p className="text-gray-600">{dict.features.teachers.description}</p>
            </Link>
            <Link href={`/${lang}/courses`} className="bg-yellow-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.491 48.491 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{dict.features.approach.title}</h3>
              <p className="text-gray-600">{dict.features.approach.description}</p>
            </Link>
            <Link href={`/${lang}/contacts`} className="bg-pink-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{dict.features.branches.title}</h3>
              <p className="text-gray-600">{dict.features.branches.description}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{dict.courses.title}</h2>
            <p className="text-gray-600 mt-2 text-lg">{dict.courses.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40 overflow-hidden">
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
                  <h3 className="text-xl font-bold mt-3">{course.name[lang]}</h3>
                  <p className="text-gray-600 mt-2">{course.description[lang]}</p>
                  <Link
                    href={`/${lang}/courses/${course.slug}`}
                    className="inline-block mt-4 text-primary font-semibold hover:underline"
                  >
                    {dict.courses.learnMore} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{dict.reviews.title}</h2>
            <p className="text-gray-600 mt-2 text-lg">{dict.reviews.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">&ldquo;{review.text[lang]}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold text-gray-900">{review.author[lang]}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`/${lang}/reviews`}
              className="text-primary font-semibold hover:underline text-lg"
            >
              {dict.common.learnMore} →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{dict.gallery.title}</h2>
            <p className="text-gray-600 mt-2 text-lg">{dict.gallery.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { src: '/images/photos/gallery/teacher-kids.jpg', alt: 'Teacher with kids' },
              { src: '/images/photos/gallery/holiday-child.jpg', alt: 'Holiday celebration' },
              { src: '/images/photos/gallery/kids-playing.jpg', alt: 'Kids playing games' },
              { src: '/images/photos/gallery/teens-teacher.jpg', alt: 'Teens with teacher' },
              { src: '/images/photos/gallery/holiday-craft.jpg', alt: 'Holiday craft activity' },
              { src: '/images/photos/gallery/teacher-child.jpg', alt: 'Teacher and child' },
              { src: '/images/photos/gallery/holiday-party.jpg', alt: 'Holiday party' },
              { src: '/images/photos/about/materials.jpg', alt: 'Learning materials' },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">{dict.hero.ctaEnroll}</h2>
          <p className="mt-4 text-xl opacity-90">{dict.hero.description}</p>
          <Link
            href={`/${lang}/enroll`}
            className="inline-block mt-8 bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {dict.nav.enroll}
          </Link>
        </div>
      </section>
    </>
  )
}
