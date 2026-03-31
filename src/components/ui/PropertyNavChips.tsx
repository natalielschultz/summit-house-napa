"use client";

import { useEffect, useState, useRef } from "react";

const chips = [
  { label: "Great Room", target: "great-room" },
  { label: "Bedrooms", target: "bedrooms" },
  { label: "Kitchen", target: "kitchen" },
  { label: "Outdoor", target: "outdoor" },
  { label: "Amenities", target: "amenities" },
  { label: "Gallery", target: "gallery" },
];

export default function PropertyNavChips() {
  const [active, setActive] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = chips.map((c) => c.target);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div className="bg-parchment border-b border-charcoal/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div
          ref={scrollRef}
          className="flex gap-2 md:gap-3 py-4 overflow-x-auto md:justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {chips.map((chip) => {
            const isActive = active === chip.target;
            return (
              <button
                key={chip.target}
                onClick={() => scrollTo(chip.target)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-xs uppercase tracking-[0.15em] font-sans font-medium transition-all duration-300 border shrink-0 ${
                  isActive
                    ? "bg-brass text-parchment border-brass"
                    : "bg-transparent text-brass border-brass/40 hover:border-brass hover:bg-brass/5"
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
