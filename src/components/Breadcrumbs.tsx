import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { breadcrumbSchema, type Crumb } from '@/lib/schema'
import JsonLd from './JsonLd'

interface BreadcrumbsProps {
  /** Trail after "Home", in order. The last item renders as plain text. */
  items: Crumb[]
  /** Use on dark banners. */
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * Visible breadcrumb trail plus matching BreadcrumbList JSON-LD, so Google can
 * render the site hierarchy in search results instead of a bare URL.
 */
export default function Breadcrumbs({ items, variant = 'light', className = '' }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ name: 'Home', href: '/' }, ...items]

  const base = variant === 'dark' ? 'text-blue-100/80' : 'text-slate-500'
  const linkHover = variant === 'dark' ? 'hover:text-white' : 'hover:text-[#00499E]'
  const current = variant === 'dark' ? 'text-white' : 'text-[#0b1b4d]'

  return (
    <nav aria-label="Breadcrumb" className={`text-xs sm:text-sm ${base} ${className}`}>
      <JsonLd schema={breadcrumbSchema(trail)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((crumb, idx) => {
          const isLast = idx === trail.length - 1
          return (
            <li key={crumb.name} className="flex items-center gap-1.5">
              {idx > 0 && <ChevronRight size={13} className="opacity-50 flex-shrink-0" />}
              {isLast || !crumb.href ? (
                <span className={`font-semibold ${current}`} aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={`inline-flex items-center gap-1 font-medium transition-colors ${linkHover}`}
                >
                  {idx === 0 && <Home size={13} className="flex-shrink-0" />}
                  {crumb.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
