import type { Metadata } from "next"
import { Inter, Mouse_Memoirs, Montserrat } from "next/font/google"
import Script from "next/script"
import "../globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { i18n, type Locale } from "@/lib/i18n/settings"
import { getDictionary } from "@/lib/i18n/dictionaries"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" })
const mouseMemoirs = Mouse_Memoirs({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mouse",
})
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const url = `https://eweschool.ru/${params.lang}`
  const ogImage = "https://eweschool.ru/images/photos/hero/hero-lesson.jpg"
  return {
    metadataBase: new URL("https://eweschool.ru"),
    title: {
      default: dict.meta.title,
      template: `%s | EwE School`,
    },
    description: dict.meta.description,
    keywords: [
      "EwE School",
      "английский для детей",
      "English for kids",
      "курсы английского",
      "Москва",
      "Коммунарка",
    ],
    alternates: {
      canonical: url,
      languages: {
        ru: "https://eweschool.ru/ru",
        en: "https://eweschool.ru/en",
        "x-default": "https://eweschool.ru/ru",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      siteName: "EwE School",
      locale: params.lang === "ru" ? "ru_RU" : "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: dict.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage],
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${mouseMemoirs.variable} ${montserrat.variable} font-sans antialiased`}
        data-theme="playful"
      >
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107144239', 'ym');
              ym(107144239, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
          }}
        />
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/107144239" style={{position: 'absolute', left: '-9999px'}} alt="" /></div>
        </noscript>
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "EwE School",
              alternateName: "Школа английского EwE",
              url: "https://eweschool.ru",
              logo: "https://eweschool.ru/images/logo/EWE_logo_color.png",
              image: "https://eweschool.ru/images/photos/hero/hero-lesson.jpg",
              description: dict.meta.description,
              telephone: "+7 (925) 263-00-88",
              email: "info@eweschool.ru",
              address: {
                "@type": "PostalAddress",
                addressCountry: "RU",
                addressLocality: "Москва",
              },
              sameAs: [
                "https://t.me/EwE_school_admin",
                "https://wa.link/cac4r4",
              ],
            }),
          }}
        />
        <Header lang={params.lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={params.lang} dict={dict} />
      </body>
    </html>
  )
}
