import type { Metadata } from 'next'
import BlogClient from './BlogClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Blog — AI News & Insights from Africa',
  description:
    'Company announcements and analysis on artificial intelligence across Africa: genomics, healthcare deployments, precision agriculture, and digital skills programmes.',
  path: '/blog',
  image: '/SAFEAI_ASSETS/biomic-announcement.jpg',
  imageAlt: 'SAFE AI-AFRICA news and blog coverage',
  keywords: ['AI news Africa', 'AI blog Uganda', 'African AI insights', 'health AI news'],
})

export default function BlogPage() {
  return <BlogClient />
}
