/**
 * Case studies.
 *
 * Every claim here is drawn from what the platform actually does or from a
 * verifiable third-party programme. Where an outcome has not been independently
 * measured we describe the capability delivered rather than inventing a metric —
 * unverifiable statistics are the fastest way to lose both trust and rankings.
 */

export interface CaseStudy {
  slug: string
  title: string
  product: string
  sector: string
  summary: string
  challenge: string
  approach: string[]
  outcome: string[]
  capabilities: string[]
  image: string
  imageAlt: string
  /** Live platform or product page. */
  link: string
  external: boolean
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'safeseq-genomics',
    title: 'Putting a full genomics workbench in one browser tab',
    product: 'SAFESeq',
    sector: 'Genomics & public health',
    summary:
      'Africa’s first unified, AI-assisted genomic analysis platform — 30+ professional bioinformatics tools, no installation, no code, hosted on African-controlled infrastructure.',
    challenge:
      'Analysing a single DNA sequence normally means stitching together five or more disconnected, foreign-hosted tools, each with its own install, file format and learning curve. For African researchers, students and public-health labs that means slow turnaround, high skill barriers, and sequence data leaving the continent.',
    approach: [
      'Unified gene prediction, CRISPR guide design, primer design, plasmid mapping, 3D protein structure prediction, AMR screening, molecular docking and phylogenetics into a single browser workspace.',
      'Added an AI assistant that interprets every result in plain language, tuned to the local and global pathogen landscape.',
      'Exposed the toolset over the Model Context Protocol (MCP) so AI agents such as Claude and ChatGPT can query the platform directly.',
      'Deployed on African-controlled cloud infrastructure so sequence data stays under local governance by design.',
    ],
    outcome: [
      'Live, free and browser-based — researchers run a full workflow without installing anything.',
      'Selected among the Top 15 startups in Uganda’s BIOMIC Accelerator Program, run by The Lung Institute at Makerere University with STI-OP and Hindsight Ventures.',
      'The first Africa-hosted genomics platform to make its tools natively callable by AI agents via MCP.',
    ],
    capabilities: ['Bioinformatics', 'LLM integration', 'MCP tooling', 'Sovereign cloud deployment'],
    image: '/SAFEAI_ASSETS/safeseq.webp',
    imageAlt: 'SAFESeq unified genomics analysis platform interface',
    link: 'https://safeseq.safeaiafrica.com',
    external: true,
  },
  {
    slug: 'amr-lens-stewardship',
    title: 'Turning a phone camera into an antimicrobial stewardship instrument',
    product: 'AMR Lens Africa',
    sector: 'Clinical microbiology',
    summary:
      'Computer-vision measurement of inhibition zones with transparent AI reasoning, mapped to CLSI/EUCAST breakpoints and WHO AWaRe classes, feeding a regional resistance picture.',
    challenge:
      'Disc-diffusion results are read by eye and by ruler, which introduces variability between technicians and laboratories. Interpretation against CLSI/EUCAST breakpoints is manual, and resistance data rarely leaves the lab in a form anyone can aggregate — so clinicians prescribe without a current regional resistance picture.',
    approach: [
      'Built precision computer-vision measurement of zones of inhibition from a standard plate photograph.',
      'Layered a "Senior Microbiologist AI" that shows its reasoning rather than returning an unexplained verdict.',
      'Mapped every measurement to CLSI/EUCAST breakpoints and the WHO AWaRe classification for stewardship guidance.',
      'Kept the laboratory scientist in control: every AI-assisted measurement can be reviewed and overridden before a report is issued.',
      'Added synchronisation of validated results so laboratories can contribute to national and pan-African surveillance.',
    ],
    outcome: [
      'Shipped as an installable Android application for use at the bench.',
      'Generates interpreted laboratory reports with localised clinical guidance instead of raw measurements.',
      'Gives participating laboratories a route to feed standardised resistance data into regional surveillance.',
    ],
    capabilities: ['Computer vision', 'Clinical decision support', 'Mobile delivery', 'Surveillance data pipelines'],
    image: '/SAFEAI_ASSETS/amr-lens-africa.webp',
    imageAlt: 'AMR Lens Africa measuring an antibiotic zone of inhibition',
    link: '/amr-lens',
    external: false,
  },
  {
    slug: 'safezell-field-sales',
    title: 'Closing the loop between field reps, supervisors and the warehouse',
    product: 'SafeZell',
    sector: 'FMCG & distribution',
    summary:
      'A closed-loop field sales operations platform with GPS-validated check-ins, live stock positions, variance reconciliation and shelf-photo compliance across five user roles.',
    challenge:
      'FMCG field operations run on WhatsApp messages, paper route sheets and end-of-week spreadsheets. Supervisors cannot confirm a visit happened, stock and cash positions are reconciled days late, and disputes over variance are impossible to settle after the fact.',
    approach: [
      'Modelled the real chain of custody across merchandisers, sales representatives, supervisors, warehouse staff and administrators.',
      'Made every store visit verifiable with GPS-validated check-ins and shelf photography.',
      'Tracked sales in local currency against live stock and a running ledger, so variance surfaces the same day rather than the next cycle.',
      'Delivered supervisor dashboards covering sales, visit volume and compliance flags at a glance.',
    ],
    outcome: [
      'One system of record for field activity, replacing message threads and disconnected spreadsheets.',
      'Same-day variance reconciliation with an auditable trail behind every figure.',
      'Six core modules covering visits, inventory, variance, reporting and administration.',
    ],
    capabilities: ['Mobile-first product design', 'Geolocation workflows', 'Operational reporting', 'Role-based access'],
    image: '/SAFEAI_ASSETS/merchandiser-management-system-google-ai-studio-google-chrome-07-jun-26-03-57-50-2.png',
    imageAlt: 'SafeZell field sales dashboard showing sales, store visits and compliance',
    link: '/safezell',
    external: false,
  },
  {
    slug: 'safefood-manager-compliance',
    title: 'Replacing food-safety binders with an auditable digital QMS',
    product: 'SafeFood Manager',
    sector: 'Food manufacturing & safety',
    summary:
      'An AI-guided quality management system covering HACCP planning, deviation alerts, CAPA workflows, traceability and version-controlled documentation.',
    challenge:
      'Food safety compliance under HACCP, GFSI, BRC and ISO 22000 is typically managed through spreadsheets and printed binders. Deviations are noticed late, corrective actions are hard to close out, and audit preparation means reconstructing months of paper history.',
    approach: [
      'Digitised HACCP plans and critical control point monitoring in one platform.',
      'Automated deviation alerts so problems surface in real time instead of at the next review.',
      'Guided corrective and preventive action (CAPA) through to closure, with AI assistance on each step.',
      'Added instant traceability and version-controlled document logs for audit readiness.',
    ],
    outcome: [
      'A single precision-engineered platform in place of fragmented spreadsheets and binders.',
      'Real-time deviation management with a closed CAPA loop.',
      'Audit-ready traceability and document history available on demand.',
    ],
    capabilities: ['Compliance workflows', 'Document control', 'Alerting & automation', 'AI-guided processes'],
    image: '/SAFEAI_ASSETS/dashboard-preview-final.webp',
    imageAlt: 'SafeFood Manager quality management dashboard',
    link: 'https://safefoodmanager.safeaiafrica.com',
    external: true,
  },
  {
    slug: 'safekemia-virtual-lab',
    title: 'Giving schools a chemistry lab that fits on any device',
    product: 'SAFEKemia',
    sector: 'Education',
    summary:
      'A virtual chemistry laboratory and 24/7 AI tutor for African secondary schools, with interactive simulations and a safe simulated reaction lab.',
    challenge:
      'Many secondary schools cannot run practical chemistry: reagents, glassware and safety infrastructure are expensive, and one teacher cannot give individual attention to a class of sixty during a practical session.',
    approach: [
      'Built high-fidelity interactive simulations and an interactive periodic table students can explore directly.',
      'Created a virtual reaction lab where experiments run safely and repeatably, with no consumables.',
      'Added an AI tutor available at any hour, so a student stuck at 10pm still gets an explanation.',
      'Followed international curriculum standards so the material maps onto what schools already teach.',
    ],
    outcome: [
      'Practical chemistry becomes available to schools without laboratory infrastructure.',
      'Students get unlimited repetition of experiments that would be too costly or hazardous to repeat physically.',
      'Teachers get a tool that scales one-to-one explanation across a full class.',
    ],
    capabilities: ['Educational technology', 'Simulation', 'AI tutoring', 'Curriculum alignment'],
    image: '/SAFEAI_ASSETS/safekemia.webp',
    imageAlt: 'SAFEKemia virtual chemistry laboratory and AI tutor',
    link: 'https://safekemia.safeaiafrica.com',
    external: true,
  },
  {
    slug: 'safeuzazi-maternal-health',
    title: 'Maternal health guidance that speaks the local context',
    product: 'SAFEUZAZI AI',
    sector: 'Maternal & reproductive health',
    summary:
      'Week-by-week pregnancy tracking, an AI symptom checker for early warning signs, and family planning guidance grounded in African community values.',
    challenge:
      'Between antenatal visits, expectant mothers are largely on their own. Generic international pregnancy apps miss local context, and warning signs that warrant a clinic visit are easy to dismiss without guidance.',
    approach: [
      'Built week-by-week baby growth tracking so mothers know what to expect at each stage.',
      'Added an AI symptom checker focused on early identification of pregnancy problems.',
      'Provided personalised family planning guidance rooted in local wisdom and community values.',
      'Delivered it through Sisters Aoede, a compassionate conversational assistant rather than a clinical form.',
    ],
    outcome: [
      'Continuous support for mothers between antenatal appointments.',
      'Early-warning guidance that helps a mother decide when to seek care.',
      'Culturally grounded reproductive health information in an accessible format.',
    ],
    capabilities: ['Conversational AI', 'Health information design', 'Localisation', 'Mobile-first delivery'],
    image: '/SAFEAI_ASSETS/safeuzazi-ai-simple-care-for-african-women-google-chrome-16-apr-26-18-13-46-2.webp',
    imageAlt: 'SAFEUZAZI AI maternal health assistant interface',
    link: 'https://safeuzazi.safeaiafrica.com',
    external: true,
  },
]

export function caseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(study => study.slug === slug)
}
