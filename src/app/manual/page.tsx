import { Metadata } from "next";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/magic-link";
import { getManualSections } from "@/lib/parse-manual";
import FadeIn from "@/components/animation/FadeIn";
import ConciergeChat from "@/components/sections/ConciergeChat";

export const metadata: Metadata = {
  title: "House Manual — Summit House Napa",
  description:
    "Everything you need for your stay at Summit House Napa. WiFi, hot tub, kitchen, house rules, local recommendations, and more.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/manual" },
  openGraph: {
    title: "House Manual — Summit House Napa",
    description:
      "Everything you need for your stay at Summit House Napa. WiFi, hot tub, kitchen, house rules, local recommendations, and more.",
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
    <div className="manual-page min-h-screen">
      {/* Hero */}
      <div
        className="text-center"
        style={{ backgroundColor: "#1B4D2E", padding: "60px 24px" }}
      >
        <h1
          className="font-serif uppercase leading-tight"
          style={{
            fontWeight: 100,
            fontSize: "clamp(32px, 5vw, 48px)",
            letterSpacing: "6px",
            color: "#F5F2ED",
          }}
        >
          House Manual
        </h1>
        <p
          className="font-sans mt-4 mx-auto"
          style={{
            fontSize: "16px",
            color: "#8B9D83",
            maxWidth: "500px",
          }}
        >
          Everything you need to feel at home on the mountain
        </p>
      </div>

      {/* Table of Contents card */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "720px",
          marginTop: "-30px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "8px",
            padding: "32px 28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            className="font-serif uppercase"
            style={{
              fontWeight: 300,
              fontSize: "18px",
              letterSpacing: "2px",
              color: "#1B4D2E",
              paddingBottom: "12px",
              borderBottom: "2px solid #D4A574",
              marginBottom: "20px",
            }}
          >
            Contents
          </h2>
          <div
            className="grid gap-x-6 gap-y-1.5"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 py-1.5 font-sans transition-colors hover:text-[#1B4D2E]"
                style={{ fontSize: "14px", color: "#4A4238" }}
              >
                <span
                  className="font-serif shrink-0"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                    color: "#D4A574",
                    width: "24px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div
        className="mx-auto"
        style={{ maxWidth: "720px", padding: "48px 20px 48px" }}
      >
        <div className="flex flex-col" style={{ gap: "48px" }}>
          {sections.map((section) => (
            <FadeIn key={section.id}>
              <section
                id={section.id}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  borderLeft: "3px solid #D4A574",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  padding: "32px 28px",
                }}
              >
                <h2
                  className="font-serif uppercase"
                  style={{
                    fontWeight: 200,
                    fontSize: "clamp(22px, 3vw, 28px)",
                    letterSpacing: "4px",
                    color: "#1B4D2E",
                    marginBottom: "20px",
                  }}
                >
                  {section.title}
                </h2>
                <div
                  className="font-sans manual-content"
                  style={{ fontSize: "16px" }}
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              </section>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-center"
        style={{
          backgroundColor: "#1B4D2E",
          padding: "40px 24px 110px",
        }}
      >
        <p
          className="font-serif uppercase"
          style={{
            fontWeight: 400,
            fontSize: "14px",
            letterSpacing: "3px",
            color: "#F5F2ED",
          }}
        >
          Summit House Napa
        </p>
        <p
          className="font-sans mt-2"
          style={{ fontSize: "16px", color: "#F5F2ED" }}
        >
          Mount Veeder, Napa Valley
        </p>
        <p
          className="font-sans mt-3"
          style={{ fontSize: "12px", color: "#8B9D83" }}
        >
          Last updated: April 2026
        </p>
      </footer>

      <ConciergeChat />
    </div>
  );
}
