import type { Metadata } from 'next'
import SafeZellClient from './SafeZellClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'SafeZell — Field Sales Management for FMCG Teams',
  description:
    'SafeZell connects reps, supervisors and warehouse teams in one closed-loop platform: GPS-validated check-ins, live stock tracking, variance reconciliation and shelf-photo compliance.',
  path: '/safezell',
  image: '/SAFEAI_ASSETS/merchandiser-management-system-google-ai-studio-google-chrome-07-jun-26-03-57-50-2.png',
  imageAlt: 'SafeZell field sales management dashboard',
  keywords: [
    'field sales management software',
    'FMCG merchandiser app Africa',
    'GPS check-in sales tracking',
    'van sales software Uganda',
  ],
})

export default function SafeZellPage() {
  return <SafeZellClient />
}
