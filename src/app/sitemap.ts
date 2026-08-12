import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * Generates /sitemap.xml.
 *
 * Only canonical, indexable URLs on this host are listed. Search Console
 * ignores (and reports) URLs from other domains, so the product subdomains
 * publish their own sitemaps rather than being listed here. /search and
 * /thank-you are excluded because they are noindex.
 *
 * `lastModified` carries a real date per page, not `new Date()`. Stamping the
 * current time on every request tells Google that every page changed moments
 * ago, every time it fetches the sitemap, which is obviously untrue and makes
 * it discount the signal. Update the date below when a page's content actually
 * changes.
 */

interface Entry {
  path: string
  /** Date this page's content last changed, as YYYY-MM-DD. */
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

/** Date of the SEO and copy rewrite that touched every page. */
const REWRITE = '2026-08-12'

const ENTRIES: Entry[] = [
  { path: '/', lastModified: REWRITE, changeFrequency: 'weekly', priority: 1 },
  { path: '/solution', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.9 },
  { path: '/case-studies', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact-us', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about-us', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/amr-lens', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/safezell', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/company', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/leadership-team', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', lastModified: REWRITE, changeFrequency: 'weekly', priority: 0.7 },
  {
    path: '/blog/safeseq-biomic-accelerator-top-15',
    lastModified: '2026-07-26',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  { path: '/our-gallery', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.6 },
  { path: '/coming-soon', lastModified: REWRITE, changeFrequency: 'monthly', priority: 0.4 },
  { path: '/privacy-policy', lastModified: REWRITE, changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', lastModified: REWRITE, changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ENTRIES.map(entry => ({
    url: entry.path === '/' ? SITE_URL : `${SITE_URL}${entry.path}`,
    lastModified: new Date(`${entry.lastModified}T00:00:00Z`),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
