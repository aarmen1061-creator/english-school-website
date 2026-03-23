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
  return {
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
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: params.lang === "ru" ? "ru_RU" : "en_US",
      type: "website",
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
        <Header lang={params.lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={params.lang} dict={dict} />
      </body>
    </html>
  )
}
