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

interface HospitableCalendarDay {
  date: string;
  status: { available: boolean; reason?: string };
  price: { amount: number; currency: string };
  min_stay: number;
  closed_for_checkin: boolean;
  closed_for_checkout: boolean;
}

async function fetchHospitablePropertyId(): Promise<string | null> {
  const key = process.env.HOSPITABLE_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch(`${HOSPITABLE_BASE}/properties?per_page=1`, {
      headers: {
        Authorization: `Bearer ${key}`,
        Accept: "application/json",
      },
      next: { revalidate: 86400 }, // cache property ID for 24h
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data?.[0]?.id ?? null;
  } catch {
    return null;
  }
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
    const days: HospitableCalendarDay[] = json.data ?? [];

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

export async function getDayAvailability(): Promise<DayAvailability[]> {
  // Try Hospitable API
  const propertyId = await fetchHospitablePropertyId();
  if (propertyId) {
    const today = new Date();
    const startDate = today.toISOString().split("T")[0];
    const endDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
      .toISOString()
      .split("T")[0];

    const days = await fetchHospitableCalendar(propertyId, startDate, endDate);
    if (days.length > 0) return days;
  }

  // Fallback to mock data
  return expandToDays(mockData);
}
