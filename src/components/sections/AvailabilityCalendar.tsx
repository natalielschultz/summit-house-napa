"use client";

import type { MonthAvailability } from "@/lib/availability";
import FadeIn from "@/components/animation/FadeIn";

interface Props {
  months: MonthAvailability[];
  onMonthSelect?: (month: string) => void;
}

function formatRate(rate: number): string {
  return `$${rate.toLocaleString()}`;
}

export default function AvailabilityCalendar({ months, onMonthSelect }: Props) {
  function handleClick(item: MonthAvailability) {
    if (item.status !== "available" || !onMonthSelect) return;
    onMonthSelect(`${item.month} ${item.year}`);
    const el = document.getElementById("inquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col items-center gap-4 mb-14 text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
              Availability
            </h2>
            <div className="bg-brass" style={{ width: 120, height: 1 }} aria-hidden="true" />
            <p className="font-sans text-base md:text-lg text-text-muted max-w-xl">
              A rolling 12-month view. Click any available month to inquire.
            </p>
          </div>
        </FadeIn>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {months.map((item, i) => {
            const isAvailable = item.status === "available";
            const isBooked = item.status === "booked";
            const isReserved = item.status === "reserved";

            return (
              <FadeIn key={`${item.month}-${item.year}`} delay={i * 0.04}>
                <button
                  type="button"
                  onClick={() => handleClick(item)}
                  disabled={!isAvailable}
                  className={`w-full border p-6 flex flex-col items-center gap-3 text-center transition-colors duration-200 ${
                    isAvailable
                      ? "border-brass/40 bg-white hover:border-brass hover:shadow-sm cursor-pointer"
                      : isBooked
                      ? "border-charcoal/10 bg-parchment/50 cursor-default opacity-60"
                      : "border-charcoal/15 bg-parchment/30 cursor-default opacity-70"
                  }`}
                >
                  <span className="font-serif text-lg text-ink">
                    {item.month}
                  </span>
                  <span className="font-sans text-xs text-text-muted">
                    {item.year}
                  </span>
                  {isAvailable && item.rate && (
                    <span className="font-serif text-xl text-brass">
                      {formatRate(item.rate)}
                      <span className="font-sans text-xs text-text-muted"> /mo</span>
                    </span>
                  )}
                  <span
                    className={`font-sans text-[10px] uppercase tracking-[0.15em] px-3 py-1 ${
                      isAvailable
                        ? "bg-brass/10 text-brass"
                        : isBooked
                        ? "bg-charcoal/5 text-text-muted"
                        : "bg-sage/10 text-sage"
                    }`}
                  >
                    {isAvailable ? "Available" : isBooked ? "Booked" : "Reserved"}
                  </span>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
