import { Metadata } from "next";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/magic-link";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import ConciergeChat from "@/components/sections/ConciergeChat";

export const metadata: Metadata = {
  title: "House Manual — A-Frame of Napa",
  description:
    "Everything you need for your stay at A-Frame of Napa. WiFi, hot tub, kitchen, house rules, local recommendations, and more.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/manual" },
  openGraph: {
    title: "House Manual — A-Frame of Napa",
    description:
      "Everything you need for your stay at A-Frame of Napa. WiFi, hot tub, kitchen, house rules, local recommendations, and more.",
    images: [{ url: "/images/great-room-window-wall.jpg", width: 1200, height: 630 }],
  },
};

const sections = [
  { id: "welcome", label: "Welcome" },
  { id: "check-in", label: "Check-in" },
  { id: "wifi", label: "WiFi" },
  { id: "kitchen", label: "Kitchen" },
  { id: "hot-tub", label: "Hot Tub" },
  { id: "climate", label: "Climate" },
  { id: "laundry", label: "Laundry" },
  { id: "entertainment", label: "Entertainment" },
  { id: "outdoor", label: "Outdoor" },
  { id: "parking", label: "Parking" },
  { id: "house-rules", label: "House Rules" },
  { id: "quiet-hours", label: "Quiet Hours" },
  { id: "pets", label: "Pets" },
  { id: "smoking", label: "Smoking" },
  { id: "trash", label: "Trash" },
  { id: "emergency", label: "Emergency" },
  { id: "restaurants", label: "Restaurants" },
  { id: "wineries", label: "Wineries" },
  { id: "activities", label: "Activities" },
  { id: "groceries", label: "Groceries" },
  { id: "departure", label: "Departure" },
];

