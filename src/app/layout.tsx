import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { seoKeywords, site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "World Impact Initiative | Canadian Nonprofit Organization",
    template: "%s | World Impact Initiative"
  },
  description:
    "World Impact Initiative is a Canadian nonprofit organization advancing human dignity, equality, and opportunity through humanitarian aid, child protection, youth empowerment, disability inclusion, gender equality, crisis response, and community development.",
  keywords: seoKeywords,
  openGraph: {
    title: "World Impact Initiative",
    description:
      "Creating lasting impact through compassion, protection, and opportunity.",
    url: site.url,
    siteName: site.name,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/program-collage.svg",
        width: 1400,
        height: 900,
        alt: "World Impact Initiative humanitarian program collage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "World Impact Initiative",
    description:
      "Canadian nonprofit organization supporting vulnerable and underserved communities."
  },
  alternates: {
    canonical: site.url
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA"
    },
    sameAs: [site.linktree],
    areaServed: "Canada and international communities",
    nonprofitStatus: "NonprofitType"
  };

  return (
    <html lang="en-CA">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
