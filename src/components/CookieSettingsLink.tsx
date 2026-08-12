'use client'

import { openCookiePreferences } from '@/lib/cookies'

interface Props {
  className?: string
  label?: string
}

/**
 * Re-opens the cookie preferences panel. Consent must be as easy to withdraw as
 * it was to give, so this sits in the footer of every page and on the privacy
 * policy's cookie section.
 */
export default function CookieSettingsLink({ className = '', label = 'Cookie settings' }: Props) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      {label}
    </button>
  )
}
