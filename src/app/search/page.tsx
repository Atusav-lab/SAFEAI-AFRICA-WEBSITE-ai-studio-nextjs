import type { Metadata } from 'next'
import SearchClient from './SearchClient'
import { buildMetadata } from '@/lib/seo'

// Internal search result pages are thin, near-duplicate content, so they are
// kept out of the index while still passing link equity onwards (follow).
export const metadata: Metadata = buildMetadata({
  title: 'Search',
  description:
    'Search SAFE AI-AFRICA for products, services, team members, articles and support pages.',
  path: '/search',
  noIndex: true,
})

export default function SearchPage() {
  return <SearchClient />
}
