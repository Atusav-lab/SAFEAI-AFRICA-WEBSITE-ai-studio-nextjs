/**
 * Internal linking architecture.
 *
 * Every indexable page declares a short description and a set of logically
 * related pages. `RelatedLinks` renders these as a contextual block at the foot
 * of each page, so crawlers find a dense, meaningful link graph and visitors
 * always have a sensible next step.
 */

export interface PageNode {
  href: string
  title: string
  description: string
}

export const PAGES: Record<string, PageNode> = {
  '/': {
    href: '/',
    title: 'Home',
    description: 'Responsible AI products built in Africa, for Africa and the world.',
  },
  '/about-us': {
    href: '/about-us',
    title: 'About Us',
    description: 'Our mission, vision and the values behind every system we ship.',
  },
  '/company': {
    href: '/company',
    title: 'Our Company',
    description: 'Corporate profile, core values and accreditations.',
  },
  '/leadership-team': {
    href: '/leadership-team',
    title: 'Leadership Team',
    description: 'The founders, directors and researchers behind SAFE AI-AFRICA.',
  },
  '/our-gallery': {
    href: '/our-gallery',
    title: 'Media Gallery',
    description: 'Photos from our showcases, workshops and research programmes.',
  },
  '/solution': {
    href: '/solution',
    title: 'Products & Services',
    description: 'Ten AI platforms plus training, advocacy and bespoke development.',
  },
  '/case-studies': {
    href: '/case-studies',
    title: 'Case Studies',
    description: 'How our platforms are built, deployed and used in the field.',
  },
  '/amr-lens': {
    href: '/amr-lens',
    title: 'AMR Lens Africa',
    description: 'AI antimicrobial stewardship and inhibition-zone measurement.',
  },
  '/safezell': {
    href: '/safezell',
    title: 'SafeZell',
    description: 'Closed-loop field sales management for FMCG teams.',
  },
  '/blog': {
    href: '/blog',
    title: 'Blog & News',
    description: 'Announcements and analysis on AI across the continent.',
  },
  '/faq': {
    href: '/faq',
    title: 'FAQ',
    description: 'Answers on pricing, timelines, data ownership and support.',
  },
  '/contact-us': {
    href: '/contact-us',
    title: 'Contact Us',
    description: 'Book a demo or start a project — we reply within 24 hours.',
  },
  '/coming-soon': {
    href: '/coming-soon',
    title: 'Training & Careers',
    description: 'SAFE Academy training pipelines and job placement, launching soon.',
  },
  '/privacy-policy': {
    href: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'What data we collect, why we collect it and your rights.',
  },
  '/terms-of-service': {
    href: '/terms-of-service',
    title: 'Terms of Service',
    description: 'The terms that govern use of this website and our platforms.',
  },
  '/search': {
    href: '/search',
    title: 'Search',
    description: 'Find any page, product or article on this site.',
  },
}

/** Related-page graph: route → related routes, most relevant first. */
export const RELATED: Record<string, string[]> = {
  '/': ['/solution', '/case-studies', '/about-us', '/contact-us'],
  '/about-us': ['/company', '/leadership-team', '/case-studies', '/contact-us'],
  '/company': ['/about-us', '/leadership-team', '/our-gallery', '/contact-us'],
  '/leadership-team': ['/about-us', '/company', '/our-gallery', '/contact-us'],
  '/our-gallery': ['/blog', '/case-studies', '/leadership-team', '/about-us'],
  '/solution': ['/case-studies', '/amr-lens', '/safezell', '/faq', '/contact-us'],
  '/case-studies': ['/solution', '/amr-lens', '/safezell', '/faq', '/contact-us'],
  '/amr-lens': ['/solution', '/case-studies', '/safezell', '/contact-us'],
  '/safezell': ['/solution', '/case-studies', '/amr-lens', '/contact-us'],
  '/blog': ['/case-studies', '/solution', '/our-gallery', '/contact-us'],
  '/faq': ['/contact-us', '/solution', '/case-studies', '/privacy-policy'],
  '/contact-us': ['/faq', '/solution', '/case-studies', '/about-us'],
  '/coming-soon': ['/solution', '/about-us', '/blog', '/contact-us'],
  '/privacy-policy': ['/terms-of-service', '/contact-us', '/faq', '/about-us'],
  '/terms-of-service': ['/privacy-policy', '/contact-us', '/faq', '/about-us'],
  '/thank-you': ['/solution', '/case-studies', '/blog', '/faq'],
  '/404': ['/solution', '/case-studies', '/blog', '/contact-us'],
}

/** Resolves the related page nodes for a route. */
export function relatedPages(route: string): PageNode[] {
  return (RELATED[route] ?? RELATED['/']).map(href => PAGES[href]).filter(Boolean)
}
