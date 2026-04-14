import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Journal — Stories from Mount Veeder | Summit House Napa",
  description:
    "Insights on extended stays in Napa Valley, Mount Veeder living, and the art of slowing down. From the hosts of Summit House Napa.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Journal — Stories from Mount Veeder | Summit House Napa",
    description:
      "Insights on extended stays in Napa Valley, Mount Veeder living, and the art of slowing down.",
    images: [{ url: "/images/twilight-balcony-rattan-sunset.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal — Stories from Mount Veeder | Summit House Napa",
    description:
      "Insights on extended stays in Napa Valley, Mount Veeder living, and the art of slowing down.",
    images: ["/images/twilight-balcony-rattan-sunset.jpg"],
  },
};

const posts = [
  {
    title: "The Rare Kind of Privacy",
    subtitle: "On seclusion, access, and living at the summit for a season",
    href: "/blog/the-rare-kind-of-privacy-in-napa",
    image: "/images/meditation-spot-redwoods.jpg",
    excerpt:
      "Most people think about privacy in Napa as something you buy — an estate, a vineyard, a compound. But privacy is also something you can simply live inside of for a little while.",
    date: "April 2026",
  },
  {
    title: "Why Do Napa Rentals Require 31 Days?",
    subtitle: "The Complete Guide",
    href: "/blog/why-napa-rentals-require-31-days",
    image: "/images/deck-lounge-forest-view.jpg",
    excerpt:
      "It's one of the most Googled questions about renting in the valley. The answer has to do with local zoning law, not preference.",
    date: "April 2026",
  },
  {
    title: "Mount Veeder, Napa Valley",
    subtitle: "An Area Guide",
    href: "/mount-veeder-napa-area-guide",
    image: "/images/aerial-redwoods-overview.jpg",
    excerpt:
      "Wineries, trails, towns, and experiences worth knowing if you're spending a month or more above the valley.",
    date: "April 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Journal", "/blog")) }}
      />

      {/* Header */}
      <section className="bg-parchment pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Journal"
              subtitle="Stories, guides, and reflections from Mount Veeder."
            />
          </FadeIn>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <FadeIn key={post.href} delay={i * 0.15}>
                <Link href={post.href} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-2">
                    {post.date}
                  </p>
                  <h2 className="font-serif font-light uppercase tracking-[2px] text-2xl text-ink mb-1 group-hover:text-brass transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm text-text-muted mb-3">
                    {post.subtitle}
                  </p>
                  <p className="font-sans text-base text-text leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Begin your month on the mountain"
        buttonLabel="Check Availability"
        buttonHref="/availability#inquiry"
      />
    </>
  );
}
