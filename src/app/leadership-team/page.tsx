'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Globe, Mail, ArrowUpRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function getInitials(name: string) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const team = [
  {
    name: 'Saviour Atuheire',
    role: 'Founder & Chief Executive Officer (CEO)',
    image: '/SAFEAI_ASSETS/saviour-ceo.jpg' as string | null,
    bio: "Saviour is a Biotechnologist and the visionary Founder and CEO of SAFE AI-AFRICA, leading the organization's mission to harness the power of responsible artificial intelligence. Under his direction, the group designs deep-tech clinical tools, smart agricultural engines, and virtual classrooms that actively uplift communities.",
    link: 'https://saviouratuheire.safeaiafrica.com',
    objectPosition: 'object-top',
  },
  {
    name: 'Judith Nanyunja',
    role: 'Co-Founder & Corporate Relations Director',
    image: '/SAFEAI_ASSETS/nanyunja%20judith_cofounder.jpg' as string | null,
    bio: "Judith is a Biomedical Lab Technologist and the Co-Founder of SAFE AI-AFRICA, bringing strategic vision and operational excellence to the organization. Her commitment to ethical AI and inclusive technology solutions helps shape the company's direction.",
    objectPosition: 'object-top',
  },
  {
    name: 'Anthony Kamukama',
    role: 'Co-Founder & Director of Operations',
    image: '/SAFEAI_ASSETS/anthony-kamukama.jpg' as string | null,
    bio: 'As a Software and Network Engineer, Anthony serves as Co-Founder and Director of Operations, ensuring our strategic vision translates into impactful, scalable AI solutions across Africa.',
    link: 'https://anthonykamukama.safeaiafrica.com',
    objectPosition: 'object-top',
  },
  {
    name: 'Kizza Steve',
    role: 'Director of Research',
    image: '/SAFEAI_ASSETS/kizza-steve.jpg' as string | null,
    bio: "Kizza is a Veterinary Medicine Doctor and the Director of Research of SAFE AI-AFRICA, responsible for driving research initiatives and overseeing the development of AI-powered solutions that address Africa's unique challenges.",
    objectPosition: 'object-top',
  },
  {
    name: 'Namuli Shakirah',
    role: 'Chief Marketing Officer (CMO)',
    image: '/SAFEAI_ASSETS/shakirah%20namuli%20cmo.jpg' as string | null,
    bio: "Namuli is a Bioinformatician, Science Communicator, and the Chief Marketing Officer of SAFE AI-AFRICA, leading brand strategy and communications to amplify the organization's impact and reach across the African continent.",
    objectPosition: 'object-top',
  },
  {
    name: 'Duncan Twesigye',
    role: 'Director of Advisory Services',
    image: '/SAFEAI_ASSETS/duncan%20twesigye.jpg' as string | null,
    bio: 'Duncan is an IT and Emerging Technologies Consultant serving as our Director of Advisory Services. He specializes in digital transformation across Africa and provides strategic mentorship, guidance, and expertise to help shape our initiatives.',
    link: 'https://coachtdee.safeaiafrica.com',
    objectPosition: 'object-[center_15%]',
  },
]

export default function LeadershipTeam() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        {/* Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-16 lg:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">Our Leadership Team</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto font-lato">
              The founders, directors, and researchers driving ethical tech innovation at SAFE AI-AFRICA.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                {/* Image Frame */}
                <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={`object-cover hover:scale-105 transition-transform duration-500 ${member.objectPosition ?? 'object-top'}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#00499E] to-[#0075ba] text-white">
                      <span className="text-4xl font-bold tracking-wide">{getInitials(member.name)}</span>
                    </div>
                  )}
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0b1b4d] mb-1">{member.name}</h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#0061B2] mb-4">
                    {member.role}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-lato mb-6 flex-grow">
                    {member.bio}
                  </p>

                  {/* Profile Link (if available) */}
                  {member.link && (
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#00499E] hover:text-[#0061B2] bg-blue-50 px-3 py-1.5 rounded-full"
                      >
                        View Profile
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
