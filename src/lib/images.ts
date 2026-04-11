/**
 * Central image directory for Summit House Napa.
 *
 * Every image in public/images/ is catalogued here with a descriptive label.
 * Reference images by importing from this file rather than hard-coding paths.
 */

export interface SiteImage {
  src: string;
  alt: string;
}

/** All property images keyed by a readable slug derived from the filename. */
const IMAGES = {
  // ── Exterior & Aerial ──────────────────────────────────────────
  "property-overview-aerial": {
    src: "/images/property-overview-aerial.jpg",
    alt: "Aerial overview of the Summit House property nestled among redwoods",
  },
  "summit-house-exterior-foggy": {
    src: "/images/summit-house-exterior-foggy.jpg",
    alt: "Summit House A-frame exterior on a misty morning",
  },
  "summit-house-exterior-front": {
    src: "/images/summit-house-exterior-front.jpg",
    alt: "Summit House front exterior framed by redwood trees",
  },
  "summit-house-peak-interior": {
    src: "/images/summit-house-peak-interior.jpg",
    alt: "Interior view looking up at the iconic A-frame peak",
  },
  "exterior-peak-lookingup": {
    src: "/images/exterior-peak-lookingup.jpg",
    alt: "A-frame peak detail seen from below",
  },
  "exterior-windows-lookingup": {
    src: "/images/exterior-windows-lookingup.jpg",
    alt: "Towering windows of the A-frame viewed from the garden",
  },

  // ── Great Room & Living Areas ──────────────────────────────────
  "great-room-chandelier-angle": {
    src: "/images/great-room-chandelier-angle.jpg",
    alt: "Great room chandelier from a low angle with vaulted ceiling",
  },
  "great-room-overhead-vertical": {
    src: "/images/great-room-overhead-vertical.jpg",
    alt: "Overhead vertical view of the great room layout",
  },
  "great-room-overhead-wide": {
    src: "/images/great-room-overhead-wide.jpg",
    alt: "Wide overhead shot of the great room and living space",
  },
  "great-room-window-wall": {
    src: "/images/great-room-window-wall.jpg",
    alt: "Floor-to-ceiling window wall flooding the great room with light",
  },
  "living-room-aerial-evening": {
    src: "/images/living-room-aerial-evening.jpg",
    alt: "Evening aerial view of the living room with warm lighting",
  },
  "living-room-chandelier-wide": {
    src: "/images/living-room-chandelier-wide.jpg",
    alt: "Wide shot of the living room highlighting the statement chandelier",
  },
  "living-room-full-chandelier": {
    src: "/images/living-room-full-chandelier.jpg",
    alt: "Full living room view with chandelier as the centerpiece",
  },
  "living-room-full-view": {
    src: "/images/living-room-full-view.jpg",
    alt: "Complete living room view showing the open floor plan",
  },
  "living-room-sunken-angle": {
    src: "/images/living-room-sunken-angle.jpg",
    alt: "Angled view of the sunken living room seating area",
  },
  "living-room-sunken-wide": {
    src: "/images/living-room-sunken-wide.jpg",
    alt: "Wide view of the sunken living room with fireplace",
  },
  "living-room-vaulted": {
    src: "/images/living-room-vaulted.jpg",
    alt: "Living room showcasing the dramatic vaulted A-frame ceiling",
  },
  "living-room-wide-glow": {
    src: "/images/living-room-wide-glow.jpg",
    alt: "Living room bathed in warm evening glow",
  },

  // ── Sunken Lounge & Conversation Pit ───────────────────────────
  "sunken-lounge-closeup-tv": {
    src: "/images/sunken-lounge-closeup-tv.jpg",
    alt: "Sunken lounge close-up with entertainment area",
  },
  "sunken-lounge-colorful": {
    src: "/images/sunken-lounge-colorful.jpg",
    alt: "Colorful sunken lounge with eclectic cushions and decor",
  },
  "sunken-lounge-fireplace": {
    src: "/images/sunken-lounge-fireplace.jpg",
    alt: "Sunken lounge with fireplace glowing at dusk",
  },
  "sunken-lounge-overhead-day": {
    src: "/images/sunken-lounge-overhead-day.jpg",
    alt: "Overhead daylight view of the sunken conversation pit",
  },
  "conversation-pit-closeup": {
    src: "/images/conversation-pit-closeup.jpg",
    alt: "Close-up of the conversation pit with plush seating",
  },

  // ── Sofa & Seating ────────────────────────────────────────────
  "sofa-area-full": {
    src: "/images/sofa-area-full.jpg",
    alt: "Full view of the sofa seating area",
  },
  "sofa-area-wide": {
    src: "/images/sofa-area-wide.jpg",
    alt: "Wide-angle view of the main sofa area",
  },
  "sofa-chandelier-vaulted": {
    src: "/images/sofa-chandelier-vaulted.jpg",
    alt: "Sofa area beneath the chandelier and vaulted ceiling",
  },
  "sofa-swing-chair-1": {
    src: "/images/sofa-swing-chair-1.jpg",
    alt: "Hanging swing chair beside the sofa nook",
  },
  "sofa-swing-chair-2": {
    src: "/images/sofa-swing-chair-2.jpg",
    alt: "Second angle of the hanging swing chair lounge",
  },
  "sofa-window-trees": {
    src: "/images/sofa-window-trees.jpg",
    alt: "Sofa area with panoramic tree views through the windows",
  },
  "sofa-window-wall": {
    src: "/images/sofa-window-wall.jpg",
    alt: "Sofa positioned against the floor-to-ceiling window wall",
  },

  // ── Hanging Chair ──────────────────────────────────────────────
  "hanging-chair-chandelier-detail": {
    src: "/images/hanging-chair-chandelier-detail.jpg",
    alt: "Hanging chair with chandelier detail in the background",
  },
  "hanging-chair-red-glow": {
    src: "/images/hanging-chair-red-glow.jpg",
    alt: "Hanging chair bathed in a warm red glow at night",
  },
  "hanging-chair-sunlit": {
    src: "/images/hanging-chair-sunlit.jpg",
    alt: "Sunlit hanging chair by the window",
  },

  // ── Deck & Outdoor Dining ──────────────────────────────────────
  "deck-dining-closeup-day": {
    src: "/images/deck-dining-closeup-day.jpg",
    alt: "Close-up of the outdoor dining setup in daylight",
  },
  "deck-dining-night": {
    src: "/images/deck-dining-night.jpg",
    alt: "Deck dining at night with string lights and candles",
  },
  "deck-dining-table-trees": {
    src: "/images/deck-dining-table-trees.jpg",
    alt: "Dining table on the deck framed by towering trees",
  },
  "deck-rattan-chairs": {
    src: "/images/deck-rattan-chairs.jpg",
    alt: "Rattan lounge chairs on the front deck",
  },
  "deck-seating-treeline": {
    src: "/images/deck-seating-treeline.jpg",
    alt: "Deck seating area overlooking the treeline and valley",
  },
  "deck-sunset-firepit": {
    src: "/images/deck-sunset-firepit.jpg",
    alt: "Fire pit on the deck at sunset with valley views",
  },
  "deck-table-decor-daytime": {
    src: "/images/deck-table-decor-daytime.jpg",
    alt: "Decorated outdoor table on the deck in daylight",
  },

  // ── Details & Accents ──────────────────────────────────────────
  "antler-candelabra-night": {
    src: "/images/antler-candelabra-night.jpg",
    alt: "Antler candelabra casting warm light at night",
  },

  // ── Outdoor & Wellness ─────────────────────────────────────────
  "hot-tub-night": {
    src: "/images/hot-tub-night.jpg",
    alt: "Hot tub glowing under the stars at night",
  },
  "garden-pathway-brick": {
    src: "/images/garden-pathway-brick.jpg",
    alt: "Brick pathway winding through the zen garden",
  },

  // ── Views & Light ──────────────────────────────────────────────
  "sunrise-from-loft": {
    src: "/images/sunrise-from-loft.jpg",
    alt: "Sunrise seen from the loft bedroom",
  },
  "sunrise-through-window": {
    src: "/images/sunrise-through-window.jpg",
    alt: "Golden sunrise streaming through the great room windows",
  },
  "sunset-silhouette-window": {
    src: "/images/sunset-silhouette-window.jpg",
    alt: "Sunset silhouette framed by the A-frame window",
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof IMAGES;

/** Look up a single image by its key. */
export function getImage(key: ImageKey): SiteImage {
  return IMAGES[key];
}

/** Look up multiple images by their keys, in order. */
export function getImages(keys: ImageKey[]): SiteImage[] {
  return keys.map((k) => IMAGES[k]);
}

/** Get every image in the directory (sorted by key). */
export function getAllImages(): (SiteImage & { key: ImageKey })[] {
  return (Object.keys(IMAGES) as ImageKey[]).map((key) => ({
    key,
    ...IMAGES[key],
  }));
}

export default IMAGES;
