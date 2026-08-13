import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown, MessageCircle, Phone } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import RelatedLinks from '@/components/RelatedLinks'
import ResponseTimePromise from '@/components/ResponseTimePromise'
import { ALL_FAQS, FAQ_GROUPS } from '@/lib/faqs'
import { faqSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/site'

export const metadata: Metadata = buildMetadata({
  title: 'FAQ: Pricing, Timelines and Data Ownership',
  description:
    'Answers to the questions clients ask most: how projects start, what they cost, how long they take, who owns the data, and what support looks like.',
  path: '/faq',
  imageAlt: 'Frequently asked questions about SAFE AI-AFRICA',
  keywords: [
    'AI project cost Africa',
    'AI consulting FAQ',
    'AI data ownership',
    'AI development timeline',
  ],
})

export default function FaqPage() {
  return (
    <>
      <Header forceScrolled={true} />
      {/* FAQPage markup mirrors the questions and answers visible below. */}
      <JsonLd schema={faqSchema(ALL_FAQS)} />

      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        {/* Hero: CTA and response-time promise sit above the fold */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-14 lg:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs variant="dark" className="mb-6" items={[{ name: 'FAQ' }]} />
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl font-lato mb-6">
              The questions clients ask us before starting a project: scope, cost, timelines, who owns
              the data, where it runs and what happens after launch.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="bg-white text-[#00499E] font-bold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-lg hover:bg-[#17c7f8] hover:text-white transition-all duration-300"
              >
                Ask us directly <ArrowRight size={18} />
              </Link>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 inline-flex items-center gap-2 hover:bg-white/20 transition-all"
              >
                <MessageCircle size={18} /> WhatsApp us
              </a>
              <ResponseTimePromise variant="dark" />
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 space-y-12">
          {FAQ_GROUPS.map(group => (
            <div key={group.category}>
              <h2 className="text-2xl font-bold text-[#0b1b4d] mb-5">{group.category}</h2>
              <div className="space-y-3">
                {group.items.map(item => (
                  <details
                    key={item.question}
                    className="group bg-white border border-slate-100 rounded-2xl shadow-sm open:shadow-md transition-shadow"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold text-[#0b1b4d]">{item.question}</h3>
                      <ChevronDown
                        size={20}
                        className="text-[#00499E] flex-shrink-0 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="px-5 sm:px-6 pb-6 -mt-1">
                      <p className="text-slate-600 font-lato leading-relaxed">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Still stuck */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-[#0b1b4d] mb-2">Still have a question?</h2>
            <p className="text-slate-500 font-lato mb-6 max-w-xl mx-auto">
              Tell us what you are trying to build or fix and we will give you a straight answer.{' '}
              {BUSINESS.responseTimePromise}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact-us"
                className="btn-gradient text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-md hover:shadow-xl transition-all"
              >
                Contact us <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="bg-white border border-slate-200 text-[#00499E] font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-slate-50 transition-all"
              >
                <Phone size={16} /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <RelatedLinks route="/faq" />
      </main>
      <Footer />
    </>
  )
}
