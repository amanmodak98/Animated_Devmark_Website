import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalScene from "@/components/layout/GlobalScene";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SmoothCursor from "@/components/ui/SmoothCursor";
import MagneticCursor from "@/components/ui/MagneticCursor";

const SITE_URL = "https://devmarksolution.com";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&h=630&q=80";
const SITE_NAME = "DevMark Solution";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Design Agency for Bold Digital Experiences`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "DevMark Solution is a full-service design agency crafting animated websites, brand identities, and digital products that move people. Studio-grade design, motion, and code.",
  applicationName: SITE_NAME,
  keywords: [
    "design agency",
    "animated websites",
    "brand identity",
    "motion design",
    "web development",
    "UI/UX design",
    "creative studio",
    "DevMark Solution",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
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
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%236366f1'/%3E%3Cpath d='M18 44V20h6l16 18V20h6v24h-6L24 26v18z' fill='%23fff'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Crect width='180' height='180' rx='40' fill='%236366f1'/%3E%3Cpath d='M50 124V56h18l44 50V56h18v68h-18L68 74v50z' fill='%23fff'/%3E%3C/svg%3E",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Design Agency for Bold Digital Experiences`,
    description:
      "Full-service design agency building animated websites, brand identities, and digital products that move people.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Design Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Design Agency for Bold Digital Experiences`,
    description:
      "Full-service design agency building animated websites, brand identities, and digital products that move people.",
    images: [OG_IMAGE],
    creator: "@devmarksolution",
    site: "@devmarksolution",
  },
};

export const viewport = {
  themeColor: "#6366f1",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: OG_IMAGE,
  description:
    "DevMark Solution is a full-service design agency crafting animated websites, brand identities, and digital products.",
  sameAs: [
    "https://twitter.com/devmarksolution",
    "https://www.linkedin.com/company/devmarksolution",
    "https://www.instagram.com/devmarksolution",
    "https://github.com/devmarksolution",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}/contact`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:ital,wght@0,400;0,500;0,700;0,800;1,400;1,700&family=Inter+Tight:ital,wght@0,400..900;1,400..900&family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GlobalScene />
        <SmoothScroll />
        <SmoothCursor />
        <MagneticCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}