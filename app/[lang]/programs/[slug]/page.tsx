import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Locale } from '@/lib/i18n/settings'
import { getProgramBySlug, programs } from '@/lib/kindergarten/programs'
import { getTeachersByProgram } from '@/lib/kindergarten/teachers'
import { isKindergarten } from '@/lib/config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug
  }))
}

export async function generateMetadata({
  params
}: {
  params: { lang: Locale; slug: string }
}): Promise<Metadata> {
  const program = getProgramBySlug(params.slug)

  if (!program) {
    return {
      title: 'Программа не найдена'
    }
  }

  return {
    title: `${program.name[params.lang]} | MiniDomini`,
    description: program.description[params.lang]
  }
}

export default async function ProgramDetailPage({
  params
}: {
  params: { lang: Locale; slug: string }
}) {
  if (!isKindergarten()) {
    return null
  }

  const program = getProgramBySlug(params.slug)

  if (!program) {
    notFound()
  }

  const dict = await getDictionary(params.lang)
  const t = dict.kindergarten
  const teachers = getTeachersByProgram(program.id)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${params.lang}/programs`}
              className="text-primary hover:underline mb-4 inline-block"
            >
              ← {params.lang === 'ru' ? 'Все программы' : 'All Programs'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {program.name[params.lang]}
            </h1>
            <p className="text-xl text-primary font-semibold mb-4">
              {program.ageRange.display[params.lang]}
            </p>
            <p className="text-lg text-muted-foreground">
              {program.description[params.lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Goals */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {params.lang === 'ru' ? 'Цели программы' : 'Program Goals'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {program.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-3 text-xl">✓</span>
                        <span>{goal[params.lang]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Curriculum - Subjects */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {params.lang === 'ru' ? 'Образовательные занятия' : 'Educational Activities'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {program.curriculum.subjects.map((subject) => (
                      <div key={subject.id} className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold mb-1">
                          {subject.name[params.lang]}
                          <span className="text-sm text-muted-foreground ml-2">
                            ({subject.weeklyHours} {params.lang === 'ru' ? 'ч/нед' : 'hrs/week'})
                          </span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {subject.description[params.lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Curriculum - Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {params.lang === 'ru' ? 'Дополнительные активности' : 'Additional Activities'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {program.curriculum.activities.map((activity) => (
                      <div key={activity.id} className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold mb-1">
                          {activity.name[params.lang]}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {activity.description[params.lang]}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.frequency[params.lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {params.lang === 'ru' ? 'Особенности программы' : 'Program Features'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm">{feature[params.lang]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {params.lang === 'ru' ? 'Информация' : 'Quick Info'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">
                      {params.lang === 'ru' ? 'Возраст' : 'Age'}:
                    </div>
                    <div className="font-semibold">{program.ageRange.display[params.lang]}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">
                      {params.lang === 'ru' ? 'Размер группы' : 'Group Size'}:
                    </div>
                    <div className="font-semibold">
                      {params.lang === 'ru'
                        ? `До ${program.staffing.maxGroupSize} детей`
                        : `Up to ${program.staffing.maxGroupSize} children`}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">
                      {params.lang === 'ru' ? 'Педагоги' : 'Teacher Ratio'}:
                    </div>
                    <div className="font-semibold">{program.staffing.teacherRatio}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">
                      {params.lang === 'ru' ? 'Расписание' : 'Schedule'}:
                    </div>
                    <div className="font-semibold">
                      {program.schedule.arrival} - {program.schedule.departure}
                    </div>
                  </div>
                  {program.schedule.napTime && (
                    <div>
                      <div className="text-muted-foreground mb-1">
                        {params.lang === 'ru' ? 'Тихий час' : 'Nap Time'}:
                      </div>
                      <div className="font-semibold">
                        {program.schedule.napTime.start} - {program.schedule.napTime.end}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Teachers */}
              {teachers.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {params.lang === 'ru' ? 'Педагоги программы' : 'Program Teachers'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {teachers.slice(0, 3).map((teacher) => (
                      <div key={teacher.id} className="text-sm">
                        <div className="font-semibold">{teacher.name[params.lang]}</div>
                        <div className="text-muted-foreground text-xs">
                          {teacher.role[params.lang]}
                        </div>
                      </div>
                    ))}
                    {teachers.length > 3 && (
                      <Link
                        href={`/${params.lang}/teachers`}
                        className="text-primary text-sm hover:underline inline-block mt-2"
                      >
                        {params.lang === 'ru' ? 'Все педагоги →' : 'All teachers →'}
                      </Link>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">
                    {params.lang === 'ru'
                      ? 'Хотите узнать больше?'
                      : 'Want to learn more?'}
                  </h3>
                  <p className="text-sm opacity-90">
                    {params.lang === 'ru'
                      ? 'Запишитесь на экскурсию и познакомьтесь с программой лично'
                      : 'Book a tour and experience the program firsthand'}
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={`/${params.lang}/book-tour?program=${program.id}`}>
                      {t.cta.scheduleVisit}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/${params.lang}/pricing`}>
                      {t.cta.viewPricing}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
