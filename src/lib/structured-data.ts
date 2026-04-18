// Stable @ids used to cross-reference entities across schemas so AI engines
// resolve "Summit House Napa" to a single canonical entity in their knowledge graph.
export const ORG_ID = "https://www.summithousenapa.com/#organization";
export const LODGING_ID = "https://www.summithousenapa.com/#lodging";
export const VACATION_RENTAL_ID = "https://www.summithousenapa.com/#vacation-rental";
export const WEBSITE_ID = "https://www.summithousenapa.com/#website";

// Approximate Mount Veeder summit coordinates (AVA-level, not the property's
// exact location — privacy preserved). Used by Place schema and as the
// geo reference on LodgingBusiness and VacationRental.
export const MOUNT_VEEDER_GEO = {
  "@type": "GeoCoordinates",
  latitude: 38.4231,
  longitude: -122.4214,
} as const;

// Single canonical brand description, reused across all schemas.
// Tuned for AI answer-engine snippet extraction: self-contained sentence,
// front-loads entity name + type + location, includes the unique 31-night
// differentiator early, and hits every customer segment (remote work,
// wellness, design, wine country, privacy) without becoming a list.
export const SUMMIT_HOUSE_DESCRIPTION =
  "Summit House is a private 1969 A-frame rental at the summit of Mount Veeder in Napa Valley, offered exclusively for 31-night-minimum residencies. Three bedrooms on several private acres of ancient redwoods at 1,800 feet, with hot tub, infrared sauna, meditation trail, and Starlink internet — 15 minutes from downtown Napa.";

// Update this list as press, listings, or social profiles come online.
// Each entry strengthens entity recognition across AI search platforms.
const SAME_AS = [
  "https://www.instagram.com/summithousenapa",
  // TODO: add Google Business Profile URL once confirmed
  // TODO: add press URLs as features land (Dwell, AFAR, Cup of Jo, etc.)
];

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Summit House Napa",
    alternateName: "Summit House",
    url: "https://www.summithousenapa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.summithousenapa.com/images/twilight-aerial-aframe-glowing.jpg",
    },
    image: "https://www.summithousenapa.com/images/twilight-aerial-aframe-glowing.jpg",
    description: SUMMIT_HOUSE_DESCRIPTION,
    email: "stay@summithousenapa.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Napa",
      addressRegion: "CA",
      postalCode: "94558",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: "Mount Veeder, Napa Valley",
    },
    sameAs: SAME_AS,
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: "https://www.summithousenapa.com",
    name: "Summit House Napa",
    publisher: { "@id": ORG_ID },
  };
}

export function getLodgingBusinessSchema(reviewStats?: { rating: string; count: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": LODGING_ID,
    name: "Summit House Napa",
    description: SUMMIT_HOUSE_DESCRIPTION,
    url: "https://www.summithousenapa.com",
    email: "stay@summithousenapa.com",
    image: "https://www.summithousenapa.com/images/twilight-aerial-aframe-glowing.jpg",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Napa",
      addressRegion: "CA",
      postalCode: "94558",
      addressCountry: "US",
      // streetAddress intentionally omitted for guest privacy — locality + region + postal
      // is acceptable schema and avoids exposing the property's exact mountain road address.
    },
    geo: MOUNT_VEEDER_GEO,
    priceRange: "$$$$",
    checkinTime: "16:00",
    checkoutTime: "11:00",
    numberOfRooms: 3,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Hot tub", value: true },
      { "@type": "LocationFeatureSpecification", name: "Infrared sauna", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor shower", value: true },
      { "@type": "LocationFeatureSpecification", name: "Meditation trail", value: true },
      { "@type": "LocationFeatureSpecification", name: "Starlink internet", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fully equipped kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Washer/dryer", value: true },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats?.rating ?? "4.88",
      bestRating: "5",
      reviewCount: String(reviewStats?.count ?? 16),
      itemReviewed: { "@id": LODGING_ID },
    },
  };
}

