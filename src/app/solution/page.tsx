import type { Metadata } from 'next'
import SolutionClient from './SolutionClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Products and Services: AI Platforms for Africa',
  description:
    'Ten AI platforms in production, including SAFESeq for genomics, SAFEKemia for chemistry teaching, SAFElytics for no-code machine learning, SafeZell for field sales and AMR Lens. We also run training and build custom systems.',
  path: '/solution',
  image: '/SAFEAI_ASSETS/safeseq1.png',
  imageAlt: 'SAFESeq, the SAFE AI-AFRICA genomics analysis platform',
  keywords: [
    'AI products Africa',
    'SAFESeq genomics platform',
    'no-code machine learning platform',
    'AI consulting Africa',
    'custom AI development Uganda',
  ],
})

export default function SolutionPage() {
  return <SolutionClient />
}
