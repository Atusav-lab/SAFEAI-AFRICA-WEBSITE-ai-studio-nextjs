'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AlertCircle, ArrowRight, ChevronDown, Clock, MapPin, MessageCircle, Mail, Navigation, Phone, Send,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ConsentGate from '@/components/ConsentGate'
import JsonLd from '@/components/JsonLd'
import RelatedLinks from '@/components/RelatedLinks'
import ResponseTimePromise from '@/components/ResponseTimePromise'
import { CONTACT_FAQS } from '@/lib/faqs'
import { faqSchema } from '@/lib/schema'
import { BUSINESS, MAPS } from '@/lib/site'

const EMPTY_FORM = { firstName: '', lastName: '', email: '', phone: '', message: '', company: '' }

export default function ContactUs() {
  const router = useRouter()
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string }

      if (!response.ok || !data.ok) {
        setStatus('error')
        setError(data.error ?? 'Something went wrong sending your message.')
        return
      }

      setForm(EMPTY_FORM)
      // Dedicated confirmation page, and the conversion goal for analytics and ads.
      router.push('/thank-you')
    } catch {
      setStatus('error')
      setError('We could not reach the server. Please check your connection and try again.')
    }
  }

  return (
    <>
      <Header forceScrolled={true} />
      <JsonLd schema={faqSchema(CONTACT_FAQS)} />

      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        {/* Banner: contact actions and the response-time promise sit above the fold */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-14 lg:py-16">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs variant="dark" className="mb-6" items={[{ name: 'Contact Us' }]} />
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Contact SAFE AI-AFRICA
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl font-lato mb-6">
              Book a demo, scope a project or ask a question. Our team in Kampala works with clients
              across Africa and internationally.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact-form"
                className="bg-white text-[#00499E] font-bold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-lg hover:bg-[#17c7f8] hover:text-white transition-all duration-300"
              >
                Send us a message <ArrowRight size={18} />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 inline-flex items-center gap-2 hover:bg-white/20 transition-all"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 inline-flex items-center gap-2 hover:bg-white/20 transition-all"
              >
                <Phone size={18} /> {BUSINESS.phoneDisplay}
              </a>
              <ResponseTimePromise variant="dark" />
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00499E] mb-2 block">Connect</span>
                <h2 className="text-3xl font-bold text-[#0b1b4d]">Get in Touch</h2>
                <p className="text-slate-500 font-lato mt-2 leading-relaxed">
                  Use any of these channels, or send us a message with the form. Our support and
                  partnership teams are ready to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#00499E] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1b4d]">Our Headquarters</h3>
                    <p className="text-sm text-slate-500 font-lato mt-1">
                      {BUSINESS.addressLocality}, {BUSINESS.addressCountryName}
                    </p>
                    <a
                      href={MAPS.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00499E] mt-2 hover:gap-2.5 transition-all"
                    >
                      <Navigation size={12} /> Get directions
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 text-[#0061B2] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1b4d]">Phone &amp; WhatsApp</h3>
                    <p className="text-sm text-slate-500 font-lato mt-1">
                      <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#00499E] transition-colors">
                        {BUSINESS.phoneDisplay}
                      </a>
                      {' / '}
                      <a href={`tel:${BUSINESS.altPhone}`} className="hover:text-[#00499E] transition-colors">
                        {BUSINESS.altPhoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1b4d]">Email Address</h3>
                    <p className="text-sm text-slate-500 font-lato mt-1">
                      <a href={`mailto:${BUSINESS.email}`} className="hover:text-[#00499E] transition-colors">
                        {BUSINESS.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1b4d]">Working Hours</h3>
                    <ul className="text-sm text-slate-500 font-lato mt-1 space-y-0.5">
                      <li>Monday to Friday: 8am to 6pm (EAT)</li>
                      <li>Saturday: 9am to 2pm (EAT)</li>
                      <li>Sunday and public holidays: closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="contact-form" className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100 scroll-mt-28">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0b1b4d]">Send us a message</h2>
                <p className="text-slate-500 font-lato text-sm mt-1">
                  Tell us what you are trying to build or fix.
                </p>
                <ResponseTimePromise className="mt-4" />
              </div>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    {error} You can also reach us on{' '}
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                      WhatsApp
                    </a>{' '}
                    or at{' '}
                    <a href={`mailto:${BUSINESS.email}`} className="font-semibold underline">
                      {BUSINESS.email}
                    </a>
                    .
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      placeholder="e.g. Jane"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      placeholder="e.g. Doe"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. jane@example.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +256..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you or collaborate?"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                  />
                </div>

                {/* Honeypot: hidden from people, tempting to bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company (leave blank)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 bg-gradient-to-r from-[#00499E] to-[#0075ba] hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} aria-hidden="true" />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-xs text-slate-400 font-lato text-center">
                  By sending this message you agree to our{' '}
                  <Link href="/privacy-policy" className="text-[#00499E] hover:underline">
                    Privacy Policy
                  </Link>
                  . We never share your details.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Map + directions */}
        <section className="bg-white border-t border-slate-100 py-14 lg:py-20" aria-labelledby="map-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00499E] mb-2 block">Find us</span>
                <h2 id="map-heading" className="text-3xl font-bold text-[#0b1b4d]">
                  Our office in {BUSINESS.addressLocality}
                </h2>
                <p className="text-slate-500 font-lato mt-2 max-w-2xl">
                  We are based in {BUSINESS.addressLocality}, {BUSINESS.addressCountryName}, and we meet
                  clients by appointment. Message us before you visit so we can confirm a time.
                </p>
              </div>
              <a
                href={MAPS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-md hover:shadow-xl transition-all"
              >
                <Navigation size={16} /> Get directions
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[420px]">
              <ConsentGate
                category="functional"
                provider="Google Maps"
                label="Our office map"
                privacyUrl="https://policies.google.com/privacy"
                className="min-h-[420px]"
              >
                <iframe
                  src={MAPS.embedUrl}
                  title={`Map showing SAFE AI-AFRICA in ${BUSINESS.addressLocality}, ${BUSINESS.addressCountryName}`}
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  style={{ border: 0, display: 'block' }}
                />
              </ConsentGate>
            </div>
          </div>
        </section>

        {/* Contact FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20" aria-labelledby="contact-faq-heading">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00499E] mb-2 block">Before you write</span>
            <h2 id="contact-faq-heading" className="text-3xl font-bold text-[#0b1b4d]">Common questions</h2>
          </div>

          <div className="space-y-3">
            {CONTACT_FAQS.map(item => (
              <details key={item.question} className="group bg-white border border-slate-100 rounded-2xl shadow-sm">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5">
                  <h3 className="font-bold text-[#0b1b4d]">{item.question}</h3>
                  <ChevronDown size={18} className="text-[#00499E] flex-shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 -mt-1 text-slate-600 font-lato leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>

          <p className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-1.5 text-[#00499E] font-semibold hover:gap-2.5 transition-all">
              Read all frequently asked questions <ArrowRight size={15} />
            </Link>
          </p>
        </section>

        <RelatedLinks route="/contact-us" />
      </main>
      <Footer />
    </>
  )
}
