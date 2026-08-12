import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Mail, MessageCircle, Search } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RelatedLinks from '@/components/RelatedLinks'
import { PAGES } from '@/lib/internal-links'
import { BUSINESS } from '@/lib/site'

// A 404 must not be indexable, but it should still pass visitors (and crawlers)
// onward into the real site rather than dead-ending them.
export const metadata: Metadata = {
  title: { absolute: 'Page Not Found (404) | SAFE AI-AFRICA' },
  description:
    'The page you were looking for could not be found. Browse our AI products, case studies and support pages, or contact the SAFE AI-AFRICA team.',
  robots: { index: false, follow: true },
}

const POPULAR = ['/solution', '/case-studies', '/about-us', '/blog', '/faq', '/contact-us']

export default function NotFound() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-gradient-to-br from-[#E0F2FE] via-[#f0f9ff] to-white">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[7rem] sm:text-[9rem] font-extrabold leading-none gradient-text mb-2">404</p>

            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d] mb-4">
              We could not find that page
            </h1>
            <p className="text-gray-600 font-lato leading-relaxed mb-8">
              The page may have moved, been renamed or been removed. Everything else is still here. Pick
              up from one of the links below, search the site, or just ask us and we will point you to the
              right place.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="btn-gradient text-white font-semibold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Home size={18} /> Go to homepage
              </Link>
              <Link
                href="/search"
                className="bg-white text-[#0061B2] font-semibold px-7 py-3.5 rounded-xl border-2 border-[#0061B2] inline-flex items-center gap-2 hover:bg-[#0061B2] hover:text-white transition-all duration-300"
              >
                <Search size={18} /> Search the site
              </Link>
            </div>
          </div>

          {/* Popular destinations */}
          <div className="mt-14">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#0061B2] text-center mb-6">
              Popular pages
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POPULAR.map(href => {
                const page = PAGES[href]
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex flex-col h-full bg-white/90 backdrop-blur border border-blue-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
                    >
                      <span className="font-bold text-[#0b1b4d] group-hover:text-[#0061B2] transition-colors">
                        {page.title}
                      </span>
                      <span className="text-sm text-gray-500 font-lato mt-1.5 flex-grow">{page.description}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0061B2] mt-4">
                        Open <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Direct help */}
          <div className="mt-12 bg-white rounded-3xl border border-blue-50 shadow-sm p-8 text-center">
            <h2 className="text-xl font-bold text-[#0b1b4d] mb-2">Looking for something specific?</h2>
            <p className="text-gray-600 font-lato mb-6">
              Tell us what you were trying to find. {BUSINESS.responseTimePromise}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact-us"
                className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Mail size={16} /> Contact us
              </Link>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 text-[#00499E] font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-slate-50 transition-all"
              >
                <MessageCircle size={16} /> WhatsApp us
              </a>
            </div>
          </div>
        </section>

        <RelatedLinks
          route="/404"
          title="Or start here"
          subtitle="The parts of the site most visitors are looking for."
        />
      </main>
      <Footer />
    </>
  )
}
