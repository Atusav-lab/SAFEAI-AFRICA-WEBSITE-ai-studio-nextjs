import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us — Book a Demo in Kampala, Uganda',
  description:
    'Talk to SAFE AI-AFRICA about a demo, partnership or custom AI project. Call, WhatsApp or email our Kampala team — every inquiry gets a reply within 24 hours.',
  path: '/contact-us',
  imageAlt: 'Contact SAFE AI-AFRICA in Kampala, Uganda',
  keywords: [
    'contact SAFE AI-AFRICA',
    'AI company Kampala contact',
    'book AI demo Uganda',
    'AI consulting inquiry Africa',
  ],
})

export default function ContactPage() {
  return <ContactClient />
}
