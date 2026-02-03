import { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Locale } from '@/lib/i18n/settings'
import {
  pricingTiers,
  additionalServices,
  getActiveDiscounts,
  formatPrice
} from '@/lib/kindergarten/pricing'
import { isKindergarten } from '@/lib/config'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Цены | MiniDomini',
  description: 'Прозрачные цены на детский сад. Полный день, неполный день, дополнительные услуги и скидки.'
}

export default async function PricingPage({
  params
}: {
  params: { lang: Locale }
}) {
  if (!isKindergarten()) {
    return null
  }

  const dict = await getDictionary(params.lang)
  const t = dict.kindergarten
  const activeDiscounts = getActiveDiscounts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.pricing.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.pricing.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`flex flex-col ${
                  tier.featured ? 'border-primary border-2 shadow-lg scale-105' : ''
                }`}
              >
                <CardHeader>
                  {tier.featured && (
                    <Badge className="w-fit mb-2">{t.pricing.popular}</Badge>
                  )}
                  <CardTitle className="text-2xl">{tier.name[params.lang]}</CardTitle>
                  <CardDescription>{tier.description[params.lang]}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold">
                      {formatPrice(tier.pricing.monthly)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.pricing.perMonth}
                    </div>
                    {tier.pricing.registration && (
                      <div className="text-sm text-muted-foreground mt-2">
                        + {formatPrice(tier.pricing.registration)} {t.pricing.registrationFee}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-4">
                    <div className="font-semibold text-sm mb-2">{t.pricing.whatIncluded}:</div>
                    <ul className="space-y-2">
                      {tier.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-primary mr-2">✓</span>
                          <span>{item[params.lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-muted-foreground pt-4 border-t">
                    {tier.schedule.hours[params.lang]}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/${params.lang}/book-tour?tier=${tier.id}`}>
                      {t.pricing.enrollNow}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t.pricing.additionalServices}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name[params.lang]}</CardTitle>
                    <CardDescription>{service.description[params.lang]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">
                        {formatPrice(service.pricing.amount)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {service.pricing.type === 'monthly' &&
                          (params.lang === 'ru' ? 'в месяц' : 'per month')}
                        {service.pricing.type === 'per-session' &&
                          (params.lang === 'ru' ? 'за занятие' : 'per session')}
                        {service.pricing.type === 'one-time' &&
                          (params.lang === 'ru' ? 'разово' : 'one-time')}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discounts */}
      {activeDiscounts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {t.pricing.discounts}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeDiscounts.map((discount) => (
                  <Card key={discount.id} className="border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{discount.name[params.lang]}</CardTitle>
                        <Badge variant="secondary">
                          {discount.type === 'percentage' ? `${discount.amount}%` : formatPrice(discount.amount)}
                        </Badge>
                      </div>
                      <CardDescription>{discount.description[params.lang]}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm space-y-1">
                        {discount.conditions.map((condition, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{condition[params.lang]}</span>
                          </div>
                        ))}
                      </div>
                      {discount.validUntil && (
                        <div className="mt-3 pt-3 border-t text-sm text-primary font-medium">
                          {params.lang === 'ru' ? 'Действует до' : 'Valid until'}{' '}
                          {new Date(discount.validUntil).toLocaleDateString(
                            params.lang === 'ru' ? 'ru-RU' : 'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' }
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {params.lang === 'ru' ? 'Вопросы об оплате' : 'Payment Questions'}
            </h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {params.lang === 'ru'
                      ? 'Какие способы оплаты вы принимаете?'
                      : 'What payment methods do you accept?'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {params.lang === 'ru'
                      ? 'Мы принимаем оплату банковским переводом, картой и наличными. Возможна ежемесячная или годовая оплата.'
                      : 'We accept bank transfers, card payments, and cash. Monthly or annual payment options available.'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {params.lang === 'ru'
                      ? 'Можно ли вернуть деньги при отказе?'
                      : 'Can I get a refund if I cancel?'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {params.lang === 'ru'
                      ? 'Регистрационный взнос не возвращается. Оплата за текущий месяц возвращается пропорционально неиспользованным дням при уведомлении за 2 недели.'
                      : 'Registration fee is non-refundable. Current month payment is refunded proportionally for unused days with 2 weeks notice.'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {params.lang === 'ru'
                      ? 'Есть ли скидки при оплате за год?'
                      : 'Are there discounts for annual payment?'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {params.lang === 'ru'
                      ? 'Да, при оплате за 12 месяцев единовременно предоставляется скидка 20%.'
                      : 'Yes, paying for 12 months upfront gives you a 20% discount.'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {params.lang === 'ru'
              ? 'Готовы начать?'
              : 'Ready to get started?'}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {params.lang === 'ru'
              ? 'Запишитесь на бесплатную экскурсию и познакомьтесь с нашим детским садом'
              : 'Book a free tour and visit our kindergarten'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href={`/${params.lang}/book-tour`}>
                {t.cta.scheduleVisit}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/${params.lang}/programs`}>
                {t.cta.viewPrograms}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
