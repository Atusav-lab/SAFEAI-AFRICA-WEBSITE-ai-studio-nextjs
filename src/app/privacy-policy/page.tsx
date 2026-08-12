import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import CookieSettingsLink from '@/components/CookieSettingsLink'
import RelatedLinks from '@/components/RelatedLinks'
import {
  CATEGORIES,
  CONSENT_COOKIE,
  CONSENT_MAX_AGE_DAYS,
  COOKIE_INVENTORY,
} from '@/lib/cookies'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/site'

const LAST_UPDATED = '12 August 2026'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How SAFE AI-AFRICA collects, uses, stores and protects personal data on safeaiafrica.com — including cookies, third-party services, retention periods and your data rights.',
  path: '/privacy-policy',
  keywords: ['SAFE AI-AFRICA privacy policy', 'data protection Uganda', 'cookie policy'],
})

const TOC = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'what-we-collect', label: 'What we collect' },
  { id: 'how-we-use', label: 'How we use your data' },
  { id: 'legal-basis', label: 'Legal basis' },
  { id: 'cookies', label: 'Cookies and your choices' },
  { id: 'third-parties', label: 'Third-party services' },
  { id: 'sharing', label: 'When we share data' },
  { id: 'retention', label: 'How long we keep data' },
  { id: 'security', label: 'Security' },
  { id: 'transfers', label: 'International transfers' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'children', label: "Children's privacy" },
  { id: 'client-data', label: 'Client project data' },
  { id: 'changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact us' },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold text-[#0b1b4d] mb-3">{title}</h2>
      <div className="space-y-3 text-slate-600 font-lato leading-relaxed">{children}</div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-14 lg:py-16">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs variant="dark" className="mb-6" items={[{ name: 'Privacy Policy' }]} />
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-white">Privacy Policy</h1>
            <p className="text-blue-100 font-lato">
              How we collect, use and protect personal data on safeaiafrica.com. Last updated: {LAST_UPDATED}.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Contents */}
          <nav aria-label="Contents" className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-10">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#0061B2] mb-4">Contents</h2>
            <ol className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
              {TOC.map((item, idx) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-slate-600 hover:text-[#00499E] transition-colors">
                    {idx + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-sm space-y-10">
            <Section id="who-we-are" title="1. Who we are">
              <p>
                SAFE AI-AFRICA (&ldquo;SAFE AI-AFRICA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an
                artificial intelligence product studio and consultancy based in {BUSINESS.addressLocality},{' '}
                {BUSINESS.addressCountryName}. We are the data controller for personal data collected through
                this website, safeaiafrica.com.
              </p>
              <p>
                You can reach us at{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-[#00499E] font-semibold hover:underline">
                  {BUSINESS.email}
                </a>{' '}
                or {BUSINESS.phoneDisplay} for any question about this policy or about how we handle your data.
              </p>
              <p>
                This policy covers this website. Our product platforms hosted on separate subdomains
                (for example SAFESeq, SAFEKemia, SAFElytics, SafeFood Manager, Invoice Master Pro and
                SAFEUZAZI AI) publish their own privacy terms covering the data processed inside those
                products.
              </p>
            </Section>

            <Section id="what-we-collect" title="2. What we collect">
              <p>We collect only what we need to answer you and to keep the site working:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-800">Information you give us.</strong> When you submit the
                  contact form we collect your first and last name, email address, phone number (optional)
                  and the content of your message. When you join a waitlist or newsletter we collect your
                  email address.
                </li>
                <li>
                  <strong className="text-slate-800">Technical information.</strong> Our hosting
                  infrastructure records standard server logs when a page is requested: IP address,
                  browser and device type, referring page, requested URL and timestamp.
                </li>
                <li>
                  <strong className="text-slate-800">Communications.</strong> If you contact us by email,
                  phone or WhatsApp, we keep the correspondence so we can follow up on your request.
                </li>
              </ul>
              <p>
                We do not knowingly collect special categories of personal data (such as health data)
                through this website, and you should not send such data through the contact form.
              </p>
            </Section>

            <Section id="how-we-use" title="3. How we use your data">
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your inquiry, quote for work and provide the services you ask for.</li>
                <li>To send you information you have specifically requested, such as a waitlist announcement.</li>
                <li>To operate, secure and improve this website, including diagnosing faults and preventing abuse.</li>
                <li>To meet legal, accounting and regulatory obligations.</li>
              </ul>
              <p>
                We do not sell your personal data, and we do not share it with third parties for their own
                marketing.
              </p>
            </Section>

            <Section id="legal-basis" title="4. Legal basis">
              <p>
                We process personal data under the Data Protection and Privacy Act, 2019 of Uganda and,
                where it applies to visitors in those regions, the UK and EU General Data Protection
                Regulation. Our lawful bases are:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-800">Consent</strong> — when you submit a form or subscribe
                  to updates. You can withdraw consent at any time.
                </li>
                <li>
                  <strong className="text-slate-800">Contract</strong> — when processing is necessary to
                  provide services you have engaged us for.
                </li>
                <li>
                  <strong className="text-slate-800">Legitimate interests</strong> — keeping the website
                  secure and available, and responding to business inquiries.
                </li>
                <li>
                  <strong className="text-slate-800">Legal obligation</strong> — where we must retain records
                  by law.
                </li>
              </ul>
            </Section>

            <Section id="cookies" title="5. Cookies and your choices">
              <p>
                A cookie is a small file a website stores in your browser. We also use local storage,
                which works in a similar way. This section is our cookie policy — it applies alongside
                the rest of this privacy policy.
              </p>
              <p>
                <strong className="text-slate-800">
                  We do not set advertising or cross-site tracking cookies, and we do not run advertising
                  networks on this site.
                </strong>{' '}
                Beyond the strictly necessary cookies below, nothing is stored on your device and no
                third-party content is loaded until you agree to it. When you first visit, a banner asks
                for that choice; you can accept everything, reject everything non-essential, or choose
                category by category, and you can change your mind at any time.
              </p>

              {/* Categories */}
              <h3 className="text-lg font-bold text-[#0b1b4d] pt-4">Categories we use</h3>
              <ul className="space-y-3">
                {CATEGORIES.map(category => (
                  <li key={category.id} className="border border-slate-100 bg-slate-50 rounded-2xl p-5">
                    <p className="font-bold text-[#0b1b4d]">
                      {category.name}
                      {category.required && (
                        <span className="ml-2 align-middle text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">
                          Always on
                        </span>
                      )}
                    </p>
                    <p className="text-sm mt-2 leading-relaxed">{category.detail}</p>
                  </li>
                ))}
              </ul>

              {/* Inventory */}
              <h3 className="text-lg font-bold text-[#0b1b4d] pt-4">Cookies set on this site</h3>
              <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full min-w-[640px] text-sm border-collapse">
                  <caption className="sr-only">
                    Cookies and similar technologies used on safeaiafrica.com
                  </caption>
                  <thead>
                    <tr className="text-left">
                      {['Name', 'Provider', 'Category', 'Purpose', 'Duration'].map(heading => (
                        <th
                          key={heading}
                          scope="col"
                          className="border-b-2 border-slate-200 py-3 pr-4 text-xs font-extrabold uppercase tracking-wider text-[#0061B2]"
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIE_INVENTORY.map(cookie => (
                      <tr key={`${cookie.provider}-${cookie.name}`} className="align-top">
                        <td className="border-b border-slate-100 py-3 pr-4 font-mono text-xs text-slate-700 break-words">
                          {cookie.name}
                        </td>
                        <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">{cookie.provider}</td>
                        <td className="border-b border-slate-100 py-3 pr-4 text-slate-600 capitalize">
                          {cookie.category === 'functional' ? 'Embedded content' : cookie.category}
                        </td>
                        <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">{cookie.purpose}</td>
                        <td className="border-b border-slate-100 py-3 pr-4 text-slate-600 whitespace-nowrap">
                          {cookie.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400">
                Third-party cookie names are set by those providers and can change without notice. We
                review this table when we add or remove an embedded service.
              </p>

              {/* Control */}
              <h3 className="text-lg font-bold text-[#0b1b4d] pt-4">Changing your choice</h3>
              <p>
                Your preference is stored in a first-party cookie named{' '}
                <code className="font-mono text-xs bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5">
                  {CONSENT_COOKIE}
                </code>{' '}
                for {CONSENT_MAX_AGE_DAYS} days, after which we ask again. It records only which
                categories you allowed and when — it does not identify you.
              </p>
              <p>
                You can reopen the panel and change or withdraw your consent at any time, using the button
                below or the <em>Cookie settings</em> link in the footer of every page:
              </p>
              <p>
                <CookieSettingsLink
                  label="Manage cookie preferences"
                  className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-lg transition-all"
                />
              </p>
              <p>
                You can also block or delete cookies in your browser settings. Blocking strictly necessary
                cookies may stop parts of the site working correctly, and clearing your cookies removes the
                record of your choice, so the banner will appear again.
              </p>
            </Section>

            <Section id="third-parties" title="6. Third-party services">
              <p>
                Some parts of the site rely on third parties, who will receive your IP address and basic
                request data when that content loads. Embedded maps, videos and the interactive 3D scene
                are held back until you allow the embedded-content category described in section 5:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Google Fonts — web font delivery.</li>
                <li>Google Maps — the embedded office map on our contact page.</li>
                <li>YouTube (no-cookie domain) — product demonstration videos.</li>
                <li>Spline — the interactive 3D scene on the home page.</li>
                <li>WhatsApp (Meta) — if you choose to start a WhatsApp conversation with us.</li>
                <li>Our hosting and infrastructure providers — for serving the site and storing server logs.</li>
              </ul>
              <p>Each of these providers processes data under its own privacy policy.</p>
            </Section>

            <Section id="sharing" title="7. When we share data">
              <p>We share personal data only when:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>a service provider processes it on our behalf under contract (for example hosting or email);</li>
                <li>you have asked us to, or given consent;</li>
                <li>we are required to by law, regulation or a valid legal request;</li>
                <li>it is necessary to establish, exercise or defend legal claims.</li>
              </ul>
            </Section>

            <Section id="retention" title="8. How long we keep data">
              <p>
                Inquiry and correspondence records are kept for up to 24 months after our last contact,
                unless an ongoing client relationship or a legal obligation requires longer. Newsletter and
                waitlist subscriptions are kept until you unsubscribe. Server logs are kept for a short
                operational period, normally no more than 12 months.
              </p>
            </Section>

            <Section id="security" title="9. Security">
              <p>
                The site is served over HTTPS, and we apply least-privilege access controls, encryption in
                transit and data minimisation across our systems. No method of transmission or storage is
                completely secure, but we take reasonable technical and organisational measures to protect
                personal data and to detect and respond to incidents. If a breach affects your rights, we
                will notify you and the relevant authority as required by law.
              </p>
            </Section>

            <Section id="transfers" title="10. International transfers">
              <p>
                We favour African-hosted infrastructure — data sovereignty is a design principle of our
                platforms. Some service providers listed above operate outside Uganda, which means your
                data may be processed in other countries. Where that happens we rely on appropriate
                safeguards, such as the provider&rsquo;s standard contractual clauses and equivalent
                protections.
              </p>
            </Section>

            <Section id="your-rights" title="11. Your rights">
              <p>Subject to applicable law, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>access the personal data we hold about you;</li>
                <li>have inaccurate data corrected;</li>
                <li>request deletion of your data;</li>
                <li>object to or restrict certain processing;</li>
                <li>withdraw consent at any time;</li>
                <li>receive your data in a portable format;</li>
                <li>lodge a complaint with the Personal Data Protection Office of Uganda or your local supervisory authority.</li>
              </ul>
              <p>
                To exercise any of these rights, email{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-[#00499E] font-semibold hover:underline">
                  {BUSINESS.email}
                </a>
                . We respond to rights requests within 30 days, and sooner where we can.
              </p>
            </Section>

            <Section id="children" title="12. Children's privacy">
              <p>
                This website is intended for a professional audience and is not directed at children. We do
                not knowingly collect personal data from children through it. Where our education products
                are used by learners, data handling is governed by the agreement with the school or
                institution deploying them. If you believe a child has provided us with personal data,
                contact us and we will delete it.
              </p>
            </Section>

            <Section id="client-data" title="13. Client project data">
              <p>
                When we build or operate a system for a client, that client remains the controller of the
                data in it and we act as a processor under a written agreement covering scope, security,
                retention, sub-processors and deletion at the end of the engagement. Clients own their
                data; we do not use client data to train models for other customers without explicit,
                documented permission.
              </p>
            </Section>

            <Section id="changes" title="14. Changes to this policy">
              <p>
                We may update this policy as our services or the law change. The revision date at the top of
                the page always reflects the current version, and material changes will be highlighted on
                this page.
              </p>
            </Section>

            <Section id="contact" title="15. Contact us">
              <p>
                Questions, requests or complaints about privacy can be sent to{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-[#00499E] font-semibold hover:underline">
                  {BUSINESS.email}
                </a>
                , by phone on {BUSINESS.phoneDisplay}, or through our{' '}
                <Link href="/contact-us" className="text-[#00499E] font-semibold hover:underline">
                  contact page
                </Link>
                . Postal enquiries can be addressed to SAFE AI-AFRICA, {BUSINESS.addressLocality},{' '}
                {BUSINESS.addressCountryName}.
              </p>
              <p>
                See also our{' '}
                <Link href="/terms-of-service" className="text-[#00499E] font-semibold hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </Section>
          </div>
        </div>

        <RelatedLinks route="/privacy-policy" />
      </main>
      <Footer />
    </>
  )
}
