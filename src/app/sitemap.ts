import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * Generates /sitemap.xml.
 *
 * Only canonical, indexable URLs on this host are listed. Search Console
 * ignores (and reports) URLs from other domains, so the product subdomains
 * publish their own sitemaps rather than being listed here. /search and
 * /thank-you are excluded because they are noindex.
 */

interface Entry {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const ENTRIES: Entry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/solution', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/case-studies', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact-us', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/amr-lens', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/safezell', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/company', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/leadership-team', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/blog/safeseq-biomic-accelerator-top-15', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/our-gallery', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/coming-soon', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ENTRIES.map(entry => ({
    url: entry.path === '/' ? SITE_URL : `${SITE_URL}${entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
