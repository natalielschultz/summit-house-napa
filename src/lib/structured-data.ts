// Stable @ids used to cross-reference entities across schemas so AI engines
// resolve "Summit House Napa" to a single canonical entity in their knowledge graph.
export const ORG_ID = "https://www.summithousenapa.com/#organization";
export const LODGING_ID = "https://www.summithousenapa.com/#lodging";
export const VACATION_RENTAL_ID = "https://www.summithousenapa.com/#vacation-rental";
export const WEBSITE_ID = "https://www.summithousenapa.com/#website";

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
    description:
      "Summit House is a private 1969 A-frame rental at the summit of Mount Veeder in Napa Valley, offered exclusively for 31-night-minimum residencies. Several private acres of ancient redwoods at 1,800 feet elevation.",
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
    description:
      "Summit House is a private residence at the summit of Mount Veeder, Napa Valley. A fully renovated 1969 home on several private acres of ancient redwoods. Monthly residencies with rates starting at 31 nights. Includes hot tub, sauna, outdoor shower, meditation trail, Starlink internet, and a fully equipped kitchen.",
    url: "https://www.summithousenapa.com",
    email: "stay@summithousenapa.com",
    image: "https://www.summithousenapa.com/images/twilight-aerial-aframe-glowing.jpg",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Napa",
      addressRegion: "CA",
      postalCode: "94558",
      streetAddress: "Mount Veeder",
      addressCountry: "US",
    },
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
    description:
      "A fully renovated 1969 A-frame residence at the summit of Mount Veeder with hot tub, sauna, and private meditation trail. Sleeps 11 on several private acres of ancient redwoods. Monthly residencies in Napa Valley.",
    url: "https://www.summithousenapa.com/property",
    image: "https://www.summithousenapa.com/images/twilight-aerial-aframe-glowing.jpg",
    parentOrganization: { "@id": ORG_ID },
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `https://www.summithousenapa.com${article.url}`,
    datePublished: article.datePublished,
    image: `https://www.summithousenapa.com${article.image}`,
    mainEntityOfPage: `https://www.summithousenapa.com${article.url}`,
    // Author and publisher both resolve to the canonical Organization entity (#organization)
    // defined on the homepage. Per project decision, the property/brand is the author —
    // not a named individual — until/unless an external editorial feature establishes a byline.
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

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
