import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ExternalLink, Target } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import RelatedLinks from '@/components/RelatedLinks'
import ResponseTimePromise from '@/components/ResponseTimePromise'
import Testimonials from '@/components/Testimonials'
import { CASE_STUDIES } from '@/lib/case-studies'
import { buildMetadata } from '@/lib/seo'
import { SITE_NAME, absoluteUrl } from '@/lib/site'

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies: AI Projects Delivered in Africa',
  description:
    'How we built SAFESeq for genomics, AMR Lens for antimicrobial stewardship and SafeZell for field sales, plus platforms for food safety and education.',
  path: '/case-studies',
  image: '/SAFEAI_ASSETS/safeseq1.png',
  imageAlt: 'SAFE AI-AFRICA case studies across genomics, health, agriculture and enterprise',
  keywords: [
    'AI case studies Africa',
    'genomics platform case study',
    'antimicrobial resistance project',
    'field sales software case study',
    'AI project examples Uganda',
  ],
})

/** ItemList markup so the collection of case studies is understood as a set. */
function caseStudyListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_NAME} case studies`,
    itemListElement: CASE_STUDIES.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${study.product}: ${study.title}`,
      description: study.summary,
      url: `${absoluteUrl('/case-studies')}#${study.slug}`,
    })),
  }
}

export default function CaseStudiesPage() {
  return (
    <>
      <Header forceScrolled={true} />
      <JsonLd schema={caseStudyListSchema()} />

      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        {/* Hero with above-the-fold CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-14 lg:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs variant="dark" className="mb-6" items={[{ name: 'Case Studies' }]} />
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl text-white">
              Case Studies: AI Built for Real African Workflows
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl font-lato mb-6">
              Six build stories in detail: the problem we found, the decisions we made along the way,
              and what each finished system does today. They span genomics, clinical microbiology,
              distribution, food safety, education and maternal health.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="bg-white text-[#00499E] font-bold px-6 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-lg hover:bg-[#17c7f8] hover:text-white transition-all duration-300"
              >
                Discuss your project <ArrowRight size={18} />
              </Link>
              <Link
                href="/solution"
                className="bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 inline-flex items-center gap-2 hover:bg-white/20 transition-all"
              >
                Browse all products
              </Link>
              <ResponseTimePromise variant="dark" />
            </div>
          </div>
        </section>

        {/* Jump list of internal anchors */}
        <nav aria-label="Case studies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ul className="flex flex-wrap gap-2">
            {CASE_STUDIES.map(study => (
              <li key={study.slug}>
                <a
                  href={`#${study.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-600 hover:text-[#00499E] hover:border-[#00499E]/30 transition-colors"
                >
                  {study.product}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Case studies */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <article
              key={study.slug}
              id={study.slug}
              className="scroll-mt-28 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Visual */}
                <div className={`relative min-h-[260px] lg:min-h-full bg-slate-100 ${idx % 2 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Body */}
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-blue-50 text-[#00499E] text-[11px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full">
                      {study.product}
                    </span>
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
                      {study.sector}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0b1b4d] leading-snug mb-3">
                    {study.title}
                  </h2>
                  <p className="text-slate-500 font-lato leading-relaxed mb-8">{study.summary}</p>

                  <div className="space-y-7">
                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0061B2] mb-2 flex items-center gap-2">
                        <Target size={14} /> The challenge
                      </h3>
                      <p className="text-sm text-slate-600 font-lato leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0061B2] mb-2">
                        What we built
                      </h3>
                      <ul className="space-y-2">
                        {study.approach.map(step => (
                          <li key={step} className="flex items-start gap-2.5 text-sm text-slate-600 font-lato leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00499E] flex-shrink-0" aria-hidden="true" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0061B2] mb-2">
                        Where it stands today
                      </h3>
                      <ul className="space-y-2">
                        {study.outcome.map(result => (
                          <li key={result} className="flex items-start gap-2.5 text-sm text-slate-700 font-lato leading-relaxed">
                            <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.capabilities.map(cap => (
                        <span
                          key={cap}
                          className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 mt-8 pt-6 flex flex-wrap gap-3">
                    <a
                      href={study.link}
                      target={study.external ? '_blank' : undefined}
                      rel={study.external ? 'noopener noreferrer' : undefined}
                      className="btn-gradient text-white font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2 text-sm shadow-sm hover:shadow-lg transition-all"
                    >
                      {study.external ? (
                        <>
                          Visit {study.product} <ExternalLink size={14} />
                        </>
                      ) : (
                        <>
                          See {study.product} <ArrowRight size={14} />
                        </>
                      )}
                    </a>
                    <Link
                      href="/contact-us"
                      className="border border-slate-200 text-[#00499E] font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2 text-sm hover:bg-slate-50 transition-all"
                    >
                      Build something similar
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-white border-t border-slate-100">
          <Testimonials />
        </div>

        {/* Closing CTA */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00499E] to-[#082da3]" />
          <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Have a problem that looks like one of these?</h2>
            <p className="text-blue-100 font-lato mb-8">
              Tell us what you are trying to solve. We will tell you honestly whether AI is the right
              tool for the job, and what it would take to build.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <Link
                href="/contact-us"
                className="bg-white text-[#00499E] font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:bg-[#17c7f8] hover:text-white transition-all shadow-lg"
              >
                Start a conversation <ArrowRight size={18} />
              </Link>
              <Link
                href="/faq"
                className="bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-all"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks route="/case-studies" />
      </main>
      <Footer />
    </>
  )
}
