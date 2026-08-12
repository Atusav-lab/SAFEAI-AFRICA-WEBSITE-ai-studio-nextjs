import type { Metadata } from 'next'
import AboutUsClient from './AboutUsClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About Us — Who We Are',
  description:
    'Meet SAFE AI-AFRICA: a Kampala-based AI studio building ethical, locally grounded artificial intelligence for African healthcare, agriculture, education and enterprise.',
  path: '/about-us',
  image: '/SAFEAI_ASSETS/safeaiafricateam.jpg',
  imageAlt: 'The SAFE AI-AFRICA team in Kampala, Uganda',
  keywords: ['about SAFE AI-AFRICA', 'ethical AI Africa', 'AI company Uganda', 'responsible AI'],
})

export default function AboutUsPage() {
  return <AboutUsClient />
}
