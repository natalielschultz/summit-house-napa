import type { Metadata } from "next";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  description:
    "Private mountaintop sanctuary among ancient redwoods at Mount Veeder, Napa Valley. Restored 1969 A-frame with hot tub, sauna, and panoramic views.",
  metadataBase: new URL("https://www.summithousenapa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Summit House Napa",
    title: "Summit House Napa — Luxury Monthly Retreat on Mount Veeder",
    description:
      "Private mountaintop sanctuary among ancient redwoods at Mount Veeder, Napa Valley. Restored 1969 A-frame with hot tub, sauna, and panoramic views.",
    images: [{ url: "/images/deck-sunset-firepit.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit House Napa — Luxury Monthly Retreat on Mount Veeder",
    description:
      "Private mountaintop sanctuary among ancient redwoods at Mount Veeder, Napa Valley. Restored 1969 A-frame with hot tub, sauna, and panoramic views.",
    images: ["/images/deck-sunset-firepit.jpg"],
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
