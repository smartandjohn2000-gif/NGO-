import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LANGUAGE_OPTIONS, SITE_CONFIG, type SupportedLanguage } from "@/lib/constants";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LanguageProvider } from "@/components/i18n/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Playfair_Display({
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

function getInitialLanguage(value: string | undefined): SupportedLanguage {
  const fallback: SupportedLanguage = "en";
  if (!value) return fallback;
  const supported = LANGUAGE_OPTIONS.some((option) => option.code === value);
  return supported ? (value as SupportedLanguage) : fallback;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLanguage = getInitialLanguage(cookieStore.get("wii-language")?.value);

  return (
    <html
      lang={initialLanguage === "zh" ? "zh-CN" : initialLanguage}
      dir={initialLanguage === "ar" ? "rtl" : "ltr"}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white text-slate-800">
        <LanguageProvider defaultLanguage={initialLanguage}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0B57D0]"
          >
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
