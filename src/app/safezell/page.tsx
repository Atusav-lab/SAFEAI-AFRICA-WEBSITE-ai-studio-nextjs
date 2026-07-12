'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, CheckCircle, TrendingUp, AlertTriangle, Image as ImageIcon,
  FileText, ShieldCheck, ArrowRight, UserCheck, BarChart3, Database,
  Settings, CheckSquare, Layers, Download, Check
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SafeZell() {
  const [activeTab, setActiveTab] = useState<'rep' | 'supervisor' | 'executive'>('rep')
  const [activeModule, setActiveModule] = useState(0)

  // Simulation State
  const [simStep, setSimStep] = useState(0)
  const [salesValue, setSalesValue] = useState(150000)
  const [simLog, setSimLog] = useState<string[]>([
    'System: Initialized route assignment for Representative "Amara"',
  ])

  const triggerSimulationStep = () => {
    if (simStep === 0) {
      setSimStep(1)
      setSimLog(prev => [
        ...prev,
        'GPS Audit: Amara checked in at Store #14 ("Mega Supermarket"). Geofence validated (distance: 4.2m). Check-in unlocked.',
      ])
    } else if (simStep === 1) {
      setSimStep(2)
      setSalesValue(prev => prev + 450000)
      setSimLog(prev => [
        ...prev,
        'Sales Ledger: Amara recorded order of 15x SafeFood Packs. Cash paid: UGX 450,000. Balance reconciled.',
      ])
    } else if (simStep === 2) {
      setSimStep(3)
      setSimLog(prev => [
        ...prev,
        'Compliance: Expiry check completed. 2 expired items found & flagged. Audit synchronized to supervisors.',
      ])
    } else {
      setSimStep(0)
      setSalesValue(150000)
      setSimLog(['System: Initialized route assignment for Representative "Amara"'])
    }
  }

  const features = [
    {
      icon: MapPin,
      title: 'GPS Store Check-In',
      desc: 'Real browser geolocation captures exact coordinates at check-in. Distance validation confirms the representative is physically at the store before the audit form unlocks.',
      tag: 'Live Geolocation',
    },
    {
      icon: TrendingUp,
      title: 'Live Sales Tracking',
      desc: 'Every sale is recorded against the live product catalogue in your local currency. Cascaded filters let supervisors drill from representative to store to product in seconds.',
      tag: 'Real-time Catalogues',
    },
    {
      icon: AlertTriangle,
      title: 'Variance Reconciliation',
      desc: 'Cash, inventory, and mobile money records reconciled instantly. Automatically highlights gaps, discrepancies, and delayed banking receipts.',
      tag: 'Audit Control',
    },
    {
      icon: ImageIcon,
      title: 'Shelf Photo Uploads',
      desc: 'Verify merchandising, shelf share, and competitor positioning with timestamped, geofenced uploads. Perfect for remote auditing.',
      tag: 'Visual Merchandising',
    },
    {
      icon: CheckSquare,
      title: 'Compliance Audits',
      desc: 'Custom dynamic checklists guide reps through product placement, expiry verification, and price tag checks with structured reporting.',
      tag: 'Store Checklists',
    },
    {
      icon: FileText,
      title: 'PDF & CSV Exports',
      desc: 'Export complete summaries, representative logs, performance cards, or consolidated financial tallies with one click.',
      tag: 'Automated Reports',
    },
  ]

  const howItWorks = [
    { step: '01', title: 'Route Assignment', desc: 'Supervisors assign specific store chains and daily geofenced territories to reps.' },
    { step: '02', title: 'GPS Check-In & Audit', desc: 'Representatives arrive on-site, check in via validated GPS, and perform stock count audits.' },
    { step: '03', title: 'Sales & Orders', desc: 'Orders are processed directly inside the catalog, automatically reconciling cash & inventory ledger.' },
    { step: '04', title: 'Supervisor Review', desc: 'Instant real-time sync forwards discrepancies or compliance warnings for senior approval.' },
  ]

  const roles = {
    rep: {
      title: 'For Field Representatives',
      desc: 'A robust, lightweight mobile view that operates seamlessly, ensuring straightforward catalog searching, stock logging, and frictionless invoice uploads.',
      bullets: ['Easy catalog searching', 'Frictionless stock logging', 'Validated GPS check-in', 'Instant cash entries'],
    },
    supervisor: {
      title: 'For Managers & Supervisors',
      desc: 'A multi-route monitoring dashboard showing live check-in audits, performance tracking, and immediate variance flags.',
      bullets: ['Live route oversight', 'Instant variance logs', 'Photo catalog audits', 'Discrepancy review boards'],
    },
    executive: {
      title: 'For Executive Leadership',
      desc: 'High-level business intelligence, predictive demand analysis, regional growth vectors, and financial ledger consolidation.',
      bullets: ['Territory profit mapping', 'Consolidated ledgers', 'Product-demand heatmaps', 'Resource allocation reports'],
    },
  }

  const modules = [
    { name: 'Catalog Manager', desc: 'Create, update, and manage price catalogues across dynamic localized zones.' },
    { name: 'Live Audit Stream', desc: 'Watch representatives complete checklists, take shelf photos, and submit logs in real-time.' },
    { name: 'Route Optimizer', desc: 'Intelligent spatial routing to maximize stores visited and minimize transportation costs.' },
    { name: 'Financial Ledger', desc: 'Dual-reconciling ledger that tracks sales cash, mobile money transactions, and banked balances.' },
  ]

  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-3xl filter blur-[120px] opacity-40 pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                Field Sales Management System
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Field Sales. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Fully Visible.
                </span> <br />
                Always Accountable.
              </h1>
              <p className="text-lg text-slate-300 font-lato leading-relaxed max-w-lg">
                SafeZell solves the primary vulnerability of FMCG distribution: the visibility gap between field reps and headquarters. Know exactly where your stock is, what has been sold, and where payments are.
              </p>
              <div className="flex gap-4">
                <a href="#demo" className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
                  Try Live Simulator
                </a>
                <a href="/contact-us" className="px-6 py-3.5 border border-slate-700 hover:bg-slate-800 font-semibold rounded-xl transition-colors">
                  Request Custom Demo
                </a>
              </div>
            </div>

            {/* Simulated Live Console Component */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden" id="demo">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-500 font-mono ml-2">safezell_supervisor_console_v1.2</span>
                </div>
                <span className="px-2.5 py-1 bg-cyan-500/15 border border-cyan-400/20 text-[10px] uppercase font-bold text-cyan-400 rounded-full">
                  Interactive Demo
                </span>
              </div>

              {/* Console Dashboard details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
                  <div className="text-xs text-slate-400 font-mono">Today's Sales Revenue</div>
                  <div className="text-xl font-bold text-cyan-400 mt-1">UGX {salesValue.toLocaleString()}</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
                  <div className="text-xs text-slate-400 font-mono">Simulated Step State</div>
                  <div className="text-sm font-semibold text-slate-200 mt-1.5 uppercase">
                    {simStep === 0 && '1. Idle Route'}
                    {simStep === 1 && '2. GPS Auditing'}
                    {simStep === 2 && '3. Sales Logged'}
                    {simStep === 3 && '4. Checklist Sync'}
                  </div>
                </div>
              </div>

              {/* Feed logs */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 h-48 overflow-y-auto mb-4 font-mono text-[11px] leading-relaxed text-slate-300 space-y-2">
                {simLog.map((log, lIdx) => (
                  <div key={lIdx} className="flex gap-1.5 items-start">
                    <span className="text-cyan-400 shrink-0">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={triggerSimulationStep}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/10"
              >
                {simStep === 3 ? 'Reset Simulator' : 'Trigger Next Simulated Action'}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 bg-slate-950 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest block mb-2">Core Capabilities</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                Everything your field team needs, nothing they don't.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feat, i) => {
                const Icon = feat.icon
                return (
                  <div
                    key={i}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-lato mb-4">{feat.desc}</p>
                    <span className="text-xs text-cyan-400 bg-cyan-400/5 px-2.5 py-1 rounded-full border border-cyan-400/10">
                      {feat.tag}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How it works (Process flow) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest block mb-2">Process Loop</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              A closed loop from field to boardroom.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative p-6 bg-slate-900 border border-slate-800/60 rounded-2xl">
                <div className="text-4xl font-black text-cyan-500/20 font-mono mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 font-lato leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roles Segment */}
        <section className="py-20 bg-slate-950 border-t border-[#1a2b1b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest block mb-2">Persona Alignment</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                The right tools for every role.
              </h2>
            </div>

            {/* Role selector tabs */}
            <div className="flex justify-center gap-4 mb-12">
              {(['rep', 'supervisor', 'executive'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${
                    activeTab === tab
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab === 'rep' && 'Field Representative'}
                  {tab === 'supervisor' && 'Supervisor / Manager'}
                  {tab === 'executive' && 'Executive Leadership'}
                </button>
              ))}
            </div>

            {/* Active role data card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
                  {roles[activeTab].title}
                </h3>
                <p className="text-slate-300 font-lato leading-relaxed text-sm mb-6">
                  {roles[activeTab].desc}
                </p>
              </div>
              <div className="space-y-3">
                {roles[activeTab].bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                    <Check size={16} className="text-cyan-400 flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modules Console details */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest block mb-2">System Modules</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Six modules. One unified console.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, mIdx) => (
              <div
                key={mIdx}
                onClick={() => setActiveModule(mIdx)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  activeModule === mIdx
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/5 scale-[1.02]'
                    : 'bg-slate-900 border-slate-800/80 hover:border-slate-700/80'
                }`}
              >
                <Layers className="text-cyan-400 mb-4 animate-pulse" size={24} />
                <h3 className="font-bold text-white text-base mb-1.5">{mod.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-lato">{mod.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
