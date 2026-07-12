'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-900 text-white flex flex-col justify-between">
        {/* Main hero area */}
        <section className="flex-grow py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text details */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={14} />
                Launching Soon
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Elevating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  African Talent
                </span>
              </h1>
              <p className="text-lg text-slate-300 font-lato leading-relaxed max-w-lg">
                We are building premium training pipelines, certification programs, and job placement engines designed to empower the next generation of African AI developers, engineers, and product leaders.
              </p>

              {/* Sub-features list */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white text-base">Advanced AI Training</h3>
                    <p className="text-slate-400 text-sm font-lato">Hands-on curriculum centering computer vision, NLP, and genomics analytics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white text-base">Elite Job Matching</h3>
                    <p className="text-slate-400 text-sm font-lato">Direct pipelines connecting top-tier talent to international teams and tech groups.</p>
                  </div>
                </div>
              </div>

              {/* Join waitlist form */}
              <div className="pt-6 max-w-md">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-400/20 rounded-xl flex items-center gap-3 text-emerald-400"
                  >
                    <CheckCircle2 size={20} />
                    <span className="text-sm font-semibold">You're on the list! We'll notify you as soon as we launch.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email to join the waitlist"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="flex-grow bg-transparent px-4 py-2.5 text-sm focus:outline-none placeholder-slate-500 text-white"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white font-semibold rounded-lg text-sm flex items-center gap-1.5 transition-all"
                    >
                      Notify Me
                      <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Visual background item */}
            <div className="relative flex justify-center">
              <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full filter blur-[100px] animate-pulse" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center">
                <div className="w-16 h-16 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/20">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">SAFE Academy</h3>
                <p className="text-slate-400 text-sm font-lato mb-6 leading-relaxed">
                  Join a community of thousands learning machine learning, data engineering, and tech leadership across Africa.
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 bg-slate-950/40 rounded-xl text-xs border border-slate-800">
                    <span className="text-slate-400 font-medium">Curriculum Blueprint</span>
                    <span className="text-cyan-400 font-semibold uppercase">100% Ready</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-950/40 rounded-xl text-xs border border-slate-800">
                    <span className="text-slate-400 font-medium">Partner Pipelines</span>
                    <span className="text-cyan-400 font-semibold uppercase font-mono">10+ Secured</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-950/40 rounded-xl text-xs border border-slate-800">
                    <span className="text-slate-400 font-medium">LMS Platform</span>
                    <span className="text-amber-400 font-semibold uppercase">Beta Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
