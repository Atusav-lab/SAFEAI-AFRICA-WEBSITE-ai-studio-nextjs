import React from 'react'
import { Clock } from 'lucide-react'
import { BUSINESS } from '@/lib/site'

interface Props {
  variant?: 'light' | 'dark' | 'plain'
  className?: string
}

/**
 * Publicly stated response-time expectation. Shown next to every inquiry entry
 * point so visitors know what happens after they hit send.
 */
export default function ResponseTimePromise({ variant = 'light', className = '' }: Props) {
  const styles =
    variant === 'dark'
      ? 'bg-white/10 text-blue-50 border-white/20'
      : variant === 'plain'
        ? 'bg-transparent text-slate-500 border-transparent px-0'
        : 'bg-emerald-50 text-emerald-700 border-emerald-100'

  return (
    <p
      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold border rounded-full px-3.5 py-1.5 ${styles} ${className}`}
    >
      <Clock size={14} className="flex-shrink-0" />
      <span>{BUSINESS.responseTimePromise}</span>
    </p>
  )
}
