'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search as SearchIcon, ArrowRight, CornerDownRight, FileText } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Search Index containing accurate text and routing links
const searchIndex = [
  {
    title: 'About SAFE AI-AFRICA',
    desc: 'Who We Are, our core mission, vision, and values centered on ethical AI and Ubuntu across Africa.',
    href: '/about-us',
    tags: 'about we team history mission vision values ubuntu',
  },
  {
    title: 'Our Company',
    desc: 'Our registered enterprise structure, values of Integrity, Innovation, Inclusivity, and our Sisonkebiotik Certificate accreditation.',
    href: '/company',
    tags: 'company registration legal certificate values sisonkebiotik',
  },
  {
    title: 'Leadership Team',
    desc: 'Meet Saviour Atuheire (CEO), Judith Nanyunja, Anthony Kamukama, Dr. Kizza Steve, Namuli Shakirah, and Duncan Twesigye.',
    href: '/leadership-team',
    tags: 'team CEO Saviour Judith Anthony Steve Shakirah Duncan founders directors leaders',
  },
  {
    title: 'Products & Solutions',
    desc: 'Explore SAFESeq Genomics platform, SAFEKemia Chemistry AI tutor, SafeZell field sales tracker, Invoice Master Pro, AMR Lens, and agricultural AI.',
    href: '/solution',
    tags: 'products solutions safeseq safekemia safezell invoice master safelytics safefood mental health amr lens reproductive uzazi',
  },
  {
    title: 'SafeZell Field Sales Management',
    desc: 'Everything your field sales team needs: GPS Check-In, Live Stock Tracking, Variance Reconciliation, Shelf Photos, and supervisory ledgers.',
    href: '/safezell',
    tags: 'safezell field sales track stock cash ledger reps compliance',
  },
  {
    title: 'AMR Lens Africa',
    desc: 'Advanced Antimicrobial Stewardship and automated computer-vision measurements of inhibition zones to combat AMR.',
    href: '/amr-lens',
    tags: 'amr lens antimicrobial bacteria biology laboratory inhibition zone who clsi',
  },
  {
    title: 'Latest News & Blogs',
    desc: 'Insights and tech articles on Gates & OpenAI sub-Saharan clinics, precision soil analytics, and Microsoft digital training.',
    href: '/blog',
    tags: 'blog news insights articles gates openai precision farming microsoft training',
  },
  {
    title: 'Training & Careers',
    desc: 'Join the waitlist for SAFE Academy, professional machine learning pathways, emerging tech certifications, and job placements.',
    href: '/coming-soon',
    tags: 'training careers waitlist school jobs academy placement course classes',
  },
  {
    title: 'Contact Us',
    desc: 'Request a customized product demonstration, partner with us, or get support. Located in Kampala, Uganda.',
    href: '/contact-us',
    tags: 'contact phone email locations help partner collaborate support message form',
  },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams ? searchParams.get('q') || '' : ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<typeof searchIndex>([])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const matches = searchIndex.filter(item => {
      return item.title.toLowerCase().includes(q) ||
             item.desc.toLowerCase().includes(q) ||
             item.tags.toLowerCase().includes(q)
    })
    setResults(matches)
  }, [query])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Search Input Card */}
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 mb-12">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00499E]" size={22} />
          <input
            type="text"
            placeholder="What are you looking for? (e.g., SafeZell, Savior, Healthcare, AMR)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl bg-slate-50 text-base focus:outline-none focus:bg-white focus:border-[#00499E] transition-all"
            autoFocus
          />
        </div>
      </div>

      {/* Search Results Display */}
      <div>
        <h2 className="text-xl font-bold text-[#0b1b4d] mb-6 flex items-center gap-2">
          {query.trim() ? (
            <>
              Search Results
              <span className="text-xs bg-blue-100 text-[#00499E] px-2.5 py-1 rounded-full font-semibold">
                {results.length} found
              </span>
            </>
          ) : (
            'Quick Navigation'
          )}
        </h2>

        {query.trim() && results.length > 0 ? (
          <div className="space-y-4">
            {results.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#00499E]/20 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-[#0b1b4d] group-hover:text-[#00499E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-lato leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-[#00499E] opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300" />
                </div>
              </a>
            ))}
          </div>
        ) : query.trim() ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <FileText className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-lg font-bold text-slate-700">No results match your query</h3>
            <p className="text-slate-400 text-sm mt-1">Check spelling or try a different term like "Genomics" or "About".</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchIndex.slice(0, 6).map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-[#0b1b4d]">{item.title}</h4>
                  <p className="text-xs text-slate-400 font-lato mt-1 line-clamp-2">{item.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#00499E] mt-4 uppercase tracking-wider">
                  Go to page
                  <CornerDownRight size={12} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Search() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
        {/* Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-12">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight">Search Site</h1>
          </div>
        </section>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading search...</div>}>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
