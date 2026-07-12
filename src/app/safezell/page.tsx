'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/* ─── Role data for the interactive permissions card ─── */
const roleData = [
  {
    title: 'Field Representative Permissions', badge: 'Field Role',
    rows: [
      ['GPS Store Check-In', true], ['Submit Visit Report', true],
      ['Upload Shelf Photos', true], ['Record Daily Sales', true],
      ['Log Supply Orders', true], ['View Stock Levels', true],
      ['Review Team Reports', false], ['Manage Users', false],
      ['Record Deliveries', true], ['Create New Stores (field)', true],
    ]
  },
  {
    title: 'Supervisor Permissions', badge: 'Management',
    rows: [
      ['GPS Check-In', false], ['Submit Visit Report', false],
      ['View All Team Visits', true], ['Record Deliveries', true],
      ['Assign Route Schedules', true], ['View All Sales', true],
      ['Review & Comment Reports', true], ['Manage Users', false],
      ['View Audit Logs', true], ['Manage Stores (admin panel)', false],
    ]
  },
  {
    title: 'Admin Permissions', badge: 'Full Access',
    rows: [
      ['GPS Store Check-In', true], ['Submit Visit Report', true],
      ['View All Team Data', true], ['Record Deliveries', true],
      ['Assign Route Schedules', true], ['Manage Users', true],
      ['Review & Comment Reports', true], ['Manage Stores & Products', true],
      ['View Audit Logs', true], ['Delete Records', true],
    ]
  }
]

/* ─── Scroll reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'} ${className}`}
    >
      {children}
    </div>
  )
}

/* ─── Marquee items ─── */
const marqueeItems = [
  'GPS Real-Time Check-In', 'Local Currency Sales Tracking', 'Multi-Country Operations',
  'Warehouse Variance Reconciliation', 'Supervisor Route Control', 'Offline-Safe Architecture',
  'PDF & CSV Export', '5-Role Access Control', 'Compliance Audit Trails',
]

