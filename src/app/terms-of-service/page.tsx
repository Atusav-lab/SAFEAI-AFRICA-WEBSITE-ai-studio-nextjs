import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedLinks from '@/components/RelatedLinks'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/site'

const LAST_UPDATED = '12 August 2026'

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'The terms for using safeaiafrica.com and our services: acceptable use, intellectual property, links to other sites, disclaimers, liability and governing law.',
  path: '/terms-of-service',
  keywords: ['SAFE AI-AFRICA terms of service', 'website terms Uganda'],
})

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold text-[#0b1b4d] mb-3">{title}</h2>
      <div className="space-y-3 text-slate-600 font-lato leading-relaxed">{children}</div>
    </section>
  )
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="pt-20 lg:pt-24 min-h-screen bg-slate-50 text-slate-800">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white py-14 lg:py-16">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs variant="dark" className="mb-6" items={[{ name: 'Terms of Service' }]} />
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-white">Terms of Service</h1>
            <p className="text-blue-100 font-lato">
              The terms on which we make this website and our services available. Last updated: {LAST_UPDATED}.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-sm space-y-10">
            <Section id="acceptance" title="1. Acceptance of these terms">
              <p>
                By using safeaiafrica.com you agree to these terms. If you do not agree with them, please
                do not use the site. These terms cover this website only. Each of our product platforms and
                every client project has its own agreement, and where the two disagree, that agreement
                wins.
              </p>
            </Section>

            <Section id="use" title="2. Acceptable use">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>use the site in a way that breaks the law;</li>
                <li>try to get into any part of the site, its servers or connected systems without permission;</li>
                <li>disrupt the site for other people, including by scraping it hard enough to slow it down;</li>
                <li>send false, misleading, abusive or unlawful content through our forms;</li>
                <li>copy, republish or resell what is on the site beyond what section 3 allows.</li>
              </ul>
            </Section>

            <Section id="ip" title="3. Intellectual property">
              <p>
                Everything on this site belongs to SAFE AI-AFRICA or the people who licensed it to us:
                text, graphics, logos, product names, images, design and software. It is protected by
                copyright and trade mark law. You are welcome to view, download and print pages for your
                own reference or to weigh up working with us. Anything beyond that, such as republishing or
                commercial use, needs our written permission. If you quote us, please credit us and link
                back to the page.
              </p>
            </Section>

            <Section id="content" title="4. Accuracy of content">
              <p>
                We keep this site as accurate and current as we reasonably can, but treat what is here as
                general information. Product features, roadmaps and programme details change over time.
                Nothing on this site is professional, clinical, legal or financial advice. Our health
                products are built to support qualified professionals, never to replace their judgement or
                a clinical decision.
              </p>
            </Section>

            <Section id="third-party" title="5. Third-party links and platforms">
              <p>
                We link to our own product platforms on their own subdomains, and to sites run by other
                people. We cannot control what those other sites contain, whether they stay online, or how
                they treat your privacy, and a link from us is not an endorsement.
              </p>
            </Section>

            <Section id="inquiries" title="6. Inquiries, demos and proposals">
              <p>
                Sending us a form starts a conversation, it does not create a contract. Any price,
                timeline or scope we mention informally is a guide until both of us sign a written
                proposal. {BUSINESS.responseTimePromise}
              </p>
            </Section>

            <Section id="availability" title="7. Availability">
              <p>
                We aim to keep the site up at all times, but we cannot promise it will never go down. We
                may suspend, withdraw or change any part of it without notice, for maintenance, security or
                any other good reason.
              </p>
            </Section>

            <Section id="liability" title="8. Disclaimers and limitation of liability">
              <p>
                This website comes &ldquo;as is&rdquo;, without warranties of any kind, express or
                implied, as far as the law allows. Again as far as the law allows, we are not liable for
                indirect or knock-on losses, lost profit, lost data or business interruption arising from
                your use of this website. Nothing here removes liability that cannot legally be removed,
                including liability for death or personal injury caused by negligence, or for fraud.
              </p>
            </Section>

            <Section id="privacy" title="9. Privacy">
              <p>
                Our handling of personal data is described in our{' '}
                <Link href="/privacy-policy" className="text-[#00499E] font-semibold hover:underline">
                  Privacy Policy
                </Link>
                , which forms part of these terms.
              </p>
            </Section>

            <Section id="changes" title="10. Changes to these terms">
              <p>
                We may update these terms from time to time. The date at the top of this page tells you
                which version is current, and carrying on using the site after an update means you accept
                the new terms.
              </p>
            </Section>

            <Section id="law" title="11. Governing law">
              <p>
                These terms are governed by the laws of the Republic of {BUSINESS.addressCountryName}, and
                the courts of {BUSINESS.addressCountryName} handle any dispute that comes out of them,
                unless a separate signed agreement with us says otherwise.
              </p>
            </Section>

            <Section id="contact" title="12. Contact">
              <p>
                If anything here is unclear, write to us at{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-[#00499E] font-semibold hover:underline">
                  {BUSINESS.email}
                </a>{' '}
                or {BUSINESS.phoneDisplay}, or through our{' '}
                <Link href="/contact-us" className="text-[#00499E] font-semibold hover:underline">
                  contact page
                </Link>
                .
              </p>
            </Section>
          </div>
        </div>

        <RelatedLinks route="/terms-of-service" />
      </main>
      <Footer />
    </>
  )
}
