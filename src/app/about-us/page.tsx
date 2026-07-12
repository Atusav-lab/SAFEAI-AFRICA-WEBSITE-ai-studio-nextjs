'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, Award, Eye, Heart, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutUs() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-20 lg:py-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
            >
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Harnessing the power of responsible artificial intelligence to drive sustainable growth across Africa.
            </motion.p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#0061B2] mb-3 block">Company Overview</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d] mb-6">
                Pioneering Responsible AI Solutions for Africa
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-lato">
                <p>
                  SAFE AI-AFRICA is dedicated to delivering innovative digital solutions tailored for the African landscape. We harness the power of responsible artificial intelligence to address pressing challenges in healthcare, agriculture, education, and sustainable development across the continent.
                </p>
                <p>
                  Our team combines cutting-edge AI expertise with deep understanding of African contexts to create technology solutions that are both innovative and locally relevant. We are committed to ethical AI development and building African capacity in AI/ML technologies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3" />
              <Image
                src="/SAFEAI_ASSETS/safeaiafricateam.jpg"
                alt="SAFE AI Africa Team"
                width={600}
                height={400}
                className="relative z-10 w-full max-w-md mx-auto h-auto rounded-3xl shadow-lg border border-slate-100 object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#0061B2] mb-6">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0b1b4d] mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To leverage Artificial Intelligence to solve Africa's most pressing challenges, empowering communities and organizations to achieve sustainable development and improved quality of life.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0b1b4d] mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To be Africa's leading AI innovation hub, driving transformative change through ethical and inclusive artificial intelligence solutions that benefit all Africans.
                </p>
              </div>

              {/* Core Values */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 mb-6">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0b1b4d] mb-4">Core Values</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We are guided by Integrity, Innovation, Inclusivity, Excellence, and Ubuntu (humanity towards others). We believe in ethical AI that serves all communities equitably.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#0061B2] mb-2 block">Why Choose Us?</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d]">Built on Context, Quality, and Ethics</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Impactful AI Solutions',
                  desc: 'We focus on building AI that addresses real-world challenges in healthcare, agriculture, and education across Africa.'
                },
                {
                  title: 'Ethical & Inclusive AI',
                  desc: 'Our commitment to Ubuntu ensures that our AI models are developed ethically, avoiding bias and promoting inclusivity for all communities.'
                },
                {
                  title: 'Local Data & Context',
                  desc: 'We leverage region-specific data to create AI solutions that understand and serve the unique cultural and geographic nuances of the continent.'
                },
                {
                  title: 'Scalable Innovation',
                  desc: 'Our technologies are designed to scale, providing high-impact digital transformation for startups and established enterprises alike.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <CheckCircle2 className="text-[#00E5FF] mb-4" size={24} />
                  <h4 className="text-lg font-bold text-[#0b1b4d] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UN SDGs */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Award className="mx-auto text-yellow-500 mb-6" size={48} />
            <h2 className="text-3xl font-bold text-[#0b1b4d] mb-6">Sustainable Development Goals</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-lato mb-8 text-lg">
              At SAFE AI-AFRICA, we are committed to contributing to the United Nations Sustainable Development Goals. Our AI solutions directly address SDG 3 (Good Health), SDG 2 (Zero Hunger), SDG 4 (Quality Education), and SDG 9 (Industry & Innovation). We believe technology should drive positive change for all Africans.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-700">
              {['SDG 2: Zero Hunger', 'SDG 3: Good Health', 'SDG 4: Quality Education', 'SDG 9: Industry & Innovation'].map((sdg) => (
                <span key={sdg} className="px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
                  {sdg}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
