import type { FaqItem } from './schema'
import { BUSINESS } from './site'

export interface FaqGroup {
  category: string
  items: FaqItem[]
}

/**
 * Client-facing FAQ. Rendered visibly on /faq (with FAQPage structured data) and
 * a short subset on /contact-us. Keep answers factual — anything stated here is
 * eligible to appear directly in search results.
 */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    category: 'Working with us',
    items: [
      {
        question: 'What does SAFE AI-AFRICA do?',
        answer:
          'We are an AI product studio and consultancy based in Kampala, Uganda. We build and operate our own AI platforms — including SAFESeq for genomics, SAFEKemia for chemistry education, SAFElytics for no-code machine learning, SafeZell for field sales, SafeFood Manager for food-safety compliance and AMR Lens Africa for antimicrobial stewardship — and we build bespoke AI systems, run AI training, and advise organisations on responsible AI adoption.',
      },
      {
        question: 'How quickly will you respond to my inquiry?',
        answer: `${BUSINESS.responseTimePromise} Urgent requests are best sent by WhatsApp or phone on ${BUSINESS.phoneDisplay}, where we usually reply the same working day.`,
      },
      {
        question: 'Where are you located, and do you work with clients outside Uganda?',
        answer:
          'Our head office is in Kampala, Uganda. We work with clients across Africa and internationally — projects are delivered remotely, with on-site sessions in Uganda and the wider region where a project needs them.',
      },
      {
        question: 'How does a typical engagement start?',
        answer:
          'It starts with a free discovery call. We follow a four-stage process — Research, Design, Build, Deliver — beginning with a short scoping conversation about your problem, data and constraints. You then receive a written proposal covering scope, timeline and cost before any development work begins.',
      },
      {
        question: 'What does a project cost?',
        answer:
          'Cost depends on scope: an advisory or training engagement is very different from a production AI platform. We quote per project after a scoping call, and the proposal breaks down phases so you can start small and expand. Several of our own platforms are also available directly, which is often faster and cheaper than commissioning something new.',
      },
      {
        question: 'How long does a project take?',
        answer:
          'A focused pilot or proof of concept typically runs over a few weeks; a full production platform runs over several months, delivered in phases so you see working software early and often. We agree the schedule in the proposal before work starts.',
      },
    ],
  },
  {
    category: 'Products & technology',
    items: [
      {
        question: 'Can I try your platforms before committing?',
        answer:
          'Yes. SAFESeq, SAFEKemia, SAFElytics, Invoice Master Pro, SafeFood Manager and SAFEUZAZI AI are live and accessible from the Products & Services page, and AMR Lens Africa is available as an Android download. Book a demo and we will walk your team through the platform that matches your use case.',
      },
      {
        question: 'Who owns the data and the intellectual property in a custom project?',
        answer:
          'You own your data. For bespoke development, ownership of the delivered solution is agreed in writing in the contract before work begins — clients normally retain ownership of project-specific code and models, while our pre-existing platform components remain ours and are licensed to you.',
      },
      {
        question: 'How do you handle data protection and privacy?',
        answer:
          'We design for data protection from the start: least-privilege access, encryption in transit, and data-minimisation in what we collect. Where a project involves personal or health data we agree the lawful basis, retention period and processing terms in writing. Our website privacy practices are described in full in our Privacy Policy.',
      },
      {
        question: 'Can systems be deployed on our own infrastructure?',
        answer:
          'Yes. Data sovereignty is a core design principle for us — SAFESeq, for example, runs on African-controlled cloud infrastructure. Depending on the project we can deploy to your cloud tenancy, to a sovereign regional host, or on-premises.',
      },
      {
        question: 'Do you provide support and maintenance after launch?',
        answer:
          'Yes. Every delivery includes a handover with documentation and training, and we offer ongoing support, monitoring and iteration under a maintenance agreement scoped to the system we built.',
      },
    ],
  },
  {
    category: 'Training & partnerships',
    items: [
      {
        question: 'Do you offer AI training for teams?',
        answer:
          'We run hands-on masterclasses, workshops and courses for corporate, healthcare and research teams, covering practical machine learning, computer vision, NLP and genomics analytics. SAFE Academy — our structured certification and job-placement programme — is launching soon and has an open waitlist.',
      },
      {
        question: 'Do you partner with universities, hospitals and public institutions?',
        answer:
          'Yes. We work with research and public-health institutions on genomics, antimicrobial resistance surveillance and clinical decision-support projects, and we contribute to AI policy and advocacy work on safe, inclusive regional AI frameworks. Contact us to discuss a partnership or grant collaboration.',
      },
    ],
  },
]

/** Flat list for structured data. */
export const ALL_FAQS: FaqItem[] = FAQ_GROUPS.flatMap(group => group.items)

/** Short subset shown on the contact page. */
export const CONTACT_FAQS: FaqItem[] = [
  ALL_FAQS[1], // response time
  ALL_FAQS[3], // how an engagement starts
  ALL_FAQS[4], // cost
  ALL_FAQS[2], // location / remote work
]
