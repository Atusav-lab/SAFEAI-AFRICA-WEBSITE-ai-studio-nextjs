# SAFE AI Africa Website

Welcome to the official repository for the **SAFE AI Africa** platform, an innovative AI hub tailored for African institutions, providing comprehensive data analytics, drug discovery solutions, educational technology, and advanced AI training.

## 🌍 About The Project

SAFE AI Africa aims to empower Africa through artificial intelligence by showcasing groundbreaking products and research, connecting visionary leadership, and advancing responsible AI implementation.

The website provides interactive demonstrations, embedded animations, and clean layouts to showcase products like **SAFESeq**, **SAFEKemia**, and **Safelytics**.

## 💻 Tech Stack

This project is built using modern web development practices and tools:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Spline](https://spline.design/) (via `@splinetool/react-spline`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Architecture**: Component-driven architecture using `class-variance-authority`, `clsx`, and `tailwind-merge` for scalable, reusable UI components.

## ✨ Key Features & Implementations

- **Interactive 3D Robot Animation**: A fully responsive Spline 3D canvas natively embedded in the Hero section to immediately capture user attention and illustrate cutting-edge AI.
- **Dynamic Routing & Pages**:
  - `Hero & What We Do`: Seamless layout utilizing Framer Motion for scroll-based appearances and video integration.
  - `Leadership Team`: A finely-tuned, responsive grid implementing strict aspect ratio constraints to ensure all headshots are uniformly cropped and object-positioned correctly.
  - `Solutions / Products`: Clean grids designed to gracefully scale down to mobile devices.
- **Tailwind v4 Integration**: Custom PostCSS pipeline configured (`postcss.config.mjs`) to perfectly support the newest Tailwind v4 utilities in Next.js 16.

## 🚀 Getting Started

To get the project running locally on your machine, follow these steps:

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- Git

### 2. Installation

Clone the repository and install the dependencies:
```bash
git clone https://github.com/Atusav-lab/SAFEAI-AFRICA-WEBSITE-ai-studio-nextjs.git
cd SAFEAI-AFRICA-WEBSITE-ai-studio-nextjs/safeai-react
npm install
```

### 3. Development Server

Start the Next.js development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The development server supports hot-reloading for immediate feedback while coding.

## 🛠️ Project Structure
- `src/app/`: Next.js App Router endpoints (`page.tsx`, `layout.tsx`, etc.)
- `src/components/`: Reusable React components (`Header.tsx`, `Footer.tsx`, and UI primitive components like `SplineScene`).
- `src/lib/`: Site-wide data and helpers: SEO metadata builder, JSON-LD schema, internal-link graph, FAQs, case studies, testimonials.
- `public/SAFEAI_ASSETS/`: Static assets, images, team headshots, and media.

## 🔍 SEO conventions

Every indexable route is a **server component** (`page.tsx`) that exports metadata and
renders a client component alongside it (`AboutUsClient.tsx`, `SolutionClient.tsx`, …).
A page marked `'use client'` cannot export `metadata`, which is why the split exists.
Keep it when adding pages.

```tsx
// src/app/example/page.tsx
export const metadata: Metadata = buildMetadata({
  title: 'Unique page title',          // brand suffix is added automatically
  description: 'Unique 140 to 160 character description.',
  path: '/example',                    // drives the canonical URL
  image: '/SAFEAI_ASSETS/example.jpg', // optional; defaults to the generated OG card
})
```

Checklist for a new page:

1. `buildMetadata()` with a unique title, description and `path` (`src/lib/seo.ts`).
2. `<Breadcrumbs items={…} />` at the top of the page (renders `BreadcrumbList` JSON-LD).
3. A call to action plus `<ResponseTimePromise />` above the fold.
4. `<RelatedLinks route="/example" />` at the foot, after adding the route to
   `PAGES` and `RELATED` in `src/lib/internal-links.ts`.
5. Add the URL to `src/app/sitemap.ts`, or pass `noIndex: true` and add it to the
   disallow list in `src/app/robots.ts` if it should stay out of the index.

Site-wide data (contact details, address, opening hours, response-time promise) lives in
`src/lib/site.ts` and feeds the Organization / LocalBusiness JSON-LD in `src/lib/schema.ts`.
The default social share image is generated at `/og-image` (`src/app/og-image/route.tsx`).

## 🍪 Cookie consent

Consent is handled in-house, with no third-party CMP.

- `src/lib/cookies.ts`: categories, the published cookie inventory, and read/write
  helpers for the `saa_cookie_consent` first-party cookie (180 days).
- `src/components/CookieConsent.tsx`: banner and preferences panel, mounted once in
  the root layout. "Accept all" and "Reject non-essential" are equally prominent.
- `src/components/ConsentGate.tsx`: wraps every third-party embed. Nothing from
  Google Maps, YouTube or Spline loads until the visitor allows the *embedded content*
  category, so the banner is enforcement, not decoration.
- `src/components/CookieSettingsLink.tsx`: reopens the panel, and sits in the footer of every
  page and in the cookie section of the privacy policy.
- `src/hooks/useConsent.ts`: subscribe a component to the current choice.

Adding a new third-party embed? Wrap it in `ConsentGate` and add its cookies to
`COOKIE_INVENTORY`, because that array is what the privacy page publishes. Adding analytics?
Load it only when `useConsent().allows('analytics')` is true, and bump
`CONSENT_VERSION` so returning visitors are asked again.

## ✉️ Contact form delivery

The contact form posts to `/api/contact`. To have submissions actually reach the team,
set `CONTACT_WEBHOOK_URL` in the environment to an endpoint that forwards them
(Formspree, a Zapier/Make hook, a Slack or Teams incoming webhook, or your own mail
service):

```bash
CONTACT_WEBHOOK_URL="https://hooks.example.com/xxxx"
```

Without it the endpoint validates the submission and writes it to the server log only.
Nothing is emailed. The route also drops honeypot submissions and enforces field limits.

## 📄 License
All rights reserved © SAFE AI Africa.
