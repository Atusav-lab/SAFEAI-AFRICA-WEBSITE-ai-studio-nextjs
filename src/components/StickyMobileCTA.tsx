'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/site'

/**
 * Fixed bottom action bar for mobile visitors, so the primary conversion path is
 * always one tap away no matter how far down the page they are.
 * Hidden on md+ where the header CTA and page CTAs are visible instead.
 */
export default function StickyMobileCTA() {
  const pathname = usePathname()

  // The thank-you page is the end of the funnel; a "get in touch" bar there is noise.
  if (pathname === '/thank-you') return null

  const onContactPage = pathname === '/contact-us'

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[95] md:hidden border-t border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 shadow-[0_-4px_20px_rgba(11,27,77,0.10)]"
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="flex items-stretch gap-2 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex flex-col items-center justify-center px-3 rounded-xl border border-slate-200 text-[#00499E] hover:bg-blue-50 transition-colors"
          aria-label={`Call SAFE AI-AFRICA on ${BUSINESS.phoneDisplay}`}
        >
          <Phone size={18} />
          <span className="text-[10px] font-semibold mt-0.5">Call</span>
        </a>

        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-3 rounded-xl border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366]/10 transition-colors"
          aria-label="Chat with SAFE AI-AFRICA on WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
        </a>

        <Link
          href={onContactPage ? '/solution' : '/contact-us'}
          className="flex-1 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white font-bold text-sm px-4 py-2.5 shadow-md active:scale-[0.99] transition-transform"
        >
          <span className="inline-flex items-center gap-1.5">
            {onContactPage ? 'Explore Products' : 'Book a Free Demo'}
            <ArrowRight size={15} />
          </span>
          <span className="text-[10px] font-medium text-blue-100">
            Reply within {BUSINESS.responseTimeHours}h
          </span>
        </Link>
      </div>
    </div>
  )
}
