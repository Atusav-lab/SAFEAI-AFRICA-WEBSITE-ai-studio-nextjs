import type { Metadata } from 'next'
import AmrLensClient from './AmrLensClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'AMR Lens Africa: AI Antimicrobial Stewardship',
  description:
    'AMR Lens Africa measures zones of inhibition with computer vision and maps results to CLSI/EUCAST breakpoints and WHO AWaRe classes for stewardship.',
  path: '/amr-lens',
  image: '/SAFEAI_ASSETS/amr-lens-africa.jpg',
  imageAlt: 'AMR Lens Africa antimicrobial resistance scanning application',
  keywords: [
    'antimicrobial resistance Africa',
    'AMR surveillance software',
    'zone of inhibition measurement app',
    'WHO AWaRe classification tool',
    'antimicrobial stewardship AI',
  ],
})

export default function AmrLensPage() {
  return <AmrLensClient />
}
