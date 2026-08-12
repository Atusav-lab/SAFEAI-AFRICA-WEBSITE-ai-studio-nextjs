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

/** Published version of this policy. Bump both when the policy changes materially. */
const POLICY_VERSION = '1.0'
const EFFECTIVE_DATE = '12 August 2026'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How SAFE AI-AFRICA collects, uses, stores and protects personal data on safeaiafrica.com, including cookies, third-party services, how long we keep things and your rights over your data.',
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
              How we collect, use and protect personal data on safeaiafrica.com.
            </p>
            <p className="text-sm text-blue-200 font-lato mt-3">
              Version {POLICY_VERSION} · In effect from {EFFECTIVE_DATE} · Last updated {EFFECTIVE_DATE}
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
                SAFE AI-AFRICA (&ldquo;we&rdquo; and &ldquo;us&rdquo; in this policy) is an artificial
                intelligence product studio and consultancy based in {BUSINESS.addressLocality},{' '}
                {BUSINESS.addressCountryName}. We are the data controller for any personal data collected
                through this website, safeaiafrica.com.
              </p>
              <p>
                You can reach us at{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-[#00499E] font-semibold hover:underline">
                  {BUSINESS.email}
                </a>{' '}
                or {BUSINESS.phoneDisplay} for any question about this policy or about how we handle your data.
              </p>
              <p>
                This policy covers this website only. Our product platforms live on their own subdomains
                (SAFESeq, SAFEKemia, SAFElytics, SafeFood Manager, Invoice Master Pro and SAFEUZAZI AI),
                and each of them publishes its own privacy terms for the data handled inside the product.
              </p>
            </Section>

            <Section id="what-we-collect" title="2. What we collect">
              <p>We only collect what we need to answer you and keep the site running:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-800">What you give us.</strong> When you fill in the
                  contact form, we get your first and last name, your email address, your phone number if
                  you add one, and whatever you write in the message. If you join a waitlist or the
                  newsletter, we get your email address.
                </li>
                <li>
                  <strong className="text-slate-800">Technical information.</strong> Like most websites,
                  our hosting keeps standard server logs whenever a page is requested. Those logs contain
                  your IP address, your browser and device type, the page you came from, the page you asked
                  for and the time you asked for it.
                </li>
                <li>
                  <strong className="text-slate-800">Our conversations.</strong> If you write, call or
                  message us on WhatsApp, we keep that correspondence so we can pick up where we left off.
                </li>
              </ul>
              <p>
                We do not knowingly collect sensitive personal data such as health information through
                this website, and please do not send anything like that through the contact form.
              </p>
            </Section>

            <Section id="how-we-use" title="3. How we use your data">
              <ul className="list-disc pl-5 space-y-2">
                <li>To reply to you, quote for work and deliver the services you ask for.</li>
                <li>To send you things you actually asked for, such as a waitlist announcement.</li>
                <li>To run the site, keep it secure, fix faults and stop abuse.</li>
                <li>To meet our legal, accounting and regulatory obligations.</li>
              </ul>
              <p>
                We do not sell your personal data, and we never hand it to anyone else for their own
                marketing.
              </p>
            </Section>

            <Section id="legal-basis" title="4. Legal basis">
              <p>
                We handle personal data under Uganda&rsquo;s Data Protection and Privacy Act, 2019, and
                under the UK and EU General Data Protection Regulation where those apply to visitors from
                those regions. Our lawful bases are:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-800">Consent.</strong> When you fill in a form or sign up
                  for updates. You can withdraw it whenever you like.
                </li>
                <li>
                  <strong className="text-slate-800">Contract.</strong> When we need the data to deliver
                  work you have hired us for.
                </li>
                <li>
                  <strong className="text-slate-800">Legitimate interests.</strong> Keeping the website
                  secure and online, and answering business inquiries.
                </li>
                <li>
                  <strong className="text-slate-800">Legal obligation.</strong> Where the law requires us
                  to keep records.
                </li>
              </ul>
            </Section>

            <Section id="cookies" title="5. Cookies and your choices">
              <p>
                A cookie is a small file a website saves in your browser. Local storage does much the
                same job. This section is our cookie policy, and it sits alongside the rest of this
                privacy policy.
              </p>
              <p>
                <strong className="text-slate-800">
                  We do not use advertising cookies, we do not track you across other websites, and there
                  are no ad networks on this site.
                </strong>{' '}
                Apart from the strictly necessary cookies listed below, nothing is saved to your device
                and nothing is loaded from another company until you agree to it. A banner asks you on
                your first visit. You can accept everything, turn down everything that is not essential,
                or pick category by category, and you can change your mind later.
              </p>

              {/* Categories */}
              <h3 className="text-lg font-bold text-[#0b1b4d] pt-4">The three categories</h3>
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
                Cookie names belonging to other companies are set by them and can change without warning.
                We check this table whenever we add or remove an embedded service.
              </p>

              {/* Control */}
              <h3 className="text-lg font-bold text-[#0b1b4d] pt-4">Changing your choice</h3>
              <p>
                Your choice is saved in one of our own cookies, called{' '}
                <code className="font-mono text-xs bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5">
                  {CONSENT_COOKIE}
                </code>{' '}
                It lasts {CONSENT_MAX_AGE_DAYS} days, and then we ask you again. All it records is which
                categories you allowed and when. It says nothing about who you are.
              </p>
              <p>
                You can reopen the panel and change or withdraw your consent whenever you want, either
                with the button below or through the <em>Cookie settings</em> link at the bottom of every
                page:
              </p>
              <p>
                <CookieSettingsLink
                  label="Manage cookie preferences"
                  className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-lg transition-all"
                />
              </p>
              <p>
                You can also block or delete cookies in your browser settings. Blocking the strictly
                necessary ones may break parts of the site, and clearing your cookies wipes the record of
                your choice, so the banner will come back.
              </p>
            </Section>

            <Section id="third-parties" title="6. Third-party services">
              <p>
                A few parts of the site come from other companies, and they will see your IP address and
                basic request details once their content loads. Maps, videos and the 3D scene stay
                switched off until you allow the embedded content category described in section 5:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Google Fonts, which delivers the typefaces you are reading.</li>
                <li>Google Maps, for the office map on our contact page.</li>
                <li>YouTube on its no-cookie domain, for our product videos.</li>
                <li>Spline, for the 3D scene on the home page.</li>
                <li>WhatsApp (Meta), if you choose to start a chat with us.</li>
                <li>Our hosting and infrastructure providers, who serve the site and keep the server logs.</li>
              </ul>
              <p>Each of these companies handles that data under its own privacy policy.</p>
            </Section>

            <Section id="sharing" title="7. When we share data">
              <p>We only share personal data when:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>a supplier handles it for us under contract, such as our hosting or email provider;</li>
                <li>you have asked us to, or agreed to it;</li>
                <li>the law, a regulator or a valid legal request obliges us to;</li>
                <li>we need it to bring or defend a legal claim.</li>
              </ul>
            </Section>

            <Section id="retention" title="8. How long we keep data">
              <p>
                We keep inquiries and correspondence for up to 24 months after we last spoke, unless we
                are still working together or the law says we must keep them longer. Newsletter and
                waitlist sign-ups stay until you unsubscribe. Server logs are kept for a short operational
                window, normally no more than 12 months.
              </p>
            </Section>

            <Section id="security" title="9. Security">
              <p>
                The site runs over HTTPS. Inside our systems, people get access only to what their job
                needs, data is encrypted while it travels, and we collect as little of it as we can. No
                system is perfectly secure, but we take sensible technical and organisational steps to
                protect personal data and to spot problems quickly. If a breach ever affects your rights,
                we will tell you and the relevant authority, as the law requires.
              </p>
            </Section>

            <Section id="transfers" title="10. International transfers">
              <p>
                We prefer African-hosted infrastructure, because data sovereignty is a design principle
                for our platforms rather than an afterthought. Some of the providers listed above operate
                outside Uganda, so your data may be handled in other countries. Where that happens, we
                rely on proper safeguards such as the provider&rsquo;s standard contractual clauses.
              </p>
            </Section>

            <Section id="your-rights" title="11. Your rights">
              <p>Depending on where you live, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>see the personal data we hold about you;</li>
                <li>have anything inaccurate corrected;</li>
                <li>ask us to delete it;</li>
                <li>object to how we are using it, or ask us to pause;</li>
                <li>withdraw your consent at any time;</li>
                <li>get a copy of your data in a format you can take elsewhere;</li>
                <li>complain to the Personal Data Protection Office of Uganda, or to your own data protection authority.</li>
              </ul>
              <p>
                To use any of these rights, just email{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-[#00499E] font-semibold hover:underline">
                  {BUSINESS.email}
                </a>
                . We answer these requests within 30 days, and usually a lot sooner.
              </p>
            </Section>

            <Section id="children" title="12. Children's privacy">
              <p>
                This website is written for a professional audience and is not aimed at children, and we
                do not knowingly collect personal data from them here. Where learners use our education
                products, the agreement with their school or institution governs how that data is handled.
                If you think a child has sent us personal data, tell us and we will delete it.
              </p>
            </Section>

            <Section id="client-data" title="13. Client project data">
              <p>
                When we build or run a system for a client, the client stays in control of the data
                inside it and we act as their processor. A written agreement covers scope, security, how
                long data is kept, who else may touch it and what happens to it when the work ends.
                Clients own their data. We do not use it to train models for anyone else unless they have
                given us permission in writing.
              </p>
            </Section>

            <Section id="changes" title="14. Changes to this policy">
              <p>
                This is version {POLICY_VERSION} of our privacy policy, in effect from {EFFECTIVE_DATE}.
                It is the full and current statement of how we handle personal data on this website, and it
                replaces anything we published before.
              </p>
              <p>
                We will update it as our services or the law change. The version number and date at the
                top of this page always tell you which text is current, and we will summarise any
                significant change here. If a change affects how we use data you have already given us, we
                will contact you about it rather than leave you to spot it.
              </p>
            </Section>

            <Section id="contact" title="15. Contact us">
              <p>
                Any question, request or complaint about privacy can go to{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-[#00499E] font-semibold hover:underline">
                  {BUSINESS.email}
                </a>
                , by phone on {BUSINESS.phoneDisplay}, or through our{' '}
                <Link href="/contact-us" className="text-[#00499E] font-semibold hover:underline">
                  contact page
                </Link>
                . If you prefer to write, our postal address is SAFE AI-AFRICA, {BUSINESS.addressLocality},{' '}
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
