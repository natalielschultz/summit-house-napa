export interface Review {
  name: string;
  date: string; // human-readable: "October 2024"
  isoDate: string; // ISO 8601 for schema datePublished
  rating: number;
  text: string;
}

const HOSPITABLE_BASE = "https://public.api.hospitable.com/v2";
const PROPERTY_ID = "cd9e9e60-4eb2-4c40-89dc-8ea075569814";

interface HospitableReview {
  id: string;
  platform: string;
  public: {
    rating: number;
    review: string;
  };
  reviewed_at: string;
}

interface HospitableReviewsResponse {
  data: HospitableReview[];
  meta: { last_page: number };
}

async function fetchReviewsPage(page: number): Promise<HospitableReviewsResponse | null> {
  const key = process.env.HOSPITABLE_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch(
      `${HOSPITABLE_BASE}/properties/${PROPERTY_ID}/reviews?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${key}`,
          Accept: "application/json",
        },
        next: { revalidate: 86400 }, // refresh daily
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function formatReviewDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export async function getReviews(minRating = 4): Promise<Review[]> {
  const allReviews: HospitableReview[] = [];

  // Fetch first page
  const first = await fetchReviewsPage(1);
  if (!first) return [];

  allReviews.push(...first.data);

  // Fetch remaining pages
  for (let p = 2; p <= first.meta.last_page; p++) {
    const page = await fetchReviewsPage(p);
    if (page) allReviews.push(...page.data);
  }

  return allReviews
    .filter((r) => r.public.rating >= minRating && r.public.review.length > 20)
    .sort((a, b) => new Date(b.reviewed_at).getTime() - new Date(a.reviewed_at).getTime())
    .map((r) => ({
      name: "Airbnb Guest",
      date: formatReviewDate(r.reviewed_at),
      isoDate: new Date(r.reviewed_at).toISOString().slice(0, 10),
      rating: r.public.rating,
      text: r.public.review,
    }));
}

export async function getReviewStats(): Promise<{ rating: string; count: number }> {
  const first = await fetchReviewsPage(1);
  if (!first) return { rating: "4.88", count: 16 };

  const allReviews: HospitableReview[] = [...first.data];
  for (let p = 2; p <= first.meta.last_page; p++) {
    const page = await fetchReviewsPage(p);
    if (page) allReviews.push(...page.data);
  }

  const count = allReviews.length;
  const avg = allReviews.reduce((sum, r) => sum + r.public.rating, 0) / count;
  return { rating: avg.toFixed(2), count };
}
