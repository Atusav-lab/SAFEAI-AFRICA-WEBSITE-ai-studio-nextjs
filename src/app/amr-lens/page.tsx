'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Play, Cpu, Shield, Landmark, Focus, FileText, CloudLightning, X } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AMRLens() {
  const [videoOpen, setVideoOpen] = useState(false)

  const capabilities = [
    {
      icon: Focus,
      title: 'Precision Diagnostics',
      desc: 'Advanced computer vision measurements of inhibition zones with standardized clinical interpretation.',
    },
    {
      icon: Shield,
      title: 'Antimicrobial Stewardship',
      desc: 'Automated WHO AWaRe classification to ensure optimal treatment selection and preserve drug efficacy.',
    },
    {
      icon: Landmark,
      title: 'Regional Surveillance',
      desc: 'Contribute to a pan-African network mapping resistance patterns in real-time for improved public health response.',
    },
    {
      icon: Cpu,
      title: 'Expert Validation',
      desc: 'Maintain full professional control with the ability to review and override AI-assisted measurements.',
    },
    {
      icon: FileText,
      title: 'Interpreted Reports',
      desc: 'Generate comprehensive laboratory reports including localized clinical guidance and stewardship recommendations.',
    },
    {
      icon: CloudLightning,
      title: 'Network Synchronization',
      desc: 'Seamlessly sync validated results with national surveillance databases to strengthen healthcare infrastructure.',
    },
  ]

  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-900 text-white">
        {/* Breadcrumb / Back button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <a
            href="/solution"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products & Services
          </a>
        </div>

        {/* Hero Section with Left Text and Right Video Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Live • Africa-Wide Resistance Network
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              Advanced Antimicrobial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Stewardship
              </span>
            </h1>
            <p className="text-lg text-slate-300 font-lato leading-relaxed max-w-2xl">
              "Senior Microbiologist AI" for transparent reasoning and precision measurement of zones of inhibition.
              Maps results against CLSI/EUCAST breakpoints and WHO AWaRe classification, offering clinical stewardship assist
              and real-time regional surveillance across Africa.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center">
                <div className="text-2xl font-bold text-cyan-400">AI</div>
                <div className="text-xs text-slate-400 mt-1">Driven Stewardship</div>
              </div>
              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center">
                <div className="text-2xl font-bold text-cyan-400">WHO</div>
                <div className="text-xs text-slate-400 mt-1">Standard Aligned</div>
              </div>
              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center">
                <div className="text-2xl font-bold text-cyan-400">LIVE</div>
                <div className="text-xs text-slate-400 mt-1">Surveillance</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/Atusav-lab/Safeaiafrica.com-/releases/download/v1.0.0/amr-lens-africa.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02] inline-block text-center"
              >
                Download Android APK
              </a>
            </div>

            <div className="border-t border-slate-800 pt-6 flex items-center gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Developed By</p>
                <h4 className="text-lg font-bold text-slate-300">SAFE AI-AFRICA</h4>
                <a href="/" className="text-xs text-cyan-400 hover:underline">
                  safeaiafrica.com
                </a>
              </div>
            </div>
          </div>

          {/* Hero Right Media Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setVideoOpen(true)}
              className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-slate-700 group"
            >
              <img
                src="https://i.ytimg.com/vi/OoL6qDec7m0/hqdefault.jpg"
                alt="AMR Lens Workflow"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors" />
              <button
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-600 p-4 rounded-full shadow-2xl group-hover:scale-110 transition-transform flex items-center justify-center animate-pulse"
              >
                <Play size={28} className="fill-white text-white ml-0.5" />
              </button>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 max-w-xs">
              Watch the tool in action: Precision inhibition zone measurement & AI clinical stewardship.
            </p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 bg-slate-950 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest block mb-2">Capabilities</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                Everything required to combat AMR at scale
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon
                return (
                  <div
                    key={i}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-lato">{cap.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Video Overlay Modal */}
        <AnimatePresence>
          {videoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <div className="absolute inset-0 cursor-pointer" onClick={() => setVideoOpen(false)} />
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl max-w-4xl w-full aspect-video z-10"
              >
                <button
                  onClick={() => setVideoOpen(false)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <iframe
                  src="https://www.youtube.com/embed/OoL6qDec7m0?autoplay=1"
                  title="AMR Lens Demonstration Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
