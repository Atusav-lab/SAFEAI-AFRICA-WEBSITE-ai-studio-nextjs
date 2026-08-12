import React from 'react'
import Link from 'next/link'
import { ArrowRight, Award, Quote, Star } from 'lucide-react'
import { RECOGNITION, TESTIMONIALS } from '@/lib/testimonials'

interface Props {
  heading?: string
  subheading?: string
  className?: string
}

/**
 * Social proof: named customer testimonials plus verifiable third-party
 * recognition. Content comes from src/lib/testimonials.ts.
 */
export default function Testimonials({
  heading = 'What our clients and partners say',
  subheading = 'Testimonials from organisations we have delivered for, alongside independent recognition of our work.',
  className = '',
}: Props) {
  return (
    <section className={`py-16 lg:py-20 ${className}`} aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0061B2] block mb-2">
            Social Proof
          </span>
          <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-[#0b1b4d]">
            {heading}
          </h2>
          <p className="text-slate-500 font-lato mt-3 leading-relaxed">{subheading}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Customer testimonials */}
          <div className="space-y-6">
            {TESTIMONIALS.map(t => (
              <figure
                key={t.author}
                className="bg-gradient-to-br from-[#0061B2] to-[#082da3] rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl" />
                <Quote size={36} className="text-[#00E5FF]/60 mb-4" aria-hidden="true" />
                <blockquote className="text-blue-50 leading-relaxed text-lg italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 flex-wrap">
                  <span
                    className="w-12 h-12 bg-[#00E5FF]/30 rounded-full flex items-center justify-center font-bold text-lg"
                    aria-hidden="true"
                  >
                    {t.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold text-white">{t.author}</span>
                    <span className="block text-blue-200 text-sm">
                      {t.role ? `${t.role}, ` : ''}
                      {t.organization}
                    </span>
                  </span>
                  {t.rating && (
                    <span
                      className="ml-auto flex gap-1"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" aria-hidden="true" />
                      ))}
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}

            <p className="text-sm text-slate-500 font-lato">
              Worked with us?{' '}
              <Link href="/contact-us" className="text-[#00499E] font-semibold hover:underline">
                Send us your review
              </Link>{' '}
              . We only publish testimonials from named clients we have actually worked with.
            </p>
          </div>

          {/* Independent recognition */}
          <div className="space-y-5">
            {RECOGNITION.map(item => (
              <article
                key={item.title}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Award size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0b1b4d] leading-snug">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-lato leading-relaxed mt-2">{item.body}</p>
                    <p className="text-xs text-slate-400 mt-3">
                      {item.issuer} · {item.year}
                    </p>
                    {item.href && (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#00499E] mt-3 hover:gap-2 transition-all"
                      >
                        Read more <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
