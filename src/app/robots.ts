import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * Generates /robots.txt.
 *
 * Everything public is crawlable. Excluded: the API surface, internal search
 * result pages (thin, near-duplicate content) and the post-conversion
 * thank-you page, none of which belong in the index.
 */
export default function robots(): MetadataRoute.Robots {
  const disallow = ['/api/', '/search', '/search?', '/thank-you']

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      {
        // Explicit rules for the major engines keep their behaviour predictable.
        userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot'],
        allow: '/',
        disallow,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
