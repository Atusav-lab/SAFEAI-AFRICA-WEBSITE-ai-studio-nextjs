'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, ZoomIn, X, Calendar } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const items = [
  {
    title: 'Ideathon Success',
    desc: 'Uplifting regional innovation and collaborative design challenges centered on localized African challenges.',
    src: '/SAFEAI_ASSETS/img-20260203-144857.webp',
    date: 'February 2026',
  },
  {
    title: 'Mental Health AI',
    desc: 'Empowering communities through innovative mental wellness conversational assistants with localized context.',
    src: '/SAFEAI_ASSETS/img-20260203-144921.webp',
    date: 'January 2026',
  },
]

export default function OurGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        {/* Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-16 lg:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">Media Gallery</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto font-lato">
              A look inside our workshops, hackathons, client audits, and AI research projects.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Image Wrap */}
                <div
                  onClick={() => setSelectedImage(item.src)}
                  className="relative aspect-video bg-slate-100 overflow-hidden cursor-zoom-in"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" />
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6">
                  <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold mb-2">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1b4d] mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-lato">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-slate-200 bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors z-50"
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-2"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative w-full aspect-video max-h-[80vh]">
                  <Image
                    src={selectedImage}
                    alt="Gallery Zoomed view"
                    fill
                    sizes="90vw"
                    className="object-contain rounded-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
