import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import AvailabilityContent from "@/components/sections/AvailabilityContent";
import FAQ from "@/components/sections/FAQ";
import { PRICING } from "@/lib/constants";
import { getDayAvailability, computeSeasonalRates, formatRateRange } from "@/lib/availability";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/structured-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Availability & Monthly Rates | Summit House Napa",
  description:
    "Check availability and seasonal rates for Summit House Napa. Monthly stays from $10,000–$16,000. Peak season April–November, off-peak December–March. Book direct.",
  alternates: { canonical: "/availability" },
  openGraph: {
    title: "Availability & Monthly Rates | Summit House Napa",
    description:
      "Check availability and seasonal rates for Summit House Napa. Monthly stays from $10,000–$16,000. Book direct for the best experience.",
    images: [{ url: "/images/twilight-great-room-full.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Availability & Monthly Rates | Summit House Napa",
    description:
      "Monthly stays from $10,000–$16,000. Peak season April–November, off-peak December–March.",
    images: ["/images/twilight-great-room-full.jpg"],
  },
};

const steps = [
  {
    number: "01",
    title: "Submit Your Inquiry",
    description:
      "Use the form below to share your preferred dates, group size, and anything else you'd like us to know. There's no commitment at this stage — just a conversation starter.",
  },
  {
    number: "02",
    title: "A Personal Call with Your Host",
    description:
      "Within 24 hours, your host will reach out to discuss your stay in detail — answering questions, sharing local recommendations, and making sure Summit House is the right fit for your trip.",
  },
  {
    number: "03",
    title: "Confirm & Book",
    description:
      "Once everything feels right, you'll receive a booking agreement and invoice. A 50% deposit secures your dates, with the balance due 31 days before check-in.",
  },
];

function getCurrentSeasonName(): string {
  const month = new Date().getMonth();
  return month >= 3 && month <= 10 ? "Peak Season" : "Off-Peak";
}

export default async function AvailabilityPage() {
  const currentSeason = getCurrentSeasonName();
  const days = await getDayAvailability();
  // Use hardcoded seasonal rates from constants
  const seasons = PRICING.seasons;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Availability & Rates", "/availability")) }}
      />
      <Hero
        image="/images/twilight-great-room-full.jpg"
        title="Availability & Rates"
        subtitle="Extended stays on Mount Veeder, priced by season."
        alt="Summit House great room illuminated at twilight with floor-to-ceiling windows"
      />

      {/* Seasonal Rate Table */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Seasonal Rates"
              subtitle="Monthly pricing reflects the rhythm of Napa Valley — from the quiet beauty of winter to the electric energy of harvest season."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasons.map((season, i) => {
              const isCurrent = season.name === currentSeason;
              return (
                <FadeIn key={season.name} delay={i * 0.1}>
                  <div
                    className={`relative border p-8 md:p-10 flex flex-col gap-4 h-full ${
                      isCurrent
                        ? "border-brass bg-white"
                        : "border-charcoal/10 bg-white"
                    }`}
                  >
                    {isCurrent && (
                      <span className="absolute top-0 right-0 bg-brass text-ink font-sans text-[10px] uppercase tracking-[0.2em] px-4 py-1.5">
                        Current Season
                      </span>
                    )}
                    <h3 className="font-serif font-light uppercase tracking-[2px] text-xl md:text-2xl text-ink">
                      {season.name}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-[0.15em] text-text-muted">
                      {season.months}
                    </p>
                    <p className="font-serif text-3xl md:text-4xl text-brass leading-tight">
                      {season.range}
                    </p>
                    <div className="bg-brass h-px w-12" aria-hidden="true" />
                    <p className="font-sans text-sm text-text-muted leading-relaxed">
                      {season.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={0.4}>
            <p className="mt-8 font-sans text-sm text-text-muted text-center">
              All rates are per calendar month. Pricing varies within each range
              based on specific dates and length of stay.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-5">
              <SectionHeading
                title="What's Included"
                subtitle="Every monthly stay comes with the essentials — and then some."
                align="left"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-7">
              <ul className="space-y-5">
                {PRICING.includes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-brass mt-1 text-lg leading-none">
                      &mdash;
                    </span>
                    <span className="font-sans text-base text-text leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Calendar + Inquiry Form (client interactive) */}
      <AvailabilityContent days={days} />

      {/* How It Works */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="How It Works"
              subtitle="Booking directly is simple, personal, and always pressure-free."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="flex flex-col gap-4">
                  <span className="font-serif text-5xl text-brass/20">
                    {step.number}
                  </span>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">{step.title}</h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQ />
    </>
  );
}
