import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/settings"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface FooterProps {
  lang: Locale
  dict: Dictionary
}

export function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo/EWE_logo_white_text.png"
              alt="EwE School"
              width={150}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-400">{dict.footer.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{dict.footer.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/courses`} className="text-sm hover:text-white transition-colors">
                  {dict.nav.courses}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/branches`} className="text-sm hover:text-white transition-colors">
                  {dict.nav.branches}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/reviews`} className="text-sm hover:text-white transition-colors">
                  {dict.nav.reviews}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{dict.footer.info}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="text-sm hover:text-white transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contacts`} className="text-sm hover:text-white transition-colors">
                  {dict.nav.contacts}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/enroll`} className="text-sm hover:text-white transition-colors">
                  {dict.nav.enroll}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/promo`} className="text-sm hover:text-white transition-colors">
                  {dict.promo.navTitle}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/ambassador`} className="text-sm hover:text-white transition-colors">
                  {dict.ambassador.navTitle}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/rules`} className="text-sm hover:text-white transition-colors">
                  {dict.rules.navTitle}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{dict.footer.contactsTitle}</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <a href="tel:+79252630088" className="hover:text-white transition-colors">
                  +7 (925) 263-00-88
                </a>
              </li>
              <li className="text-sm">
                <a href="mailto:info@eweschool.ru" className="hover:text-white transition-colors">
                  info@eweschool.ru
                </a>
              </li>
              <li className="text-sm text-gray-400">
                {dict.contacts.weekdays}<br />
                {dict.contacts.weekends}
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a href="https://t.me/EwE_school_admin" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Telegram">
                <span className="text-xs font-medium">TG</span>
              </a>
              <a href="https://wa.link/cac4r4" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <span className="text-xs font-medium">WA</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} EwE School. {dict.footer.rights}</p>
          <p className="mt-2 text-xs text-gray-600">{dict.footer.legal}</p>
          <div className="mt-3 flex justify-center gap-4 text-xs text-gray-600">
            <Link href={`/${lang}/privacy`} className="hover:text-gray-400 transition-colors">
              {lang === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
            </Link>
            <span>|</span>
            <Link href={`/${lang}/terms`} className="hover:text-gray-400 transition-colors">
              {lang === "ru" ? "Пользовательское соглашение" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
