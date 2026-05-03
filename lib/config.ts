/**
 * Site configuration for multi-site support
 * Allows switching between English School and Kindergarten websites
 */

export type SiteType = 'english-school' | 'kindergarten'

export interface SiteConfiguration {
  name: string
  domain: string
  logo: string
  theme: 'playful' | 'minimal' | 'warm'
  primaryColor: string
  description: { ru: string; en: string }
}

export const siteConfigurations: Record<SiteType, SiteConfiguration> = {
  'english-school': {
    name: 'EwE School',
    domain: 'eweschool.ru',
    logo: '/images/logo/EWE_logo_color.png',
    theme: 'playful',
    primaryColor: 'hsl(221 83% 53%)', // Blue
    description: {
      ru: 'Школа английского языка в Москве',
      en: 'English Language School in Moscow'
    }
  },
  kindergarten: {
    name: 'MiniDomini',
    domain: 'minidomini.ru',
    logo: '/images/logo/kindergarten_logo.png',
    theme: 'warm',
    primaryColor: 'hsl(45 95% 58%)', // Warm yellow
    description: {
      ru: 'Частный детский сад в Москве для детей от 1.5 до 7 лет',
      en: 'Private kindergarten in Moscow for children aged 1.5 to 7 years'
    }
  }
}

/**
 * Get current site type from environment variable
 * Defaults to 'english-school' if not set
 */
export function getCurrentSiteType(): SiteType {
  const siteType = process.env.NEXT_PUBLIC_SITE_TYPE as SiteType
  return siteType && siteType in siteConfigurations ? siteType : 'english-school'
}

/**
 * Get current site configuration
 */
export function getSiteConfig(): SiteConfiguration {
  return siteConfigurations[getCurrentSiteType()]
}

/**
 * Check if current site is kindergarten
 */
export function isKindergarten(): boolean {
  return getCurrentSiteType() === 'kindergarten'
}

/**
 * Check if current site is English school
 */
export function isEnglishSchool(): boolean {
  return getCurrentSiteType() === 'english-school'
}

/**
 * Get site type by domain (for middleware)
 */
export function getSiteTypeByDomain(hostname: string): SiteType {
  if (hostname.includes('minidomini')) {
    return 'kindergarten'
  }
  if (hostname.includes('eweschool') || hostname.includes('localhost')) {
    return 'english-school'
  }
  // Default based on environment variable
  return getCurrentSiteType()
}
