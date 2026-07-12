'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown, ExternalLink, ArrowRight, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const navLinks = [
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'About Us (Overview)', href: '/about-us' },
      { label: 'Our Company', href: '/company' },
      { label: 'Our Leadership Team', href: '/leadership-team' },
      { label: 'Our Gallery', href: '/our-gallery' },
    ],
  },
  {
    label: 'Products & Services',
    href: '/solution',
    children: [
      { label: 'All Products & Services', href: '/solution', highlight: true },
      { label: 'SAFESeq (Genomics)', href: 'https://safeseq.safeaiafrica.com', external: true },
      { label: 'SAFEKemia (Chemistry AI Tutor)', href: 'https://safekemia.safeaiafrica.com', external: true },
      { label: 'SafeZell - Field Sales', href: '/safezell' },
      { label: 'Invoice Master Pro', href: 'https://invoicemasterpro.safeaiafrica.com', external: true },
      { label: 'SAFElytics (No-Code ML)', href: 'https://safelytics.safeaiafrica.com', external: true },
      { label: 'SafeFood Manager – QMS', href: 'https://safefoodmanager.safeaiafrica.com', external: true },
      { label: 'Mental Health Bot', href: '/solution#mental-health' },
      { label: 'Plant Disease Detection', href: '/solution#plant-disease' },
      { label: 'AMR Lens Africa', href: '/amr-lens' },
      { label: 'SAFEUZAZI AI – Reproductive Health', href: 'https://safeuzazi.safeaiafrica.com', external: true },
      { label: 'AI Training & Advocacy', href: '/solution#ai-training' },
      { label: 'Bespoke AI Solutions', href: '/solution#bespoke' },
    ],
  },
  { label: 'Training & Upskilling', href: '/coming-soon' },
  { label: 'Blog', href: '/blog' },
  { label: 'Job Portal', href: '/coming-soon' },
  { label: 'Contact Us', href: '/contact-us' },
]

interface HeaderProps {
  forceScrolled?: boolean
}

export default function Header({ forceScrolled = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(forceScrolled)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({
    'About Us': false,
    'Products & Services': false,
  })

  useEffect(() => {
    if (forceScrolled) return
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [forceScrolled])

  // Close active menus on outside click (for tablet touch compatibility)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (activeMenu) {
        const target = e.target as HTMLElement
        if (!target.closest('.nav-item-container')) {
          setActiveMenu(null)
        }
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [activeMenu])

  const toggleMobileSubmenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedMobileMenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

  const handleParentClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    if (link.children) {
      e.preventDefault()
      e.stopPropagation()
      setActiveMenu(activeMenu === link.label ? null : link.label)
    }
  }

  // Header background classes: if scrolled or mobile drawer is open, keep standard white header
  const isHeaderActive = scrolled || mobileOpen
  const headerBg = isHeaderActive 
    ? 'bg-white shadow-md border-b border-gray-100' 
    : 'bg-gradient-to-r from-[#00499E] to-[#0075ba]'
  
  const textColor = isHeaderActive 
    ? 'text-gray-700 hover:text-[#00499E] hover:bg-blue-50' 
    : 'text-white/90 hover:text-white hover:bg-white/10'
  
  const logoText = isHeaderActive ? 'text-[#00499E]' : 'text-white'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
                <Image
                  src="/SAFEAI_ASSETS/safeaiafrica-logo.png"
                  alt="SAFE AI-AFRICA"
                  fill
                  sizes="40px"
                  priority
                  className="object-contain"
                />
              </div>
              <span className={`font-bold text-base sm:text-lg tracking-wide transition-colors ${logoText}`}>
                SAFE AI-AFRICA
              </span>
            </a>

            {/* Desktop & Tablet-Landscape Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <div
                  key={link.label}
                  className="relative nav-item-container"
                  onMouseEnter={() => setActiveMenu(link.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleParentClick(link, e)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${textColor}`}
                  >
                    <span>{link.label}</span>
                    {link.children && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${activeMenu === link.label ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {link.children && activeMenu === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-fade-in">
                      {link.children.map(child => (
                        <a
                          key={child.label}
                          href={child.href}
                          target={child.external ? '_blank' : undefined}
                          rel={child.external ? 'noopener noreferrer' : undefined}
                          className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                            child.highlight 
                              ? 'text-[#00499E] font-bold bg-blue-50/70 hover:bg-blue-100/75' 
                              : 'text-gray-700 hover:text-[#00499E] hover:bg-blue-50/50'
                          }`}
                        >
                          <span className="truncate">{child.label}</span>
                          {child.external && <ExternalLink size={12} className="text-gray-400 flex-shrink-0" />}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile & Tablet-Portrait Menu Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              id="mobile-menu-btn"
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isHeaderActive 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Sliding Drawer for Mobile & Tablet */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-sm z-[100] lg:hidden"
            />

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:max-w-md bg-white z-[101] lg:hidden shadow-2xl flex flex-col h-full"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
                <a href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-[#00499E]/15">
                    <Image
                      src="/SAFEAI_ASSETS/safeaiafrica-logo.png"
                      alt="SAFE AI-AFRICA"
                      fill
                      sizes="36px"
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-base tracking-wide text-[#00499E]">SAFE AI-AFRICA</span>
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Content (Scrollable) */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Navigation Menu</p>
                <nav className="space-y-2">
                  {navLinks.map(link => {
                    const hasChildren = !!link.children
                    const isExpanded = !!expandedMobileMenus[link.label]

                    return (
                      <div key={link.label} className="border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                        {hasChildren ? (
                          <>
                            <button
                              onClick={(e) => toggleMobileSubmenu(link.label, e)}
                              className="w-full flex items-center justify-between py-3 px-3 text-sm font-semibold text-gray-800 hover:text-[#00499E] hover:bg-blue-50/70 rounded-xl transition-all"
                            >
                              <span>{link.label}</span>
                              <ChevronDown
                                size={16}
                                className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#00499E]' : ''}`}
                              />
                            </button>

                            {/* Submenu Accordion with Height Transition */}
                            <motion.div
                              initial={false}
                              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pr-2 py-1 mt-1 space-y-1 bg-gray-50/50 rounded-xl border border-gray-100/50">
                                {link.children?.map(child => (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    target={child.external ? '_blank' : undefined}
                                    rel={child.external ? 'noopener noreferrer' : undefined}
                                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00499E] hover:bg-blue-50/50 transition-all ${
                                      child.highlight ? 'text-[#00499E] font-bold bg-blue-50/30' : ''
                                    }`}
                                  >
                                    <span className="truncate">{child.label}</span>
                                    {child.external ? (
                                      <ExternalLink size={12} className="text-gray-400 flex-shrink-0" />
                                    ) : (
                                      <ArrowRight size={10} className="text-gray-300" />
                                    )}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          </>
                        ) : (
                          <a
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 px-3 text-sm font-semibold text-gray-800 hover:text-[#00499E] hover:bg-blue-50/70 rounded-xl transition-all"
                          >
                            {link.label}
                          </a>
                        )}
                      </div>
                    )
                  })}
                </nav>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0 space-y-4">
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <Mail size={14} className="text-[#00499E]/70" />
                    <span className="font-medium">info@safeaiafrica.com</span>
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <Phone size={14} className="text-[#00499E]/70" />
                    <span className="font-medium">+256 775 323200</span>
                  </p>
                </div>
                <a
                  href="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white text-center text-xs font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Book A Demo <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
