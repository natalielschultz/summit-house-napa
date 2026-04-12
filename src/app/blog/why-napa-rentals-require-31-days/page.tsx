import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Why Do Napa Rentals Require 31 Days? Napa Valley Minimum Stay Explained",
  description:
    "Wondering why Napa Valley rentals require a 31-day minimum? Here's the real reason — and what it means for guests who want more than a weekend.",
  alternates: { canonical: "/blog/why-napa-rentals-require-31-days" },
  openGraph: {
    title: "Why Do Napa Rentals Require 31 Days? Napa Valley Minimum Stay Explained",
    description:
      "Wondering why Napa Valley rentals require a 31-day minimum? Here's the real reason — and what it means for guests who want more than a weekend.",
    images: [{ url: "/images/deck-lounge-forest-view.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Do Napa Rentals Require 31 Days? Minimum Stay Explained",
    description:
      "Why Napa Valley rentals require a 31-day minimum — and what it means for guests who want more than a weekend.",
    images: ["/images/deck-lounge-forest-view.jpg"],
  },
};

export default function WhyNapaRentalsRequire31DaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema("Why Do Napa Rentals Require 31 Days?", "/blog/why-napa-rentals-require-31-days")
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title: "Why Do Napa Rentals Require 31 Days? Napa Valley Minimum Stay Explained",
              description:
                "Why Napa Valley rentals require a 31-day minimum — the zoning, the tax implications, and what it means for guests.",
              url: "/blog/why-napa-rentals-require-31-days",
              datePublished: "2026-04-12",
              image: "/images/deck-lounge-forest-view.jpg",
            })
          ),
        }}
      />
      <Hero
        image="/images/deck-lounge-forest-view.jpg"
        title="Why Do Napa Rentals Require 31 Days?"
        alt="Summit House deck lounge overlooking redwood forest — the setting for a month-long stay in Napa Valley"
        overlayOpacity={0.5}
      />

      {/* Intro */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                If you&rsquo;ve searched for a Napa Valley rental and noticed that many
                properties require a minimum stay of 30 or 31 nights, you&rsquo;re not
                alone — and you&rsquo;re not imagining things. It&rsquo;s one of the most
                Googled questions about renting in the valley. The answer has to do with
                local zoning law, not preference.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* It Starts With Napa County Zoning */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="It Starts With Napa County Zoning"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Napa County, like many high-demand wine regions, has placed strict limits
                on short-term vacation rentals — properties rented for fewer than 30
                consecutive nights. These rules were introduced to protect neighborhood
                character, reduce noise and party traffic, and preserve housing for
                full-time residents.
              </p>
              <p>
                The result: many residential properties in unincorporated Napa County —
                including hillside areas like Mount Veeder — are not permitted to operate
                as short-term rentals at all. Properties that do host guests must do so
                under a longer-stay model, typically 30 nights minimum.
              </p>
              <p>
                Some hosts set their minimum at 31 days (rather than 30) to stay clearly
                above the threshold and avoid any ambiguity about classification. One day
                of buffer means the stay is unambiguously a long-term tenancy under
                California law, which changes the tax treatment, the regulatory category,
                and the relationship between host and guest.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Changes at 30 Days */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="What Changes at 30 Days?"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Once a stay crosses the 30-day mark, several things shift:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-lg text-ink mb-2">
                    Transient Occupancy Tax
                  </h3>
                  <p>
                    California and most counties charge a nightly tax on short-term stays,
                    similar to a hotel tax. Stays of 30+ nights are typically exempt. This
                    can save guests a meaningful amount on a longer booking.
                  </p>
                </div>
                <div className="bg-brass h-px w-20" aria-hidden="true" />
                <div>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-lg text-ink mb-2">
                    Legal Classification
                  </h3>
                  <p>
                    A guest staying 30+ nights is generally considered a tenant under
                    California law rather than a transient occupant. This provides both
                    parties with clearer rights and obligations.
                  </p>
                </div>
                <div className="bg-brass h-px w-20" aria-hidden="true" />
                <div>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-lg text-ink mb-2">
                    Zoning Compliance
                  </h3>
                  <p>
                    In areas where short-term rentals are restricted, a 31-night minimum
                    keeps the property operating legally within residential zoning.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What This Means for Longer Stays */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="What This Means If You&rsquo;re Looking for a Longer Stay"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                If you&rsquo;ve been searching for a Napa Valley property for a month-long
                stay — whether for remote work, an extended family visit, a creative
                retreat, or simply a slower chapter of life — you&rsquo;re searching in
                the right category.
              </p>
              <p>
                Properties designed for 30+ night stays tend to be different in character
                from vacation rentals. They&rsquo;re set up for real living: full kitchens,
                reliable high-speed internet, outdoor spaces meant for extended use, and a
                level of privacy and quiet that a weekly-turnover property rarely offers.
              </p>
              <p>
                Summit House Napa is one such residence. Set at the summit of Mount Veeder
                with panoramic views of the valley below, it is designed for guests who
                want to settle in — not pass through.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-block bg-brass text-ink font-sans text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-ink hover:text-parchment transition-all duration-400"
                >
                  Learn About Summit House
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How Long Do Most Guests Stay */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="How Long Do Most Guests Stay?"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 max-w-3xl mx-auto space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Guests at Summit House typically stay between 31 and 90 days. Common stay
                profiles include:
              </p>
            </div>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Remote Professionals",
                description:
                  "Looking for a focused, distraction-free work environment with fast internet and dedicated workspace.",
              },
              {
                title: "Couples Relocating",
                description:
                  "Moving to the Bay Area or Napa Valley who need comfortable interim housing.",
              },
              {
                title: "Writers & Creatives",
                description:
                  "Seeking an extended period of uninterrupted work in an environment that inspires.",
              },
              {
                title: "Families in Transition",
                description:
                  "Between homes, during renovation, or after a move — a stable, beautiful place to land.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="border border-charcoal/10 p-8 flex flex-col gap-3 h-full">
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                    {item.title}
                  </h3>
                  <div className="bg-brass h-px w-10" aria-hidden="true" />
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-10 max-w-3xl mx-auto font-sans text-base md:text-lg text-text leading-relaxed">
              There is no upper limit on length of stay. The residence is available for
              extended residencies of several months for the right guest.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Frequently Asked Questions" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-8">
              {[
                {
                  q: "Can I stay fewer than 31 nights?",
                  a: "No. Summit House Napa requires a minimum stay of 31 consecutive nights. This is not a policy preference — it reflects the zoning classification of the property and ensures compliance with Napa County regulations.",
                },
                {
                  q: "Does the 31-day minimum apply year-round?",
                  a: "Yes.",
                },
                {
                  q: "Is the 31-day minimum common across Napa Valley?",
                  a: "It is common in unincorporated Napa County, particularly in hillside and agricultural zones. Properties within city limits (Napa city, St. Helena, Yountville) may have different rules. Always confirm the minimum stay and zoning status before booking any Napa Valley property.",
                },
                {
                  q: "Does staying 31+ nights change the price?",
                  a: "At Summit House, the monthly rate is priced for long-term stays. You are not paying a nightly vacation-rental rate multiplied by 31 — the rate reflects long-term residency pricing, which is meaningfully different.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-charcoal/10 pb-6">
                  <h3 className="font-serif font-light uppercase tracking-[1.5px] text-lg text-ink mb-3">
                    {item.q}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
          <FadeIn>
            <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                The 31-day minimum in Napa isn&rsquo;t a quirk — it&rsquo;s a feature of
                a regulatory environment that has shaped how the valley&rsquo;s most
                private properties can be experienced. For guests who are ready to stay
                long enough to actually know a place, it changes everything.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        headline="Ready to settle in?"
        buttonLabel="Inquire About Residency"
        buttonHref="/availability#inquiry"
      />
    </>
  );
}
