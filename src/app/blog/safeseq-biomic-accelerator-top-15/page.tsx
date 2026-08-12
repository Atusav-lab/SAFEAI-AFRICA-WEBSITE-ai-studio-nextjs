import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Linkedin, ExternalLink } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import RelatedLinks from '@/components/RelatedLinks'
import { articleSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const LINKEDIN_POST_URL =
  'https://www.linkedin.com/posts/hindsight-ventures_biomic-healthcareinnovation-biomedicalinnovation-activity-7486312955354140673-eu2H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtRYv8Bfiy715m5Cx57teanjLUezG-4yGo'

const POST = {
  path: '/blog/safeseq-biomic-accelerator-top-15',
  title: 'SAFE AI-AFRICA Named a Top 15 Startup in the BIOMIC Accelerator Program',
  description:
    'SAFESeq, our unified AI genomics platform, has been selected among the Top 15 startups in Uganda’s BIOMIC Accelerator Program, run by The Lung Institute at Makerere University with STI-OP and Hindsight Ventures.',
  image: '/SAFEAI_ASSETS/biomic-announcement.jpg',
  datePublished: '2026-07-26',
}

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: POST.path,
  image: POST.image,
  imageAlt: 'SAFE AI-AFRICA selected among the Top 15 startups in the BIOMIC Accelerator Program',
  openGraphType: 'article',
  publishedTime: POST.datePublished,
  keywords: ['BIOMIC Accelerator', 'SAFESeq', 'genomics Uganda', 'biotech startup Africa'],
})

export default function SafeSeqBiomicAnnouncementPost() {
  return (
    <>
      <Header forceScrolled={true} />
      <JsonLd
        schema={articleSchema({
          headline: POST.title,
          description: POST.description,
          path: POST.path,
          image: POST.image,
          datePublished: POST.datePublished,
        })}
      />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
        {/* Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-16 lg:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumbs
              variant="dark"
              className="mb-6 justify-center [&>ol]:justify-center"
              items={[{ name: 'Blog', href: '/blog' }, { name: 'SAFESeq in the BIOMIC Accelerator' }]}
            />
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-5">
              Company News
            </span>
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-white">
              SAFE AI-AFRICA Named a Top 15 Startup in the BIOMIC Accelerator Program
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-100 font-medium">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> July 26, 2026</span>
              <span className="flex items-center gap-1.5"><User size={14} /> Admin</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> 4 min read</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00499E] hover:gap-2.5 transition-all mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg mb-10 bg-slate-100">
            <Image
              src="/SAFEAI_ASSETS/biomic-announcement.jpg"
              alt="SAFE AI-AFRICA selected among the Top 15 startups in the BIOMIC Accelerator Program"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover object-bottom"
              priority
            />
          </div>

          <div className="space-y-5 text-slate-600 leading-relaxed font-lato">
            <p>
              Out of a highly competitive pool of biomedical, biotech, and health innovations from across
              Uganda, our team made the cut — and we could not be prouder.{' '}
              <strong className="text-slate-800 font-semibold">SAFE AI-AFRICA</strong>, makers of{' '}
              <a href="https://safeseq.safeaiafrica.com" target="_blank" rel="noopener noreferrer" className="text-[#00499E] font-semibold hover:underline">
                SAFESeq
              </a>
              , has been selected among the <strong className="text-slate-800 font-semibold">Top 15 startups</strong> in the{' '}
              <strong className="text-slate-800 font-semibold">BIOMIC Accelerator Program</strong>.
            </p>

            <h2 className="text-[#0b1b4d] font-bold text-2xl pt-4">What makes SAFESeq different</h2>
            <p>
              SAFESeq is the first platform of its kind to unify 30+ professional-grade bioinformatics
              tools — gene prediction, CRISPR design, protein structure prediction, AMR resistance
              screening, molecular docking, phylogenetics, and more — into a single browser tab. No
              installs, no code.
            </p>
            <p>
              It's also the first Africa-hosted genomics platform to expose its tools via the{' '}
              <strong className="text-slate-800 font-semibold">Model Context Protocol (MCP)</strong>, meaning AI agents like Claude and ChatGPT can
              query it directly. Every result is interpreted in plain language by an AI assistant tuned to
              the local pathogen landscape, with deployment infrastructure that is sovereign by design, not
              as an afterthought.
            </p>

            <h2 className="text-[#0b1b4d] font-bold text-2xl pt-4">About the BIOMIC Accelerator Program</h2>
            <p>
              BIOMIC is coordinated by The Lung Institute, Makerere University, funded by the Science,
              Technology and Innovation Secretariat of Uganda — Office of the President (STI-OP), and
              implemented in partnership with Hindsight Ventures. The program is designed to accelerate the
              commercialization of breakthrough biomedical, biotechnology, and health innovations in Uganda.
            </p>
            <p>
              Being selected gives SAFE AI-AFRICA mentorship, networks, and resources — including compute
              and other technology credits — to take SAFESeq from a live product to national genomic
              infrastructure.
            </p>
          </div>

          {/* LinkedIn post preview / unfurl card */}
          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3">As shared by Hindsight Ventures</h3>
            <a
              href={LINKEDIN_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="linkedin-post-preview"
              className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <Image
                  src="/SAFEAI_ASSETS/biomic-announcement.jpg"
                  alt="BIOMIC Accelerator Program — Top 15 startups announcement on LinkedIn"
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                  <Linkedin size={18} className="text-white" />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-xs text-slate-400 font-medium mb-1">linkedin.com</p>
                  <h4 className="font-bold text-[#0b1b4d] leading-snug mb-1 group-hover:text-[#00499E] transition-colors">
                    Hindsight Ventures on LinkedIn: #BIOMIC #HealthcareInnovation #BiomedicalInnovation
                  </h4>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    Meet the Top 15 startups selected for the BIOMIC Accelerator Program — congratulations to
                    SAFE AI-AFRICA, makers of SAFESeq, and the rest of the cohort driving biomedical innovation in Uganda.
                  </p>
                </div>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-[#00499E] transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          </div>

          <div className="mt-12 border-t border-slate-100 pt-8 flex flex-wrap items-center justify-between gap-4">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00499E] hover:gap-2.5 transition-all">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <a
              href="https://safeseq.safeaiafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              id="post-explore-safeseq-btn"
              className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              Explore SAFESeq <ArrowRight size={16} />
            </a>
          </div>

          {/* Contextual links out of the article */}
          <aside className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-[#0b1b4d] mb-3">Related reading</h2>
            <ul className="space-y-2 text-sm font-lato">
              <li>
                <Link href="/case-studies" className="text-[#00499E] font-semibold hover:underline">
                  Case studies
                </Link>{' '}
                — how SAFESeq, AMR Lens and SafeZell are built and deployed.
              </li>
              <li>
                <Link href="/solution" className="text-[#00499E] font-semibold hover:underline">
                  Products &amp; services
                </Link>{' '}
                — the full SAFE AI-AFRICA platform portfolio.
              </li>
              <li>
                <Link href="/our-gallery" className="text-[#00499E] font-semibold hover:underline">
                  Media gallery
                </Link>{' '}
                — photos from the BIOMIC cohort showcase.
              </li>
              <li>
                <Link href="/contact-us" className="text-[#00499E] font-semibold hover:underline">
                  Contact us
                </Link>{' '}
                — partner with us on genomics infrastructure.
              </li>
            </ul>
          </aside>
        </article>

        <RelatedLinks route="/blog" />
      </main>
      <Footer />
    </>
  )
}
