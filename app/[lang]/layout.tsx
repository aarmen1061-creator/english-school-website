import type { Metadata } from "next"
import { Inter, Poppins, Mouse_Memoirs, Montserrat } from "next/font/google"
import "../globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { i18n, type Locale } from "@/lib/i18n/settings"
import { getDictionary } from "@/lib/i18n/dictionaries"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})
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
      "Новая Москва",
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
      <body
        className={`${inter.variable} ${poppins.variable} ${mouseMemoirs.variable} ${montserrat.variable} font-sans antialiased`}
        data-theme="playful"
      >
        <Header lang={params.lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={params.lang} dict={dict} />
      </body>
    </html>
  )
}
