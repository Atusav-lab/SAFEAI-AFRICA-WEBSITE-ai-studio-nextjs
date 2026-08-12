import type { Metadata } from 'next'
import SolutionClient from './SolutionClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Products & Services — AI Platforms for Africa',
  description:
    'Ten production AI platforms — SAFESeq genomics, SAFEKemia chemistry tutor, SAFElytics no-code ML, SafeZell field sales, AMR Lens and more — plus AI training and bespoke development.',
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
