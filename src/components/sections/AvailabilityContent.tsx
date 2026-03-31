"use client";

import { useState } from "react";
import type { DayAvailability } from "@/lib/availability";
import AvailabilityCalendar from "@/components/sections/AvailabilityCalendar";
import InquiryForm from "@/components/sections/InquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  days: DayAvailability[];
}

export default function AvailabilityContent({ days }: Props) {
  const [selectedDates, setSelectedDates] = useState<string>("");

  function handleDatesSelect(checkIn: string, checkOut: string, total: number) {
    const fmt = (s: string) => {
      const d = new Date(s + "T12:00:00");
      return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    };
    setSelectedDates(`${fmt(checkIn)} – ${fmt(checkOut)} (${total.toLocaleString()} est.)`);
  }

  return (
    <>
      <AvailabilityCalendar days={days} onDatesSelect={handleDatesSelect} />

      <div id="inquiry" className="pt-20 md:pt-28">
        <SectionHeading title="Inquire About Your Stay" />
        <InquiryForm selectedMonth={selectedDates} />
      </div>
    </>
  );
}
