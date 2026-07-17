'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ExternalLink, ArrowRight, Dna, FlaskConical, BarChart3, ShieldCheck,
  Heart, Leaf, Smartphone, CheckSquare, Settings, Cpu, GraduationCap, Scale
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const products = [
  {
    id: 'safeseq',
    title: 'SAFESeq',
    category: 'Healthcare',
    subtitle: 'AI-Powered Genomic Infrastructure • Bioinformatics • CRISPR • AMR • Drug Discovery • MCP',
    desc: 'SAFESeq is Africa\'s first unified, AI-powered genomic analysis platform — built to close the continent\'s genomic data gap while serving the global scientific community. Instead of juggling five or more disconnected foreign tools to analyse a single DNA sequence, researchers, students, and public health institutions can now run CRISPR guide design, primer design, plasmid mapping, 3D protein structure prediction, antimicrobial resistance (AMR) screening, and phylogenetic analysis — all from one browser tab, with no installation and no code required. Every result is interpreted in plain language by a built-in AI assistant trained on the African and global pathogen landscape, and the platform is the first in Africa to expose its tools via Model Context Protocol (MCP), making it natively usable by AI agents like Claude and ChatGPT. Data stays on African-controlled cloud infrastructure — sovereign by design, built for the world.',
    image: '/SAFEAI_ASSETS/safeseq.webp',
    link: 'https://safeseq.safeaiafrica.com',
    external: true,
  },
  {
    id: 'safekemia',
    title: 'SAFEKemia',
    category: 'Education',
    subtitle: 'Next-Gen Chemistry Education',
    desc: 'The most advanced chemistry virtual lab designed for African secondary schools. Interactive simulations, high-fidelity visualizations, and an AI tutor available 24/7. Dive deep into the elements with an interactive periodic table and perform safe, simulated experiments in the virtual reaction lab. Built following international standards.',
    image: '/SAFEAI_ASSETS/safekemia.png',
    link: 'https://safekemia.safeaiafrica.com',
    external: true,
  },
  {
    id: 'safezell',
    title: 'SafeZell',
    category: 'Fintech & Enterprise',
    subtitle: 'Field Sales Management • Tracking • FMCG',
    desc: 'A comprehensive closed-loop operations platform designed specifically for FMCG companies and field sales teams across Africa. SafeZell seamlessly connects merchandisers, sales representatives, supervisors, and warehouse staff with validated GPS check-ins, dynamic local currency sales, and real-time ledgers.',
    image: '/SAFEAI_ASSETS/merchandiser-management-system-google-ai-studio-google-chrome-07-jun-26-03-57-50-2.png',
    link: '/safezell',
    external: false,
  },
  {
    id: 'invoice-master',
    title: 'Invoice Master Pro',
    category: 'Fintech & Enterprise',
    subtitle: 'Fintech • Enterprise • AI Advisor • Inventory • Procurement',
    desc: 'Meet your Smart AI Advisor — a next-generation business management platform. Simply ask questions in plain language and get instant insights on taxes, profits, and stock levels. Invoice Master Pro lets you effortlessly handle unlimited quotations, invoices, products, and procurement, all backed by real-time syncing.',
    image: '/SAFEAI_ASSETS/invoice-master.webp',
    link: 'https://invoicemasterpro.safeaiafrica.com',
    external: true,
  },
  {
    id: 'safelytics',
    title: 'SAFElytics',
    category: 'Data & Analytics',
    subtitle: 'Data Science • No-code ML • AutoEDA • Privacy-First',
    desc: 'SAFElytics is a powerful, privacy-first, no-code AI platform that runs 100% locally in your browser. Turn your data into actionable insights with automated exploratory data analysis (AutoEDA), smart data cleaning, and dynamic interactive dashboards. Supports tabular workloads, forecasting, NLP, and computer vision.',
    image: '/SAFEAI_ASSETS/safelytics.webp',
    link: 'https://safelytics.safeaiafrica.com',
    external: true,
  },
  {
    id: 'qms',
    title: 'SafeFood Manager',
    category: 'Fintech & Enterprise',
    subtitle: 'Food Safety • HACCP • GFSI • BRC • ISO 22000 • AI Compliance',
    desc: 'An AI-driven ecosystem that replaces fragmented spreadsheets and dusty binders with a single, precision-engineered platform. Manage real-time deviations with automated alerts, close the loop on CAPA through AI-guided corrective actions, digital HACCP planning, instant traceability, and version-controlled document logs.',
    image: '/SAFEAI_ASSETS/dashboard-preview-final.webp',
    link: 'https://safefoodmanager.safeaiafrica.com',
    external: true,
  },
  {
    id: 'mental-health',
    title: 'Mental Health Bot',
    category: 'Healthcare',
    subtitle: 'Mental Health • Social Good • NLP',
    desc: 'AI-driven natural language support chatbot designed to tackle stigma, provide non-judgmental wellness advisory, and bridge resource scarcity across communities in Africa.',
    image: '/SAFEAI_ASSETS/mental-health-chatbot.webp',
    link: '/contact-us',
    external: false,
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Detection',
    category: 'Agriculture',
    subtitle: 'Agriculture • Sustainability • Vision',
    desc: 'Aiding African smallholder farmers with real-time computer vision leaf analyses to instantly identify, classify, and manage crop diseases to protect regional yields.',
    image: '/SAFEAI_ASSETS/plant-disease-detection.webp',
    link: '/contact-us',
    external: false,
  },
  {
    id: 'safeuzazi',
    title: 'SAFEUZAZI AI',
    category: 'Healthcare',
    subtitle: 'Maternal Health • Pregnancy • Family Planning • AI • Africa',
    desc: 'SafeUzazi AI offers week-by-week baby growth tracking, an AI-powered symptom checker for early pregnancy problems, and personalized family planning guidance — all rooted in local wisdom and African community values. Includes Sisters Aoede, a compassionate AI assistant.',
    image: '/SAFEAI_ASSETS/safeuzazi-ai-simple-care-for-african-women-google-chrome-16-apr-26-18-13-46-2.png',
    link: 'https://safeuzazi.safeaiafrica.com',
    external: true,
  },
  {
    id: 'amr-lens',
    title: 'AMR Lens Africa',
    category: 'Healthcare',
    subtitle: 'Healthcare • Lab Medicine • AMR • Diagnostics',
    desc: 'AI-powered antimicrobial resistance scanner featuring a "Senior Microbiologist AI" for transparent reasoning and precision measurement of zones of inhibition. Maps results against CLSI/EUCAST breakpoints and WHO AWaRe classification.',
    image: '/SAFEAI_ASSETS/amr-lens-africa.webp',
    link: '/amr-lens',
    external: false,
  },
]

