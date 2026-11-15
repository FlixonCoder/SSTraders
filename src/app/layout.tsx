import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { copy } from "@/copy";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { EnquiryProvider } from "@/lib/enquiry-store";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteConfig.siteUrl ? { metadataBase: new URL(siteConfig.siteUrl) } : {}),
  title: {
    default: `Roofing sheets in Nayandahalli, Bengaluru | ${siteConfig.brand.name}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: `${siteConfig.brand.name}: roofing sheet dealer and stockist in Nayandahalli, Mysore Road, Bengaluru. Colour coated, GI, PUF panels, polycarbonate and more. Trading since ${siteConfig.established}.`,
  openGraph: {
    type: "website",
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand.name} - Roofing & Building Materials Since 1967`,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1A22",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          {copy.a11y.skipToContent}
        </a>
        <EnquiryProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileActionBar />
        </EnquiryProvider>
      </body>
    </html>
  );
}
