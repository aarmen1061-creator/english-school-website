import { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Locale } from '@/lib/i18n/settings'
import { programs } from '@/lib/kindergarten/programs'
import { isKindergarten } from '@/lib/config'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Программы | MiniDomini',
  description: 'Возрастные программы для детей от 1.5 до 7 лет. Ясли, дошкольники и подготовка к школе.'
}

export default async function ProgramsPage({
  params
}: {
  params: { lang: Locale }
}) {
  // Redirect to courses page if not kindergarten
  if (!isKindergarten()) {
    return null // TODO: redirect to courses page
  }

  const dict = await getDictionary(params.lang)
  const t = dict.kindergarten

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.programs.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.programs.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    {/* TODO: Add actual images */}
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {program.id === 'toddlers' && '👶'}
                      {program.id === 'preschool' && '🎨'}
                      {program.id === 'pre-k' && '📚'}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{program.name[params.lang]}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {program.ageRange.display[params.lang]}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    {program.description[params.lang]}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">{t.programs.title}:</h4>
                    <ul className="space-y-1">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>{feature[params.lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Staffing Info */}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {params.lang === 'ru' ? 'Группа' : 'Group'}:
                      </span>
                      <span className="font-medium">
                        {params.lang === 'ru'
                          ? `до ${program.staffing.maxGroupSize} детей`
                          : `up to ${program.staffing.maxGroupSize} children`
                        }
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-muted-foreground">
                        {params.lang === 'ru' ? 'Соотношение' : 'Ratio'}:
                      </span>
                      <span className="font-medium">{program.staffing.teacherRatio}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/${params.lang}/programs/${program.slug}`}>
                      {t.programs.viewDetails}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/${params.lang}/book-tour?program=${program.id}`}>
                      {t.programs.enrollNow}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {params.lang === 'ru'
              ? 'Не знаете, какая программа подойдёт?'
              : 'Not sure which program is right?'}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {params.lang === 'ru'
              ? 'Запишитесь на экскурсию, и мы поможем подобрать идеальную программу для вашего ребёнка'
              : 'Book a tour and we\'ll help you choose the perfect program for your child'}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href={`/${params.lang}/book-tour`}>
              {t.cta.scheduleVisit}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
