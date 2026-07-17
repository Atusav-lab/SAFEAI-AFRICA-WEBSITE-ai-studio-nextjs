'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Play, Brain, Dna, FlaskConical, Leaf, Heart,
  ShieldCheck, Cpu, Globe, ArrowRight, Quote, Star
} from 'lucide-react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SplineScene } from "@/components/ui/splite"

/* ============================================================
   TYPED TEXT HOOK
============================================================ */
const typedPhrases = [
  'Data Analytics',
  'AI Training & Advocacy',
  'Drug Discovery Solutions',
  'Education Technology',
  'Plant Disease Detection',
  'Healthcare AI',
  'AI-powered genomics tools',
  'virtual chemistry labs',
  'no-code ML platforms',
  'clinical AI systems',
]

function useTyped(phrases: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [text, charIdx, deleting, phraseIdx, phrases, speed, pause])

  useEffect(() => {
    setText(phrases[phraseIdx].slice(0, charIdx))
  }, [charIdx, phraseIdx, phrases])

  return text
}

/* ============================================================
   3D TILT CARD COMPONENT
============================================================ */
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    x.set(nx)
    y.set(ny)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      {/* Glow overlay */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0,225,255,0.15) 0%, transparent 60%)`,
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', zIndex: 1
        }}
      />
      {children}
    </motion.div>
  )
}

/* ============================================================
   HERO SECTION
============================================================ */
function HeroSection() {
  const typedText = useTyped(typedPhrases)

  return (
    <section id="hero" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE] via-[#f0f9ff] to-white" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#dbeafe] to-transparent opacity-60" />

      {/* Animated blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#17c7f8]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#0061B2]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className="inline-flex items-center gap-2 bg-[#0061B2]/10 text-[#0061B2] text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Brain size={16} />
              AI-Powered Solutions for Africa
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-[#0b1b4d] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Empowering Africa with{' '}
              <span className="gradient-text">innovative digital solutions</span>{' '}
              through responsible AI.
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
              Harnessing AI for Africa
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-lato">
              We deliver{' '}
              <span className="text-[#0061B2] font-semibold">{typedText}</span>
              <span className="animate-pulse text-[#0061B2]">|</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact-us" id="hero-contact-btn"
                className="btn-gradient text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Contact Us <ArrowRight size={18} />
              </a>
              <a href="/solution" id="hero-products-btn"
                className="bg-white text-[#0061B2] font-semibold px-8 py-4 rounded-xl border-2 border-[#0061B2] inline-flex items-center gap-2 hover:bg-[#0061B2] hover:text-white transition-all duration-300">
                Our Products
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { num: '10+', label: 'AI Products' },
                { num: '2000+', label: 'AI Experts Trained' },
                { num: '10+', label: 'Completed Projects' },
              ].map(stat => (
                <div key={stat.label} className="text-center p-4 bg-white/80 backdrop-blur rounded-xl shadow-sm border border-blue-50">
                  <div className="text-2xl font-bold gradient-text">{stat.num}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Intro Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative lg:pl-4">
            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-transparent group border border-blue-100/20">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            {/* Ambient glows behind the video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0061B2] to-[#00E5FF] rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   WHAT WE DO (video section)
============================================================ */
function WhatWeDoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="what-we-do" className="py-20 section-bg">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#0061B2] mb-2">What We Do</h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d] mb-4">
            Discover Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Innovative AI solutions tailored for Africa.{' '}
            <a href="/solution" className="text-[#0061B2] font-semibold hover:underline">View all Products & Services →</a>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
          style={{ aspectRatio: '9/16' }}
          onClick={() => setPlaying(true)}>
          {!playing ? (
            <>
              <img
                src="https://i.ytimg.com/vi/OoL6qDec7m0/hqdefault.jpg"
                alt="SAFE AI Africa video"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button id="play-video-btn"
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play size={32} fill="white" className="text-white ml-1" />
              </button>
              <p className="absolute bottom-6 left-0 right-0 text-white text-sm font-medium px-4">SAFE AI Africa Introduction</p>
            </>
          ) : (
            <iframe
              src="https://www.youtube-nocookie.com/embed/OoL6qDec7m0?autoplay=1"
              title="SAFE AI Africa"
              allow="autoplay; fullscreen"
              className="w-full h-full border-0"
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
   PRODUCTS SECTION with 3D Cards
============================================================ */
const products = [
  {
    icon: Dna, title: 'SAFESeq', subtitle: 'AI-Powered Genomic Infrastructure for Africa',
    desc: 'Africa\'s first unified genomic analysis platform — free, browser-based, and sovereign. 30+ professional tools (CRISPR, AMR detection, 3D protein folding, phylogeny) in one tab, interpreted by AI. No installation. No code.',
    href: 'https://safeseq.safeaiafrica.com', external: true,
    color: 'from-blue-500 to-cyan-500',
    img: '/SAFEAI_ASSETS/safeseq.webp'
  },
  {
    icon: FlaskConical, title: 'SAFEKemia', subtitle: 'Chemistry AI Tutor',
    desc: 'Virtual chemistry labs and AI tutoring for African students and educators.',
    href: 'https://safekemia.safeaiafrica.com', external: true,
    color: 'from-purple-500 to-pink-500',
    img: '/SAFEAI_ASSETS/safekemia.webp'
  },
  {
    icon: Brain, title: 'SAFElytics', subtitle: 'No-Code ML Platform',
    desc: 'Build and deploy machine learning models without writing a single line of code.',
    href: 'https://safelytics.safeaiafrica.com', external: true,
    color: 'from-orange-500 to-red-500',
    img: '/SAFEAI_ASSETS/safelytics.webp'
  },
  {
    icon: Leaf, title: 'SafeFood Manager', subtitle: 'QMS for Food Industry',
    desc: 'Quality management system ensuring food safety standards across African supply chains.',
    href: 'https://safefoodmanager.safeaiafrica.com', external: true,
    color: 'from-green-500 to-emerald-500',
    img: '/SAFEAI_ASSETS/dashboard-preview-final.webp'
  },
  {
    icon: Heart, title: 'SAFEUZAZI AI', subtitle: 'Reproductive Health AI',
    desc: 'AI-powered reproductive health information and support for African communities.',
    href: 'https://safeuzazi.safeaiafrica.com', external: true,
    color: 'from-rose-500 to-pink-600',
    img: '/SAFEAI_ASSETS/safeuzazi-ai-simple-care-for-african-women-google-chrome-16-apr-26-18-13-46-2.webp'
  },
  {
    icon: ShieldCheck, title: 'AMR Lens Africa', subtitle: 'Antimicrobial Resistance',
    desc: 'Tracking and combating antimicrobial resistance across Africa with data-driven insights.',
    href: '/amr-lens', external: false,
    color: 'from-teal-500 to-cyan-600',
    img: '/SAFEAI_ASSETS/amr-lens-africa.webp'
  },
  {
    icon: Cpu, title: 'Invoice Master Pro', subtitle: 'Business Automation',
    desc: 'Smart invoicing and business management solution for African SMEs.',
    href: 'https://invoicemasterpro.safeaiafrica.com', external: true,
    color: 'from-indigo-500 to-blue-600',
    img: '/SAFEAI_ASSETS/invoice-master.webp'
  },
  {
    icon: Globe, title: 'SafeZell', subtitle: 'Field Sales Platform',
    desc: 'Mobile-first field sales management platform for African sales teams.',
    href: '/safezell', external: false,
    color: 'from-amber-500 to-orange-500',
    img: '/SAFEAI_ASSETS/merchandiser-management-system-google-ai-studio-google-chrome-07-jun-26-03-57-50-2.png'
  },
]

function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#0061B2] mb-2">Our Portfolio</h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d] mb-4">
            Products & <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive suite of AI-powered tools transforming education, healthcare, agriculture, and business across Africa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {products.map((product, i) => (
            <motion.div key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="h-full">
              <TiltCard className="h-full">
                <a href={product.href}
                  target={product.external ? '_blank' : undefined}
                  rel={product.external ? 'noopener noreferrer' : undefined}
                  id={`product-${product.title.toLowerCase().replace(/\s/g, '-')}`}
                  className="flex flex-col h-full group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {/* Product image with 3D overlay */}
                  <div className="relative h-36 flex-shrink-0 overflow-hidden">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <product.icon size={22} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-gray-900 mb-0.5 group-hover:text-[#0061B2] transition-colors">{product.title}</h3>
                    <p className="text-xs text-[#0061B2] font-medium mb-3 line-clamp-1">{product.subtitle}</p>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow">{product.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#0061B2] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   PROCESS SECTION
============================================================ */
const processSteps = [
  { num: '01', title: 'Research', desc: 'In-depth discovery to understand unique challenges and community needs across the African landscape.' },
  { num: '02', title: 'Design', desc: 'Crafting intuitive, user-centric AI architectures and interfaces tailored for maximum accessibility and impact.' },
  { num: '03', title: 'Build', desc: 'Developing robust, scalable AI models and software solutions using cutting-edge technologies and ethical practices.' },
  { num: '04', title: 'Deliver', desc: 'Ensuring seamless deployment, integration, and continuous optimization to drive sustainable growth.' },
]

function ProcessSection() {
  return (
    <section id="process" className="py-20 section-bg-two">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#0061B2] mb-2">Our Process</h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d] mb-6">
              Work <span className="gradient-text">Routine</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              SAFE AI-AFRICA provides top-notch software and IT solutions through an in-depth research, design, build, and deployment process. The customer's needs are taken into account throughout the process to ensure they receive a tailored solution that meets their requirements.
            </p>
            <a href="/about-us" className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300">
              Learn More <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {processSteps.map((step, i) => (
              <motion.div key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <TiltCard className="h-full">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 hover:shadow-md transition-all duration-300 h-full" style={{ transform: 'translateZ(0)' }}>
                    <div className="text-4xl font-extrabold gradient-text mb-3">{step.num}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CERTIFICATION & TRUST SECTION
============================================================ */
function CertSection() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#0061B2] mb-2">Credentials</h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d] mb-4">
            Trust & <span className="gradient-text">Certification</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We uphold the highest standards in data protection, quality management, and ICT services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Certificate */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <TiltCard>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-md text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0061B2] to-[#00E5FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1b4d] mb-2">Sisonkebiotik Certificate</h3>
                <p className="text-gray-600 text-sm mb-6">Certified for excellence in biotechnology and innovation</p>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/SAFEAI_ASSETS/sisonkebiotik-certificate.webp"
                    alt="Sisonkebiotik Certificate"
                    width={1200}
                    height={848}
                    className="w-full h-auto object-contain max-h-64"
                  />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Testimonial + Team image */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-[#0061B2] to-[#082da3] rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl" />
              <Quote size={40} className="text-[#00E5FF]/60 mb-4" />
              <p className="text-blue-100 leading-relaxed text-lg italic mb-6">
                "SAFE AI-AFRICA demonstrated exceptional professionalism and technical prowess. Their solution was not just
                a product, but a game-changer for our business operations. We highly recommend their services to any
                organization looking to leverage AI."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00E5FF]/30 rounded-full flex items-center justify-center font-bold text-lg">
                  E
                </div>
                <div>
                  <h5 className="font-bold text-white">Edmand Ssali</h5>
                  <p className="text-blue-200 text-sm">SAVOMA DYNAMICS LTD</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Team photo */}
            <TiltCard>
              <div className="rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  src="/SAFEAI_ASSETS/safeaiafricateam.webp"
                  alt="SAFE AI Africa Team"
                  width={1200}
                  height={861}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b4d]/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Our Dedicated Team – Building Africa's AI Future</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   BLOG SECTION
============================================================ */
const blogPosts = [
  {
    img: '/SAFEAI_ASSETS/blog-healthcare.webp',
    alt: 'AI Healthcare',
    title: '"Horizon1000": Gates & OpenAI\'s $50M AI Mission',
    excerpt: 'OpenAI and the Gates Foundation have committed $50M to deploy AI tools in 1,000 clinics across sub-Saharan Africa, aiming to revolutionize primary healthcare efficiency.',
    author: 'Admin',
    date: 'February 3, 2026',
    category: 'Healthcare',
    catColor: 'bg-blue-100 text-blue-700',
  },
  {
    img: '/SAFEAI_ASSETS/blog-farming.webp',
    alt: 'Precision Farming',
    title: 'Precision Farming: AI Boosts Yields by 40% in Kenya',
    excerpt: 'New AI-driven platforms like UjuziKilimo\'s FarmSuite are transforming African agriculture, reporting massive yield increases and reduced fertilizer dependency.',
    author: 'Admin',
    date: 'February 2, 2026',
    category: 'Agriculture',
    catColor: 'bg-green-100 text-green-700',
  },
  {
    img: '/SAFEAI_ASSETS/blog-training.webp',
    alt: 'Digital Skills Training',
    title: 'Microsoft to Train 1M South Africans in AI',
    excerpt: 'Microsoft SA and SABC have partnered to deliver critical AI and digital skills training to millions via the SABC Plus streaming platform by late 2026.',
    author: 'Admin',
    date: 'February 1, 2026',
    category: 'Education',
    catColor: 'bg-purple-100 text-purple-700',
  },
]

function BlogSection() {
  return (
    <section id="blog" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#0061B2] mb-2">Blog</h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0b1b4d] mb-4">
            Our Latest <span className="gradient-text">News & Updates</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest AI developments and how SAFE AI-AFRICA is transforming the continent.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>
              <TiltCard className="h-full">
                <a href="/blog"
                  className="block group h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${post.catColor}`}>
                      {post.category}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0061B2] transition-colors text-lg leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#0061B2] to-[#00E5FF] rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {post.author[0]}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-700">{post.author}</p>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                      </div>
                      <div className="text-[#0061B2] text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="/blog" className="btn-gradient text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            View All Articles <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
   CTA SECTION
============================================================ */
function CTASection() {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00499E] to-[#082da3]" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#17c7f8]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Africa with AI?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of researchers, educators, and businesses leveraging SAFE AI-AFRICA's cutting-edge solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact-us" id="cta-contact-btn"
              className="bg-white text-[#00499E] font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:bg-[#17c7f8] hover:text-white transition-all duration-300 shadow-lg">
              Book A Demo <ArrowRight size={18} />
            </a>
            <a href="/solution" id="cta-explore-btn"
              className="bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300">
              Explore Products
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
   PAGE
============================================================ */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ProductsSection />
        <ProcessSection />
        <CertSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
