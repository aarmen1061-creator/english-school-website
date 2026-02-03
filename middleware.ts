import { NextRequest, NextResponse } from 'next/server'
import { i18n } from './lib/i18n/settings'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
    if (i18n.locales.includes(preferred as any)) {
      return preferred
    }
  }
  return i18n.defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip internal paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return
  }

  // Check if pathname has a supported locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect to default locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|favicon|.*\\..*).*)'],
}
