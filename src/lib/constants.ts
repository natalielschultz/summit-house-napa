export const SITE = {
  name: "Summit House Napa",
  tagline: "A summit retreat on Mount Veeder",
  description: "A private mountaintop sanctuary hidden among ancient redwoods at the summit of Mount Veeder, Napa Valley.",
  email: "stay@summithousenapa.com",
  phone: "",
  instagram: "summithousenapa",
  url: "https://www.summithousenapa.com",
} as const;

export const NAV_LINKS = [
  { label: "Property", href: "/property" },
  { label: "Experience", href: "/experience" },
  { label: "Location", href: "/location" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Availability", href: "/availability" },
  { label: "Our Story", href: "/about" },
] as const;

// Secondary pages surfaced via the desktop "Discover" dropdown and the
// mobile hamburger overlay. Also used by the Footer's Journal & Press and
// Extended Stays columns, so both header and footer stay in sync.
export const DISCOVER_LINKS = [
  { label: "Journal", href: "/blog" },
  { label: "Mount Veeder Guide", href: "/mount-veeder-napa-area-guide" },
  { label: "Press", href: "/press" },
  { label: "Remote Work Retreats", href: "/remote-work-retreat-napa-valley" },
] as const;

export const PROPERTY = {
  bedrooms: 3,
  bathrooms: 2.5,
  sqft: "2,000",
  acres: "2+",
  maxGuests: 11,
  minStay: 31,
  rating: 4.88,
  reviewCount: 16,
  yearBuilt: 1969,
} as const;

// Seasonal pricing - hardcoded display rates
export const PRICING = {
  seasons: [
    {
      name: "Peak Season",
      months: "April–Nov",
      range: "$14,000–$18,000",
      description: "Summer through harvest. The most sought-after months in Napa Valley.",
    },
    {
      name: "Off-Peak",
      months: "Dec–March",
      range: "$12,000–$14,000",
      description: "Quieter months on the mountain. Ideal for remote work, creative retreats, and winter wellness.",
    },
  ],
  includes: [
    "All utilities (water, electric, gas, trash)",
    "Starlink high-speed internet",
    "Hot tub, sauna & outdoor shower access",
    "Basic toiletries and cleaning supplies",
    "Welcome bottle of Napa wine & handwritten note",
  ],
} as const;

export const AMENITIES = {
  wellness: [
    "Hot Spring Prodigy hot tub (seats 6)",
    "Outdoor infrared sauna",
    "Open-air outdoor shower",
    "Private meditation trail",
    "Enchanted Hills Waterfall access",
  ],
  outdoor: [
    "Zen garden with mosaic dining table",
    "Two fire pit lounges",
    "Front deck with panoramic views",
    "BBQ & grill station",
    "2 acres of private land",
  ],
  interior: [
    "Sunken conversation pit with fireplace",
    "Sonos whole-house sound system",
    "72-inch smart TV with streaming",
    "Fully equipped modern kitchen",
    "Designer finishes throughout",
  ],
  work: [
    "Starlink satellite internet",
    "Dedicated workspace",
    "Reliable coverage indoors & outdoors",
  ],
} as const;

export const REVIEWS = [
  {
    name: "Sarah",
    date: "October 2024",
    isoDate: "2024-10-15",
    rating: 5,
    text: "An absolutely magical property. The meditation trail through the redwoods to the waterfall was the highlight of our month-long stay. We worked remotely every day with perfect Starlink connectivity, and every evening ended in the hot tub under the stars. The hosting is incredible — personal, attentive, and thoughtful.",
  },
  {
    name: "James & Emily",
    date: "August 2024",
    isoDate: "2024-08-15",
    rating: 5,
    text: "We've stayed in luxury rentals across Napa and Sonoma, and nothing compares to Summit House. The privacy, the ancient redwoods, the outdoor shower — it's a different world up on Mount Veeder. The renovation is stunning. We're already planning our return.",
  },
  {
    name: "Michael",
    date: "June 2024",
    isoDate: "2024-06-15",
    rating: 5,
    text: "Took a sabbatical and spent two months here. Best decision I've made in years. The property is exactly as described — private, beautifully designed, and the natural setting is extraordinary. The sunken conversation pit is where I wrote the best chapters of my book.",
  },
  {
    name: "Ana & David",
    date: "September 2024",
    isoDate: "2024-09-15",
    rating: 5,
    text: "We came for harvest season and stayed for 6 weeks. The proximity to Mount Veeder wineries was perfect, and coming home to this property every evening was pure luxury. The zen garden is our favorite spot.",
  },
  {
    name: "Christine",
    date: "March 2024",
    isoDate: "2024-03-15",
    rating: 5,
    text: "A hidden gem on Mount Veeder. The A-frame architecture is iconic, the renovation is impeccable, and the outdoor wellness amenities are world-class. We felt completely removed from the world while being just 15 minutes from downtown Napa.",
  },
] as const;
