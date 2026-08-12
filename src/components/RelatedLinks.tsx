import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { relatedPages } from '@/lib/internal-links'

interface Props {
  /** Current route — used to look up its related pages. */
  route: string
  title?: string
  subtitle?: string
  className?: string
}

/**
 * Contextual internal-link block rendered at the foot of every page. Gives
 * visitors a next step and gives crawlers a descriptive, keyword-rich link graph.
 */
export default function RelatedLinks({
  route,
  title = 'Keep exploring',
  subtitle = 'Related pages you may find useful.',
  className = '',
}: Props) {
  const pages = relatedPages(route)
  if (!pages.length) return null

  return (
    <section className={`bg-white border-t border-slate-100 py-14 ${className}`} aria-labelledby="related-links-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 id="related-links-heading" className="text-2xl font-bold text-[#0b1b4d]">
            {title}
          </h2>
          <p className="text-slate-500 text-sm mt-1 font-lato">{subtitle}</p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map(page => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="group flex flex-col h-full p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#00499E]/20 hover:shadow-md transition-all"
              >
                <span className="font-bold text-[#0b1b4d] group-hover:text-[#00499E] transition-colors">
                  {page.title}
                </span>
                <span className="text-sm text-slate-500 font-lato leading-relaxed mt-1.5 flex-grow">
                  {page.description}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#00499E] mt-4">
                  Visit page
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
