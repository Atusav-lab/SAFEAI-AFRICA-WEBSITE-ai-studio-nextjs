'use client'

import { useState, useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/* ─────────────────────────────────────────────────────────────────────────────
   SafeZell — full port of safezell.html into Next.js
   Preserves the light-theme design, mockup, marquee, bento grid, role cards,
   contact form with WhatsApp/email dispatch, and CTA band.
───────────────────────────────────────────────────────────────────────────── */

const roleData = [
  {
    title: 'Field Representative Permissions',
    badge: 'Field Role',
    rows: [
      ['GPS Store Check-In', true], ['Submit Visit Report', true],
      ['Upload Shelf Photos', true], ['Record Daily Sales', true],
      ['Log Supply Orders', true], ['View Stock Levels', true],
      ['Review Team Reports', false], ['Manage Users', false],
      ['Record Deliveries', true], ['Create New Stores (field)', true],
    ],
  },
  {
    title: 'Supervisor Permissions',
    badge: 'Management',
    rows: [
      ['GPS Check-In', false], ['Submit Visit Report', false],
      ['View All Team Visits', true], ['Record Deliveries', true],
      ['Assign Route Schedules', true], ['View All Sales', true],
      ['Review & Comment Reports', true], ['Manage Users', false],
      ['View Audit Logs', true], ['Manage Stores (admin panel)', false],
    ],
  },
  {
    title: 'Admin Permissions',
    badge: 'Full Access',
    rows: [
      ['GPS Store Check-In', true], ['Submit Visit Report', true],
      ['View All Team Data', true], ['Record Deliveries', true],
      ['Assign Route Schedules', true], ['Manage Users', true],
      ['Review & Comment Reports', true], ['Manage Stores & Products', true],
      ['View Audit Logs', true], ['Delete Records', true],
    ],
  },
]

export default function SafeZell() {
  const [activeRole, setActiveRole] = useState(0)
  const [formSent, setFormSent] = useState(false)

  // Form refs
  const fnameRef    = useRef<HTMLInputElement>(null)
  const lnameRef    = useRef<HTMLInputElement>(null)
  const femailRef   = useRef<HTMLInputElement>(null)
  const fphoneRef   = useRef<HTMLInputElement>(null)
  const fcompanyRef = useRef<HTMLInputElement>(null)
  const fteamRef    = useRef<HTMLSelectElement>(null)
  const fcountryRef = useRef<HTMLInputElement>(null)
  const fmessageRef = useRef<HTMLTextAreaElement>(null)

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('sz-vis')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.sz-reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const fname    = fnameRef.current?.value.trim() ?? ''
    const lname    = lnameRef.current?.value.trim() ?? ''
    const femail   = femailRef.current?.value.trim() ?? ''
    const fphone   = fphoneRef.current?.value.trim() ?? ''
    const fcompany = fcompanyRef.current?.value.trim() ?? ''
    const fteam    = fteamRef.current?.value ?? ''
    const fcountry = fcountryRef.current?.value.trim() ?? ''
    const fmessage = fmessageRef.current?.value.trim() ?? ''

    if (!fname || !femail || !fcompany) return

    const msg = encodeURIComponent(
      `*SafeZell Demo Request*\n\n` +
      `*Name:* ${fname} ${lname}\n` +
      `*Email:* ${femail}\n` +
      (fphone  ? `*Phone:* ${fphone}\n` : '') +
      `*Company:* ${fcompany}\n` +
      (fteam   ? `*Team Size:* ${fteam}\n` : '') +
      (fcountry ? `*Region:* ${fcountry}\n` : '') +
      (fmessage ? `\n*Message:*\n${fmessage}` : '')
    )
    window.open(`https://wa.me/256775323200?text=${msg}`, '_blank')

    const subject = encodeURIComponent('SafeZell Demo Request')
    const body    = encodeURIComponent(
      `Demo Request from ${fname} ${lname}\n\nEmail: ${femail}\nCompany: ${fcompany}\nTeam Size: ${fteam}\nRegion: ${fcountry}\n\n${fmessage}`
    )
    setTimeout(() => {
      window.location.href = `mailto:safeaiafrica@gmail.com?subject=${subject}&body=${body}`
    }, 800)

    setFormSent(true)
  }

  const currentRole = roleData[activeRole]

  return (
    <>
      {/* ── inline design tokens ── */}
      <style>{`
        :root {
          --sz-font:      'DM Sans', 'Inter', sans-serif;
          --sz-mono:      'DM Mono', 'Courier New', monospace;
          --sz-disp:      'Fraunces', Georgia, serif;

          --sz-brand-50:  #e3f2fd;
          --sz-brand-100: #bbdefb;
          --sz-brand-400: #42a5f5;
          --sz-brand-600: #1e88e5;
          --sz-brand-800: #1565c0;
          --sz-brand-900: #0d47a1;

          --sz-ink:       #0f1a10;
          --sz-ink-soft:  #1c2e1e;
          --sz-text:      #1a1a1a;
          --sz-text-2:    #5a5a5a;
          --sz-text-m:    #9a9a9a;
          --sz-surf:      #ffffff;
          --sz-surf-2:    #f7f8f6;
          --sz-surf-3:    #efefec;
          --sz-border:    rgba(0,0,0,.08);
          --sz-border-m:  rgba(0,0,0,.14);
          --sz-amber:     #d97b1a;
          --sz-sh-sm:     0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.04);
          --sz-sh-md:     0 4px 12px rgba(0,0,0,.08),0 2px 4px rgba(0,0,0,.04);
          --sz-sh-lg:     0 12px 32px rgba(0,0,0,.10),0 4px 8px rgba(0,0,0,.05);
          --sz-r-sm:      8px;
          --sz-r-md:      12px;
          --sz-r-lg:      16px;
          --sz-r-xl:      24px;
          --sz-r-pill:    999px;
        }

        /* reveal animation */
        .sz-reveal { opacity:0; transform:translateY(28px); transition:opacity .65s ease, transform .65s ease; }
        .sz-vis    { opacity:1; transform:translateY(0); }

        /* hero badge pulse */
        @keyframes sz-blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes sz-fade-up   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sz-fade-right { from{opacity:0;transform:translateX(36px)} to{opacity:1;transform:translateX(0)} }
        @keyframes sz-bob  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes sz-marq { to{transform:translateX(-50%)} }

        .sz-hero-badge-dot { width:6px;height:6px;border-radius:50%;background:var(--sz-brand-400);flex-shrink:0;animation:sz-blink 2s ease-in-out infinite; }
        .sz-fade-up-0 { opacity:0; animation:sz-fade-up .5s .05s forwards; }
        .sz-fade-up-1 { opacity:0; animation:sz-fade-up .65s .15s forwards; }
        .sz-fade-up-2 { opacity:0; animation:sz-fade-up .65s .28s forwards; }
        .sz-fade-up-3 { opacity:0; animation:sz-fade-up .65s .40s forwards; }
        .sz-fade-up-4 { opacity:0; animation:sz-fade-up .65s .55s forwards; }
        .sz-fade-right { opacity:0; animation:sz-fade-right .85s .35s forwards; }
        .sz-bob  { animation:sz-bob 3.2s ease-in-out infinite; }

        /* marquee */
        .sz-marquee-track { display:flex;gap:52px;animation:sz-marq 24s linear infinite;width:max-content; }

        /* dot-grid hero pattern */
        .sz-hero-dots {
          position:absolute;inset:0;
          background-image:radial-gradient(circle,rgba(66,165,245,.18) 1px,transparent 1px);
          background-size:32px 32px;
          -webkit-mask-image:radial-gradient(ellipse 65% 80% at 85% 45%,black 5%,transparent 75%);
          mask-image:radial-gradient(ellipse 65% 80% at 85% 45%,black 5%,transparent 75%);
          pointer-events:none;
        }

        /* chart bars */
        .sz-chart-bar {
          flex:1; border-radius:3px 3px 0 0;
          position:relative; overflow:hidden;
          background:rgba(255,255,255,.06);
        }
        .sz-chart-bar::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(to top,var(--sz-brand-400),rgba(66,165,245,.25));
          border-radius:inherit;
        }
        .sz-chart-bar.sz-dim::after { background:rgba(255,255,255,.06); }

        /* permission dots */
        .sz-perm-yes,.sz-perm-no {
          width:18px;height:18px;border-radius:50%;flex-shrink:0;
          display:flex;align-items:center;justify-content:center;
        }
        .sz-perm-yes { background:rgba(66,165,245,.22); }
        .sz-perm-yes::after { content:'';width:6px;height:6px;border-radius:50%;background:var(--sz-brand-200,#90caf9); }
        .sz-perm-no  { background:rgba(255,255,255,.06); }
        .sz-perm-no::after  { content:'';width:7px;height:1.5px;background:rgba(255,255,255,.18);border-radius:1px; }

        /* feat card hover icon */
        .sz-feat-card:hover .sz-feat-icon { background:var(--sz-brand-400) !important; transform:scale(1.07); }
        .sz-feat-card:hover .sz-feat-icon svg { filter:brightness(0) invert(1); }

        /* role item */
        .sz-role-item { cursor:pointer; border:0.5px solid transparent; transition:border-color .15s,background .15s,box-shadow .15s; }
        .sz-role-item.sz-active,.sz-role-item:hover { background:var(--sz-surf);border-color:var(--sz-border-m);box-shadow:var(--sz-sh-md); }

        /* bento hover */
        .sz-bento-card { transition:transform .2s,box-shadow .2s; }
        .sz-bento-card:hover { transform:translateY(-3px);box-shadow:var(--sz-sh-lg); }

        /* contact channel hover */
        .sz-channel { text-decoration:none;transition:border-color .15s,background .15s,transform .15s,box-shadow .15s; }
        .sz-channel:hover { border-color:var(--sz-brand-400) !important;background:var(--sz-brand-50) !important;transform:translateY(-1px);box-shadow:var(--sz-sh-md); }

        /* steps line */
        .sz-steps-wrap { position:relative; }
        .sz-steps-wrap::before {
          content:'';position:absolute;top:24px;left:24px;right:24px;height:0.5px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),rgba(255,255,255,.1),transparent);
        }

        /* form inputs */
        .sz-input,.sz-select,.sz-textarea {
          font-family:var(--sz-font);font-size:.875rem;
          width:100%;padding:10px 14px;
          background:var(--sz-surf);
          border:0.5px solid var(--sz-border-m);
          border-radius:var(--sz-r-md);
          color:var(--sz-text);outline:none;
          transition:border-color .15s,box-shadow .15s;
          appearance:none;
        }
        .sz-input::placeholder,.sz-textarea::placeholder{color:var(--sz-text-m);}
        .sz-input:focus,.sz-select:focus,.sz-textarea:focus{border-color:var(--sz-brand-400);box-shadow:0 0 0 3px rgba(66,165,245,.12);}
        .sz-textarea{resize:vertical;min-height:100px;line-height:1.6;}
        .sz-select {
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239a9a9a' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat:no-repeat;background-position:right 12px center;background-size:16px;padding-right:36px;cursor:pointer;
        }

        /* CTA band glow */
        .sz-cta-band::before {
          content:'';position:absolute;top:-80px;left:50%;transform:translateX(-50%);
          width:500px;height:280px;
          background:radial-gradient(ellipse,rgba(66,165,245,.22),transparent 70%);
          pointer-events:none;
        }
      `}</style>

      <Header forceScrolled={true} />

      <main
        className="pt-16"
        style={{ fontFamily: "var(--sz-font)", fontSize: '15px', lineHeight: '1.6', color: 'var(--sz-text)', background: 'var(--sz-surf-2)', overflowX: 'hidden' }}
      >

        {/* ══════════ HERO ══════════ */}
        <section
          style={{
            minHeight: '100vh', padding: '100px 48px 80px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px',
            alignItems: 'center', position: 'relative', overflow: 'hidden',
            maxWidth: '1360px', margin: '0 auto',
          }}
          className="max-lg:grid-cols-1 max-lg:px-6"
        >
          <div className="sz-hero-dots" />

          {/* Left */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="sz-fade-up-0"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--sz-brand-50)', color: 'var(--sz-brand-800)',
                fontFamily: 'var(--sz-mono)', fontSize: '.72rem', fontWeight: 500,
                padding: '5px 14px', borderRadius: 'var(--sz-r-pill)',
                letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: '24px',
              }}
            >
              <span className="sz-hero-badge-dot" />
              Field Sales Management System
            </div>

            <h1
              className="sz-fade-up-1"
              style={{
                fontFamily: 'var(--sz-disp)',
                fontSize: 'clamp(2.6rem, 4.8vw, 4.4rem)',
                fontWeight: 600, lineHeight: 1.08,
                letterSpacing: '-.02em', color: 'var(--sz-ink)',
              }}
            >
              Field Sales.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sz-brand-800)' }}>Fully Visible.</em><br />
              Always Accountable.
            </h1>

            <p
              className="sz-fade-up-2"
              style={{
                marginTop: '22px', fontSize: '1rem', lineHeight: 1.75,
                color: 'var(--sz-text-2)', maxWidth: '460px', fontWeight: 300,
              }}
            >
              SafeZell connects field representatives, supervisors, and warehouse teams in one closed-loop operations platform — built for FMCG companies running field sales teams anywhere in the world.
            </p>

            <div className="sz-fade-up-3" style={{ marginTop: '36px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{
                  background: 'var(--sz-brand-400)', color: '#fff',
                  padding: '13px 28px', borderRadius: 'var(--sz-r-pill)',
                  fontFamily: 'var(--sz-font)', fontSize: '.9375rem', fontWeight: 500,
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px',
                  transition: 'background .15s,transform .15s,box-shadow .15s',
                  boxShadow: '0 4px 16px rgba(66,165,245,.3)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--sz-brand-600)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--sz-brand-400)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'none' }}
              >
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Request a Demo
              </a>
              <a
                href="#how"
                style={{
                  background: 'var(--sz-surf)', color: 'var(--sz-text)',
                  padding: '12px 24px', borderRadius: 'var(--sz-r-pill)',
                  fontFamily: 'var(--sz-font)', fontSize: '.9375rem', fontWeight: 400,
                  textDecoration: 'none', border: '0.5px solid var(--sz-border-m)',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  transition: 'border-color .15s,background .15s,transform .15s',
                  boxShadow: 'var(--sz-sh-sm)',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='var(--sz-brand-400)'; el.style.background='var(--sz-brand-50)'; el.style.transform='translateY(-1px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='var(--sz-border-m)'; el.style.background='var(--sz-surf)'; el.style.transform='none' }}
              >
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M10 8l6 4-6 4V8z" />
                </svg>
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div
              className="sz-fade-up-4"
              style={{
                marginTop: '48px', display: 'flex', gap: 0,
                border: '0.5px solid var(--sz-border)', borderRadius: 'var(--sz-r-lg)',
                background: 'var(--sz-surf)', boxShadow: 'var(--sz-sh-sm)', overflow: 'hidden',
              }}
            >
              {[
                { num: '360°', label: 'Field visibility' },
                { num: '5', label: 'User roles' },
                { num: '6', label: 'Core modules' },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, padding: '18px 20px', borderRight: i < 2 ? '0.5px solid var(--sz-border)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--sz-disp)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--sz-ink)', lineHeight: 1 }}>
                    {s.num.replace('°', '')}<span style={{ color: 'var(--sz-brand-600)' }}>{s.num.includes('°') ? '°' : ''}</span>
                  </div>
                  <div style={{ fontSize: '.75rem', color: 'var(--sz-text-m)', marginTop: '3px', fontWeight: 400 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="sz-fade-right max-lg:hidden" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(15,26,16,.16), 0 0 0 0.5px var(--sz-border)', background: '#0f1a10', position: 'relative' }}>
              {/* topbar */}
              <div style={{ background: '#111d12', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '0.5px solid rgba(255,255,255,.06)' }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                  {['#FF5F57','#FEBC2E','#28C840'].map(c => <i key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'block' }} />)}
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,.06)', borderRadius: '5px', padding: '4px 12px', fontFamily: 'var(--sz-mono)', fontSize: '.68rem', color: 'rgba(255,255,255,.35)' }}>
                  app.safezell.co · Dashboard
                </div>
              </div>
              {/* body */}
              <div style={{ background: '#141f15', padding: '16px', display: 'grid', gridTemplateColumns: '130px 1fr', gap: '12px', minHeight: '390px' }}>
                {/* sidebar */}
                <div style={{ background: '#1a2b1b', borderRadius: '9px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ fontFamily: 'var(--sz-disp)', fontSize: '.72rem', fontWeight: 700, color: '#fff', padding: '2px 0 10px', borderBottom: '0.5px solid rgba(255,255,255,.08)', marginBottom: '5px' }}>SafeZell</div>
                  {[
                    { label: 'Dashboard', active: true },
                    { label: 'Store Visits', active: false },
                    { label: 'Inventory', active: false },
                    { label: 'Variance', active: false },
                    { label: 'Reports', active: false },
                    { label: 'Admin', active: false },
                  ].map(n => (
                    <div key={n.label} style={{
                      padding: '6px 9px', borderRadius: '6px', fontSize: '.64rem',
                      color: n.active ? '#fff' : 'rgba(255,255,255,.4)',
                      display: 'flex', alignItems: 'center', gap: '7px',
                      background: n.active ? 'var(--sz-brand-400)' : 'transparent',
                    }}>
                      <span style={{ width: 12, height: 12, borderRadius: '3px', background: 'currentColor', opacity: .65, flexShrink: 0 }} />
                      {n.label}
                    </div>
                  ))}
                </div>
                {/* main */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {/* KPI row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
                    {[
                      { label: 'Sales (local)', val: '14.8M', sub: '↑ 12% vs last week', accent: 'var(--sz-brand-400)' },
                      { label: 'Store Visits', val: '247', sub: '↑ 8% vs last week', accent: 'var(--sz-amber)' },
                      { label: 'Compliance', val: '94%', sub: '3 items flagged', accent: '#6366f1' },
                    ].map(k => (
                      <div key={k.label} style={{ background: '#1a2b1b', borderRadius: '9px', padding: '10px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: k.accent }} />
                        <div style={{ fontSize: '.56rem', color: 'rgba(255,255,255,.38)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{k.label}</div>
                        <div style={{ fontFamily: 'var(--sz-disp)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginTop: '3px' }}>{k.val}</div>
                        <div style={{ fontSize: '.54rem', color: 'rgba(255,255,255,.3)', marginTop: '2px' }}>{k.sub}</div>
                      </div>
                    ))}
                  </div>
                  {/* chart */}
                  <div style={{ background: '#1a2b1b', borderRadius: '9px', padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.38)', textTransform: 'uppercase', letterSpacing: '.04em' }}>Sales Trend — This Week</div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '72px' }}>
                      {[
                        { h: '30%', dim: true }, { h: '55%', dim: false }, { h: '42%', dim: true },
                        { h: '70%', dim: false }, { h: '60%', dim: false }, { h: '38%', dim: true }, { h: '90%', dim: false },
                      ].map((b, i) => (
                        <div key={i} className={`sz-chart-bar${b.dim ? ' sz-dim' : ''}`} style={{ height: b.h }} />
                      ))}
                    </div>
                  </div>
                  {/* table */}
                  <div style={{ background: '#1a2b1b', borderRadius: '9px', padding: '10px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', fontSize: '.54rem', color: 'rgba(255,255,255,.28)', textTransform: 'uppercase', letterSpacing: '.04em', paddingBottom: '7px', borderBottom: '0.5px solid rgba(255,255,255,.06)' }}>
                      <span>Store</span><span>Status</span><span>Rep</span>
                    </div>
                    {[
                      { store: 'Central Branch', status: 'Visited', statusClass: 'blue', rep: 'A. Kato' },
                      { store: 'West Outlet',    status: 'Visited', statusClass: 'blue', rep: 'B. Namuli' },
                      { store: 'North Point',    status: 'Pending', statusClass: 'amber', rep: 'C. Obua' },
                    ].map((r, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '6px 0', borderBottom: i < 2 ? '0.5px solid rgba(255,255,255,.04)' : 'none', fontSize: '.62rem', color: 'rgba(255,255,255,.55)', alignItems: 'center' }}>
                        <span>{r.store}</span>
                        <span>
                          <span style={{ display: 'inline-block', padding: '2px 7px', borderRadius: '100px', fontSize: '.54rem', fontWeight: 500, background: r.statusClass === 'blue' ? 'rgba(66,165,245,.2)' : 'rgba(217,123,26,.2)', color: r.statusClass === 'blue' ? '#64b5f6' : '#FFB74D' }}>
                            {r.status}
                          </span>
                        </span>
                        <span>{r.rep}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* floating badge */}
            <div className="sz-bob" style={{
              position: 'absolute', bottom: '-16px', left: '16px', zIndex: 2,
              background: 'var(--sz-surf)', borderRadius: '12px', padding: '12px 16px',
              boxShadow: 'var(--sz-sh-lg)', display: 'flex', alignItems: 'center', gap: '10px',
              border: '0.5px solid var(--sz-border)',
            }}>
              <div style={{ width: 32, height: 32, borderRadius: '9px', background: 'var(--sz-brand-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '.78rem', color: 'var(--sz-ink)' }}>GPS Check-In Confirmed</div>
                <div style={{ fontSize: '.68rem', color: 'var(--sz-text-m)', marginTop: '1px' }}>Verified at store location · just now</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ MARQUEE STRIP ══════════ */}
        <div style={{ background: 'var(--sz-ink)', padding: '16px 0', overflow: 'hidden' }}>
          <div className="sz-marquee-track">
            {Array.from({ length: 2 }).flatMap(() => [
              'GPS Real-Time Check-In', 'Local Currency Sales Tracking', 'Multi-Country Operations',
              'Warehouse Variance Reconciliation', 'Supervisor Route Control', 'Offline-Safe Architecture',
              'PDF & CSV Export', '5-Role Access Control', 'Compliance Audit Trails',
            ]).map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '9px',
                fontFamily: 'var(--sz-mono)', fontSize: '.72rem', fontWeight: 500,
                color: 'rgba(255,255,255,.3)', letterSpacing: '.06em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              }}>
                <b style={{ color: 'rgba(255,255,255,.1)', fontWeight: 400, fontSize: '1rem' }}>•</b>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ FEATURES ══════════ */}
        <section id="features" style={{ background: 'var(--sz-surf)', padding: '100px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="sz-reveal">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--sz-mono)', fontSize: '.72rem', color: 'var(--sz-brand-800)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                <span style={{ width: '20px', height: '1.5px', background: 'var(--sz-brand-400)', borderRadius: '2px', display: 'inline-block' }} />
                Core capabilities
              </div>
              <h2 style={{ fontFamily: 'var(--sz-disp)', fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 600, letterSpacing: '-.015em', lineHeight: 1.12, color: 'var(--sz-ink)', maxWidth: '540px' }}>
                Everything your field team needs, <em style={{ fontStyle: 'italic', color: 'var(--sz-brand-800)' }}>nothing they don't.</em>
              </h2>
            </div>

            <div className="sz-reveal" style={{
              marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
              background: 'var(--sz-border)', gap: '0.5px',
              borderRadius: 'var(--sz-r-lg)', overflow: 'hidden', boxShadow: 'var(--sz-sh-sm)',
            }}>
              {[
                {
                  icon: <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>,
                  title: 'GPS Store Check-In',
                  desc: 'Real browser geolocation captures exact coordinates at check-in. Distance validation confirms the representative is physically at the store before the audit form unlocks.',
                  tag: 'Live geolocation',
                },
                {
                  icon: <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
                  title: 'Live Sales Tracking',
                  desc: 'Every sale is recorded against the live product catalogue in your local currency. Cascaded filters let supervisors drill from representative to store to product in seconds.',
                  tag: 'Local currency · Real-time',
                },
                {
                  icon: <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
                  title: 'Variance Reconciliation',
                  desc: 'Orders enter the warehouse queue as Pending. Representatives or supervisors record deliveries and the system computes the exact delta — partial, over, or under — with no manual work.',
                  tag: 'Orders · Deliveries · Delta',
                },
                {
                  icon: <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="3"/></svg>,
                  title: 'Shelf Photo Uploads',
                  desc: 'Field representatives attach live shelf photographs directly from the browser. Images upload to cloud storage and appear as thumbnails inside the supervisor review panel.',
                  tag: 'Cloud storage',
                },
                {
                  icon: <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>,
                  title: 'Compliance Audits',
                  desc: 'Planogram checks, expiry verification, FIFO adherence, pricing compliance, and OOS flagging — all captured in a single structured form per visit, reviewable by supervisors.',
                  tag: 'FIFO · OOS · Planogram',
                },
                {
                  icon: <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
                  title: 'PDF & CSV Exports',
                  desc: 'Generate formatted activity reports as PDF or export filtered data as CSV in one click. Date range, store, and representative filters apply across every export.',
                  tag: 'Reports · PDF · CSV',
                },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="sz-feat-card"
                  style={{ background: 'var(--sz-surf)', padding: '36px 30px', transition: 'background .15s', cursor: 'default' }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'var(--sz-surf)'}
                >
                  <div className="sz-feat-icon" style={{ width: 48, height: 48, borderRadius: '12px', background: 'var(--sz-brand-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'background .15s,transform .15s' }}>
                    {feat.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--sz-font)', fontSize: '1rem', fontWeight: 600, color: 'var(--sz-ink)', marginBottom: '10px' }}>{feat.title}</h3>
                  <p style={{ fontSize: '.875rem', lineHeight: 1.7, color: 'var(--sz-text-2)', fontWeight: 300 }}>{feat.desc}</p>
                  <span style={{ display: 'inline-block', marginTop: '16px', fontFamily: 'var(--sz-mono)', fontSize: '.65rem', color: 'var(--sz-brand-800)', background: 'var(--sz-brand-50)', padding: '3px 9px', borderRadius: 'var(--sz-r-sm)', letterSpacing: '.04em' }}>
                    {feat.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ HOW IT WORKS ══════════ */}
        <section id="how" style={{ background: 'var(--sz-ink)', padding: '100px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="sz-reveal">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--sz-mono)', fontSize: '.72rem', color: 'rgba(255,255,255,.45)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                <span style={{ width: '20px', height: '1.5px', background: 'rgba(255,255,255,.2)', borderRadius: '2px', display: 'inline-block' }} />
                The workflow
              </div>
              <h2 style={{ fontFamily: 'var(--sz-disp)', fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 600, letterSpacing: '-.015em', lineHeight: 1.12, color: '#fff', maxWidth: '540px' }}>
                A closed loop from field to boardroom.
              </h2>
            </div>

            <div className="sz-reveal sz-steps-wrap" style={{ marginTop: '64px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
              {[
                { num: '01', title: 'Route Assignment', desc: 'Supervisors schedule weekday routes — assigning each representative an ordered list of stores. The system filters to only the outlets that representative manages.' },
                { num: '02', title: 'GPS Check-In & Audit', desc: 'The representative arrives, the browser confirms their position, and the compliance form unlocks. SOH, OOS items, shelf share, and photos are all captured in one flow.' },
                { num: '03', title: 'Sales & Orders', desc: 'Daily sales are entered with automatic currency computation. If stock is low, the representative raises a warehouse order — logged as Pending and queued for dispatch.' },
                { num: '04', title: 'Supervisor Review', desc: 'Every submission surfaces in the supervisor dashboard. Reports are approved or flagged. Variance is reconciled. Audit logs capture every action with impact severity levels.' },
              ].map((step, i) => (
                <div key={i} style={{ padding: '0 24px', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    border: '0.5px solid rgba(255,255,255,.15)', background: '#1a2b1b',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--sz-mono)', fontSize: '.75rem', color: 'var(--sz-brand-100,#bbdefb)', marginBottom: '24px',
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: 'var(--sz-font)', fontSize: '.9375rem', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontSize: '.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,.42)', fontWeight: 300 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ ROLES ══════════ */}
        <section id="roles" style={{ background: 'var(--sz-surf)', padding: '100px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="sz-reveal">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--sz-mono)', fontSize: '.72rem', color: 'var(--sz-brand-800)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                <span style={{ width: '20px', height: '1.5px', background: 'var(--sz-brand-400)', borderRadius: '2px', display: 'inline-block' }} />
                Access control
              </div>
              <h2 style={{ fontFamily: 'var(--sz-disp)', fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 600, letterSpacing: '-.015em', lineHeight: 1.12, color: 'var(--sz-ink)', maxWidth: '540px' }}>
                The right tools for <em style={{ fontStyle: 'italic', color: 'var(--sz-brand-800)' }}>every role.</em>
              </h2>
            </div>

            <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
              {/* Role list */}
              <div className="sz-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {[
                  { av: 'M', color: '#e3f2fd', textColor: '#1565c0', name: 'Merchandiser / Sales Rep / Exec', perms: 'GPS check-in · Visit audit · Sales entry · Stock recording · Order logging · Photo upload · Record deliveries · Create stores in field' },
                  { av: 'S', color: '#fdefd9', textColor: '#b45309', name: 'Supervisor', perms: 'Route scheduling · Team monitoring · Report review · Delivery recording · Variance reports · Audit logs' },
                  { av: 'A', color: '#e0e7ff', textColor: '#4338ca', name: 'Administrator', perms: 'Full platform access · User management · Store catalog · Product catalog · All Supervisor privileges' },
                ].map((role, i) => (
                  <div
                    key={i}
                    className={`sz-role-item${activeRole === i ? ' sz-active' : ''}`}
                    onClick={() => setActiveRole(i)}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '18px 20px', borderRadius: 'var(--sz-r-md)' }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: '10px', background: role.color, color: role.textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '.875rem', flexShrink: 0 }}>
                      {role.av}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-ink)' }}>{role.name}</div>
                      <div style={{ marginTop: '5px', fontSize: '.8125rem', color: 'var(--sz-text-2)', lineHeight: 1.6, fontWeight: 300 }}>{role.perms}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Access card */}
              <div className="sz-reveal" style={{ position: 'sticky', top: '80px' }}>
                <div style={{ background: 'var(--sz-ink)', borderRadius: 'var(--sz-r-xl)', overflow: 'hidden', boxShadow: 'var(--sz-sh-lg)' }}>
                  <div style={{ padding: '18px 22px 14px', borderBottom: '0.5px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--sz-font)', fontSize: '.875rem', fontWeight: 600, color: '#fff' }}>{currentRole.title}</span>
                    <span style={{ fontFamily: 'var(--sz-mono)', fontSize: '.62rem', color: '#90caf9', background: 'rgba(66,165,245,.18)', padding: '3px 10px', borderRadius: 'var(--sz-r-pill)', letterSpacing: '.04em' }}>{currentRole.badge}</span>
                  </div>
                  <div style={{ padding: '6px 0' }}>
                    {currentRole.rows.map(([label, yes], i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 22px', borderBottom: i < currentRole.rows.length - 1 ? '0.5px solid rgba(255,255,255,.04)' : 'none', fontSize: '.8rem', color: 'rgba(255,255,255,.52)' }}>
                        <strong style={{ color: 'rgba(255,255,255,.78)', fontWeight: 500 }}>{label as string}</strong>
                        <div className={yes ? 'sz-perm-yes' : 'sz-perm-no'} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ MODULES BENTO ══════════ */}
        <section id="modules" style={{ background: 'var(--sz-surf-2)', padding: '100px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="sz-reveal">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--sz-mono)', fontSize: '.72rem', color: 'var(--sz-brand-800)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                <span style={{ width: '20px', height: '1.5px', background: 'var(--sz-brand-400)', borderRadius: '2px', display: 'inline-block' }} />
                Platform modules
              </div>
              <h2 style={{ fontFamily: 'var(--sz-disp)', fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 600, letterSpacing: '-.015em', lineHeight: 1.12, color: 'var(--sz-ink)', maxWidth: '540px' }}>
                Six modules. One <em style={{ fontStyle: 'italic', color: 'var(--sz-brand-800)' }}>unified</em> console.
              </h2>
            </div>

            <div className="sz-reveal" style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '14px' }}>
              {/* Card 1 — span 2 */}
              <div className="sz-bento-card" style={{ gridColumn: 'span 2', background: 'var(--sz-surf)', borderRadius: 'var(--sz-r-lg)', padding: '28px 26px', border: '0.5px solid var(--sz-border)' }}>
                <div style={{ fontFamily: 'var(--sz-mono)', fontSize: '.65rem', color: 'var(--sz-text-m)', letterSpacing: '.06em', marginBottom: '16px' }}>01</div>
                <div style={{ width: 44, height: 44, borderRadius: '11px', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8" width="20" height="20"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
                </div>
                <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-ink)', marginBottom: '8px' }}>Unified Dashboard</div>
                <p style={{ fontSize: '.8125rem', lineHeight: 1.65, color: 'var(--sz-text-2)', fontWeight: 300 }}>Role-adaptive KPI cards, sales trend charts, interactive map visit traces, and a real-time leaderboard for supervisors.</p>
              </div>

              {/* Card 2 — span 2 */}
              <div className="sz-bento-card" style={{ gridColumn: 'span 2', background: 'var(--sz-surf)', borderRadius: 'var(--sz-r-lg)', padding: '28px 26px', border: '0.5px solid var(--sz-border)' }}>
                <div style={{ fontFamily: 'var(--sz-mono)', fontSize: '.65rem', color: 'var(--sz-text-m)', letterSpacing: '.06em', marginBottom: '16px' }}>02</div>
                <div style={{ width: 44, height: 44, borderRadius: '11px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="#d97706" strokeWidth="1.8" width="20" height="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                </div>
                <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-ink)', marginBottom: '8px' }}>Store Visits & Itinerary</div>
                <p style={{ fontSize: '.8125rem', lineHeight: 1.65, color: 'var(--sz-text-2)', fontWeight: 300 }}>Dual-audience view: field reps see their route checklist, supervisors see the Reps Routing Progress Control Panel with live progress bars per representative.</p>
              </div>

              {/* Card 3 — span 2 */}
              <div className="sz-bento-card" style={{ gridColumn: 'span 2', background: 'var(--sz-surf)', borderRadius: 'var(--sz-r-lg)', padding: '28px 26px', border: '0.5px solid var(--sz-border)' }}>
                <div style={{ fontFamily: 'var(--sz-mono)', fontSize: '.65rem', color: 'var(--sz-text-m)', letterSpacing: '.06em', marginBottom: '16px' }}>03</div>
                <div style={{ width: 44, height: 44, borderRadius: '11px', background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="#7c3aed" strokeWidth="1.8" width="20" height="20"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-ink)', marginBottom: '8px' }}>Dynamic Inventory Logs</div>
                <p style={{ fontSize: '.8125rem', lineHeight: 1.65, color: 'var(--sz-text-2)', fontWeight: 300 }}>Stock-on-hand snapshots per store with colour-coded low-stock alerts, local currency projections, and instant CSV export with date-stamped filenames.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '14px' }}>
                  {['SOH','Min Stock Alerts','CSV Export'].map(t => (
                    <span key={t} style={{ fontFamily: 'var(--sz-mono)', fontSize: '.6rem', padding: '3px 9px', borderRadius: 'var(--sz-r-sm)', border: '0.5px solid var(--sz-border-m)', color: 'var(--sz-text-m)' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Card 4 — span 3 */}
              <div className="sz-bento-card" style={{ gridColumn: 'span 3', background: 'var(--sz-surf)', borderRadius: 'var(--sz-r-lg)', padding: '28px 26px', border: '0.5px solid var(--sz-border)' }}>
                <div style={{ fontFamily: 'var(--sz-mono)', fontSize: '.65rem', color: 'var(--sz-text-m)', letterSpacing: '.06em', marginBottom: '16px' }}>04</div>
                <div style={{ width: 44, height: 44, borderRadius: '11px', background: '#fce7f3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="#db2777" strokeWidth="1.8" width="20" height="20"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                </div>
                <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-ink)', marginBottom: '8px' }}>Supply Variance & Orders</div>
                <p style={{ fontSize: '.8125rem', lineHeight: 1.65, color: 'var(--sz-text-2)', fontWeight: 300 }}>Field representatives raise orders by product and quantity. Representatives or supervisors record deliveries and the platform computes the exact variance delta automatically — no spreadsheets, no manual reconciliation required.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '14px' }}>
                  {['Pending → Partial → Delivered','Auto variance compute'].map(t => (
                    <span key={t} style={{ fontFamily: 'var(--sz-mono)', fontSize: '.6rem', padding: '3px 9px', borderRadius: 'var(--sz-r-sm)', border: '0.5px solid var(--sz-border-m)', color: 'var(--sz-text-m)' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Card 5 — span 3 */}
              <div className="sz-bento-card" style={{ gridColumn: 'span 3', background: 'var(--sz-surf)', borderRadius: 'var(--sz-r-lg)', padding: '28px 26px', border: '0.5px solid var(--sz-border)' }}>
                <div style={{ fontFamily: 'var(--sz-mono)', fontSize: '.65rem', color: 'var(--sz-text-m)', letterSpacing: '.06em', marginBottom: '16px' }}>05 + 06</div>
                <div style={{ width: 44, height: 44, borderRadius: '11px', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="1.8" width="20" height="20"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-ink)', marginBottom: '8px' }}>Reports Builder + Admin Console</div>
                <p style={{ fontSize: '.8125rem', lineHeight: 1.65, color: 'var(--sz-text-2)', fontWeight: 300 }}>Multi-filter reports with PDF and CSV export. Plus a full admin suite: user and store management, product catalog, weekday route scheduling, supervisor comment loops, and a complete audit log trail with impact severity levels.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '14px' }}>
                  {['PDF Reports','User Management','Audit Trail','Route Scheduler'].map(t => (
                    <span key={t} style={{ fontFamily: 'var(--sz-mono)', fontSize: '.6rem', padding: '3px 9px', borderRadius: 'var(--sz-r-sm)', border: '0.5px solid var(--sz-border-m)', color: 'var(--sz-text-m)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT / DEMO FORM ══════════ */}
        <section id="contact" style={{ background: 'var(--sz-surf)', padding: '100px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="sz-reveal">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--sz-mono)', fontSize: '.72rem', color: 'var(--sz-brand-800)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                <span style={{ width: '20px', height: '1.5px', background: 'var(--sz-brand-400)', borderRadius: '2px', display: 'inline-block' }} />
                Get in touch
              </div>
              <h2 style={{ fontFamily: 'var(--sz-disp)', fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 600, letterSpacing: '-.015em', lineHeight: 1.12, color: 'var(--sz-ink)', maxWidth: '540px' }}>
                Ready to see SafeZell <em style={{ fontStyle: 'italic', color: 'var(--sz-brand-800)' }}>in action?</em>
              </h2>
            </div>

            <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
              {/* Left: contact info */}
              <div className="sz-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <p style={{ fontSize: '.9375rem', color: 'var(--sz-text-2)', fontWeight: 300, lineHeight: 1.75, maxWidth: '400px' }}>
                  Whether you manage 5 field representatives or 500, SafeZell scales with your operation. Get in touch to arrange a personalised demo or ask any questions about the platform.
                </p>

                <a href="https://wa.me/256775323200" target="_blank" rel="noopener" className="sz-channel" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 20px', borderRadius: 'var(--sz-r-lg)', border: '0.5px solid var(--sz-border)', background: 'var(--sz-surf-2)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" fill="#1565c0" width="20" height="20">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-ink)' }}>WhatsApp</div>
                    <div style={{ fontSize: '.8125rem', color: 'var(--sz-text-2)', marginTop: '2px', fontWeight: 300 }}>+256 775 323 200</div>
                  </div>
                </a>

                <a href="mailto:safeaiafrica@gmail.com" className="sz-channel" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 20px', borderRadius: 'var(--sz-r-lg)', border: '0.5px solid var(--sz-border)', background: 'var(--sz-surf-2)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="1.8" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-ink)' }}>Email</div>
                    <div style={{ fontSize: '.8125rem', color: 'var(--sz-text-2)', marginTop: '2px', fontWeight: 300 }}>safeaiafrica@gmail.com</div>
                  </div>
                </a>

                <div style={{ padding: '20px', borderRadius: 'var(--sz-r-lg)', background: 'var(--sz-brand-50)', border: '0.5px solid var(--sz-brand-100,#bbdefb)' }}>
                  <div style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--sz-brand-900,#0d47a1)', marginBottom: '6px' }}>What to expect</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      'Live walkthrough of all six modules tailored to your business',
                      'Answers to your specific operational and integration questions',
                      'Pricing and deployment options for your team size and region',
                    ].map(item => (
                      <li key={item} style={{ fontSize: '.8125rem', color: 'var(--sz-brand-800)', display: 'flex', alignItems: 'flex-start', gap: '8px', fontWeight: 300 }}>
                        <svg width="16" height="16" style={{ marginTop: '2px', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="#1e88e5" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: form */}
              <div className="sz-reveal">
                <div style={{ background: 'var(--sz-surf-2)', border: '0.5px solid var(--sz-border)', borderRadius: 'var(--sz-r-xl)', padding: '36px' }}>
                  {formSent ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px 0', gap: '12px' }}>
                      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--sz-brand-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg fill="none" viewBox="0 0 24 24" stroke="#1565c0" strokeWidth="2.2" width="28" height="28">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <div style={{ fontFamily: 'var(--sz-disp)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--sz-ink)' }}>Request sent!</div>
                      <div style={{ fontSize: '.875rem', color: 'var(--sz-text-2)', fontWeight: 300, maxWidth: '280px' }}>We'll reach out via email or WhatsApp within one business day to schedule your demo.</div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div style={{ fontFamily: 'var(--sz-disp)', fontSize: '1.375rem', fontWeight: 600, color: 'var(--sz-ink)', letterSpacing: '-.01em', marginBottom: '6px' }}>Request a Demo</div>
                      <div style={{ fontSize: '.875rem', color: 'var(--sz-text-2)', marginBottom: '28px', fontWeight: 300 }}>Fill in your details and we'll be in touch within one business day.</div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                          <label style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--sz-text-2)', letterSpacing: '.01em' }}>First Name</label>
                          <input ref={fnameRef} className="sz-input" type="text" placeholder="Jane" required />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                          <label style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--sz-text-2)', letterSpacing: '.01em' }}>Last Name</label>
                          <input ref={lnameRef} className="sz-input" type="text" placeholder="Nakato" />
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                        <label style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--sz-text-2)' }}>Work Email</label>
                        <input ref={femailRef} className="sz-input" type="email" placeholder="jane@company.com" required />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                        <label style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--sz-text-2)' }}>WhatsApp / Phone (optional)</label>
                        <input ref={fphoneRef} className="sz-input" type="tel" placeholder="+254 700 000 000" />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                          <label style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--sz-text-2)' }}>Company Name</label>
                          <input ref={fcompanyRef} className="sz-input" type="text" placeholder="Acme FMCG Ltd" required />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                          <label style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--sz-text-2)' }}>Team Size</label>
                          <select ref={fteamRef} className="sz-select sz-input">
                            <option value="" disabled>Select range</option>
                            <option>1–10 reps</option>
                            <option>11–50 reps</option>
                            <option>51–200 reps</option>
                            <option>200+ reps</option>
                          </select>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                        <label style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--sz-text-2)' }}>Country / Region of Operation</label>
                        <input ref={fcountryRef} className="sz-input" type="text" placeholder="e.g. Kenya, Nigeria, South Africa…" />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                        <label style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--sz-text-2)' }}>What are you looking to solve?</label>
                        <textarea ref={fmessageRef} className="sz-textarea" placeholder="Brief description of your current challenges or what you'd like to see in the demo…" />
                      </div>

                      <button
                        type="submit"
                        style={{
                          width: '100%', marginTop: '6px',
                          background: 'var(--sz-brand-400)', color: '#fff',
                          padding: '13px 24px', borderRadius: 'var(--sz-r-pill)',
                          fontFamily: 'var(--sz-font)', fontSize: '.9375rem', fontWeight: 500,
                          border: 'none', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
                          transition: 'background .15s,transform .15s,box-shadow .15s',
                          boxShadow: '0 4px 16px rgba(66,165,245,.28)',
                        }}
                        onMouseEnter={e => { const b = e.currentTarget; b.style.background = 'var(--sz-brand-600)'; b.style.transform = 'translateY(-1px)'; }}
                        onMouseLeave={e => { const b = e.currentTarget; b.style.background = 'var(--sz-brand-400)'; b.style.transform = 'none'; }}
                      >
                        Send Demo Request
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ CTA BAND ══════════ */}
        <div className="sz-cta-band" style={{ background: 'var(--sz-brand-900)', padding: '80px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: 'var(--sz-mono)', fontSize: '.7rem', color: '#90caf9', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Ready to deploy</div>
          <h2 style={{ fontFamily: 'var(--sz-disp)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, color: '#fff', letterSpacing: '-.015em', maxWidth: '520px', margin: '0 auto 14px' }}>
            Put SafeZell to work across your field team today.
          </h2>
          <p style={{ fontSize: '.9375rem', color: 'rgba(255,255,255,.45)', maxWidth: '400px', margin: '0 auto 36px', fontWeight: 300, lineHeight: 1.7 }}>
            From a handful of representatives to hundreds of routes — SafeZell scales with your operation, wherever you're based.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                background: '#fff', color: 'var(--sz-ink)',
                padding: '13px 28px', borderRadius: 'var(--sz-r-pill)',
                fontFamily: 'var(--sz-font)', fontSize: '.9375rem', fontWeight: 500,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px',
                transition: 'background .15s,transform .15s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='var(--sz-brand-50)'; el.style.transform='translateY(-1px)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='#fff'; el.style.transform='none'; }}
            >
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Request a Demo
            </a>
            <a
              href="https://wa.me/256775323200"
              target="_blank"
              rel="noopener"
              style={{
                background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.8)',
                padding: '13px 28px', borderRadius: 'var(--sz-r-pill)',
                fontFamily: 'var(--sz-font)', fontSize: '.9375rem', fontWeight: 400,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px',
                border: '0.5px solid rgba(255,255,255,.15)',
                transition: 'background .15s,transform .15s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='rgba(255,255,255,.14)'; el.style.transform='translateY(-1px)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='rgba(255,255,255,.08)'; el.style.transform='none'; }}
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="rgba(255,255,255,.7)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
