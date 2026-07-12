'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, MapPin, Phone, Mail
} from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/safeaiafrica', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/safe.aiafrica/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/safeaiafrica', label: 'Twitter/X' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/safe-ai-africa', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.tiktok.com/@safe.ai.africa', label: 'TikTok' },
  ]

  const resources = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Solutions', href: '/solution' },
    { label: 'Our Blogs', href: '/blog' },
    { label: 'Job Portal', href: '/coming-soon' },
    { label: 'Contact Us', href: '/contact-us' },
  ]

  const solutions = [
    { label: 'SAFESeq (Genomics)', href: 'https://safeseq.safeaiafrica.com', external: true },
    { label: 'SAFEKemia (Chemistry AI)', href: 'https://safekemia.safeaiafrica.com', external: true },
    { label: 'SafeZell - Field Sales', href: '/safezell' },
    { label: 'Invoice Master Pro', href: 'https://invoicemasterpro.safeaiafrica.com', external: true },
    { label: 'SAFElytics (No-Code ML)', href: 'https://safelytics.safeaiafrica.com', external: true },
    { label: 'SafeFood Manager', href: 'https://safefoodmanager.safeaiafrica.com', external: true },
    { label: 'Mental Health Bot', href: '/solution#mental-health' },
    { label: 'AMR Lens Africa', href: '/amr-lens' },
    { label: 'SAFEUZAZI AI', href: 'https://safeuzazi.safeaiafrica.com', external: true },
    { label: 'AI Training & Advocacy', href: '/solution#ai-training' },
    { label: 'Bespoke AI Solutions', href: '/solution#bespoke' },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#0b1b4d] to-[#082da3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#00E5FF]/40">
                <Image src="/SAFEAI_ASSETS/safeaiafrica-logo.png" alt="SAFE AI-AFRICA" fill sizes="48px" className="object-contain" />
              </div>
              <span className="font-bold text-lg">SAFE AI-AFRICA</span>
            </a>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              SAFE AI-AFRICA is dedicated to <strong className="text-white">delivering innovative digital solutions tailored for the African landscape through responsible artificial intelligence.</strong>
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0061B2] transition-all duration-300 hover:scale-110">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-3">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-blue-200 text-sm hover:text-[#17c7f8] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map(({ label, href, external }) => (
                <li key={label}>
                  <a href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-blue-200 text-sm hover:text-[#17c7f8] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Stay Updated</h4>
            <p className="text-blue-200 text-sm mb-4">Our latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="flex flex-col gap-2 mb-6" onSubmit={e => { e.preventDefault(); setEmail('') }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
              <button type="submit"
                className="px-4 py-2.5 bg-gradient-to-r from-[#0061B2] to-[#00E5FF] text-white font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin size={16} className="text-[#17c7f8] mt-0.5 flex-shrink-0" />
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2 text-blue-200 text-sm">
                <Phone size={16} className="text-[#17c7f8] flex-shrink-0" />
                <span>
                  <a href="https://wa.me/256775323200" target="_blank" rel="noopener noreferrer" className="hover:text-[#17c7f8] transition-colors">
                    0775323200
                  </a> / 0756985966
                </span>
              </li>
              <li className="flex items-center gap-2 text-blue-200 text-sm">
                <Mail size={16} className="text-[#17c7f8] flex-shrink-0" />
                <a href="mailto:safeaiafrica@gmail.com" className="hover:text-[#17c7f8] transition-colors">
                  safeaiafrica@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">© {new Date().getFullYear()} SAFE AI-AFRICA. All Rights Reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" className="text-blue-300 text-sm hover:text-[#17c7f8] transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