export function getVacationRentalSchema(reviewStats?: { rating: string; count: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": VACATION_RENTAL_ID,
    name: "Summit House Napa A-Frame Residence",
    description: SUMMIT_HOUSE_DESCRIPTION,
    url: "https://www.summithousenapa.com/property",
    image: "https://www.summithousenapa.com/images/twilight-aerial-aframe-glowing.jpg",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Napa",
      addressRegion: "CA",
      postalCode: "94558",
      addressCountry: "US",
    },
    geo: MOUNT_VEEDER_GEO,
    numberOfBedrooms: 3,
    numberOfBathroomsTotal: 2.5,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 11,
    },
    accommodationCategory: "House",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Hot tub", value: true },
      { "@type": "LocationFeatureSpecification", name: "Infrared sauna", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor shower", value: true },
      { "@type": "LocationFeatureSpecification", name: "Meditation trail", value: true },
      { "@type": "LocationFeatureSpecification", name: "Starlink internet", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fully equipped kitchen", value: true },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats?.rating ?? "4.88",
      bestRating: "5",
      reviewCount: String(reviewStats?.count ?? 16),
      itemReviewed: { "@id": VACATION_RENTAL_ID },
    },
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the minimum stay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "31 days minimum. We embrace the extended stay because a month on Mount Veeder transforms a vacation into something deeper. Read more about why at summithousenapa.com/blog/why-napa-rentals-require-31-days.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the monthly rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utilities, WiFi (Starlink), hot tub, sauna, and everything on the property. Guests bring groceries.",
        },
      },
      {
        "@type": "Question",
        name: "How does check-in work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Coordinated directly, detailed instructions sent before arrival.",
        },
      },
      {
        "@type": "Question",
        name: "What's the cancellation policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Flexible for long-term stays, contact for details.",
        },
      },
      {
        "@type": "Question",
        name: "Is the road to Mount Veeder difficult?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narrow and winding but paved. AWD recommended Nov-March.",
        },
      },
      {
        "@type": "Question",
        name: "Is there reliable internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Starlink satellite with strong speeds for remote work and video calls.",
        },
      },
      {
        "@type": "Question",
        name: "Can I bring pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inquire about specific pets when booking.",
        },
      },
      {
        "@type": "Question",
        name: "What's the nearest grocery store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oakville Grocery 10 min, downtown Napa 15 min.",
        },
      },
      {
        "@type": "Question",
        name: "Is there cell service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Limited on the mountain, but WiFi calling via Starlink works well.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Peak season fills months ahead. Contact early for best dates.",
        },
      },
      {
        "@type": "Question",
        name: "What's the best time to visit Summit House Napa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Peak season (April–November) offers warm weather and harvest energy. Off-peak (December–March) brings quiet, misty mornings and lush green landscapes. Both are exceptional.",
        },
      },
      {
        "@type": "Question",
        name: "Is Summit House Napa good for remote work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Starlink satellite internet provides strong speeds for video calls and remote work. The property offers multiple workspaces including a dedicated desk, the conversation pit, and the front deck.",
        },
      },
      {
        "@type": "Question",
        name: "What makes this different from other Napa Valley rentals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Napa rentals are on the valley floor. Summit House sits at the summit of Mount Veeder — several private acres of ancient redwoods with panoramic views above the valley. It's a mountaintop of your own.",
        },
      },
    ],
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image: string;
  // Tier 2.3 enhancements (all optional for backwards compat)
  dateModified?: string;
  imageWidth?: number;
  imageHeight?: number;
  wordCount?: number;
  articleSection?: string;
}) {
  const fullUrl = `https://www.summithousenapa.com${article.url}`;
  const fullImage = `https://www.summithousenapa.com${article.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: fullUrl,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    image:
      article.imageWidth && article.imageHeight
        ? {
            "@type": "ImageObject",
            url: fullImage,
            width: article.imageWidth,
            height: article.imageHeight,
          }
        : fullImage,
    mainEntityOfPage: fullUrl,
    ...(article.wordCount && { wordCount: article.wordCount }),
    ...(article.articleSection && { articleSection: article.articleSection }),
    // Speakable lets voice assistants (Google Assistant, Siri) and AI engines
    // identify the most readable content on the page for audio summaries.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "article p:first-of-type"],
    },
    // Author and publisher both resolve to the canonical Organization entity (#organization)
    // defined site-wide via app/layout.tsx. Per project decision, the property/brand is the author —
    // not a named individual — until/unless an external editorial feature establishes a byline.
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

// ── Tier 2 schemas ────────────────────────────────────────────────────────

type ReviewLike = {
  name: string;
  rating: number;
  text: string;
  isoDate: string;
};

/**
 * Wraps an array of guest reviews as JSON-LD Review entities, each pointing
 * back to the LodgingBusiness via itemReviewed @id. This converts the
 * AggregateRating from a number-only signal into citable evidence base.
 */
export function getReviewArraySchema(reviews: readonly ReviewLike[]) {
  return {
    "@context": "https://schema.org",
    "@graph": reviews.map((r, i) => ({
      "@type": "Review",
      "@id": `https://www.summithousenapa.com/reviews#review-${i + 1}`,
      itemReviewed: { "@id": LODGING_ID },
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.text,
      datePublished: r.isoDate,
    })),
  };
}

