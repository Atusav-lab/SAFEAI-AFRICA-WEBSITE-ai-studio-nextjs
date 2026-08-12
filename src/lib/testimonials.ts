/**
 * Verified customer and partner testimonials.
 *
 * Only add entries here that were actually given to SAFE AI-AFRICA, with the
 * person and organisation named and permission to publish. Invented or
 * anonymous "reviews" are a search-ranking and trust liability, and review
 * markup for self-serving reviews is against Google's structured-data policy,
 * which is why this data renders as visible social proof only.
 */

export interface Testimonial {
  quote: string
  author: string
  role?: string
  organization: string
  /** 1–5, only when the reviewer actually gave a rating. */
  rating?: number
  /** Where the testimonial came from, e.g. "Project handover, 2025". */
  source?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'SAFE AI-AFRICA demonstrated exceptional professionalism and technical prowess. Their solution was not just a product, but a game-changer for our business operations. We highly recommend their services to any organization looking to leverage AI.',
    author: 'Edmand Ssali',
    organization: 'SAVOMA DYNAMICS LTD',
    rating: 5,
  },
]

/**
 * Third-party recognition: verifiable programmes, selections and certifications
 * rather than self-reported claims.
 */
export interface Recognition {
  title: string
  body: string
  issuer: string
  year: string
  href?: string
}

export const RECOGNITION: Recognition[] = [
  {
    title: 'Top 15 startup, BIOMIC Accelerator Program',
    body: 'SAFESeq was selected among the top 15 startups from a competitive pool of biomedical, biotech and health innovations across Uganda.',
    issuer: 'The Lung Institute, Makerere University · STI-OP · Hindsight Ventures',
    year: '2026',
    href: '/blog/safeseq-biomic-accelerator-top-15',
  },
  {
    title: 'Sisonkebiotik Certificate',
    body: 'Certification recognising our work and participation in the African bioinformatics and biotechnology community.',
    issuer: 'Sisonkebiotik',
    year: '2024',
    href: '/company',
  },
]