export default function SafeZellPage() {
  const [activeRole, setActiveRole] = useState(0)
  const [formState, setFormState] = useState({
    fname: '', lname: '', femail: '', fphone: '',
    fcompany: '', fteam: '', fcountry: '', fmessage: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { fname, lname, femail, fphone, fcompany, fteam, fcountry, fmessage } = formState
    if (!fname || !femail || !fcompany) return

    const msg = encodeURIComponent(
      `*SafeZell Demo Request*\n\n` +
      `*Name:* ${fname} ${lname}\n` +
      `*Email:* ${femail}\n` +
      (fphone ? `*Phone:* ${fphone}\n` : '') +
      `*Company:* ${fcompany}\n` +
      (fteam ? `*Team Size:* ${fteam}\n` : '') +
      (fcountry ? `*Region:* ${fcountry}\n` : '') +
      (fmessage ? `\n*Message:*\n${fmessage}` : '')
    )
    window.open(`https://wa.me/256775323200?text=${msg}`, '_blank')

    const subject = encodeURIComponent('SafeZell Demo Request')
    const body = encodeURIComponent(
      `Demo Request from ${fname} ${lname}\n\nEmail: ${femail}\nCompany: ${fcompany}\nTeam Size: ${fteam}\nRegion: ${fcountry}\n\n${fmessage}`
    )
    setTimeout(() => {
      window.location.href = `mailto:safeaiafrica@gmail.com?subject=${subject}&body=${body}`
    }, 800)

    setFormSubmitted(true)
  }

  const currentRole = roleData[activeRole]

  return (
    <>
      {/* ══ Global styles scoped via <style> ══ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,600&display=swap');
        .sz-body { font-family: 'DM Sans', sans-serif; }
        .sz-mono { font-family: 'DM Mono', monospace; }
        .sz-disp { font-family: 'Fraunces', serif; }
        @keyframes sz-blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes sz-fade-up { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sz-fade-right { from{opacity:0;transform:translateX(36px)} to{opacity:1;transform:translateX(0)} }
        @keyframes sz-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes sz-marquee { to{transform:translateX(-50%)} }
        .sz-badge-dot { animation: sz-blink 2s ease-in-out infinite; }
        .sz-hero-left { animation: sz-fade-up .65s .15s both; }
        .sz-hero-badge { animation: sz-fade-up .5s .05s both; }
        .sz-hero-sub { animation: sz-fade-up .65s .28s both; }
        .sz-hero-actions { animation: sz-fade-up .65s .4s both; }
        .sz-hero-stats { animation: sz-fade-up .65s .55s both; }
        .sz-hero-right { animation: sz-fade-right .85s .35s both; }
        .sz-float { animation: sz-bob 3.2s ease-in-out infinite; }
        .sz-marquee-track { display:flex; gap:52px; animation:sz-marquee 24s linear infinite; width:max-content; }
        .sz-feat-card:hover .sz-feat-icon { background:#42a5f5 !important; transform:scale(1.07); }
        .sz-feat-card:hover .sz-feat-icon svg { filter:brightness(0) invert(1); }
        .sz-perm-yes::after { content:''; width:6px; height:6px; border-radius:50%; background:#90caf9; display:block; }
        .sz-perm-no::after { content:''; width:7px; height:1.5px; background:rgba(255,255,255,.18); border-radius:1px; display:block; }
        .sz-dot-grid { background-image:radial-gradient(circle, rgba(66,165,245,.18) 1px, transparent 1px); background-size:32px 32px; mask-image:radial-gradient(ellipse 65% 80% at 85% 45%, black 5%, transparent 75%); }
        .sz-cta-glow::before { content:''; position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:500px; height:280px; background:radial-gradient(ellipse, rgba(66,165,245,.22), transparent 70%); pointer-events:none; }
        .sz-steps-line::before { content:''; position:absolute; top:24px; left:24px; right:24px; height:0.5px; background:linear-gradient(90deg, transparent, rgba(255,255,255,.1), rgba(255,255,255,.1), transparent); }
        .sz-mock-kpi-1::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:#42a5f5; border-radius:9px 9px 0 0; }
        .sz-mock-kpi-2::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:#d97b1a; border-radius:9px 9px 0 0; }
        .sz-mock-kpi-3::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:#6366f1; border-radius:9px 9px 0 0; }
        .sz-chart-bar::after { content:''; position:absolute; inset:0; background:linear-gradient(to top, #42a5f5, rgba(66,165,245,.25)); border-radius:inherit; }
        .sz-chart-bar.dim::after { background:rgba(255,255,255,.06); }
        .sz-select { background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239a9a9a' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; background-size:16px; padding-right:36px; cursor:pointer; appearance:none; }
      `}</style>

      <div className="sz-body bg-[#f7f8f6] text-[#1a1a1a] overflow-x-hidden">
        <Header />

        {/* ══ HERO ══ */}
        <section id="hero" className="min-h-screen pt-[100px] pb-20 px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden">
          <div className="sz-dot-grid absolute inset-0 pointer-events-none" />

          {/* Left */}
          <div className="relative z-10 sz-hero-left">
            <div className="sz-hero-badge inline-flex items-center gap-2 bg-[#e3f2fd] text-[#1565c0] sz-mono text-[.72rem] font-medium px-[14px] py-[5px] rounded-full tracking-[.05em] uppercase mb-6">
              <span className="w-[6px] h-[6px] rounded-full bg-[#42a5f5] sz-badge-dot flex-shrink-0" />
              Field Sales Management System
            </div>

            <h1 className="sz-disp text-[clamp(2.6rem,4.8vw,4.4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0f1a10] sz-hero-left">
              Field Sales.<br />
              <em className="not-italic text-[#1565c0]">Fully Visible.</em><br />
              Always Accountable.
            </h1>

            <p className="sz-hero-sub mt-5 text-base leading-[1.75] text-[#5a5a5a] max-w-[460px] font-light">
              SafeZell connects field representatives, supervisors, and warehouse teams in one closed-loop operations platform — built for FMCG companies running field sales teams anywhere in the world.
            </p>

            <div className="sz-hero-actions mt-9 flex gap-3 flex-wrap">
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-[#42a5f5] text-white px-7 py-3 rounded-full text-[.9375rem] font-medium shadow-[0_4px_16px_rgba(66,165,245,.3)] hover:bg-[#1e88e5] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(66,165,245,.38)] transition-all duration-150">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Request a Demo
              </a>
              <a href="#how"
                className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-[.9375rem] border border-[rgba(0,0,0,.14)] shadow-sm hover:border-[#42a5f5] hover:bg-[#e3f2fd] hover:-translate-y-0.5 transition-all duration-150">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M10 8l6 4-6 4V8z" /></svg>
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="sz-hero-stats mt-12 flex border border-[rgba(0,0,0,.08)] rounded-2xl bg-white shadow-sm overflow-hidden">
              {[['360°', 'Field visibility'], ['5', 'User roles'], ['6', 'Core modules']].map(([num, label], i) => (
                <div key={i} className={`flex-1 px-5 py-[18px] ${i < 2 ? 'border-r border-[rgba(0,0,0,.08)]' : ''}`}>
                  <div className="sz-disp text-[1.75rem] font-bold text-[#0f1a10] leading-none">
                    <span className="text-[#1e88e5]">{num}</span>
                  </div>
                  <div className="sz-mono text-[.75rem] text-[#9a9a9a] mt-1 font-normal">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="sz-hero-right relative z-10 hidden md:block">
            <div className="rounded-[18px] overflow-hidden shadow-[0_32px_80px_rgba(15,26,16,.16),0_0_0_0.5px_rgba(0,0,0,.08)] bg-[#0f1a10]">
              {/* Top bar */}
              <div className="bg-[#111d12] px-[18px] py-3 flex items-center gap-2.5 border-b border-[rgba(255,255,255,.06)]">
                <div className="flex gap-[5px]">
                  <i className="w-[9px] h-[9px] rounded-full bg-[#FF5F57] not-italic block" />
                  <i className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E] not-italic block" />
                  <i className="w-[9px] h-[9px] rounded-full bg-[#28C840] not-italic block" />
                </div>
                <div className="flex-1 bg-[rgba(255,255,255,.06)] rounded-[5px] px-3 py-1 sz-mono text-[.68rem] text-[rgba(255,255,255,.35)]">
                  app.safezell.co · Dashboard
                </div>
              </div>
              {/* Body */}
              <div className="bg-[#141f15] p-4 grid grid-cols-[130px_1fr] gap-3 min-h-[390px]">
                {/* Sidebar */}
                <div className="bg-[#1a2b1b] rounded-[9px] p-3 flex flex-col gap-[3px]">
                  <div className="sz-disp text-[.72rem] font-bold text-white py-0.5 pb-2.5 border-b border-[rgba(255,255,255,.08)] mb-1">SafeZell</div>
                  {[['Dashboard', true, '50%'], ['Store Visits', false, '6px'], ['Inventory', false, '2px'], ['Variance', false, '0 6px 6px 0'], ['Reports', false, '6px 0 0 6px'], ['Admin', false, '50% 0 50% 50%']].map(([label, active, br]) => (
                    <div key={label as string}
                      className={`px-[9px] py-1.5 rounded-[6px] text-[.64rem] flex items-center gap-[7px] cursor-pointer transition-all duration-150 ${active ? 'bg-[#42a5f5] text-white' : 'text-[rgba(255,255,255,.4)] hover:bg-[rgba(255,255,255,.06)] hover:text-[rgba(255,255,255,.65)]'}`}>
                      <span className="w-3 h-3 bg-current opacity-65 flex-shrink-0" style={{ borderRadius: br as string }} />
                      {label}
                    </div>
                  ))}
                </div>
                {/* Main */}
                <div className="flex flex-col gap-2.5">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { cls: 'sz-mock-kpi-1', label: 'Sales (local)', val: '14.8M', sub: '↑ 12% vs last week' },
                      { cls: 'sz-mock-kpi-2', label: 'Store Visits', val: '247', sub: '↑ 8% vs last week' },
                      { cls: 'sz-mock-kpi-3', label: 'Compliance', val: '94%', sub: '3 items flagged' },
                    ].map((k) => (
                      <div key={k.label} className={`${k.cls} bg-[#1a2b1b] rounded-[9px] p-2.5 relative overflow-hidden`}>
                        <div className="text-[.56rem] text-[rgba(255,255,255,.38)] uppercase tracking-[.04em]">{k.label}</div>
                        <div className="sz-disp text-[1.1rem] font-bold text-white mt-0.5">{k.val}</div>
                        <div className="text-[.54rem] text-[rgba(255,255,255,.3)] mt-0.5">{k.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#1a2b1b] rounded-[9px] p-3 flex-1 flex flex-col gap-2">
                    <div className="text-[.58rem] text-[rgba(255,255,255,.38)] uppercase tracking-[.04em]">Sales Trend — This Week</div>
                    <div className="flex items-end gap-[5px] h-[72px]">
                      {[['30%','dim'],['55%',''],['42%','dim'],['70%',''],['60%',''],['38%','dim'],['90%','']].map(([h, dim], i) => (
                        <div key={i} className={`sz-chart-bar${dim ? ' dim' : ''} flex-1 rounded-t-[3px] relative overflow-hidden bg-[rgba(255,255,255,.06)]`} style={{ height: h }} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#1a2b1b] rounded-[9px] p-2.5">
                    <div className="grid grid-cols-[2fr_1fr_1fr] text-[.54rem] text-[rgba(255,255,255,.28)] uppercase tracking-[.04em] pb-[7px] border-b border-[rgba(255,255,255,.06)]">
                      <span>Store</span><span>Status</span><span>Rep</span>
                    </div>
                    {[['Central Branch','Visited','s-blue','A. Kato'],['West Outlet','Visited','s-blue','B. Namuli'],['North Point','Pending','s-amber','C. Obua']].map(([store, status, cls, rep]) => (
                      <div key={store} className="grid grid-cols-[2fr_1fr_1fr] py-1.5 border-b last:border-0 border-[rgba(255,255,255,.04)] text-[.62rem] text-[rgba(255,255,255,.55)] items-center">
                        <span>{store}</span>
                        <span>
                          <span className={`inline-block px-[7px] py-0.5 rounded-full text-[.54rem] font-medium ${cls === 's-blue' ? 'bg-[rgba(66,165,245,.2)] text-[#64b5f6]' : 'bg-[rgba(217,123,26,.2)] text-[#FFB74D]'}`}>{status}</span>
                        </span>
                        <span>{rep}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Float badge */}
            <div className="sz-float absolute -bottom-4 left-4 z-10 bg-white rounded-xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,.10),0_4px_8px_rgba(0,0,0,.05)] flex items-center gap-2.5 border border-[rgba(0,0,0,.08)]">
              <div className="w-8 h-8 rounded-[9px] bg-[#e3f2fd] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[.78rem] text-[#0f1a10]">GPS Check-In Confirmed</div>
                <div className="text-[.68rem] text-[#9a9a9a] mt-0.5">Verified at store location · just now</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ MARQUEE ══ */}
        <div className="bg-[#0f1a10] py-4 overflow-hidden">
          <div className="sz-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="sz-mono text-[.72rem] font-medium text-[rgba(255,255,255,.3)] tracking-[.06em] uppercase whitespace-nowrap flex items-center gap-[9px]">
                <b className="text-[rgba(255,255,255,.1)] font-normal text-base">•</b>{item}
              </div>
            ))}
          </div>
        </div>

        {/* ══ FEATURES ══ */}
        <section id="features" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <RevealDiv>
              <div className="inline-flex items-center gap-[9px] sz-mono text-[.72rem] text-[#1565c0] tracking-[.08em] uppercase mb-4 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#42a5f5] before:rounded-sm">
                Core capabilities
              </div>
              <h2 className="sz-disp text-[clamp(1.9rem,3vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#0f1a10] max-w-[540px]">
                Everything your field team needs, <em className="not-italic text-[#1565c0]">nothing they don't.</em>
              </h2>
            </RevealDiv>

            <RevealDiv className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-[rgba(0,0,0,.08)] border border-[rgba(0,0,0,.08)] rounded-2xl overflow-hidden shadow-sm">
              {[
                {
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></>,
                  title: 'GPS Store Check-In', tag: 'Live geolocation',
                  desc: 'Real browser geolocation captures exact coordinates at check-in. Distance validation confirms the representative is physically at the store before the audit form unlocks.'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
                  title: 'Live Sales Tracking', tag: 'Local currency · Real-time',
                  desc: 'Every sale is recorded against the live product catalogue in your local currency. Cascaded filters let supervisors drill from representative to store to product in seconds.'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                  title: 'Variance Reconciliation', tag: 'Orders · Deliveries · Delta',
                  desc: 'Orders enter the warehouse queue as Pending. Representatives or supervisors record deliveries and the system computes the exact delta — partial, over, or under — with no manual work.'
                },
                {
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><circle cx="12" cy="13" r="3" /></>,
                  title: 'Shelf Photo Uploads', tag: 'Cloud storage',
                  desc: 'Field representatives attach live shelf photographs directly from the browser. Images upload to cloud storage and appear as thumbnails inside the supervisor review panel.'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
                  title: 'Compliance Audits', tag: 'FIFO · OOS · Planogram',
                  desc: 'Planogram checks, expiry verification, FIFO adherence, pricing compliance, and OOS flagging — all captured in a single structured form per visit, reviewable by supervisors.'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                  title: 'PDF & CSV Exports', tag: 'Reports · PDF · CSV',
                  desc: 'Generate formatted activity reports as PDF or export filtered data as CSV in one click. Date range, store, and representative filters apply across every export.'
                },
              ].map((feat) => (
                <div key={feat.title} className="sz-feat-card bg-[#f7f8f6] hover:bg-white px-[30px] py-9 cursor-default transition-colors duration-150">
                  <div className="sz-feat-icon w-12 h-12 rounded-xl bg-[#e3f2fd] flex items-center justify-center mb-5 transition-all duration-150">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8">{feat.icon}</svg>
                  </div>
                  <h3 className="text-base font-semibold text-[#0f1a10] mb-2.5">{feat.title}</h3>
                  <p className="text-[.875rem] leading-[1.7] text-[#5a5a5a] font-light">{feat.desc}</p>
                  <span className="inline-block mt-4 sz-mono text-[.65rem] text-[#1565c0] bg-[#e3f2fd] px-[9px] py-[3px] rounded-lg">{feat.tag}</span>
                </div>
              ))}
            </RevealDiv>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section id="how" className="py-24 px-6 md:px-12 bg-[#0f1a10]">
          <div className="max-w-[1200px] mx-auto">
            <RevealDiv>
              <div className="inline-flex items-center gap-[9px] sz-mono text-[.72rem] text-[rgba(255,255,255,.45)] tracking-[.08em] uppercase mb-4 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[rgba(255,255,255,.2)] before:rounded-sm">
                The workflow
              </div>
              <h2 className="sz-disp text-[clamp(1.9rem,3vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-white max-w-[540px]">
                A closed loop from field to boardroom.
              </h2>
            </RevealDiv>

            <RevealDiv className="sz-steps-line mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
              {[
                { num: '01', title: 'Route Assignment', desc: "Supervisors schedule weekday routes — assigning each representative an ordered list of stores. The system filters to only the outlets that representative manages." },
                { num: '02', title: 'GPS Check-In & Audit', desc: "The representative arrives, the browser confirms their position, and the compliance form unlocks. SOH, OOS items, shelf share, and photos are all captured in one flow." },
                { num: '03', title: 'Sales & Orders', desc: "Daily sales are entered with automatic currency computation. If stock is low, the representative raises a warehouse order — logged as Pending and queued for dispatch." },
                { num: '04', title: 'Supervisor Review', desc: "Every submission surfaces in the supervisor dashboard. Reports are approved or flagged. Variance is reconciled. Audit logs capture every action with impact severity levels." },
              ].map((step) => (
                <div key={step.num} className="px-6 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-[rgba(255,255,255,.15)] bg-[#1a2b1b] flex items-center justify-center sz-mono text-[.75rem] text-[#90caf9] mb-6">
                    {step.num}
                  </div>
                  <h3 className="text-[.9375rem] font-semibold text-white mb-2.5">{step.title}</h3>
                  <p className="text-[.85rem] leading-[1.7] text-[rgba(255,255,255,.42)] font-light">{step.desc}</p>
                </div>
              ))}
            </RevealDiv>
          </div>
        </section>

        {/* ══ ROLES ══ */}
        <section id="roles" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <RevealDiv>
              <div className="inline-flex items-center gap-[9px] sz-mono text-[.72rem] text-[#1565c0] tracking-[.08em] uppercase mb-4 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#42a5f5] before:rounded-sm">
                Access control
              </div>
              <h2 className="sz-disp text-[clamp(1.9rem,3vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#0f1a10] max-w-[540px]">
                The right tools for <em className="not-italic text-[#1565c0]">every role.</em>
              </h2>
            </RevealDiv>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Role list */}
              <RevealDiv className="flex flex-col gap-1">
                {[
                  { av: 'M', avBg: '#e3f2fd', avColor: '#1565c0', name: 'Merchandiser / Sales Rep / Exec', perms: 'GPS check-in · Visit audit · Sales entry · Stock recording · Order logging · Photo upload · Record deliveries · Create stores in field' },
                  { av: 'S', avBg: '#fdefd9', avColor: '#b45309', name: 'Supervisor', perms: 'Route scheduling · Team monitoring · Report review · Delivery recording · Variance reports · Audit logs' },
                  { av: 'A', avBg: '#e0e7ff', avColor: '#4338ca', name: 'Administrator', perms: 'Full platform access · User management · Store catalog · Product catalog · All Supervisor privileges' },
                ].map((role, i) => (
                  <div key={i}
                    onClick={() => setActiveRole(i)}
                    className={`flex items-start gap-4 px-5 py-[18px] rounded-xl cursor-pointer border transition-all duration-150 ${activeRole === i ? 'bg-white border-[rgba(0,0,0,.14)] shadow-[0_4px_12px_rgba(0,0,0,.08),0_2px_4px_rgba(0,0,0,.04)]' : 'border-transparent hover:bg-white hover:border-[rgba(0,0,0,.14)] hover:shadow-[0_4px_12px_rgba(0,0,0,.08)]'}`}>
                    <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center font-semibold text-[.875rem] flex-shrink-0" style={{ background: role.avBg, color: role.avColor }}>
                      {role.av}
                    </div>
                    <div>
                      <div className="font-semibold text-[.9375rem] text-[#0f1a10]">{role.name}</div>
                      <div className="mt-1 text-[.8125rem] text-[#5a5a5a] leading-[1.6] font-light">{role.perms}</div>
                    </div>
                  </div>
                ))}
              </RevealDiv>

              {/* Access card */}
              <RevealDiv>
                <div className="bg-[#0f1a10] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,.10),0_4px_8px_rgba(0,0,0,.05)] lg:sticky lg:top-20">
                  <div className="px-[22px] py-[18px] pb-3.5 border-b border-[rgba(255,255,255,.06)] flex items-center justify-between">
                    <span className="text-[.875rem] font-semibold text-white">{currentRole.title}</span>
                    <span className="sz-mono text-[.62rem] text-[#90caf9] bg-[rgba(66,165,245,.18)] px-[10px] py-[3px] rounded-full tracking-[.04em]">{currentRole.badge}</span>
                  </div>
                  <div className="py-1.5">
                    {currentRole.rows.map(([label, yes]) => (
                      <div key={label as string} className="flex items-center justify-between px-[22px] py-2.5 border-b last:border-0 border-[rgba(255,255,255,.04)] text-[.8rem] text-[rgba(255,255,255,.52)]">
                        <strong className="text-[rgba(255,255,255,.78)] font-medium">{label}</strong>
                        <div className={`w-[18px] h-[18px] rounded-full flex-shrink-0 flex items-center justify-center ${yes ? 'sz-perm-yes bg-[rgba(66,165,245,.22)]' : 'sz-perm-no bg-[rgba(255,255,255,.06)]'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </RevealDiv>
            </div>
          </div>
        </section>

        {/* ══ MODULES BENTO ══ */}
        <section id="modules" className="py-24 px-6 md:px-12 bg-[#f7f8f6]">
          <div className="max-w-[1200px] mx-auto">
            <RevealDiv>
              <div className="inline-flex items-center gap-[9px] sz-mono text-[.72rem] text-[#1565c0] tracking-[.08em] uppercase mb-4 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#42a5f5] before:rounded-sm">
                Platform modules
              </div>
              <h2 className="sz-disp text-[clamp(1.9rem,3vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#0f1a10] max-w-[540px]">
                Six modules. One <em className="not-italic text-[#1565c0]">unified</em> console.
              </h2>
            </RevealDiv>

            <RevealDiv className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                { num: '01', bg: '#e3f2fd', stroke: '#1565c0', title: 'Unified Dashboard', desc: 'Role-adaptive KPI cards, sales trend charts, interactive map visit traces, and a real-time leaderboard for supervisors.', pills: [], icon: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></> },
                { num: '02', bg: '#fef3c7', stroke: '#d97706', title: 'Store Visits & Itinerary', desc: 'Dual-audience view: field reps see their route checklist, supervisors see the Reps Routing Progress Control Panel with live progress bars per representative.', pills: [], icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></> },
                { num: '03', bg: '#ede9fe', stroke: '#7c3aed', title: 'Dynamic Inventory Logs', desc: 'Stock-on-hand snapshots per store with colour-coded low-stock alerts, local currency projections, and instant CSV export with date-stamped filenames.', pills: ['SOH', 'Min Stock Alerts', 'CSV Export'], icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> },
                { num: '04', bg: '#fce7f3', stroke: '#db2777', title: 'Supply Variance & Orders', desc: 'Field representatives raise orders by product and quantity. Representatives or supervisors record deliveries and the platform computes the exact variance delta automatically — no spreadsheets, no manual reconciliation required.', pills: ['Pending → Partial → Delivered', 'Auto variance compute'], icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> },
                { num: '05 + 06', bg: '#dbeafe', stroke: '#2563eb', title: 'Reports Builder + Admin Console', desc: 'Multi-filter reports with PDF and CSV export. Plus a full admin suite: user and store management, product catalog, weekday route scheduling, supervisor comment loops, and a complete audit log trail with impact severity levels.', pills: ['PDF Reports', 'User Management', 'Audit Trail', 'Route Scheduler'], icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
              ].map((mod) => (
                <div key={mod.num} className="bg-white rounded-2xl px-[26px] py-7 border border-[rgba(0,0,0,.08)] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,.10),0_4px_8px_rgba(0,0,0,.05)] transition-all duration-200">
                  <div className="sz-mono text-[.65rem] text-[#9a9a9a] tracking-[.06em] mb-4">{mod.num}</div>
                  <div className="w-11 h-11 rounded-[11px] flex items-center justify-center mb-4" style={{ background: mod.bg }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={mod.stroke} strokeWidth="1.8">{mod.icon}</svg>
                  </div>
                  <div className="font-semibold text-[.9375rem] text-[#0f1a10] mb-2">{mod.title}</div>
                  <p className="text-[.8125rem] leading-[1.65] text-[#5a5a5a] font-light">{mod.desc}</p>
                  {mod.pills.length > 0 && (
                    <div className="flex flex-wrap gap-[5px] mt-3.5">
                      {mod.pills.map((p) => (
                        <span key={p} className="sz-mono text-[.6rem] px-[9px] py-[3px] rounded-lg border border-[rgba(0,0,0,.14)] text-[#9a9a9a]">{p}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </RevealDiv>
          </div>
        </section>

        {/* ══ CONTACT / DEMO ══ */}
        <section id="contact" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <RevealDiv>
              <div className="inline-flex items-center gap-[9px] sz-mono text-[.72rem] text-[#1565c0] tracking-[.08em] uppercase mb-4 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#42a5f5] before:rounded-sm">
                Get in touch
              </div>
              <h2 className="sz-disp text-[clamp(1.9rem,3vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#0f1a10] max-w-[540px]">
                Ready to see SafeZell <em className="not-italic text-[#1565c0]">in action?</em>
              </h2>
            </RevealDiv>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: contact info */}
              <RevealDiv className="flex flex-col gap-8">
                <p className="text-[.9375rem] text-[#5a5a5a] font-light leading-[1.75] max-w-[400px]">
                  Whether you manage 5 field representatives or 500, SafeZell scales with your operation. Get in touch to arrange a personalised demo or ask any questions about the platform.
                </p>

                <a href="https://wa.me/256775323200" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl border border-[rgba(0,0,0,.08)] bg-[#f7f8f6] text-[#0f1a10] no-underline hover:border-[#42a5f5] hover:bg-[#e3f2fd] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,.08)] transition-all duration-150">
                  <div className="w-10 h-10 rounded-[10px] bg-[#e3f2fd] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1565c0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[.9375rem]">WhatsApp</div>
                    <div className="text-[.8125rem] text-[#5a5a5a] font-light mt-0.5">+256 775 323 200</div>
                  </div>
                </a>

                <a href="mailto:safeaiafrica@gmail.com"
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl border border-[rgba(0,0,0,.08)] bg-[#f7f8f6] text-[#0f1a10] no-underline hover:border-[#42a5f5] hover:bg-[#e3f2fd] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,.08)] transition-all duration-150">
                  <div className="w-10 h-10 rounded-[10px] bg-[#e3f2fd] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[.9375rem]">Email</div>
                    <div className="text-[.8125rem] text-[#5a5a5a] font-light mt-0.5">safeaiafrica@gmail.com</div>
                  </div>
                </a>

                <div className="p-5 rounded-2xl bg-[#e3f2fd] border border-[#bbdefb]">
                  <div className="font-semibold text-[.9375rem] text-[#0d47a1] mb-1.5">What to expect</div>
                  <ul className="flex flex-col gap-2">
                    {['Live walkthrough of all six modules tailored to your business', 'Answers to your specific operational and integration questions', 'Pricing and deployment options for your team size and region'].map((item) => (
                      <li key={item} className="text-[.8125rem] text-[#1565c0] flex items-start gap-2 font-light">
                        <svg width="16" height="16" className="mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#1e88e5" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealDiv>

              {/* Right: form */}
              <RevealDiv>
                <div className="bg-[#f7f8f6] border border-[rgba(0,0,0,.08)] rounded-2xl p-9">
                  <div className="sz-disp text-[1.375rem] font-semibold text-[#0f1a10] tracking-[-0.01em] mb-1.5">Request a Demo</div>
                  <div className="text-[.875rem] text-[#5a5a5a] mb-7 font-light">Fill in your details and we'll be in touch within one business day.</div>

                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[.75rem] font-medium text-[#5a5a5a] tracking-[.01em]">First Name</label>
                          <input className="font-[inherit] text-[.875rem] w-full px-3.5 py-2.5 bg-white border border-[rgba(0,0,0,.14)] rounded-xl text-[#1a1a1a] outline-none focus:border-[#42a5f5] focus:shadow-[0_0_0_3px_rgba(66,165,245,.12)] transition-all"
                            type="text" placeholder="Jane" required value={formState.fname} onChange={e => setFormState(s => ({ ...s, fname: e.target.value }))} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[.75rem] font-medium text-[#5a5a5a] tracking-[.01em]">Last Name</label>
                          <input className="font-[inherit] text-[.875rem] w-full px-3.5 py-2.5 bg-white border border-[rgba(0,0,0,.14)] rounded-xl text-[#1a1a1a] outline-none focus:border-[#42a5f5] focus:shadow-[0_0_0_3px_rgba(66,165,245,.12)] transition-all"
                            type="text" placeholder="Nakato" value={formState.lname} onChange={e => setFormState(s => ({ ...s, lname: e.target.value }))} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3.5">
                        <label className="text-[.75rem] font-medium text-[#5a5a5a] tracking-[.01em]">Work Email</label>
                        <input className="font-[inherit] text-[.875rem] w-full px-3.5 py-2.5 bg-white border border-[rgba(0,0,0,.14)] rounded-xl text-[#1a1a1a] outline-none focus:border-[#42a5f5] focus:shadow-[0_0_0_3px_rgba(66,165,245,.12)] transition-all"
                          type="email" placeholder="jane@company.com" required value={formState.femail} onChange={e => setFormState(s => ({ ...s, femail: e.target.value }))} />
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3.5">
                        <label className="text-[.75rem] font-medium text-[#5a5a5a] tracking-[.01em]">WhatsApp / Phone (optional)</label>
                        <input className="font-[inherit] text-[.875rem] w-full px-3.5 py-2.5 bg-white border border-[rgba(0,0,0,.14)] rounded-xl text-[#1a1a1a] outline-none focus:border-[#42a5f5] focus:shadow-[0_0_0_3px_rgba(66,165,245,.12)] transition-all"
                          type="tel" placeholder="+254 700 000 000" value={formState.fphone} onChange={e => setFormState(s => ({ ...s, fphone: e.target.value }))} />
                      </div>
                      <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[.75rem] font-medium text-[#5a5a5a] tracking-[.01em]">Company Name</label>
                          <input className="font-[inherit] text-[.875rem] w-full px-3.5 py-2.5 bg-white border border-[rgba(0,0,0,.14)] rounded-xl text-[#1a1a1a] outline-none focus:border-[#42a5f5] focus:shadow-[0_0_0_3px_rgba(66,165,245,.12)] transition-all"
                            type="text" placeholder="Acme FMCG Ltd" required value={formState.fcompany} onChange={e => setFormState(s => ({ ...s, fcompany: e.target.value }))} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[.75rem] font-medium text-[#5a5a5a] tracking-[.01em]">Team Size</label>
                          <select className="sz-select font-[inherit] text-[.875rem] w-full px-3.5 py-2.5 bg-white border border-[rgba(0,0,0,.14)] rounded-xl text-[#1a1a1a] outline-none focus:border-[#42a5f5] focus:shadow-[0_0_0_3px_rgba(66,165,245,.12)] transition-all"
                            value={formState.fteam} onChange={e => setFormState(s => ({ ...s, fteam: e.target.value }))}>
                            <option value="" disabled>Select range</option>
                            <option>1–10 reps</option>
                            <option>11–50 reps</option>
                            <option>51–200 reps</option>
                            <option>200+ reps</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3.5">
                        <label className="text-[.75rem] font-medium text-[#5a5a5a] tracking-[.01em]">Country / Region of Operation</label>
                        <input className="font-[inherit] text-[.875rem] w-full px-3.5 py-2.5 bg-white border border-[rgba(0,0,0,.14)] rounded-xl text-[#1a1a1a] outline-none focus:border-[#42a5f5] focus:shadow-[0_0_0_3px_rgba(66,165,245,.12)] transition-all"
                          type="text" placeholder="e.g. Kenya, Nigeria, South Africa…" value={formState.fcountry} onChange={e => setFormState(s => ({ ...s, fcountry: e.target.value }))} />
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3.5">
                        <label className="text-[.75rem] font-medium text-[#5a5a5a] tracking-[.01em]">What are you looking to solve?</label>
                        <textarea className="font-[inherit] text-[.875rem] w-full px-3.5 py-2.5 bg-white border border-[rgba(0,0,0,.14)] rounded-xl text-[#1a1a1a] outline-none focus:border-[#42a5f5] focus:shadow-[0_0_0_3px_rgba(66,165,245,.12)] transition-all resize-y min-h-[100px] leading-[1.6]"
                          placeholder="Brief description of your current challenges or what you'd like to see in the demo…"
                          value={formState.fmessage} onChange={e => setFormState(s => ({ ...s, fmessage: e.target.value }))} />
                      </div>
                      <button type="submit"
                        className="w-full mt-1.5 bg-[#42a5f5] text-white px-6 py-3 rounded-full text-[.9375rem] font-medium flex items-center justify-center gap-[9px] shadow-[0_4px_16px_rgba(66,165,245,.28)] hover:bg-[#1e88e5] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(66,165,245,.35)] transition-all duration-150">
                        Send Demo Request
                      </button>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center text-center py-8 gap-3">
                      <div className="w-14 h-14 rounded-full bg-[#e3f2fd] flex items-center justify-center">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="sz-disp text-[1.25rem] font-semibold text-[#0f1a10]">Request sent!</div>
                      <div className="text-[.875rem] text-[#5a5a5a] font-light max-w-[280px]">We'll reach out via email or WhatsApp within one business day to schedule your demo.</div>
                    </div>
                  )}
                </div>
              </RevealDiv>
            </div>
          </div>
        </section>

        {/* ══ CTA BAND ══ */}
        <div className="sz-cta-glow bg-[#0d47a1] py-20 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="sz-mono text-[.7rem] text-[#90caf9] tracking-[.1em] uppercase mb-4">Ready to deploy</div>
          <h2 className="sz-disp text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-white tracking-[-0.015em] max-w-[520px] mx-auto mb-3.5">
            Put SafeZell to work across your field team today.
          </h2>
          <p className="text-[.9375rem] text-[rgba(255,255,255,.45)] max-w-[400px] mx-auto mb-9 font-light leading-[1.7]">
            From a handful of representatives to hundreds of routes — SafeZell scales with your operation, wherever you're based.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#contact"
              className="inline-flex items-center gap-[9px] bg-white text-[#0f1a10] px-7 py-3 rounded-full text-[.9375rem] font-medium hover:bg-[#e3f2fd] hover:-translate-y-0.5 transition-all duration-150">
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Request a Demo
            </a>
            <a href="https://wa.me/256775323200" target="_blank" rel="noopener"
              className="inline-flex items-center gap-[9px] bg-[rgba(255,255,255,.08)] text-[rgba(255,255,255,.8)] px-7 py-3 rounded-full text-[.9375rem] font-normal border border-[rgba(255,255,255,.15)] hover:bg-[rgba(255,255,255,.14)] hover:-translate-y-0.5 transition-all duration-150">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="rgba(255,255,255,.7)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
