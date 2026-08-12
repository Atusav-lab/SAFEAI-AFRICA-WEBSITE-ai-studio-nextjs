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
    'The terms governing use of safeaiafrica.com and SAFE AI-AFRICA services: acceptable use, intellectual property, third-party links, disclaimers, liability and governing law.',
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
                By accessing safeaiafrica.com you agree to these terms. If you do not agree with them,
                please do not use the site. These terms cover this website only; each of our product
                platforms and every client engagement is governed by its own agreement, which prevails over
                these terms in the event of a conflict.
              </p>
            </Section>

            <Section id="use" title="2. Acceptable use">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>use the site in a way that breaks any applicable law or regulation;</li>
                <li>attempt to gain unauthorised access to any part of the site, its servers or connected systems;</li>
                <li>interfere with the availability of the site, including through automated scraping that degrades service;</li>
                <li>submit false, misleading, abusive or unlawful content through our forms;</li>
                <li>copy, republish or resell site content beyond what section 3 permits.</li>
              </ul>
            </Section>

            <Section id="ip" title="3. Intellectual property">
              <p>
                All content on this site — text, graphics, logos, product names, images, design and software
                — belongs to SAFE AI-AFRICA or its licensors and is protected by copyright and trade mark
                law. You may view, download and print pages for your own reference or to evaluate working
                with us. Any other reproduction, distribution or commercial use requires our written
                permission. Where you quote from the site, please attribute it and link back to the page.
              </p>
            </Section>

            <Section id="content" title="4. Accuracy of content">
              <p>
                We keep this site as accurate and current as we reasonably can, but the content is provided
                for general information. Product capabilities, roadmaps and programme details change. Nothing
                on this site is professional, clinical, legal or financial advice, and our health-related
                products support qualified professionals rather than replacing their judgement or a
                clinical decision.
              </p>
            </Section>

            <Section id="third-party" title="5. Third-party links and platforms">
              <p>
                The site links to our product platforms on separate subdomains and to third-party sites we
                do not control. We are not responsible for the content, availability or privacy practices of
                third-party sites, and a link is not an endorsement.
              </p>
            </Section>

            <Section id="inquiries" title="6. Inquiries, demos and proposals">
              <p>
                Submitting a form on this site starts a conversation; it does not create a contract. Prices,
                timelines and scope quoted informally are indicative until confirmed in a written proposal
                signed by both parties. {BUSINESS.responseTimePromise}
              </p>
            </Section>

            <Section id="availability" title="7. Availability">
              <p>
                We aim to keep the site available at all times but do not guarantee uninterrupted access. We
                may suspend, withdraw or change any part of the site without notice, including for
                maintenance or security.
              </p>
            </Section>

            <Section id="liability" title="8. Disclaimers and limitation of liability">
              <p>
                This website is provided &ldquo;as is&rdquo; without warranties of any kind, whether express
                or implied, to the fullest extent permitted by law. To the extent permitted by law, SAFE
                AI-AFRICA is not liable for indirect or consequential loss, loss of profit, loss of data or
                business interruption arising from your use of this website. Nothing in these terms excludes
                liability that cannot be excluded by law, including liability for death or personal injury
                caused by negligence or for fraud.
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
                We may update these terms from time to time. The revision date at the top of this page
                reflects the current version, and continued use of the site after an update means you accept
                the revised terms.
              </p>
            </Section>

            <Section id="law" title="11. Governing law">
              <p>
                These terms are governed by the laws of the Republic of {BUSINESS.addressCountryName}, and the
                courts of {BUSINESS.addressCountryName} have exclusive jurisdiction over any dispute arising
                from them, unless a separate signed agreement with us states otherwise.
              </p>
            </Section>

            <Section id="contact" title="12. Contact">
              <p>
                Questions about these terms can be sent to{' '}
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
