import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "Remote Work Retreat Napa Valley | Summit House Napa — Private Residence on Mount Veeder",
  description:
    "Summit House Napa offers a private, fully connected remote work retreat in Napa Valley — Starlink internet, dedicated workspace, panoramic views, and 31-night minimum stays.",
  alternates: { canonical: "/remote-work-retreat-napa-valley" },
  openGraph: {
    title:
      "Remote Work Retreat Napa Valley | Summit House Napa — Private Residence on Mount Veeder",
    description:
      "A private, fully connected remote work retreat in Napa Valley — Starlink internet, dedicated workspace, and 31-night minimum stays.",
    images: [{ url: "/images/primary-bedroom-desk-peak.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Work Retreat Napa Valley | Summit House Napa",
    description:
      "Starlink internet, dedicated workspace, and mountaintop focus in Napa Valley.",
    images: ["/images/primary-bedroom-desk-peak.jpg"],
  },
};

export default function RemoteWorkRetreatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema("Remote Work Retreat", "/remote-work-retreat-napa-valley")
          ),
        }}
      />
      <Hero
        image="/images/primary-bedroom-desk-peak.jpg"
        title="Work From the Summit"
        subtitle="A private residence above Napa Valley — designed for focused, connected, extended work stays."
        alt="Dedicated workspace with redwood forest views at Summit House Napa on Mount Veeder"
        overlayOpacity={0.5}
      />

      {/* The Setup */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Everything You Need. Nothing You Don&rsquo;t."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Starlink Internet",
                description:
                  "High-speed, low-latency connectivity at the summit. Reliable enough for video calls, large file transfers, and uninterrupted workflow. No shared bandwidth, no outages from valley infrastructure.",
              },
              {
                title: "Dedicated Workspace",
                description:
                  "A proper desk setup separate from living areas. Not a dining table with a power strip — a space designed for working days.",
              },
              {
                title: "Complete Privacy",
                description:
                  "No shared walls, no neighbors within earshot, no foot traffic. The mountain does most of the work.",
              },
              {
                title: "Quiet",
                description:
                  "The kind that doesn't exist at sea level.",
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
        </div>
      </section>

      {/* The Environment */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Where You&rsquo;ll Be Working" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                The residence sits on two acres of Mount Veeder with unobstructed views
                east across the valley toward the Vaca Range. On clear mornings, the
                valley below sits under a layer of fog while the summit is in full sun.
              </p>
              <p>
                Outside the work hours: a year-round hot tub, an infrared sauna, a fire
                pit, and miles of mountain roads for running or walking. The French Laundry
                is 22 minutes away if you want a reason to mark the end of a good week.
              </p>
              <p>
                This is not a coworking space. It is a private home that happens to be
                extraordinary — one you can live in for a month or more.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who Stays */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Guests Who Have Found Summit House" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Remote work stays at Summit House typically run 31 to 90 days. The guests
                who come tend to share a few things:
              </p>
              <ul className="space-y-3 ml-1">
                {[
                  "They work independently or lead distributed teams",
                  "They've outgrown the idea of a \"workcation\" and want a real base of operations, not a backdrop for Instagram",
                  "They want their personal environment to match the quality of their professional output",
                  "They value access to nature, good food, and silence — in equal measure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brass mt-1.5 text-xs">&#9679;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Common profiles: founders and executives on sabbatical, senior remote
                workers between offices, writers and researchers on deadline, creatives
                on commission, couples where both partners work remotely and want a
                shared change of scenery.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="What&rsquo;s Included" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FadeIn>
              <div className="space-y-4 font-sans text-base text-text leading-relaxed">
                <ul className="space-y-3">
                  {[
                    "Starlink high-speed internet",
                    "Dedicated workspace with ergonomic setup",
                    "Full kitchen — stocked with basics, designed for real cooking",
                    "Year-round hot tub (Hot Spring Limelight — always on)",
                    "Infrared sauna (Enlighten Rustic 4C)",
                    "Outdoor fire pit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-brass mt-1.5 text-xs">&#9679;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-4 font-sans text-base text-text leading-relaxed">
                <ul className="space-y-3">
                  {[
                    "EV charging (Level 2)",
                    "4-car parking",
                    "Private 2-acre property — no shared spaces",
                    "Weekly cleaning service available",
                    "All utilities included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-brass mt-1.5 text-xs">&#9679;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-muted mt-6 pt-4 border-t border-charcoal/10">
                  The property does not have a shared gym, concierge, or lobby. It is a
                  private home — and that&rsquo;s exactly the point.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
          <FadeIn>
            <SectionHeading title="Monthly Residency Pricing" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Summit House is available for stays of 31 nights or more. Monthly pricing
                is available upon inquiry and reflects long-term residency rates — not a
                nightly vacation-rental rate.
              </p>
              <p>
                A limited number of residency periods are available each quarter.
              </p>
              <div className="mt-8">
                <Link
                  href="/availability#inquiry"
                  className="inline-block bg-brass text-ink font-sans text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-ink hover:text-parchment transition-all duration-400"
                >
                  Inquire About Availability
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location Context */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Napa Valley, But Not the Napa Valley You Know" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Most people&rsquo;s mental image of Napa Valley is Highway 29 — tasting
                rooms, tour buses, boutique hotels. Mount Veeder is none of that.
                It&rsquo;s the ridge above all of it.
              </p>
              <p>
                You are 20 minutes from Yountville and the best restaurants in California.
                You are also, from the moment you leave the car and walk onto the property,
                in complete silence above the cloud line.
              </p>
              <p>
                The combination — world-class infrastructure below, genuine remoteness
                above — is unusual. It&rsquo;s also, for the right guest, exactly what
                makes a month here productive in a way that a city apartment or a beach
                house simply isn&rsquo;t.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif font-extralight uppercase tracking-[4px] text-3xl md:text-4xl text-parchment mb-6">
              Ready to Settle In?
            </h2>
            <p className="font-sans text-base text-text-muted leading-relaxed mb-8">
              Summit House accepts a limited number of guests each year. Stays begin at
              31 nights. Inquiries are reviewed individually — we want to make sure the
              property and the timing are right for you.
            </p>
            <Link
              href="/availability#inquiry"
              className="inline-block bg-brass text-ink font-sans text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-ink hover:text-parchment border border-brass transition-all duration-400"
            >
              Inquire About Residency
            </Link>
            <p className="mt-6 font-sans text-sm text-text-muted">
              Questions? Reach us at{" "}
              <a
                href="mailto:stay@summithousenapa.com"
                className="text-brass hover:text-parchment transition-colors"
              >
                stay@summithousenapa.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
