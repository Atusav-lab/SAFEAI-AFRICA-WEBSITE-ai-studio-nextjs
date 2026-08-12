import type { FaqItem } from './schema'
import { BUSINESS } from './site'

export interface FaqGroup {
  category: string
  items: FaqItem[]
}

/**
 * Client-facing FAQ. Shown on /faq with FAQPage structured data, and a short
 * subset on /contact-us. Keep the answers factual and in plain English, because
 * anything written here can appear directly in search results.
 */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    category: 'Working with us',
    items: [
      {
        question: 'What does SAFE AI-AFRICA do?',
        answer:
          'We are an AI product studio and consultancy based in Kampala, Uganda. We build and run our own platforms, including SAFESeq for genomics, SAFEKemia for chemistry education, SAFElytics for no-code machine learning, SafeZell for field sales, SafeFood Manager for food safety compliance and AMR Lens Africa for antimicrobial stewardship. We also build custom AI systems for clients, train teams, and advise organisations on using AI responsibly.',
      },
      {
        question: 'How quickly will you respond to my inquiry?',
        answer: `${BUSINESS.responseTimePromise} If something is urgent, WhatsApp or call us on ${BUSINESS.phoneDisplay} and you will usually hear back the same working day.`,
      },
      {
        question: 'Where are you located, and do you work with clients outside Uganda?',
        answer:
          'Our head office is in Kampala, Uganda, and we work with clients across Africa and further afield. Most of the work happens remotely. Where a project needs us in the room, we travel within Uganda and the wider region.',
      },
      {
        question: 'How does a typical engagement start?',
        answer:
          'It starts with a free discovery call. We work in four stages: research, design, build and deliver. The first conversation is a short one about your problem, the data you have and what you are working with. After that you get a written proposal covering scope, timeline and cost, and nothing gets built until you are happy with it.',
      },
      {
        question: 'What does a project cost?',
        answer:
          'It depends on what you need. A training session or an advisory engagement sits at one end of the range, a full production platform at the other. We quote per project after a scoping call, and we break the proposal into phases so you can start small and grow. Several of our platforms are also available off the shelf, which is usually faster and cheaper than commissioning something new.',
      },
      {
        question: 'How long does a project take?',
        answer:
          'A focused pilot or proof of concept usually takes a few weeks. A full production platform takes a few months, delivered in phases so you see working software early rather than waiting until the end. We agree the schedule in the proposal before any work starts.',
      },
    ],
  },
  {
    category: 'Products and technology',
    items: [
      {
        question: 'Can I try your platforms before committing?',
        answer:
          'Yes. SAFESeq, SAFEKemia, SAFElytics, Invoice Master Pro, SafeFood Manager and SAFEUZAZI AI are live and you can reach them from our Products and Services page. AMR Lens Africa is available as an Android download. Book a demo and we will walk your team through whichever one fits your work.',
      },
      {
        question: 'Who owns the data and the intellectual property in a custom project?',
        answer:
          'You own your data, always. For custom development, we agree ownership of the finished solution in writing before work begins. Clients normally keep the code and models built specifically for them, while the platform components we already owned stay ours and are licensed to you.',
      },
      {
        question: 'How do you handle data protection and privacy?',
        answer:
          'We design for it from the start: access limited to the people who need it, encryption in transit, and collecting as little as the job requires. When a project involves personal or health data, we put the lawful basis, retention period and processing terms in writing. How we handle data on this website is set out in full in our Privacy Policy.',
      },
      {
        question: 'Can systems be deployed on our own infrastructure?',
        answer:
          'Yes. Data sovereignty matters to us, which is why SAFESeq runs on African-controlled cloud infrastructure. Depending on the project, we can deploy to your own cloud account, to a regional host, or onto servers you run yourself.',
      },
      {
        question: 'Do you provide support and maintenance after launch?',
        answer:
          'Yes. Every delivery ends with a proper handover, documentation and training for your team. From there we offer ongoing support, monitoring and improvements under a maintenance agreement built around the system we delivered.',
      },
    ],
  },
  {
    category: 'Training and partnerships',
    items: [
      {
        question: 'Do you offer AI training for teams?',
        answer:
          'We run hands-on masterclasses, workshops and courses for corporate, healthcare and research teams, covering practical machine learning, computer vision, natural language processing and genomics analytics. SAFE Academy, our longer certification and job placement programme, is launching soon and the waitlist is open.',
      },
      {
        question: 'Do you partner with universities, hospitals and public institutions?',
        answer:
          'Yes. We work with research and public health institutions on genomics, antimicrobial resistance surveillance and clinical decision support, and we contribute to policy work on safe and inclusive AI across the region. Get in touch if you have a partnership or a grant collaboration in mind.',
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
  ALL_FAQS[2], // location and remote work
]
