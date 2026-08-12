import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clock, Mail, MessageCircle, Phone } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedLinks from '@/components/RelatedLinks'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/site'

// Conversion confirmation pages should never appear in search results — they are
// only meaningful straight after a form submission, and they are the page you
// point analytics/ads conversion goals at.
export const metadata: Metadata = buildMetadata({
  title: 'Thank You — Your Inquiry Has Been Received',
  description:
    'Thanks for contacting SAFE AI-AFRICA. Your inquiry has been received and our team will respond within 24 hours.',
  path: '/thank-you',
  noIndex: true,
})

const NEXT_STEPS = [
  {
    title: 'We read it, today',
    body: 'Your message goes straight to our team in Kampala. Inquiries that arrive during working hours are usually read within a couple of hours.',
  },
  {
    title: 'You get a real reply within 24 hours',
    body: 'Not an autoresponder — a person who has looked at what you asked for, with a first view on whether and how we can help.',
  },
  {
    title: 'We book a free discovery call',
    body: 'If it looks like a fit, we set up a short call to scope the problem, your data and your constraints, then send a written proposal.',
  },
]

export default function ThankYouPage() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-14 lg:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              variant="dark"
              className="mb-6"
              items={[{ name: 'Contact Us', href: '/contact-us' }, { name: 'Thank You' }]}
            />
            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mb-6">
              <CheckCircle2 size={34} aria-hidden="true" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Thank you — your inquiry has been received
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl font-lato mb-6">
              We have your message. {BUSINESS.responseTimePromise}
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-semibold bg-white/10 border border-white/20 rounded-full px-4 py-2">
              <Clock size={15} aria-hidden="true" />
              Need something urgently? Call or WhatsApp {BUSINESS.phoneDisplay}
            </p>
          </div>
        </section>

        {/* What happens next */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0b1b4d] mb-8">What happens next</h2>
          <ol className="space-y-4">
            {NEXT_STEPS.map((step, idx) => (
              <li
                key={step.title}
                className="flex gap-5 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <span className="w-9 h-9 rounded-xl bg-[#00499E] text-white font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-bold text-[#0b1b4d] mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-lato leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Direct channels */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-3 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Phone size={18} className="text-[#00499E] flex-shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Call</span>
                <span className="block text-sm font-semibold text-[#0b1b4d]">{BUSINESS.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <MessageCircle size={18} className="text-[#128C7E] flex-shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</span>
                <span className="block text-sm font-semibold text-[#0b1b4d]">Chat with us now</span>
              </span>
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-3 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail size={18} className="text-purple-600 flex-shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email</span>
                <span className="block text-sm font-semibold text-[#0b1b4d] break-all">{BUSINESS.email}</span>
              </span>
            </a>
          </div>

          <p className="text-sm text-slate-500 font-lato mt-6">
            Our reply may land in your spam or promotions folder — if you have not heard from us within
            24 hours, please check there or message us on WhatsApp.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/case-studies"
              className="btn-gradient text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-md hover:shadow-xl transition-all"
            >
              Read our case studies <ArrowRight size={16} />
            </Link>
            <Link
              href="/solution"
              className="border border-slate-200 bg-white text-[#00499E] font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-slate-50 transition-all"
            >
              Explore our products
            </Link>
          </div>
        </section>

        <RelatedLinks
          route="/thank-you"
          title="While you wait"
          subtitle="A few places to get a clearer picture of how we work."
        />
      </main>
      <Footer />
    </>
  )
}
