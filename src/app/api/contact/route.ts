import { NextResponse } from 'next/server'

/**
 * Contact form endpoint.
 *
 * Delivery: set CONTACT_WEBHOOK_URL to an endpoint that reaches the team
 * (Formspree, Zapier/Make hook, Slack/Teams incoming webhook, or your own mail
 * service). Without it the submission is validated and written to the server log
 * only — the form still works, but nothing is emailed, so configure the webhook
 * before relying on inbound inquiries.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface ContactPayload {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  /** Honeypot: real users never fill this in. */
  company?: string
}

const MAX = { name: 80, email: 160, phone: 40, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  // Silently accept honeypot hits so bots do not learn they were filtered.
  if (payload.company) {
    return NextResponse.json({ ok: true })
  }

  const firstName = payload.firstName?.trim() ?? ''
  const lastName = payload.lastName?.trim() ?? ''
  const email = payload.email?.trim() ?? ''
  const phone = payload.phone?.trim() ?? ''
  const message = payload.message?.trim() ?? ''

  const errors: string[] = []
  if (!firstName || firstName.length > MAX.name) errors.push('A valid first name is required.')
  if (!lastName || lastName.length > MAX.name) errors.push('A valid last name is required.')
  if (!email || email.length > MAX.email || !EMAIL_RE.test(email)) errors.push('A valid email address is required.')
  if (phone.length > MAX.phone) errors.push('Phone number is too long.')
  if (!message || message.length > MAX.message) errors.push('A message between 1 and 5000 characters is required.')

  if (errors.length) {
    return NextResponse.json({ ok: false, error: errors.join(' ') }, { status: 422 })
  }

  const inquiry = {
    receivedAt: new Date().toISOString(),
    name: `${firstName} ${lastName}`,
    email,
    phone: phone || null,
    message,
    source: 'safeaiafrica.com/contact-us',
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(inquiry),
      })

      if (!response.ok) {
        console.error('[contact] webhook rejected submission', response.status, inquiry.email)
        return NextResponse.json(
          { ok: false, error: 'We could not deliver your message. Please email or WhatsApp us instead.' },
          { status: 502 },
        )
      }
    } catch (error) {
      console.error('[contact] webhook request failed', error)
      return NextResponse.json(
        { ok: false, error: 'We could not deliver your message. Please email or WhatsApp us instead.' },
        { status: 502 },
      )
    }
  } else {
    console.warn('[contact] CONTACT_WEBHOOK_URL is not set — inquiry logged only:', inquiry)
  }

  return NextResponse.json({ ok: true })
}
