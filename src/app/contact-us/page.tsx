'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        {/* Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-16 lg:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto font-lato">
              Partner with SAFE AI-AFRICA. Reach out to collaborate, request a product demo, or ask questions.
            </p>
          </div>
        </section>

        {/* Contact content section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00499E] mb-2 block">Connect</span>
                <h2 className="text-3xl font-bold text-[#0b1b4d]">Get in Touch</h2>
                <p className="text-slate-500 font-lato mt-2 leading-relaxed">
                  Reach out to us through any of the following channels or use the form to send us a message directly. Our support and partnership teams are ready to assist.
                </p>
              </div>

              {/* Cards / Lists */}
              <div className="space-y-4">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#00499E] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b1b4d]">Our Headquarters</h4>
                    <p className="text-sm text-slate-500 font-lato mt-1">Kampala, Uganda</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 text-[#0061B2] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b1b4d]">Phone & WhatsApp</h4>
                    <p className="text-sm text-slate-500 font-lato mt-1">
                      <a href="https://wa.me/256775323200" target="_blank" rel="noopener noreferrer" className="hover:text-[#00499E] transition-colors">
                        0775323200
                      </a>
                      {' '}/ 0756985966
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b1b4d]">Email Address</h4>
                    <p className="text-sm text-slate-500 font-lato mt-1">
                      <a href="mailto:safeaiafrica@gmail.com" className="hover:text-[#00499E] transition-colors">
                        safeaiafrica@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Message Sent Successfully!</h3>
                  <p className="text-slate-500 font-lato mt-2 max-w-sm mx-auto">
                    Thank you for reaching out to SAFE AI-AFRICA. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={form.firstName}
                        onChange={e => setForm({ ...form, firstName: e.target.value })}
                        placeholder="e.g. Jane"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={form.lastName}
                        onChange={e => setForm({ ...form, lastName: e.target.value })}
                        placeholder="e.g. Doe"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. jane@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. +256..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help you or collaborate?"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#00499E] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#00499E] to-[#0075ba] hover:opacity-95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
