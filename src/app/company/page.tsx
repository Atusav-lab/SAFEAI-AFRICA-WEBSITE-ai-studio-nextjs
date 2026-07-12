'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Landmark, ShieldCheck, Heart, Users, Scale, Award, Eye, Target } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Company() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Integrity',
      desc: 'We are committed to absolute honesty, transparency, and ethical practices in all our operations and AI models.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      desc: 'We continuously push boundaries, creating high-impact custom AI solutions that address African challenges.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      desc: 'Our technologies are designed to serve and elevate all communities, bridging gender and regional divides.',
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'We strive for pristine quality in everything we build, ensuring professional excellence in our clinical and sales systems.',
    },
    {
      icon: Heart,
      title: 'Ubuntu',
      desc: '"I am because we are." We place human dignity, community engagement, and social responsibility at the core of our tech.',
    },
  ]

  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-20 lg:py-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Our Company
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-lato">
              Empowering Africa through responsible innovation and custom artificial intelligence systems.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#00499E] flex items-center justify-center mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1b4d] mb-4">Our Mission</h3>
                <p className="text-slate-600 font-lato leading-relaxed">
                  To design and deploy advanced artificial intelligence solutions tailored specifically for African markets, solving complex healthcare, agricultural, educational, and business issues.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#0061B2] flex items-center justify-center mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1b4d] mb-4">Our Vision</h3>
                <p className="text-slate-600 font-lato leading-relaxed">
                  To become Africa's premier technology enterprise, driving digital sovereignty and industrial growth through locally-sourced data and highly ethical AI systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00499E] mb-2 block">Foundations</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d]">Our Core Values</h2>
              <p className="text-slate-500 font-lato mt-2">The principles that govern our corporate culture and product architecture.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((val, i) => {
                const Icon = val.icon
                return (
                  <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm text-[#00499E] flex items-center justify-center mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0b1b4d] mb-2">{val.title}</h3>
                    <p className="text-sm text-slate-500 font-lato leading-relaxed">{val.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Accreditations & Certifications */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Landmark className="mx-auto text-cyan-500 mb-4" size={40} />
              <h2 className="text-3xl font-bold text-[#0b1b4d]">Accreditations & Certifications</h2>
              <p className="text-slate-500 font-lato mt-2">We are a fully registered, compliant, and accredited technology group.</p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 max-w-xl w-full text-center">
                <h3 className="text-xl font-bold text-[#0b1b4d] mb-4">Sisonkebiotik Certificate</h3>
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-xl border border-slate-200 shadow-inner bg-slate-50 p-2">
                  <Image
                    src="/SAFEAI_ASSETS/sisonkebiotik-certificate.webp"
                    alt="Sisonkebiotik Certificate"
                    fill
                    sizes="(min-width: 640px) 384px, 90vw"
                    className="object-contain"
                  />
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
