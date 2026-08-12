/**
 * Cookie consent: storage, categories and the cookie inventory published on
 * /privacy-policy#cookies.
 *
 * The visitor's choice is kept in a first-party cookie so it survives across
 * sessions and devices sharing the browser profile. Nothing beyond the strictly
 * necessary category loads until consent is given. See `ConsentGate`.
 */

export const CONSENT_COOKIE = 'saa_cookie_consent'
export const CONSENT_VERSION = 1
/** Six months, the common ceiling for consent re-prompting. */
export const CONSENT_MAX_AGE_DAYS = 180

/** Fired on the window whenever consent is saved, so gated embeds re-render. */
export const CONSENT_CHANGE_EVENT = 'saa:consent-change'
/** Fired to re-open the preferences panel from anywhere (footer, privacy page). */
export const CONSENT_OPEN_EVENT = 'saa:consent-open'

export type OptionalCategory = 'functional' | 'analytics'
export type ConsentCategory = 'necessary' | OptionalCategory

export interface ConsentState {
  version: number
  /** Always true, because the site cannot run without these. */
  necessary: true
  /** Embedded third-party content: maps, videos, the 3D hero scene. */
  functional: boolean
  /** Audience measurement. Nothing uses this yet; the switch is here for when it does. */
  analytics: boolean
  updatedAt: string
}

export const DENY_ALL: ConsentState = {
  version: CONSENT_VERSION,
  necessary: true,
  functional: false,
  analytics: false,
  updatedAt: '',
}

export const ACCEPT_ALL: ConsentState = {
  ...DENY_ALL,
  functional: true,
  analytics: true,
}

export interface CategoryInfo {
  id: ConsentCategory
  name: string
  summary: string
  detail: string
  /** Strictly necessary cookies cannot be switched off. */
  required?: boolean
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'necessary',
    name: 'Strictly necessary',
    summary: 'Needed for the site to work. Always on.',
    detail:
      'These keep the site secure and available, and they remember the cookie choice you make here so we do not ask you again on every page. They do not follow you around other websites, and the site cannot run without them.',
    required: true,
  },
  {
    id: 'functional',
    name: 'Embedded content',
    summary: 'Loads maps, videos and interactive demos from other companies.',
    detail:
      'Our office map comes from Google, our product videos from YouTube, and the moving 3D scene on the home page from Spline. Once that content loads, those companies can set their own cookies. So we hold it back until you say yes. If you would rather not, the rest of the page works exactly as normal.',
  },
  {
    id: 'analytics',
    name: 'Analytics',
    summary: 'Helps us see which pages are actually useful.',
    detail:
      'Counts of how many people visit each page, so we know what to improve. We do not run any analytics tool on this website at the moment. If we add one, it will only load for visitors who have allowed this category.',
  },
]

export interface CookieRecord {
  name: string
  provider: string
  category: ConsentCategory
  purpose: string
  duration: string
}

/** Published cookie inventory. Keep this accurate, it is a legal disclosure. */
export const COOKIE_INVENTORY: CookieRecord[] = [
  {
    name: CONSENT_COOKIE,
    provider: 'SAFE AI-AFRICA (first party)',
    category: 'necessary',
    purpose: 'Remembers the cookie choice you made, so we do not ask again on every visit.',
    duration: `${CONSENT_MAX_AGE_DAYS} days`,
  },
  {
    name: 'Hosting and security cookies',
    provider: 'Our hosting provider (first party)',
    category: 'necessary',
    purpose:
      'Keep your session working, spread traffic across servers and block abuse. Set only where the platform serving the page needs them.',
    duration: 'Session, or up to 12 months',
  },
  {
    name: 'NID, SOCS, CONSENT',
    provider: 'Google Maps',
    category: 'functional',
    purpose:
      'Set by Google when the office map on our contact page loads. They remember your map settings and Google’s own consent state.',
    duration: 'Up to 24 months',
  },
  {
    name: 'VISITOR_INFO1_LIVE, YSC, PREF',
    provider: 'YouTube (youtube-nocookie.com)',
    category: 'functional',
    purpose:
      'Set by YouTube when you play one of our product videos. They remember playback settings and estimate your connection speed. We use YouTube’s no-cookie domain, so nothing is set until you press play.',
    duration: 'Session to 24 months',
  },
  {
    name: 'Local storage entries',
    provider: 'Spline',
    category: 'functional',
    purpose:
      'Used by the 3D scene on our home page to keep a local copy of the artwork so it loads faster next time.',
    duration: 'Until you clear browser storage',
  },
]

/** Reads the saved consent, or null when the visitor has not chosen yet. */
export function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null

  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${CONSENT_COOKIE}=`))

  if (!match) return null

  try {
    const parsed = JSON.parse(decodeURIComponent(match.slice(CONSENT_COOKIE.length + 1))) as ConsentState
    // A version bump means the disclosure changed materially, so ask again.
    if (parsed.version !== CONSENT_VERSION) return null
    return {
      ...DENY_ALL,
      ...parsed,
      necessary: true,
      functional: Boolean(parsed.functional),
      analytics: Boolean(parsed.analytics),
    }
  } catch {
    return null
  }
}

/** Persists consent and notifies any gated embeds on the page. */
export function writeConsent(choice: Pick<ConsentState, 'functional' | 'analytics'>): ConsentState {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    necessary: true,
    functional: choice.functional,
    analytics: choice.analytics,
    updatedAt: new Date().toISOString(),
  }

  if (typeof document !== 'undefined') {
    const value = encodeURIComponent(JSON.stringify(state))
    const secure = window.location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${CONSENT_MAX_AGE_DAYS * 24 * 60 * 60}; SameSite=Lax${secure}`
    window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_CHANGE_EVENT, { detail: state }))
  }

  return state
}

/** Clears the stored choice, which makes the banner appear again. */
export function clearConsent() {
  if (typeof document === 'undefined') return
  document.cookie = `${CONSENT_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }))
}

/** Opens the preferences panel from any component. */
export function openCookiePreferences() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT))
}
