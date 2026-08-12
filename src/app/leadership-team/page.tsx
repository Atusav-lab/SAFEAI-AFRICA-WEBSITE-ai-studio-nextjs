import type { Metadata } from 'next'
import LeadershipTeamClient from './LeadershipTeamClient'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Leadership Team — Founders & Directors',
  description:
    'Meet the founders, directors and researchers leading SAFE AI-AFRICA: biotechnologists, engineers, clinicians and bioinformaticians building responsible AI in Africa.',
  path: '/leadership-team',
  image: '/SAFEAI_ASSETS/saviour-ceo.jpg',
  imageAlt: 'Saviour Atuheire, Founder and CEO of SAFE AI-AFRICA',
  keywords: ['SAFE AI-AFRICA leadership', 'Saviour Atuheire', 'AI founders Uganda', 'African AI leaders'],
})

export default function LeadershipTeamPage() {
  return <LeadershipTeamClient />
}
