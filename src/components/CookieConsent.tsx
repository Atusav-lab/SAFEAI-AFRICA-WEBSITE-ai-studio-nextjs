'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import {
  ACCEPT_ALL,
  CATEGORIES,
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
  DENY_ALL,
  type ConsentState,
  readConsent,
  writeConsent,
} from '@/lib/cookies'

/**
 * Cookie consent banner and preferences panel.
 *
 * Nothing optional loads before a choice is made: third-party embeds are
 * wrapped in `ConsentGate`, which stays closed until the visitor allows the
 * matching category. Declining is exactly as easy as accepting: a single
 * click, on the same level as "Accept all".
 */
export default function CookieConsent() {
  const [decided, setDecided] = useState(true) // assume decided until the cookie is read
  const [panelOpen, setPanelOpen] = useState(false)
  const [draft, setDraft] = useState({ functional: false, analytics: false })
  const panelRef = useRef<HTMLDivElement>(null)

  // Read the stored choice after mount so server and client markup match.
  useEffect(() => {
    const stored = readConsent()
    setDecided(Boolean(stored))
    if (stored) setDraft({ functional: stored.functional, analytics: stored.analytics })
  }, [])

  // Allow the footer link and the privacy page to re-open preferences.
  useEffect(() => {
    const open = () => {
      const stored = readConsent()
      setDraft({ functional: stored?.functional ?? false, analytics: stored?.analytics ?? false })
      setPanelOpen(true)
    }
    window.addEventListener(CONSENT_OPEN_EVENT, open)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open)
  }, [])

  // Keep the banner in sync if consent is cleared elsewhere.
  useEffect(() => {
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentState | null>).detail
      setDecided(Boolean(detail))
    }
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange)
  }, [])

  // Escape closes the panel; focus moves into it when it opens.
  useEffect(() => {
    if (!panelOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPanelOpen(false)
    }
    document.addEventListener('keydown', onKey)
    panelRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [panelOpen])

  const save = useCallback((choice: { functional: boolean; analytics: boolean }) => {
    writeConsent(choice)
    setDecided(true)
    setPanelOpen(false)
  }, [])

  const acceptAll = () => save({ functional: ACCEPT_ALL.functional, analytics: ACCEPT_ALL.analytics })
  const rejectAll = () => save({ functional: DENY_ALL.functional, analytics: DENY_ALL.analytics })

  const showBanner = !decided && !panelOpen

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-text"
            /* Floating card above the sticky mobile CTA on small screens; a full
               width bar on desktop so it covers as little of the page as possible. */
            className="fixed z-[9997] left-3 right-3 bottom-[96px] rounded-2xl border border-slate-200 shadow-[0_12px_40px_rgba(11,27,77,0.18)] bg-white p-5 md:left-0 md:right-0 md:bottom-0 md:rounded-none md:border-x-0 md:border-b-0 md:p-0"
          >
            <div className="md:max-w-7xl md:mx-auto md:flex md:items-center md:gap-8 md:px-6 lg:px-8 md:py-4">
              <div className="flex items-start gap-3 mb-3 md:mb-0 md:flex-1">
                <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#00499E] flex items-center justify-center flex-shrink-0">
                  <Cookie size={18} aria-hidden="true" />
                </span>
                <div>
                  <h2 id="cookie-banner-title" className="font-bold text-[#0b1b4d]">
                    We use cookies
                  </h2>
                  <p id="cookie-banner-text" className="text-sm text-slate-600 font-lato leading-relaxed mt-1">
                    A few cookies are needed to keep this site working. Everything else, like our office
                    map, product videos and page counts, only loads if you say yes. Read our{' '}
                    <Link href="/privacy-policy#cookies" className="text-[#00499E] font-semibold hover:underline">
                      cookie policy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Right padding on desktop keeps the buttons clear of the WhatsApp float. */}
              <div className="flex flex-wrap gap-2 md:flex-nowrap md:flex-shrink-0 md:pr-16">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="flex-1 min-w-[130px] md:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white text-sm font-bold shadow-sm hover:opacity-95 transition-opacity"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="flex-1 min-w-[130px] md:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors"
                >
                  Reject non-essential
                </button>
                <button
                  type="button"
                  onClick={() => setPanelOpen(true)}
                  className="w-full md:w-auto px-4 py-2 md:py-2.5 text-sm font-semibold text-[#00499E] hover:underline whitespace-nowrap"
                >
                  Manage preferences
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences panel */}
      <AnimatePresence>
        {panelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPanelOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-panel-title"
              tabIndex={-1}
              ref={panelRef}
              className="fixed z-[9999] inset-x-3 bottom-3 top-auto sm:inset-x-auto sm:left-1/2 sm:top-1/2 sm:bottom-auto sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[min(36rem,calc(100vw-3rem))] max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 focus:outline-none"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h2 id="cookie-panel-title" className="text-2xl font-bold text-[#0b1b4d]">
                    Cookie preferences
                  </h2>
                  <p className="text-sm text-slate-500 font-lato mt-1">
                    Choose what you are happy for us to load. You can change your mind at any time using
                    the cookie settings link at the bottom of every page.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPanelOpen(false)}
                  aria-label="Close cookie preferences"
                  className="p-2 -mt-1 -mr-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3">
                {CATEGORIES.map(category => {
                  const isRequired = Boolean(category.required)
                  const checked = isRequired || draft[category.id as 'functional' | 'analytics']

                  return (
                    <div
                      key={category.id}
                      className="border border-slate-100 bg-slate-50 rounded-2xl p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-[#0b1b4d]">{category.name}</h3>
                          <p className="text-sm text-slate-500 font-lato mt-0.5">{category.summary}</p>
                        </div>

                        {isRequired ? (
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5 flex-shrink-0">
                            Always on
                          </span>
                        ) : (
                          <label className="inline-flex items-center gap-2 cursor-pointer flex-shrink-0">
                            <span className="sr-only">Allow {category.name.toLowerCase()} cookies</span>
                            <input
                              type="checkbox"
                              className="peer sr-only"
                              checked={checked}
                              onChange={e =>
                                setDraft(prev => ({
                                  ...prev,
                                  [category.id]: e.target.checked,
                                }))
                              }
                            />
                            <span className="w-11 h-6 rounded-full bg-slate-300 peer-checked:bg-[#00499E] transition-colors relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-[#00499E] peer-focus-visible:ring-offset-2" />
                          </label>
                        )}
                      </div>

                      <p className="text-sm text-slate-500 font-lato leading-relaxed mt-3">
                        {category.detail}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => save(draft)}
                  className="flex-1 min-w-[150px] px-5 py-3 rounded-xl bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white text-sm font-bold shadow-sm hover:opacity-95 transition-opacity"
                >
                  Save preferences
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="flex-1 min-w-[130px] px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="flex-1 min-w-[130px] px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors"
                >
                  Reject non-essential
                </button>
              </div>

              <p className="text-xs text-slate-400 font-lato mt-4">
                Every cookie we use is listed in our{' '}
                <Link href="/privacy-policy#cookies" className="text-[#00499E] hover:underline">
                  privacy and cookie policy
                </Link>
                .
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
