import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://worldimpactinitiative.org"),
  title: {
    default: "World Impact Initiative | Canadian Nonprofit Organization",
    template: "%s | World Impact Initiative",
  },
  description:
    "World Impact Initiative is a Canadian nonprofit advancing human dignity, equality, and opportunity through child protection, gender equality, youth empowerment, disability inclusion, health & education, and crisis response.",
  keywords: [
    "Canadian nonprofit organization",
    "humanitarian aid",
    "child protection",
    "youth empowerment",
    "disability inclusion",
    "gender equality",
    "crisis response",
    "community development",
    "World Impact Initiative",
    "NGO Canada",
  ],
  authors: [{ name: "World Impact Initiative" }],
  creator: "World Impact Initiative",
  publisher: "World Impact Initiative",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://worldimpactinitiative.org",
    siteName: "World Impact Initiative",
    title: "World Impact Initiative | Creating Lasting Impact",
    description:
      "Empowering vulnerable communities through sustainable, community-driven programs across Canada and beyond.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "World Impact Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@worldimpactini",
    creator: "@worldimpactini",
    title: "World Impact Initiative | Creating Lasting Impact",
    description: "Empowering vulnerable communities through sustainable programs.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://worldimpactinitiative.org",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "World Impact Initiative",
  url: "https://worldimpactinitiative.org",
  logo: "https://worldimpactinitiative.org/logo.png",
  description:
    "A Canadian nonprofit advancing human dignity, equality, and opportunity through sustainable community-driven programs.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
  },
  email: "info@worldimpactinitiative.org",
  sameAs: [
    "https://linktr.ee/worldimpactinitiative.org",
    "https://facebook.com/worldimpactinitiative",
    "https://instagram.com/worldimpactinitiative",
    "https://linkedin.com/company/worldimpactinitiative",
    "https://twitter.com/worldimpactini",
    "https://youtube.com/worldimpactinitiative",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