const serviceCategories = [
  {
    id: 'ai-training',
    title: 'AI Training & Advocacy',
    services: [
      {
        icon: GraduationCap,
        title: 'AI Skills Training',
        desc: 'Advanced hands-on masterclasses, workshops, and courses designed to upskill corporate, healthcare, and research professionals in deep learning and Python.',
      },
      {
        icon: Scale,
        title: 'AI Policy & Advocacy',
        desc: 'Helping formulate safe, inclusive, and highly ethical regional AI frameworks that respect African data privacy regulations and maximize local impact.',
      },
    ],
  },
  {
    id: 'bespoke',
    title: 'Bespoke AI Solutions',
    services: [
      {
        icon: Cpu,
        title: 'Custom AI Development',
        desc: 'End-to-end design and deployment of tailored computer vision, natural language processing, and tabular prediction models matching your company workflows.',
      },
      {
        icon: Settings,
        title: 'AI Integration & Consulting',
        desc: 'Full audit of existing technological layers to seamlessly integrate API proxies, large language models, and cloud database storage without downtime.',
      },
    ],
  },
]

export default function Solution() {
  const [filter, setFilter] = useState('All')

  const productCategories = ['All', 'Healthcare', 'Agriculture', 'Education', 'Fintech & Enterprise', 'Data & Analytics']

  const filteredProducts = products.filter(p => filter === 'All' || p.category === filter)

  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-28 lg:pt-32 min-h-screen bg-slate-50 text-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-20 lg:py-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">Products & Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-lato">
              A comprehensive suite of AI-powered tools transforming education, healthcare, agriculture, and business across Africa.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-200">
          <div className="flex flex-wrap gap-2 justify-center">
            {productCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  filter === cat
                    ? 'bg-[#00499E] text-white shadow-lg shadow-blue-900/10'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            {filteredProducts.map(p => (
              <div
                key={p.id}
                id={p.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-101 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#00499E]/90 text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20">
                    {p.category}
                  </span>
                </div>

                {/* Detail content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#0b1b4d] mb-1.5">{p.title}</h3>
                  <div className="text-[11px] font-bold tracking-wider text-[#0061B2] uppercase mb-4 leading-relaxed">
                    {p.subtitle}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-lato mb-8 flex-grow">
                    {p.desc}
                  </p>

                  <div className="border-t border-slate-100 pt-6 mt-auto">
                    <a
                      href={p.link}
                      target={p.external ? '_blank' : undefined}
                      rel={p.external ? 'noopener noreferrer' : undefined}
                      className="w-full py-3 bg-blue-50 text-[#00499E] hover:bg-[#00499E] hover:text-white font-bold rounded-xl text-sm flex items-center justify-center gap-1.5 transition-all"
                    >
                      {p.external ? (
                        <>
                          Visit Platform
                          <ExternalLink size={14} />
                        </>
                      ) : (
                        <>
                          View Details
                          <ArrowRight size={14} />
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Consulting Sections */}
        {serviceCategories.map((cat, idx) => (
          <section key={idx} id={cat.id} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-t border-slate-100`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0061B2] block mb-2">Capabilities</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d]">{cat.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {cat.services.map((srv, sIdx) => {
                  const Icon = srv.icon
                  return (
                    <div key={sIdx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-xl bg-white text-[#00499E] shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0b1b4d] mb-2">{srv.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-lato">{srv.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}
