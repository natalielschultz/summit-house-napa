import type { Metadata } from "next";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  SUMMIT_HOUSE_DESCRIPTION,
} from "@/lib/structured-data";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-josefin",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Summit House Napa — Luxury Monthly Retreat on Mount Veeder",
  description: SUMMIT_HOUSE_DESCRIPTION,
  metadataBase: new URL("https://www.summithousenapa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Summit House Napa",
    title: "Summit House Napa — Luxury Monthly Retreat on Mount Veeder",
    description: SUMMIT_HOUSE_DESCRIPTION,
    images: [{ url: "/images/twilight-aframe-facade-front.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit House Napa — Luxury Monthly Retreat on Mount Veeder",
    description: SUMMIT_HOUSE_DESCRIPTION,
    images: ["/images/twilight-aframe-facade-front.jpg"],
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
      className={`${josefin.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="alternate" href="/llms.txt" type="text/plain" />
        {/* Site-wide entity schemas — Organization and WebSite live in layout
            so every page defines #organization in its own DOM (closes the
            dangling-@id gap when AI crawlers parse pages in isolation). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
