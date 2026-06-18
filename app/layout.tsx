import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Canadian Nonprofit Organization`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "World Impact Initiative is a Canadian nonprofit advancing dignity, equality, and opportunity through humanitarian aid, child protection, youth empowerment, disability inclusion, and crisis response.",
  keywords: [...SITE_CONFIG.seoKeywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Creating Lasting Impact`,
    description:
      "Join World Impact Initiative in delivering humanitarian aid and sustainable community development programs.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "World Impact Initiative humanitarian outreach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Creating Lasting Impact`,
    description:
      "Support a Canadian nonprofit focused on protection, empowerment, inclusion, and relief.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F7F9FC] text-slate-800">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0F4C81]"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
