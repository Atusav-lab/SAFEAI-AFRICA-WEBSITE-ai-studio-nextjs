import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://safeaiafrica.com"),
  title: "SAFE AI-AFRICA | Empowering Africa Through Artificial Intelligence",
  description:
    "SAFE AI-AFRICA leverages advanced AI solutions to transform education, healthcare, and agriculture in Africa. Discover our no-code AI tools, virtual chemistry labs, and clinical systems.",
  keywords:
    "AI Africa, SAFESeq, SAFEKemia, SAFElytics, SafeFood Manager, AMR Lens, Artificial Intelligence Africa, No-code ML Africa, Chemistry Tutor AI",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/png" },
      { url: "/SAFEAI_ASSETS/safeaiafrica-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/SAFEAI_ASSETS/safeaiafrica-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://safeaiafrica.com/",
    siteName: "SAFE AI-AFRICA",
    title: "SAFE AI-AFRICA | Empowering Africa Through Artificial Intelligence",
    description:
      "SAFE AI-AFRICA leverages advanced AI solutions to transform education, healthcare, and agriculture in Africa.",
    images: [
      {
        url: "https://safeaiafrica.com/SAFEAI_ASSETS/safeaiafrica-logo.png",
        width: 512,
        height: 512,
        alt: "SAFE AI-AFRICA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAFE AI-AFRICA | Empowering Africa Through Artificial Intelligence",
    description:
      "SAFE AI-AFRICA leverages advanced AI solutions to transform education, healthcare, and agriculture in Africa.",
    images: ["https://safeaiafrica.com/SAFEAI_ASSETS/safeaiafrica-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", index: true, follow: true },
    // Bingbot specific optimizations
    // "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1
  },
  verification: {
    // Replace this string with the actual code from Bing Webmaster Tools -> Verify Your Site -> HTML Meta Tag
    other: {
      "msvalidate.01": ["B49C9C0C1063E594923D2F1AAA7F8E7E"],
    },
  },
};

function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://safeaiafrica.com/#organization",
        name: "SAFE AI-AFRICA",
        url: "https://safeaiafrica.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://safeaiafrica.com/#logo",
          url: "https://safeaiafrica.com/SAFEAI_ASSETS/safeaiafrica-logo.png",
          contentUrl: "https://safeaiafrica.com/SAFEAI_ASSETS/safeaiafrica-logo.png",
          width: 512,
          height: 512,
          caption: "SAFE AI-AFRICA",
        },
        image: { "@id": "https://safeaiafrica.com/#logo" },
        description:
          "SAFE AI-AFRICA leverages responsible artificial intelligence to transform education, healthcare, and agriculture in Africa.",
        foundingDate: "2023",
        foundingLocation: {
          "@type": "Place",
          name: "Kampala, Uganda",
        },
        areaServed: {
          "@type": "Continent",
          name: "Africa",
        },
        sameAs: [
          "https://safeseq.safeaiafrica.com",
          "https://safekemia.safeaiafrica.com",
          "https://invoicemasterpro.safeaiafrica.com",
          "https://safelytics.safeaiafrica.com",
          "https://safefoodmanager.safeaiafrica.com",
          "https://safeuzazi.safeaiafrica.com",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+256775323200",
          contactType: "customer service",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://safeaiafrica.com/#website",
        url: "https://safeaiafrica.com",
        name: "SAFE AI-AFRICA",
        description:
          "Empowering Africa Through Responsible Artificial Intelligence",
        publisher: { "@id": "https://safeaiafrica.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://safeaiafrica.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/256775323200"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#128C7E] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
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
        <SchemaOrg />
      </head>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