function ManualSection({
  id,
  title,
  children,
  light = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <section id={id} className={`py-16 md:py-20 ${light ? "bg-ink" : ""}`}>
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <FadeIn>
          <SectionHeading title={title} align="left" light={light} />
          <div className={`mt-8 font-sans text-base md:text-lg leading-relaxed ${light ? "text-parchment/80" : "text-text"}`}>
            {children}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default async function ManualPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  if (!token || !verifyToken(token).valid) {
    redirect("/manual/access-denied");
  }

  return (
    <>
      <Hero
        image="/images/great-room-window-wall.jpg"
        title="House Manual"
        subtitle="Everything you need for a seamless stay on Mount Veeder"
      />

      {/* Nav chips */}
      <div className="sticky top-[72px] z-30 bg-parchment border-b border-charcoal/10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div
            className="flex gap-2 md:gap-3 py-4 overflow-x-auto md:justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="whitespace-nowrap rounded-full px-4 py-2 text-xs uppercase tracking-[0.15em] font-sans font-medium transition-all duration-300 border shrink-0 bg-transparent text-brass border-brass/40 hover:border-brass hover:bg-brass/5"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Section 1: Welcome */}
      <ManualSection id="welcome" title="Welcome">
        <p>
          Welcome to A-Frame of Napa — a restored 1969 A-frame cabin perched at the summit of Mount Veeder,
          surrounded by ancient redwoods and two acres of private land. This is not a hotel. It is a home,
          and we want you to treat it as your own.
        </p>
        <p className="mt-4">
          This manual covers everything you need for a comfortable stay. For anything not covered here,
          reach out to us anytime at{" "}
          <a href="mailto:stay@aframeofnapa.com" className="text-brass underline underline-offset-2">
            stay@aframeofnapa.com
          </a>
          . You can also use the AI concierge chat in the bottom-right corner for instant answers.
        </p>
      </ManualSection>

      {/* Section 2: Check-in / Check-out */}
      <ManualSection id="check-in" title="Check-in & Check-out" light>
        <div className="space-y-4">
          <div>
            <h3 className="font-serif text-lg uppercase tracking-[2px] text-parchment mb-2">Check-in</h3>
            <p>Check-in time is <strong className="text-brass">4:00 PM</strong>. The front door uses a keypad lock — your unique entry code will be sent via message 24 hours before arrival. No key pickup needed.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg uppercase tracking-[2px] text-parchment mb-2">Check-out</h3>
            <p>Check-out time is <strong className="text-brass">11:00 AM</strong>. Please start the dishwasher, take out any trash, and leave the thermostat at 68°F. No need to strip the beds — we handle that.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg uppercase tracking-[2px] text-parchment mb-2">Early / Late</h3>
            <p>Need flexibility? Early check-in or late check-out may be available depending on the booking calendar. Just ask — we accommodate when we can.</p>
          </div>
        </div>
      </ManualSection>

      {/* Section 3: WiFi */}
      <ManualSection id="wifi" title="WiFi & Connectivity">
        <div className="rounded-xl bg-surface p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-sans text-sm uppercase tracking-wider text-text-muted mb-1">Network</p>
              <p className="font-serif text-xl text-ink">AFrame-Guest</p>
            </div>
            <div>
              <p className="font-sans text-sm uppercase tracking-wider text-text-muted mb-1">Password</p>
              <p className="font-serif text-xl text-ink">Provided in welcome message</p>
            </div>
          </div>
        </div>
        <p className="mt-4">
          We use <strong>Starlink satellite internet</strong> — fast and reliable enough for video calls,
          streaming, and remote work. Coverage extends to the deck and outdoor areas. If the connection
          drops, unplug the Starlink router (in the utility closet) for 30 seconds and plug it back in.
        </p>
      </ManualSection>

      {/* Section 4: Kitchen */}
      <ManualSection id="kitchen" title="Kitchen & Appliances" light>
        <p>The kitchen is fully equipped for extended stays — this is a home, not a hotel kitchenette.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-3">Appliances</h3>
            <ul className="space-y-1.5 text-parchment/70">
              <li>• Gas stove & oven</li>
              <li>• Dishwasher</li>
              <li>• Microwave</li>
              <li>• Nespresso machine & drip coffee maker</li>
              <li>• Toaster & blender</li>
              <li>• Full-size refrigerator with ice maker</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-3">Provided</h3>
            <ul className="space-y-1.5 text-parchment/70">
              <li>• Cookware, pots, pans & baking sheets</li>
              <li>• Full utensil set & knife block</li>
              <li>• Dish soap, sponges & trash bags</li>
              <li>• Salt, pepper, olive oil & basic spices</li>
              <li>• Coffee, tea & sugar</li>
              <li>• Paper towels & aluminum foil</li>
            </ul>
          </div>
        </div>
      </ManualSection>

      {/* Section 5: Hot Tub */}
      <ManualSection id="hot-tub" title="Hot Tub">
        <p>
          The <strong>Hot Spring Prodigy</strong> hot tub seats six and is located on the lower deck with
          views through the redwoods. It is maintained and ready for you at all times.
        </p>
        <div className="mt-6 space-y-3">
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>Temperature is pre-set to <strong>102°F</strong>. Adjust using the control panel on the tub.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>Please rinse off before entering (outdoor shower is steps away).</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>Replace the cover when not in use to maintain temperature and keep debris out.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p><strong>No glass</strong> near the tub — use the provided plastic tumblers.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>If jets aren't working, press the "Jets" button twice. If issues persist, let us know.</p>
          </div>
        </div>
      </ManualSection>

      {/* Section 6: Heating & Climate */}
      <ManualSection id="climate" title="Heating & Climate" light>
        <p>
          Mount Veeder sits at 1,800 feet — summer days are warm but evenings cool down beautifully.
          There is no air conditioning because you won't need it. Open the windows and enjoy the mountain air.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-2">Thermostat</h3>
            <p>Nest thermostat in the main hallway. Set to your preference — we recommend 68–72°F. It is programmed to eco mode when unoccupied, but feel free to override during your stay.</p>
          </div>
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-2">Fireplace</h3>
            <p>Gas-start fireplace in the great room. Turn the gas key (left side of hearth) to ignite, then add wood from the rack by the front door. Close the flue when not in use.</p>
          </div>
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-2">Bedrooms</h3>
            <p>Each bedroom has individual heating vents. Extra blankets are in the closets.</p>
          </div>
        </div>
      </ManualSection>

      {/* Section 7: Laundry */}
      <ManualSection id="laundry" title="Laundry">
        <p>
          Full-size washer and dryer in the utility closet off the kitchen. Detergent, dryer sheets,
          and a drying rack are provided. The machines are standard — no special instructions needed.
        </p>
        <p className="mt-4">
          Extra towels and linens are in the hallway closet upstairs. For stays longer than two weeks,
          we can arrange a mid-stay linen refresh — just ask.
        </p>
      </ManualSection>

      {/* Section 8: Entertainment */}
      <ManualSection id="entertainment" title="Entertainment" light>
        <div className="space-y-4">
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-2">Television</h3>
            <p>72-inch smart TV in the great room. Streaming apps installed: Netflix, HBO Max, Disney+, and Hulu. Log in with your own accounts or use the house profiles (credentials on the welcome card).</p>
          </div>
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-2">Sonos Sound System</h3>
            <p>Whole-house Sonos system with speakers in the great room, kitchen, primary bedroom, and outdoor deck. Download the Sonos app, connect to the WiFi, and you'll see all zones. Play different music in different rooms or group them together.</p>
          </div>
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-2">Books & Games</h3>
            <p>Bookshelf in the great room with a curated collection of fiction, wine country guides, and local history. Board games and a deck of cards in the console cabinet.</p>
          </div>
        </div>
      </ManualSection>

      {/* Section 9: Outdoor Spaces */}
      <ManualSection id="outdoor" title="Outdoor Spaces">
        <p>Two acres of private land with multiple outdoor living areas:</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-ink mb-3">Spaces</h3>
            <ul className="space-y-1.5">
              <li>• <strong>Front deck</strong> — panoramic valley views, Adirondack chairs</li>
              <li>• <strong>Zen garden</strong> — mosaic dining table, seats 8</li>
              <li>• <strong>Fire pit lounges</strong> — two areas with seating (firewood provided)</li>
              <li>• <strong>Lower deck</strong> — hot tub, sauna, and outdoor shower</li>
              <li>• <strong>Meditation trail</strong> — private path to Enchanted Hills Waterfall</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-ink mb-3">BBQ & Grill</h3>
            <p>Propane gas grill on the zen garden patio. Propane tank is connected and ready. Grilling tools hang on the rack beside it. Please clean the grate after each use with the wire brush provided.</p>
            <p className="mt-3">Extra propane tank in the garage if the main runs out.</p>
          </div>
        </div>
      </ManualSection>

      {/* Section 10: Parking */}
      <ManualSection id="parking" title="Parking" light>
        <p>
          The driveway accommodates <strong className="text-brass">two vehicles</strong> comfortably. If you have
          additional cars, use the flat gravel area to the right of the driveway entrance.
        </p>
        <p className="mt-4">
          The road to the property is a winding mountain road. Take it slowly, especially at night or in rain.
          Cell service is spotty on the drive up — download directions before heading to the property.
        </p>
      </ManualSection>

      {/* Section 11: House Rules */}
      <ManualSection id="house-rules" title="House Rules">
        <div className="rounded-xl bg-surface p-6 md:p-8 space-y-3">
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>Maximum <strong>11 guests</strong> overnight. No parties or events.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>No smoking indoors (designated outdoor area available).</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>Quiet hours 10 PM – 8 AM out of respect for the mountain neighborhood.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>Lock doors and close windows when leaving — we are in the forest and critters are curious.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>Do not feed wildlife. Secure trash in the garage bins.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-brass shrink-0" />
            <p>Shoes off indoors appreciated — the floors are beautifully restored hardwood.</p>
          </div>
        </div>
      </ManualSection>

      {/* Section 12: Quiet Hours */}
      <ManualSection id="quiet-hours" title="Quiet Hours" light>
        <p>
          Quiet hours are <strong className="text-brass">10:00 PM to 8:00 AM</strong>. Mount Veeder is a residential mountain
          community and sound carries in the forest. Keep outdoor music and conversation at a
          respectful level during these hours.
        </p>
        <p className="mt-4">
          The hot tub and sauna can be used during quiet hours — just keep voices low.
        </p>
      </ManualSection>

      {/* Section 13: Pet Policy */}
      <ManualSection id="pets" title="Pet Policy">
        <p>
          Dogs are welcome with <strong>prior approval</strong> and a $200 pet fee. Please let us know
          at the time of booking so we can prepare the property.
        </p>
        <div className="mt-4 space-y-2">
          <p>• Keep dogs off furniture and beds.</p>
          <p>• Clean up after your dog on the property and trails.</p>
          <p>• Dogs must be supervised outdoors — the property borders forest with wildlife.</p>
          <p>• No cats or other pets due to allergen considerations for future guests.</p>
        </div>
      </ManualSection>

      {/* Section 14: Smoking Policy */}
      <ManualSection id="smoking" title="Smoking Policy" light>
        <p>
          <strong className="text-brass">No smoking indoors.</strong> This includes cigarettes, cigars, vapes, and cannabis.
          We are in a fire-prone area — please be extremely careful with any open flame outdoors.
        </p>
        <p className="mt-4">
          A designated smoking area is located on the gravel pad near the parking area,
          away from the structure. Use the provided ashtray and fully extinguish all materials.
        </p>
      </ManualSection>

      {/* Section 15: Trash & Recycling */}
      <ManualSection id="trash" title="Trash & Recycling">
        <p>Bins are located in the garage:</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-surface p-5 text-center">
            <p className="font-serif text-lg text-ink">Black Bin</p>
            <p className="font-sans text-sm text-text-muted mt-1">Landfill trash</p>
          </div>
          <div className="rounded-xl bg-surface p-5 text-center">
            <p className="font-serif text-lg text-ink">Blue Bin</p>
            <p className="font-sans text-sm text-text-muted mt-1">Recycling (glass, plastic, paper)</p>
          </div>
          <div className="rounded-xl bg-surface p-5 text-center">
            <p className="font-serif text-lg text-ink">Green Bin</p>
            <p className="font-sans text-sm text-text-muted mt-1">Compost (food scraps, yard waste)</p>
          </div>
        </div>
        <p className="mt-4">
          Pickup is <strong>Tuesday mornings</strong>. Roll the bins to the road edge by Monday night.
          Secure all trash in the garage — do not leave bags outside as wildlife will get into them.
        </p>
      </ManualSection>

      {/* Section 16: Emergency Info */}
      <ManualSection id="emergency" title="Emergency Information" light>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-3">Emergency Contacts</h3>
            <ul className="space-y-2 text-parchment/80">
              <li><strong className="text-brass">Emergency:</strong> 911</li>
              <li><strong className="text-brass">Napa Sheriff (non-emergency):</strong> (707) 253-4451</li>
              <li><strong className="text-brass">Property host:</strong> stay@aframeofnapa.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-parchment mb-3">Safety Equipment</h3>
            <ul className="space-y-2 text-parchment/80">
              <li>• Fire extinguisher: under kitchen sink + garage</li>
              <li>• First aid kit: primary bathroom cabinet</li>
              <li>• Smoke & CO detectors: every room</li>
              <li>• Flashlights: entry console drawer</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-parchment/10 p-5">
          <p className="text-parchment/80">
            <strong className="text-brass">Nearest hospital:</strong> Queen of the Valley Medical Center —
            1000 Trancas St, Napa. Approximately 15 minutes by car.
          </p>
        </div>
      </ManualSection>

      {/* Section 17: Restaurants */}
      <ManualSection id="restaurants" title="Local Restaurants">
        <p>Our favorite spots in and around Napa:</p>
        <div className="mt-6 space-y-4">
          {[
            { name: "Bistro Don Giovanni", desc: "Italian with garden patio. Excellent handmade pastas. 15 min drive.", tag: "Italian" },
            { name: "The Thomas", desc: "Downtown Napa. Modern American with craft cocktails and a rooftop bar.", tag: "American" },
            { name: "Angèle", desc: "French bistro on the Napa River. Beautiful setting, outstanding wine list.", tag: "French" },
            { name: "Oxbow Public Market", desc: "Indoor market with local vendors — tacos, oysters, charcuterie, coffee, and more.", tag: "Market" },
            { name: "La Toque", desc: "Fine dining inside the Westin Verasa. Tasting menu with wine pairings.", tag: "Fine Dining" },
            { name: "Gott's Roadside", desc: "Casual outdoor burgers, shakes, and ahi tuna tacos. Great for lunch.", tag: "Casual" },
          ].map((r) => (
            <div key={r.name} className="flex items-start gap-4">
              <span className="mt-1 shrink-0 rounded-full bg-brass/20 px-3 py-0.5 font-sans text-xs uppercase tracking-wider text-brass">{r.tag}</span>
              <div>
                <p className="font-serif text-base text-ink">{r.name}</p>
                <p className="font-sans text-sm text-text-muted mt-0.5">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ManualSection>

      {/* Section 18: Wineries */}
      <ManualSection id="wineries" title="Nearby Wineries" light>
        <p>Mount Veeder is one of Napa Valley's most celebrated appellations. Start close to home:</p>
        <div className="mt-6 space-y-4">
          {[
            { name: "The Hess Collection", dist: "5 min", desc: "World-class art collection and mountain Cabernets. Our closest neighbor." },
            { name: "Mayacamas Vineyards", dist: "10 min", desc: "Historic mountaintop estate. Some of Napa's most age-worthy wines." },
            { name: "Mount Veeder Winery", dist: "8 min", desc: "Small-production estate wines with stunning valley views." },
            { name: "Domaine Chandon", dist: "20 min", desc: "Sparkling wines in Yountville. Beautiful grounds for a picnic." },
            { name: "Robert Mondavi Winery", dist: "20 min", desc: "Iconic Oakville estate. Architecture and history as memorable as the wine." },
          ].map((w) => (
            <div key={w.name} className="flex items-start gap-4">
              <span className="mt-1 shrink-0 rounded-full bg-brass/20 px-3 py-0.5 font-sans text-xs uppercase tracking-wider text-brass">{w.dist}</span>
              <div>
                <p className="font-serif text-base text-parchment">{w.name}</p>
                <p className="font-sans text-sm text-parchment/60 mt-0.5">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ManualSection>

      {/* Section 19: Activities */}
      <ManualSection id="activities" title="Activities & Experiences">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-ink mb-3">On Property</h3>
            <ul className="space-y-1.5">
              <li>• Private meditation trail to waterfall</li>
              <li>• Hot tub, infrared sauna, outdoor shower</li>
              <li>• Fire pit evenings under the stars</li>
              <li>• Bird watching from the deck</li>
              <li>• Stargazing (minimal light pollution)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-base uppercase tracking-[2px] text-ink mb-3">Nearby</h3>
            <ul className="space-y-1.5">
              <li>• Napa Valley hot air balloon rides (sunrise)</li>
              <li>• Skyline Wilderness Park hiking</li>
              <li>• Napa Valley Vine Trail (biking)</li>
              <li>• Oxbow Market cooking classes</li>
              <li>• Golf at Silverado Resort</li>
              <li>• Spa treatments at Meadowood or Calistoga</li>
            </ul>
          </div>
        </div>
      </ManualSection>

      {/* Section 20: Groceries & Essentials */}
      <ManualSection id="groceries" title="Groceries & Essentials" light>
        <p>Downtown Napa is about 15 minutes down the mountain. Here are the essentials:</p>
        <div className="mt-6 space-y-3 text-parchment/80">
          <p><strong className="text-brass">Whole Foods Market</strong> — 3682 Bel Aire Plaza, Napa. Full-service grocery with organic and local options.</p>
          <p><strong className="text-brass">Safeway</strong> — multiple Napa locations. Standard grocery, pharmacy, and deli.</p>
          <p><strong className="text-brass">Napa Valley Olive Oil Mfg Co</strong> — 835 Charter Oak Ave. Incredible deli sandwiches, imported Italian goods, and local olive oils. A must-visit.</p>
          <p><strong className="text-brass">Oxbow Public Market</strong> — artisan vendors, fresh produce, meats, and specialty items.</p>
          <p><strong className="text-brass">CVS / Walgreens</strong> — downtown Napa for pharmacy and household essentials.</p>
        </div>
      </ManualSection>

      {/* Section 21: Departure Checklist */}
      <ManualSection id="departure" title="Departure Checklist">
        <p>Before you head out, a few quick things to help us prepare for the next guest:</p>
        <div className="mt-6 space-y-3">
          {[
            "Start the dishwasher (or hand-wash any remaining dishes)",
            "Take out trash and recycling to garage bins",
            "Set thermostat to 68°F",
            "Turn off all lights and fans",
            "Close and lock all windows",
            "Replace the hot tub cover",
            "Leave used towels in the bathtub",
            "Lock the front door — the keypad locks automatically",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass/10 font-sans text-xs font-medium text-brass">
                {i + 1}
              </span>
              <p className="font-sans text-base text-text">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-text-muted">
          No need to strip the beds or take out the main trash bins to the road — we handle that.
          Thank you for staying with us!
        </p>
      </ManualSection>

      <CTABanner
        headline="Questions? We're here to help"
        buttonLabel="Contact Us"
        buttonHref="/availability"
      />

      <ConciergeChat />
    </>
  );
}
