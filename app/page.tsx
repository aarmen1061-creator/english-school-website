import { redirect } from 'next/navigation'
import { i18n } from '@/lib/i18n/settings'

export default function RootPage() {
  redirect(`/${i18n.defaultLocale}`)
}
