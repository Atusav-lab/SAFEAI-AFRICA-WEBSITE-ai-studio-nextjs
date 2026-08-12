import type { Metadata } from 'next'
import CompanyClient from './CompanyClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Our Company: Mission, Values and Accreditations',
  description:
    "SAFE AI-AFRICA's corporate profile: our mission and vision, the five values that govern how we build, and the certifications behind our AI engineering work.",
  path: '/company',
  image: '/SAFEAI_ASSETS/sisonkebiotik-certificate.jpg',
  imageAlt: 'SAFE AI-AFRICA Sisonkebiotik certificate',
  keywords: ['SAFE AI-AFRICA company', 'AI company values', 'Sisonkebiotik certificate', 'AI accreditation Uganda'],
})

export default function CompanyPage() {
  return <CompanyClient />
}
