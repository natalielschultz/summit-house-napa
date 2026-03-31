export type MonthStatus = "available" | "booked" | "reserved";

export interface MonthAvailability {
  month: string;
  year: number;
  status: MonthStatus;
  rate: number | null;
}

export interface DayAvailability {
  date: string; // YYYY-MM-DD
  status: MonthStatus;
  dailyRate: number | null;
}

// ---------------------------------------------------------------------------
// Hospitable API integration
// ---------------------------------------------------------------------------

const HOSPITABLE_BASE = "https://public.api.hospitable.com/v2";
const PROPERTY_ID = "cd9e9e60-4eb2-4c40-89dc-8ea075569814";

interface HospitableCalendarDay {
  date: string;
  status: { available: boolean; reason?: string };
  price: { amount: number; currency: string };
  min_stay: number;
  closed_for_checkin: boolean;
  closed_for_checkout: boolean;
}

async function fetchHospitableCalendar(
  propertyId: string,
  startDate: string,
  endDate: string
): Promise<DayAvailability[]> {
  const key = process.env.HOSPITABLE_API_KEY;
  if (!key) return [];

  try {
    const res = await fetch(
      `${HOSPITABLE_BASE}/properties/${propertyId}/calendar?start_date=${startDate}&end_date=${endDate}`,
      {
        headers: {
          Authorization: `Bearer ${key}`,
          Accept: "application/json",
        },
        next: { revalidate: 3600 }, // refresh every hour
      }
    );
    if (!res.ok) return [];
    const json = await res.json();
    const days: HospitableCalendarDay[] = json.data?.days ?? [];

    return days.map((d) => ({
      date: d.date,
      status: d.status.available ? "available" as const : "booked" as const,
      dailyRate: d.status.available ? Math.round(d.price.amount / 100) : null,
    }));
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Mock data fallback
// ---------------------------------------------------------------------------

const mockData: MonthAvailability[] = [
  { month: "April", year: 2026, status: "booked", rate: null },
  { month: "May", year: 2026, status: "booked", rate: null },
  { month: "June", year: 2026, status: "available", rate: 14000 },
  { month: "July", year: 2026, status: "available", rate: 16000 },
  { month: "August", year: 2026, status: "booked", rate: null },
  { month: "September", year: 2026, status: "reserved", rate: null },
  { month: "October", year: 2026, status: "available", rate: 14000 },
  { month: "November", year: 2026, status: "available", rate: 12000 },
  { month: "December", year: 2026, status: "available", rate: 9000 },
  { month: "January", year: 2027, status: "available", rate: 8500 },
  { month: "February", year: 2027, status: "reserved", rate: null },
  { month: "March", year: 2027, status: "available", rate: 9500 },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function monthToIndex(name: string): number {
  return MONTH_NAMES.indexOf(name);
}

function expandToDays(months: MonthAvailability[]): DayAvailability[] {
  const days: DayAvailability[] = [];
  for (const m of months) {
    const mi = monthToIndex(m.month);
    const count = daysInMonth(m.year, mi);
    const dailyRate = m.rate ? Math.round(m.rate / count) : null;
    for (let d = 1; d <= count; d++) {
      const dd = String(d).padStart(2, "0");
      const mm = String(mi + 1).padStart(2, "0");
      days.push({
        date: `${m.year}-${mm}-${dd}`,
        status: m.status,
        dailyRate,
      });
    }
  }
  return days;
}

// ---------------------------------------------------------------------------
// Public API — tries Hospitable first, falls back to mock data
// ---------------------------------------------------------------------------

// Peak = Apr–Nov (months 3–10), Off-Peak = Dec–Mar (months 0–2, 11)
function isPeakMonth(month: number): boolean {
  return month >= 3 && month <= 10;
}

export interface SeasonalRates {
  peak: { min: number; max: number } | null;
  offPeak: { min: number; max: number } | null;
}

export function computeSeasonalRates(days: DayAvailability[]): SeasonalRates {
  // Group available daily rates by month, then compute monthly totals
  const monthlyTotals = new Map<string, { total: number; count: number; month: number }>();

  for (const d of days) {
    if (d.status !== "available" || !d.dailyRate) continue;
    const key = d.date.substring(0, 7); // YYYY-MM
    const month = parseInt(d.date.substring(5, 7)) - 1;
    const entry = monthlyTotals.get(key) ?? { total: 0, count: 0, month };
    entry.total += d.dailyRate;
    entry.count += 1;
    monthlyTotals.set(key, entry);
  }

  let peakMin = Infinity, peakMax = -Infinity;
  let offMin = Infinity, offMax = -Infinity;

  for (const { total, count, month } of monthlyTotals.values()) {
    // Only count full or near-full months (25+ days) for accurate ranges
    if (count < 25) continue;
    // Estimate 30-day rate from actual daily totals
    const monthlyRate = Math.round((total / count) * 30);

    if (isPeakMonth(month)) {
      peakMin = Math.min(peakMin, monthlyRate);
      peakMax = Math.max(peakMax, monthlyRate);
    } else {
      offMin = Math.min(offMin, monthlyRate);
      offMax = Math.max(offMax, monthlyRate);
    }
  }

  return {
    peak: peakMin <= peakMax ? { min: peakMin, max: peakMax } : null,
    offPeak: offMin <= offMax ? { min: offMin, max: offMax } : null,
  };
}

export function formatRateRange(range: { min: number; max: number }): string {
  const fmt = (n: number) => `$${Math.round(n / 1000).toLocaleString()},000`;
  if (range.min === range.max) return fmt(range.min);
  return `${fmt(range.min)}–${fmt(range.max)}`;
}

export async function getDayAvailability(): Promise<DayAvailability[]> {
  // Try Hospitable API
  const key = process.env.HOSPITABLE_API_KEY;
  if (key) {
    const today = new Date();
    const startDate = today.toISOString().split("T")[0];
    const endDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
      .toISOString()
      .split("T")[0];

    const days = await fetchHospitableCalendar(PROPERTY_ID, startDate, endDate);
    if (days.length > 0) return days;
  }

  // Fallback to mock data
  return expandToDays(mockData);
}
