"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DayAvailability } from "@/lib/availability";
import FadeIn from "@/components/animation/FadeIn";

interface Props {
  days: DayAvailability[];
  onDatesSelect?: (checkIn: string, checkOut: string, total: number) => void;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MIN_NIGHTS = 30;

function parseDate(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDateShort(s: string): string {
  const d = parseDate(s);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDateFull(s: string): string {
  const d = parseDate(s);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function addDays(dateStr: string, n: number): string {
  const d = parseDate(dateStr);
  d.setDate(d.getDate() + n);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

function getMonthLabel(year: number, month: number): string {
  return new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function AvailabilityCalendar({ days, onDatesSelect }: Props) {
  const dayMap = useMemo(() => {
    const m = new Map<string, DayAvailability>();
    for (const d of days) m.set(d.date, d);
    return m;
  }, [days]);

  // Determine the range of months to display from the data
  const monthKeys = useMemo(() => {
    const set = new Set<string>();
    for (const d of days) {
      const [y, m] = d.date.split("-");
      set.add(`${y}-${m}`);
    }
    return Array.from(set).sort();
  }, [days]);

  // Show 2 months at a time on desktop, 1 on mobile (handled via CSS)
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedCheckIn, setSelectedCheckIn] = useState<string | null>(null);
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const maxPage = Math.max(0, monthKeys.length - 2);

  function goNext() {
    if (pageIndex < maxPage) {
      setDirection(1);
      setPageIndex((p) => Math.min(p + 2, maxPage));
    }
  }

  function goPrev() {
    if (pageIndex > 0) {
      setDirection(-1);
      setPageIndex((p) => Math.max(p - 2, 0));
    }
  }

  // Check if a 31-night stay starting from a date is fully available
  const canCheckIn = useCallback(
    (dateStr: string): boolean => {
      for (let i = 0; i < MIN_NIGHTS; i++) {
        const d = addDays(dateStr, i);
        const info = dayMap.get(d);
        if (!info || info.status !== "available") return false;
      }
      return true;
    },
    [dayMap]
  );

  // Calculate total for a check-in date (31 nights)
  const calculateTotal = useCallback(
    (checkIn: string): number => {
      let total = 0;
      for (let i = 0; i < MIN_NIGHTS; i++) {
        const d = addDays(checkIn, i);
        const info = dayMap.get(d);
        if (info?.dailyRate) total += info.dailyRate;
      }
      return total;
    },
    [dayMap]
  );

  // Range of dates that would be selected if hovering or selected
  const activeCheckIn = selectedCheckIn || hoveredDate;
  const highlightRange = useMemo(() => {
    if (!activeCheckIn || !canCheckIn(activeCheckIn)) return new Set<string>();
    const set = new Set<string>();
    for (let i = 0; i < MIN_NIGHTS; i++) {
      set.add(addDays(activeCheckIn, i));
    }
    return set;
  }, [activeCheckIn, canCheckIn]);

  const estimatedTotal = selectedCheckIn ? calculateTotal(selectedCheckIn) : null;
  const checkOutDate = selectedCheckIn ? addDays(selectedCheckIn, MIN_NIGHTS) : null;

  function handleDayClick(dateStr: string) {
    if (!canCheckIn(dateStr)) return;
    if (selectedCheckIn === dateStr) {
      setSelectedCheckIn(null);
      return;
    }
    setSelectedCheckIn(dateStr);
    const checkOut = addDays(dateStr, MIN_NIGHTS);
    const total = calculateTotal(dateStr);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "dates_selected", {
        check_in: dateStr,
        check_out: checkOut,
        estimated_total: total,
      });
    }
    if (onDatesSelect) {
      onDatesSelect(dateStr, checkOut, total);
    }
  }

  function handleDayHover(dateStr: string) {
    if (!selectedCheckIn) setHoveredDate(dateStr);
  }

  // Build calendar grid for a given month
  function renderMonth(monthKey: string) {
    const [yearStr, monthStr] = monthKey.split("-");
    const year = parseInt(yearStr);
    const month = parseInt(monthStr) - 1;
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const label = getMonthLabel(year, month);

    const cells: React.ReactNode[] = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="aspect-square" />);
    }

    // Day cells
    for (let d = 1; d <= totalDays; d++) {
      const dd = String(d).padStart(2, "0");
      const mm = String(month + 1).padStart(2, "0");
      const dateStr = `${year}-${mm}-${dd}`;
      const info = dayMap.get(dateStr);
      const isAvailable = info?.status === "available";
      const isInRange = highlightRange.has(dateStr);
      const isCheckIn = dateStr === selectedCheckIn;
      const isCheckOut = dateStr === checkOutDate;
      const isSelectable = isAvailable && canCheckIn(dateStr);
      const isToday =
        dateStr ===
        new Date().toISOString().split("T")[0];
      const isPast = !info;

      let cellClasses =
        "aspect-square flex flex-col items-center justify-center relative transition-all duration-300 ";

      if (isCheckIn) {
        cellClasses +=
          "bg-ink text-parchment rounded-l-sm ";
      } else if (isCheckOut) {
        cellClasses +=
          "bg-ink/5 rounded-r-sm ";
      } else if (isInRange) {
        cellClasses += "bg-brass/8 ";
      } else {
        cellClasses += " ";
      }

      if (isSelectable && !selectedCheckIn) {
        cellClasses += "cursor-pointer hover:bg-brass/10 ";
      } else if (!isAvailable || isPast) {
        cellClasses += "cursor-default ";
      }

      cells.push(
        <button
          key={dateStr}
          type="button"
          disabled={!isSelectable && !selectedCheckIn}
          onClick={() => handleDayClick(dateStr)}
          onMouseEnter={() => handleDayHover(dateStr)}
          onMouseLeave={() => setHoveredDate(null)}
          className={cellClasses}
          aria-label={`${isAvailable ? (info?.dailyRate ? `$${info.dailyRate} per night` : "Available") : info?.status || "Unavailable"}, ${formatDateFull(dateStr)}`}
        >
          <span
            className={`font-sans text-[13px] leading-none ${
              isCheckIn
                ? "text-parchment font-medium"
                : isAvailable
                ? "text-ink"
                : "text-charcoal/25"
            } ${isToday ? "font-semibold" : ""}`}
          >
            {d}
          </span>
          {isAvailable && info?.dailyRate && !isCheckIn && (
            <span className="font-sans text-[9px] text-brass mt-0.5 leading-none">
              ${info.dailyRate}
            </span>
          )}
          {isCheckIn && (
            <span className="font-sans text-[8px] text-brass-light mt-0.5 leading-none uppercase tracking-wider">
              in
            </span>
          )}
        </button>
      );
    }

    return (
      <div className="flex-1 min-w-0">
        <h3 className="font-serif font-light uppercase tracking-[2px] text-xl md:text-2xl text-ink text-center mb-6">
          {label}
        </h3>
        <div className="grid grid-cols-7 mb-3">
          {WEEKDAYS.map((w) => (
            <div
              key={w}
              className="text-center font-sans text-[10px] uppercase tracking-[0.15em] text-text-muted/60 pb-3"
            >
              {w}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-px">{cells}</div>
      </div>
    );
  }

  // Visible months: 2 on desktop
  const visibleMonths = monthKeys.slice(pageIndex, pageIndex + 2);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col items-center gap-4 mb-16 text-center">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-text-muted">
              Select Your Dates
            </p>
            <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight">
              Availability
            </h2>
            <div
              className="bg-brass mt-1"
              style={{ width: 80, height: 1 }}
              aria-hidden="true"
            />
            <p className="font-sans text-sm text-text-muted max-w-md mt-2 leading-relaxed">
              Choose a check-in date to preview your 31-night stay.
              Nightly rates reflect seasonal pricing.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {/* Calendar navigation */}
          <div className="flex items-center justify-between mb-10">
            <button
              type="button"
              onClick={goPrev}
              disabled={pageIndex === 0}
              className="group p-2 transition-opacity duration-300 disabled:opacity-0"
              aria-label="Previous months"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-charcoal group-hover:text-brass transition-colors duration-300"
              >
                <path
                  d="M13 4L7 10L13 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex-1" />

            <button
              type="button"
              onClick={goNext}
              disabled={pageIndex >= maxPage}
              className="group p-2 transition-opacity duration-300 disabled:opacity-0"
              aria-label="Next months"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-charcoal group-hover:text-brass transition-colors duration-300"
              >
                <path
                  d="M7 4L13 10L7 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Calendar grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={visibleMonths.join("-")}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
              >
                {visibleMonths.map((mk) => (
                  <div key={mk}>{renderMonth(mk)}</div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-charcoal/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brass/15 rounded-sm" />
              <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-text-muted">
                Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-charcoal/5 rounded-sm" />
              <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-text-muted">
                Unavailable
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-ink rounded-sm" />
              <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-text-muted">
                Selected
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Selection summary */}
        <AnimatePresence>
          {selectedCheckIn && estimatedTotal && checkOutDate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-12 border border-brass/30 bg-parchment/30 p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-text-muted">
                    Your Stay
                  </p>
                  <p className="font-serif text-xl md:text-2xl text-ink">
                    {formatDateShort(selectedCheckIn)} &mdash;{" "}
                    {formatDateShort(checkOutDate)}
                  </p>
                  <p className="font-sans text-sm text-text-muted">
                    {MIN_NIGHTS} nights
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-text-muted">
                    Estimated Total
                  </p>
                  <p className="font-serif text-3xl md:text-4xl text-brass">
                    ${estimatedTotal.toLocaleString()}
                  </p>
                  <p className="font-sans text-xs text-text-muted">
                    ~${Math.round(estimatedTotal / MIN_NIGHTS).toLocaleString()}/night
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("inquiry");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-brass text-ink font-sans text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-ink hover:text-parchment transition-all duration-400 cursor-pointer"
                >
                  Inquire About These Dates
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCheckIn(null)}
                  className="border border-charcoal/20 bg-transparent font-sans text-xs uppercase tracking-[0.15em] text-charcoal px-8 py-4 hover:border-charcoal hover:bg-charcoal hover:text-parchment transition-all duration-400 cursor-pointer"
                >
                  Clear Selection
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
