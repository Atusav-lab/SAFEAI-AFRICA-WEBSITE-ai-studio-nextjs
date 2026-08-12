import type { Metadata } from 'next'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from './site'

export interface PageSeo {
  /** Page-specific title, without the brand suffix. */
  title: string
  /** Unique meta description — aim for 140–160 characters. */
  description: string
  /** Route path, e.g. "/about-us". Used for the canonical URL. */
  path: string
  /** Social share image. Defaults to the generated brand card. */
  image?: string
  /** Alt text for the social share image. */
  imageAlt?: string
  keywords?: string[]
  /** Set true for utility pages that must stay out of the index (thank-you, search). */
  noIndex?: boolean
  /** Extra Open Graph fields for article pages. */
  openGraphType?: 'website' | 'article'
  publishedTime?: string
}

/**
 * Builds a complete, unique Metadata object for a page: title, description,
 * canonical URL, Open Graph and Twitter card. Every indexable page uses this so
 * no two pages ship duplicate titles/descriptions or a missing canonical.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  keywords,
  noIndex = false,
  openGraphType = 'website',
  publishedTime,
}: PageSeo): Metadata {
  const url = absoluteUrl(path)
  const fullTitle = `${title} | ${SITE_NAME}`
  // Only the generated card has guaranteed 1200x630 dimensions; for photo
  // assets we omit them rather than advertise the wrong aspect ratio.
  const ogImage =
    image === DEFAULT_OG_IMAGE
      ? { url: absoluteUrl(image), width: 1200, height: 630, alt: imageAlt ?? title }
      : { url: absoluteUrl(image), alt: imageAlt ?? title }

  return {
    // `absolute` stops the root layout's title template appending the brand twice.
    title: { absolute: fullTitle },
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type: openGraphType,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      locale: 'en_US',
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@safeaiafrica',
      creator: '@safeaiafrica',
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  }
}

export { SITE_NAME, SITE_URL }
