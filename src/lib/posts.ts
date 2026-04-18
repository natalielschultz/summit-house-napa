// Single source of truth for blog posts. Imported by:
//  - src/app/sitemap.ts (drives sitemap.xml)
//  - src/app/blog/page.tsx (drives blog index)
//
// When adding a new post, register it here AND create the page at
// src/app/blog/<slug>/page.tsx. Don't rely on filesystem discovery —
// posts are TSX, not MDX, so there's no automatic crawl.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD — used for datePublished
  lastModified?: string; // ISO YYYY-MM-DD — defaults to date if not edited
  image: string;
};

export const POSTS: Post[] = [
  {
    slug: "napa-valley-locals-guide",
    title: "Napa Valley Locals Guide",
    excerpt: "Where to eat, drink, and shop — a born-and-raised native's picks.",
    date: "2026-04-14",
    image: "/images/twilight-deck-firepit-sunset.jpg",
  },
  {
    slug: "best-hikes-napa-valley",
    title: "Best Hikes in Napa Valley",
    excerpt: "A native's insider guide to trails within driving distance of Mount Veeder.",
    date: "2026-04-14",
    image: "/images/meditation-spot-redwoods.jpg",
  },
  {
    slug: "finding-summit-house",
    title: "Finding Summit House",
    excerpt: "How a 1969 A-frame on Mount Veeder became Summit House.",
    date: "2026-04-12",
    image: "/images/exterior-front-driveway.jpg",
  },
  {
    slug: "the-rare-kind-of-privacy-in-napa",
    title: "The Rare Kind of Privacy",
    excerpt: "On seclusion, access, and living at the summit for a season.",
    date: "2026-04-10",
    image: "/images/twilight-conversation-pit.jpg",
  },
  {
    slug: "why-napa-rentals-require-31-days",
    title: "Why Napa Rentals Require 31 Days",
    excerpt: "Napa County's 31-night minimum-stay ordinance, explained.",
    date: "2026-04-08",
    image: "/images/twilight-aerial-aframe-glowing.jpg",
  },
];

// Static (non-blog) routes that should appear in the sitemap, with priorities.
// /terms-and-conditions and /admin/* are excluded by design.
export const STATIC_ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/property", priority: 0.9, changeFrequency: "weekly" },
  { path: "/availability", priority: 0.9, changeFrequency: "weekly" },
  { path: "/experience", priority: 0.8, changeFrequency: "weekly" },
  { path: "/location", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "weekly" },
  { path: "/reviews", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
  { path: "/remote-work-retreat-napa-valley", priority: 0.8, changeFrequency: "weekly" },
  { path: "/mount-veeder-napa-area-guide", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
];