export function getMountVeederPlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": "https://www.summithousenapa.com/location#mount-veeder",
    name: "Mount Veeder",
    description:
      "Mount Veeder is one of the most remote and rugged American Viticultural Areas in Napa Valley, defined by volcanic soils, old-growth redwood forests, and dramatic topography. Rising to over 2,600 feet, it is home to fewer than 40 wineries producing some of the most sought-after Cabernet Sauvignon in California.",
    url: "https://www.summithousenapa.com/location",
    geo: MOUNT_VEEDER_GEO,
    containedInPlace: {
      "@type": "Place",
      name: "Napa Valley",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "California, United States",
      },
    },
    touristType: ["Wine tourism", "Architecture and design travel", "Wellness retreat"],
  };
}

export function getPropertyFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.summithousenapa.com/property#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many bedrooms does Summit House have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Summit House has three bedrooms and 2.5 bathrooms across the renovated 1969 A-frame, sleeping up to 11 guests across multiple beds and configurations.",
        },
      },
      {
        "@type": "Question",
        name: "When was Summit House built and renovated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The original A-frame was built in 1969 and fully renovated in 2026. The renovation preserved the building's three joined A-frame geometry, river-rock hearth, sunken conversation pit, and original cedar materiality.",
        },
      },
      {
        "@type": "Question",
        name: "What amenities are included at Summit House?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hot tub, infrared sauna, outdoor shower, meditation trail through ancient redwoods, fully equipped kitchen, washer/dryer, EV charger, Starlink satellite internet, and dedicated workspaces. Utilities and WiFi are included in the monthly rate.",
        },
      },
      {
        "@type": "Question",
        name: "How big is the property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Summit House sits on several private acres of ancient redwoods at approximately 1,800 feet elevation on Mount Veeder, with no neighboring properties visible.",
        },
      },
      {
        "@type": "Question",
        name: "Is the rental pet-friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pets may be considered on a case-by-case basis. Inquire about your specific pet when booking.",
        },
      },
    ],
  };
}

export function getLocationFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.summithousenapa.com/location#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Mount Veeder located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mount Veeder is in the southwestern Mayacamas Mountains of Napa Valley, California. It is one of 16 American Viticultural Areas in Napa Valley and rises to over 2,600 feet, making it the most remote and rugged of the region's appellations.",
        },
      },
      {
        "@type": "Question",
        name: "How far is Summit House from downtown Napa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Summit House is approximately 15 minutes from downtown Napa by car, descending the mountain via Mount Veeder Road. Oakville Grocery is about 10 minutes away.",
        },
      },
      {
        "@type": "Question",
        name: "How long is the drive from San Francisco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The drive from San Francisco to Summit House is approximately one hour, depending on traffic across the Bay Bridge or Golden Gate Bridge. Sonoma is about 20 minutes away in the opposite direction.",
        },
      },
      {
        "@type": "Question",
        name: "Which wineries are near Summit House?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Summit House is surrounded by world-class Mount Veeder wineries including Hess Persson Estates, Mayacamas Vineyards, Mount Veeder Winery, Progeny, and Sky Vineyards. Most are within 10 minutes of the property.",
        },
      },
      {
        "@type": "Question",
        name: "What is the elevation of Summit House?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Summit House sits at approximately 1,800 feet elevation on Mount Veeder, well above the Napa Valley fog line, with panoramic views of the valley below.",
        },
      },
      {
        "@type": "Question",
        name: "Is the road to Mount Veeder difficult to drive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mount Veeder Road is paved but narrow and winding. AWD or 4WD is recommended November through March when storms can leave debris on the road.",
        },
      },
    ],
  };
}

// ── Article schema (refined) ──────────────────────────────────────────────

export function getBreadcrumbSchema(pageName: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.summithousenapa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `https://www.summithousenapa.com${pageUrl}`,
      },
    ],
  };
}
