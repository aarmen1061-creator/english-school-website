"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import type { Locale } from "@/lib/i18n/settings"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface HeaderProps {
  lang: Locale
  dict: Dictionary
}

export function Header({ lang, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const otherLang = lang === "ru" ? "en" : "ru"
  const switchedPath = pathname.replace(`/${lang}`, `/${otherLang}`)

  const navigation = [
    { name: dict.nav.about, href: `/${lang}/about` },
    { name: dict.nav.branches, href: `/${lang}/branches` },
    { name: dict.nav.courses, href: `/${lang}/courses` },
    { name: dict.nav.summer, href: `/${lang}/summer`, highlight: true },
    { name: dict.nav.promos, href: `/${lang}/promo` },
    { name: dict.nav.reviews, href: `/${lang}/reviews` },
    { name: dict.nav.contacts, href: `/${lang}/contacts` },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a2744]">
      <nav className="container mx-auto px-4" aria-label="Main menu">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href={`/${lang}`} className="relative block h-10">
              <Image
                src="/images/logo/EWE_logo_white_text.png"
                alt="EwE School"
                width={120}
                height={80}
                className="h-10 w-auto"
                priority
              />
              <Image
                src="/images/logo/EWE_symbol_color.png"
                alt=""
                width={60}
                height={60}
                className="absolute -top-[2px] left-[48%] -translate-x-1/2 h-[66%] w-auto"
                aria-hidden
              />
            </Link>

            <div className="hidden lg:flex lg:gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.highlight
                      ? "text-yellow-400 hover:text-yellow-300"
                      : pathname.startsWith(item.href)
                        ? "text-amber-300"
                        : "text-white hover:text-amber-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <Link
              href={switchedPath}
              className="rounded-md border border-white/30 px-2.5 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              {otherLang === "ru" ? "RU" : "EN"}
            </Link>

            <Link
              href={`/${lang}/enroll`}
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all hover:scale-105"
            >
              {dict.nav.enroll}
            </Link>

            <button
              type="button"
              className="lg:hidden rounded-md p-2 text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 space-y-1 border-t border-white/20 mt-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 ${
                  item.highlight
                    ? "text-yellow-400 hover:text-yellow-300"
                    : "text-white hover:text-amber-300"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href={`/${lang}/enroll`}
                className="block text-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.nav.enroll}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
