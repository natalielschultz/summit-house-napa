export type MonthStatus = "available" | "booked" | "reserved";

export interface MonthAvailability {
  month: string;
  year: number;
  status: MonthStatus;
  rate: number | null;
}

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

// TODO: Replace with Hospitable API call
export async function getAvailability(): Promise<MonthAvailability[]> {
  return mockData;
}
