import type { Metadata } from 'next'
import ComingSoonClient from './ComingSoonClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'AI Training & Careers — SAFE Academy Waitlist',
  description:
    'SAFE Academy is launching soon: hands-on AI training in computer vision, NLP and genomics analytics, certification pathways and job placement for African talent. Join the waitlist.',
  path: '/coming-soon',
  imageAlt: 'SAFE Academy AI training and careers, launching soon',
  keywords: [
    'AI training Africa',
    'machine learning course Uganda',
    'AI jobs Africa',
    'SAFE Academy',
  ],
})

export default function ComingSoonPage() {
  return <ComingSoonClient />
}
