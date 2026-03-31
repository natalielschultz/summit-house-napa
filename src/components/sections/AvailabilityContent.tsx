"use client";

import { useState } from "react";
import type { MonthAvailability } from "@/lib/availability";
import AvailabilityCalendar from "@/components/sections/AvailabilityCalendar";
import InquiryForm from "@/components/sections/InquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  months: MonthAvailability[];
}

export default function AvailabilityContent({ months }: Props) {
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  return (
    <>
      <AvailabilityCalendar months={months} onMonthSelect={setSelectedMonth} />

      <div id="inquiry">
        <SectionHeading title="Inquire About Your Stay" />
        <InquiryForm selectedMonth={selectedMonth} />
      </div>
    </>
  );
}
