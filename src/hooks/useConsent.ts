'use client'

import { useEffect, useState } from 'react'
import {
  CONSENT_CHANGE_EVENT,
  type ConsentState,
  type OptionalCategory,
  readConsent,
} from '@/lib/cookies'

interface UseConsent {
  /** null until the visitor has made a choice. */
  consent: ConsentState | null
  /** False during the first render pass, before the cookie has been read. */
  ready: boolean
  /** True only when the visitor has actively allowed this category. */
  allows: (category: OptionalCategory) => boolean
}

/**
 * Subscribes a component to the visitor's cookie choice.
 *
 * Consent lives in a cookie read on the client, so `ready` stays false for the
 * first paint, so server and client render the same "not decided" state and
 * hydration matches.
 */
export function useConsent(): UseConsent {
  const [consent, setConsent] = useState<ConsentState | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setConsent(readConsent())
    setReady(true)

    const handleChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentState | null>).detail
      setConsent(detail ?? readConsent())
    }

    window.addEventListener(CONSENT_CHANGE_EVENT, handleChange)
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleChange)
  }, [])

  return {
    consent,
    ready,
    allows: (category: OptionalCategory) => Boolean(consent?.[category]),
  }
}
