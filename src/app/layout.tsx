import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { organizationSchema } from "@/lib/schema";
import { BUSINESS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SAFE AI-AFRICA | Responsible AI Solutions for Africa",
    // Pages set their own full title via buildMetadata(); this template is the
    // fallback for any route that only supplies a short title.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "SAFE AI-AFRICA builds responsible AI for African healthcare, genomics, agriculture, education and business — SAFESeq, SAFEKemia, SAFElytics, AMR Lens and more. Kampala, Uganda.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "AI Africa",
    "artificial intelligence Uganda",
    "SAFESeq",
    "SAFEKemia",
    "SAFElytics",
    "SafeFood Manager",
    "AMR Lens Africa",
    "bioinformatics Africa",
    "no-code machine learning Africa",
    "AI consulting Kampala",
  ],
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/SAFEAI_ASSETS/safeaiafrica-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/SAFEAI_ASSETS/safeaiafrica-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    title: "SAFE AI-AFRICA | Responsible AI Solutions for Africa",
    description:
      "Responsible AI products for African healthcare, genomics, agriculture, education and enterprise. Built in Kampala, deployed across the continent.",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: "SAFE AI-AFRICA — responsible artificial intelligence for Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@safeaiafrica",
    creator: "@safeaiafrica",
    title: "SAFE AI-AFRICA | Responsible AI Solutions for Africa",
    description:
      "Responsible AI products for African healthcare, genomics, agriculture, education and enterprise.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": ["B49C9C0C1063E594923D2F1AAA7F8E7E"],
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

function FloatingWhatsApp() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      // Hidden on mobile: the sticky mobile CTA bar already carries a WhatsApp action.
      className="hidden md:flex fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#128C7E] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group items-center justify-center"
      aria-label="Chat with SAFE AI-AFRICA on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
    </a>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <JsonLd schema={organizationSchema()} />
      </head>
      {/* Bottom padding on mobile keeps the sticky CTA bar from covering page content. */}
      <body className="pb-[76px] md:pb-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {children}
        <FloatingWhatsApp />
        <StickyMobileCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
