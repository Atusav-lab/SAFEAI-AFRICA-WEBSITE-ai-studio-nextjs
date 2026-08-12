'use client'

import React from 'react'
import { Cookie } from 'lucide-react'
import { useConsent } from '@/hooks/useConsent'
import { openCookiePreferences, writeConsent, type OptionalCategory } from '@/lib/cookies'

interface Props {
  /** Consent category this content belongs to. */
  category: OptionalCategory
  /** What the visitor is being asked to load, e.g. "Google Maps". */
  provider: string
  /** Short description shown on the placeholder, e.g. "our office map". */
  label: string
  /** Optional link to the provider's privacy terms. */
  privacyUrl?: string
  /** Placeholder styling: neutral for page content, brand for dark/hero areas. */
  tone?: 'light' | 'brand'
  className?: string
  children: React.ReactNode
}

const TONES = {
  light: {
    wrapper: 'bg-slate-100 border-slate-200',
    icon: 'bg-white text-[#00499E]',
    text: 'text-slate-600',
    strong: 'text-slate-800',
    secondary: 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50',
    link: 'text-slate-400 hover:text-[#00499E]',
  },
  brand: {
    wrapper: 'bg-gradient-to-br from-[#0b1b4d] to-[#082da3] border-white/10',
    icon: 'bg-white/10 text-[#00E5FF]',
    text: 'text-blue-100',
    strong: 'text-white',
    secondary: 'border-white/25 bg-white/10 text-white hover:bg-white/20',
    link: 'text-blue-200 hover:text-white',
  },
} as const

/**
 * Blocks third-party embeds until the visitor allows the matching cookie
 * category. Without this the consent banner would be decorative, because the
 * embeds would already have set their cookies by the time anyone clicked
 * "reject".
 *
 * The placeholder lets the visitor load this one embed directly, which grants
 * the category rather than nagging them back to the banner.
 */
export default function ConsentGate({
  category,
  provider,
  label,
  privacyUrl,
  tone = 'light',
  className = '',
  children,
}: Props) {
  const { allows, ready, consent } = useConsent()
  const styles = TONES[tone]

  if (ready && allows(category)) {
    return <>{children}</>
  }

  const allowThis = () => {
    writeConsent({
      functional: category === 'functional' ? true : Boolean(consent?.functional),
      analytics: category === 'analytics' ? true : Boolean(consent?.analytics),
    })
  }

  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-3 border p-8 min-h-[240px] h-full w-full ${styles.wrapper} ${className}`}
    >
      <span className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-sm ${styles.icon}`}>
        <Cookie size={20} aria-hidden="true" />
      </span>
      <p className={`text-sm font-lato max-w-sm leading-relaxed ${styles.text}`}>
        <strong className={`font-semibold ${styles.strong}`}>{label}</strong> comes from {provider}, who
        may set their own cookies. Say yes to embedded content and it will load right here.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={allowThis}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white text-sm font-bold shadow-sm hover:opacity-95 transition-opacity"
        >
          Allow and load
        </button>
        <button
          type="button"
          onClick={openCookiePreferences}
          className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${styles.secondary}`}
        >
          Cookie settings
        </button>
      </div>
      {privacyUrl && (
        <a
          href={privacyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs underline ${styles.link}`}
        >
          {provider} privacy policy
        </a>
      )}
    </div>
  )
}
