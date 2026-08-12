import type { Metadata } from 'next'
import HomeClient from './HomeClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Responsible AI Solutions for Africa',
  description:
    'SAFE AI-AFRICA builds responsible AI for healthcare, genomics, agriculture, education and business, including SAFESeq, SAFEKemia, SAFElytics and AMR Lens. Book a free demo today.',
  path: '/',
  imageAlt: 'SAFE AI-AFRICA, responsible artificial intelligence for Africa',
  keywords: [
    'AI company Africa',
    'artificial intelligence Uganda',
    'AI solutions Kampala',
    'genomics platform Africa',
    'no-code machine learning',
  ],
})

export default function HomePage() {
  return <HomeClient />
}
