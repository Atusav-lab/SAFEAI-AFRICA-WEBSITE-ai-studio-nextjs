import {
  BUSINESS,
  PRODUCT_SITES,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
} from './site'

/** JSON-LD graph rendered once in the root layout: Organization + LocalBusiness + WebSite. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: BUSINESS.legalName,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: absoluteUrl('/SAFEAI_ASSETS/safeaiafrica-logo.png'),
          contentUrl: absoluteUrl('/SAFEAI_ASSETS/safeaiafrica-logo.png'),
          width: 512,
          height: 512,
          caption: SITE_NAME,
        },
        image: { '@id': `${SITE_URL}/#logo` },
        description:
          'SAFE AI-AFRICA builds responsible artificial intelligence products for healthcare, genomics, agriculture, education and enterprise across Africa.',
        foundingDate: BUSINESS.foundingDate,
        foundingLocation: {
          '@type': 'Place',
          name: `${BUSINESS.addressLocality}, ${BUSINESS.addressCountryName}`,
        },
        areaServed: { '@type': 'Continent', name: 'Africa' },
        sameAs: [...SOCIAL_PROFILES, ...PRODUCT_SITES],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: BUSINESS.phone,
            email: BUSINESS.email,
            contactType: 'customer service',
            areaServed: 'Africa',
            availableLanguage: ['English'],
          },
          {
            '@type': 'ContactPoint',
            telephone: BUSINESS.phone,
            contactType: 'sales',
            areaServed: 'Africa',
            availableLanguage: ['English'],
          },
        ],
      },
      localBusinessSchema(),
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_TAGLINE,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-US',
      },
    ],
  }
}

/** Local business markup so the Kampala office can surface in local/map results. */
export function localBusinessSchema() {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: absoluteUrl('/SAFEAI_ASSETS/safeaiafrica-logo.png'),
    logo: absoluteUrl('/SAFEAI_ASSETS/safeaiafrica-logo.png'),
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: '$$',
    currenciesAccepted: 'UGX, USD',
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    description:
      'AI product studio and consultancy in Kampala, Uganda, delivering genomics, healthcare, agriculture, education and enterprise AI systems across Africa.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: 'https://www.google.com/maps/place/Kampala,+Uganda',
    areaServed: [
      { '@type': 'Country', name: 'Uganda' },
      { '@type': 'Continent', name: 'Africa' },
    ],
    openingHoursSpecification: BUSINESS.openingHours.map(slot => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: SOCIAL_PROFILES,
  }
}

export interface Crumb {
  name: string
  /** Route path; omit on the current (last) crumb. */
  href?: string
}

/** BreadcrumbList markup matching the visible breadcrumb trail. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  }
}

export interface FaqItem {
  question: string
  answer: string
}

/** FAQPage markup. Only use it where the same questions are visible on the page. */
export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/** Article markup for blog posts. */
export function articleSchema(input: {
  headline: string
  description: string
  path: string
  image: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.headline,
    description: input.description,
    image: absoluteUrl(input.image),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(input.path) },
    author: { '@type': 'Organization', name: input.authorName ?? SITE_NAME, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

/** Renders any schema object as a JSON-LD script tag. */
export function jsonLdProps(schema: unknown) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  } as const
}
