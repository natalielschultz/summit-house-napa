export function getLodgingBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "A-Frame of Napa",
    description:
      "Restored 1969 A-frame luxury cabin rental on Mount Veeder. 3BR/2.5BA, sleeps 11, 2 acres, hot tub, sauna.",
    url: "https://www.aframeofnapa.com",
    email: "stay@aframeofnapa.com",
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
      ratingValue: "4.88",
      bestRating: "5",
      reviewCount: "16",
    },
  };
}

export function getVacationRentalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: "A-Frame of Napa Luxury Cabin",
    description:
      "Restored 1969 A-frame with hot tub, sauna, meditation trail. Sleeps 11 on 2 acres. Full-month luxury rentals in Napa Valley.",
    url: "https://www.aframeofnapa.com/property",
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
      ratingValue: "4.88",
      bestRating: "5",
      reviewCount: "16",
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
          text: "30 days minimum.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the monthly rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utilities, WiFi (Starlink), hot tub, sauna, everything in the cabin. Guests bring groceries.",
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
        name: "What's the best time to visit A-Frame of Napa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Peak season (April–November) offers warm weather and harvest energy. Off-peak (December–March) brings quiet, misty mornings and lush green landscapes. Both are exceptional.",
        },
      },
      {
        "@type": "Question",
        name: "Is A-Frame of Napa good for remote work?",
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
          text: "Most Napa rentals are on the valley floor. The A-Frame sits at the summit of Mount Veeder — 2 private acres of ancient redwoods with panoramic views above the valley. It's a mountaintop of your own.",
        },
      },
    ],
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
        item: "https://www.aframeofnapa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `https://www.aframeofnapa.com${pageUrl}`,
      },
    ],
  };
}
