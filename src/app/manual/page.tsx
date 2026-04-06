import { Metadata } from "next";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/magic-link";
import { getManualSections } from "@/lib/parse-manual";
import Hero from "@/components/sections/Hero";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import ConciergeChat from "@/components/sections/ConciergeChat";

export const metadata: Metadata = {
  title: "House Manual — A-Frame of Napa",
  description:
    "Everything you need for your stay at A-Frame of Napa. WiFi, hot tub, kitchen, house rules, local recommendations, and more.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/manual" },
  openGraph: {
    title: "House Manual — A-Frame of Napa",
    description:
      "Everything you need for your stay at A-Frame of Napa. WiFi, hot tub, kitchen, house rules, local recommendations, and more.",
    images: [{ url: "/images/great-room-window-wall.jpg", width: 1200, height: 630 }],
  },
};

export default async function ManualPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  if (!token || !verifyToken(token).valid) {
    redirect("/manual/access-denied");
  }

  const sections = await getManualSections();

  return (
    <>
      <Hero
        image="/images/great-room-window-wall.jpg"
        title="House Manual"
        subtitle="Everything you need for a seamless stay on Mount Veeder"
      />

      {/* Nav chips */}
      <div className="sticky top-[72px] z-30 bg-parchment border-b border-charcoal/10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div
            className="flex gap-2 md:gap-3 py-4 overflow-x-auto md:justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="whitespace-nowrap rounded-full px-4 py-2 text-xs uppercase tracking-[0.15em] font-sans font-medium transition-all duration-300 border shrink-0 bg-transparent text-brass border-brass/40 hover:border-brass hover:bg-brass/5"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, i) => {
        const light = i % 2 === 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-16 md:py-20 ${light ? "bg-ink" : ""}`}
          >
            <div className="mx-auto max-w-4xl px-6 md:px-12">
              <FadeIn>
                <h2
                  className={`font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl leading-tight ${light ? "text-parchment" : "text-ink"}`}
                >
                  {section.title}
                </h2>
                <div
                  className="bg-brass mt-4"
                  style={{ width: 120, height: 1 }}
                  aria-hidden="true"
                />
                <div
                  className={`mt-8 font-sans text-base md:text-lg leading-relaxed manual-content ${light ? "manual-content-light" : ""}`}
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              </FadeIn>
            </div>
          </section>
        );
      })}

      <CTABanner
        headline="Questions? We're here to help"
        buttonLabel="Contact Us"
        buttonHref="/availability"
      />

      <ConciergeChat />
    </>
  );
}
