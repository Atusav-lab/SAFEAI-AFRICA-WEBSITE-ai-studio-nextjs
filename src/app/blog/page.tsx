'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const blogs = [
  {
    id: 1,
    title: '"Horizon1000": Gates & OpenAI\'s $50M AI Mission',
    desc: 'OpenAI and the Gates Foundation have committed $50M to deploy AI tools in 1,000 clinics across sub-Saharan Africa, aiming to revolutionize primary healthcare efficiency through automated triage and diagnostics.',
    image: '/SAFEAI_ASSETS/blog-healthcare.webp',
    date: 'July 10, 2026',
    author: 'Admin',
    category: 'Healthcare',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'Precision Farming: AI Boosts Yields by 40% in Kenya',
    desc: 'New AI-driven platforms like UjuziKilimo’s FarmSuite are transforming African agriculture, reporting massive yield increases and 30% reduction in fertilizer dependency through precision soil analytics.',
    image: '/SAFEAI_ASSETS/blog-farming.webp',
    date: 'June 28, 2026',
    author: 'Admin',
    category: 'Agriculture',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'Microsoft to Train 1M South Africans in AI',
    desc: 'Microsoft SA and SABC have partnered to deliver critical AI and digital skills training to millions via the SABC Plus streaming platform, ensuring a future-ready workforce by late 2026.',
    image: '/SAFEAI_ASSETS/blog-training.webp',
    date: 'May 15, 2026',
    author: 'Admin',
    category: 'Education',
    readTime: '3 min read',
  },
]

const categories = ['All', 'Healthcare', 'Agriculture', 'Education']

export default function Blog() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase()) ||
                          blog.desc.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
        {/* Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-16 lg:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Our Latest News & Blogs
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto font-lato">
              Discover insights, policy discussions, and updates on how AI is shaping the future of Africa.
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#00499E] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:bg-white focus:border-[#00499E] transition-all"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  {/* Article Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#00499E] text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={13} />
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#0b1b4d] mb-3 leading-snug hover:text-[#00499E] transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-lato flex-grow">
                      {blog.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00499E] hover:gap-2.5 transition-all">
                        Read Full Article
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-700">No articles found</h3>
              <p className="text-slate-400 text-sm mt-1">Try resetting your category filter or search query.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
