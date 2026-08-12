import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Media Gallery — Events, Showcases & Research',
  description:
    'Photos from SAFE AI-AFRICA showcases, accelerator programmes, ideathons and research work — including the SAFESeq presentation at the BIOMIC cohort showcase.',
  path: '/our-gallery',
  image: '/SAFEAI_ASSETS/safeseq-presentation-biomic-minister-visit.jpg',
  imageAlt: 'SAFESeq presented at the BIOMIC Accelerator Program showcase',
  keywords: ['SAFE AI-AFRICA gallery', 'BIOMIC accelerator', 'AI events Uganda'],
})

export default function GalleryPage() {
  return <GalleryClient />
}
