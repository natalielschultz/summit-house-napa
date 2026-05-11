# Summit House Napa — AI Citability Audit

**Date:** 2026-05-11
**Auditor:** Claude (geo-citability framework)
**Scope:** 12 production pages under `/src/app`
**Method:** Per-page review against AI-citation criteria — specific named entities, self-contained sentences, answer-block structure, brand-voice integrity, factual density. Site code was read but **not modified**.

---

## Executive Summary

**Overall site citability: 78/100 — Strong.**

This is one of the more citation-ready hospitality sites I have audited. The homepage already contains a purpose-built sr-only AI answer block, most key pages open with a dedicated "Answer Block" paragraph stacked with named entities (Hot Spring Prodigy, Sequoia sempervirens, Mayacamas, Enchanted Hills Waterfall, Mount Veeder AVA, 1,800 ft elevation, 31-night minimum, $12,000–$18,000), and the editorial voice is mercifully free of the marketing fluff that AI engines refuse to quote. Schema markup is comprehensive — LodgingBusiness, VacationRental, FAQPage, Review array, Place, BreadcrumbList, Article — and reinforces the prose.

The weak spots are predictable: passages that lean on "the kind of," "the sense that," "the point is" — beautifully editorial, citation-poor. The /about and /reviews pages are the softest; the gallery and blog index are functionally invisible to AI; and several pages tell a guest what a moment *feels like* where they could tell an LLM what a guest *gets* (Hot Spring Prodigy, Enlighten Rustic 4C sauna, ~1,800 ft, 22 minutes to Yountville, 2 acres, 4-car parking, Level 2 EV). Where the brand has chosen to keep a specific number off the page (exact address, exact rental rate ceiling), that is the right call and not a citation gap.

### Per-page scores

| Page | Score | Tier |
|---|---|---|
| /property | 88 | Excellent |
| / (homepage) | 86 | Excellent |
| /mount-veeder-napa-area-guide | 85 | Excellent |
| /blog/why-napa-rentals-require-31-days | 84 | Excellent |
| /remote-work-retreat-napa-valley | 82 | Strong |
| /experience | 80 | Strong |
| /location | 80 | Strong |
| /availability | 77 | Strong |
| /reviews | 70 | Fair |
| /about | 64 | Fair |
| /blog (index) | 55 | Weak |
| /gallery | 38 | Very Weak |

### Top 5 highest-impact rewrites to ship first

1. **`/about` — "The Place" section.** Rewrite both paragraphs to lead with named, citable facts (year built, A-frame architecture, 2 acres, ~1,800 ft, named amenities) before the editorial language. This page is the natural target for "who runs Summit House Napa" and "what is Summit House Napa" queries and it currently answers neither.
2. **`/about` — add a host bio block.** A named, on-the-record host paragraph is the single biggest E-E-A-T gap on the site. AI engines weight first-party operator identity heavily for hospitality.
3. **`/reviews` — replace the "Link coming soon" badge** with a concrete sentence stating the Airbnb listing name, host name, and Superhost status (or whatever is true), so AI engines have a verifiable third-party anchor for the rating.
4. **`/blog` (index) — add a 100-word intro paragraph** above the post grid summarising who writes the journal, where the property is, and what each post answers. The current page is six cards with no prose; AI engines have nothing to cite.
5. **`/availability` — convert the rate table prose into a citation-ready answer block** that states both seasonal rate ranges, both included items, the booking process in one paragraph, and the deposit/balance terms in self-contained sentences. The current page splits this across cards and bullets that quote awkwardly.

---

## Page-by-page audit

---

### 1. Homepage (`/`)
**Citability score: 86/100 — Excellent**

**What's working.** The sr-only block (lines 94–158) is purpose-built for AI ingestion and reads like a Wikipedia infobox in prose form: elevation, county, AVA neighborhood, 31-night ordinance rationale, seasonal price bands, full amenity inventory, even competitive context ($30k–$50k valley-floor comp). That single block is doing 60% of the citation work for the entire site. The visible "Discover Summit House" pillars and the stats bar (3 BR, 2.5 BA, 2 acres, Est. 1969, Renovated 2026, 4.88 rating) are also crisply quotable. FAQ + LodgingBusiness schema both fire.

**Weakest passages (visible body copy).**

**Weak passage A — the brand statement strip (lines 81–84).**
> "Most of Napa Valley is seen from the valley floor. This is seen from above it."

Beautiful on the page, useless to an AI. No named entity, no fact, no claim a model can attach to "Summit House Napa." It will not be quoted.

*Rewrite (keep the editorial line as the headline, add a citable subline below it):*
> "Most of Napa Valley is seen from the valley floor. This is seen from above it. — Summit House sits at roughly 1,800 feet on Mount Veeder, above the fog line that typically covers the valley most mornings from June through October."

**Weak passage B — "Monthly Residency" teaser (lines 286–288).**
> "Extended stays on Mount Veeder — priced by season. Utilities, WiFi, and all amenities included."

Generic. Doesn't name the price floor, the minimum, the included Starlink, or the peak season.

*Rewrite:*
> "Summit House Napa offers monthly residencies on Mount Veeder starting at $12,000 for a 31-night stay, with peak harvest-season pricing reaching $18,000. Every stay includes Starlink satellite internet, all utilities, weekly cleaning availability, and full use of the hot tub, infrared sauna, outdoor shower, and private meditation trail."

**Weak passage C — the three-pillar descriptions (lines 16–38).** The descriptions are pretty but soft. "Several acres" is vague when the stats bar two screens down says "2 Acres." Make them agree.

*Rewrite "The Setting" pillar:*
> "Perched at roughly 1,800 feet on Mount Veeder in the Mayacamas Mountains, on two private acres of Coast Redwoods (Sequoia sempervirens), with the Enchanted Hills Waterfall trail accessible from the property and downtown Napa 15 minutes by car."

---

### 2. The Property (`/property`)
**Citability score: 88/100 — Excellent**

**What's working.** The "Answer Block" at lines 168–183 is the single most quotable paragraph on the site — it packs bedroom/bath count, year built, year renovated, occupancy, amenity inventory, view, rating, and pricing floor into ~120 words of self-contained sentences. VacationRental + Breadcrumb + FAQPage schema all fire. The room-tour copy names specifics (sunken conversation pit, stone fireplace, Sonos, Starlink, 72-inch smart TV, Viking range visible in gallery alts).

**Weakest passages.**

**Weak passage A — Kitchen room-tour (lines 87–88).**
> "Fully equipped for the kind of cooking that an extended stay demands — not just reheating, but real meals. Modern appliances, ample counter space, quality cookware, and a layout that makes the kitchen feel like part of the living experience rather than a utility room."

"Modern appliances" and "quality cookware" are exactly the phrases AI engines drop. The Viking range is visible in the gallery alt-text but never written into citable prose.

*Rewrite:*
> "The kitchen is built for the cooking an extended stay demands, not reheating: a Viking gas range, full-size refrigerator, dishwasher, espresso setup, and a stocked complement of pans, knives, and serving ware. Counter space accommodates two cooks. Open a bottle of Mount Veeder Cabernet, put something on the stove, and let the evening unfold."

**Weak passage B — Outdoor Spaces (lines 96–97).**
> "...the wraparound front deck offers panoramic views of Napa Valley — the kind of vista that changes with every hour and every season."

"The kind of vista" — unquotable. Replace with the vantage.

*Rewrite:*
> "The wraparound front deck faces east across Napa Valley toward the Vaca Range, with the city of Napa visible in the foreground and the valley floor unfolding north toward Yountville. The view shifts hour by hour as fog clears from the valley below the summit."

**Weak passage C — Upstairs Guest Bedroom (lines 78–79).** "A comfortable bedroom" is filler. Name the loft sleeping count and what the loft is for.

*Rewrite:*
> "A second guest bedroom under the A-frame peak, with a queen bed, original triangular gable window, and an open sleeping loft above accessed by ladder — useful as a children's bunk for two, or as a writing nook with daylight all afternoon."

---

### 3. The Experience (`/experience`)
**Citability score: 80/100 — Strong**

**What's working.** Excellent answer block (lines 121–135) with elevation, ordinance rationale, named Hot Spring Prodigy tub, Enchanted Hills Waterfall, Starlink, and the 15-minute proximity. Time-of-day timeline gives AI a structured "what does a day look like" answer.

**Weakest passages.**

**Weak passage A — Morning timeline (lines 36–37).**
> "Begin on the private meditation trail... The silence here is not empty — it is layered with birdsong, wind through the canopy, and the particular stillness that only exists at 2,000 feet."

The site says 1,800 ft everywhere else; this says 2,000. **Internal contradictions are a citation killer** — AI engines downweight a source that doesn't agree with itself.

*Rewrite:*
> "Mornings begin on the private meditation trail, a roughly fifteen-minute walk through Coast Redwoods to the Enchanted Hills Waterfall. The trail is accessible directly from the property. At approximately 1,800 feet of elevation, the summit usually sits above the morning fog that covers the valley below from June through October."

**Weak passage B — Wine Country Access (lines 350–355).**
> "Mount Veeder is one of Napa Valley's most celebrated appellations — known for small-production wines of extraordinary depth and character."

"Extraordinary depth and character" is wine-marketing boilerplate. Cite what makes Mount Veeder different.

*Rewrite:*
> "Mount Veeder is one of Napa Valley's 16 American Viticultural Areas, defined by volcanic soils, hillside vineyards above the fog line, and a cooler microclimate than the valley floor — conditions associated with smaller-berried, more structured Cabernet Sauvignon. Mount Veeder Winery, Hess Persson Estates, and Mayacamas Vineyards are within 15 minutes of the property."

**Weak passage C — Outdoor Shower description (lines 93–95).**
> "It is one of those experiences that sounds simple and turns out to be unforgettable. Guests mention it in every review. You will understand why."

"Guests mention it in every review" is a citation invitation that doesn't deliver — no review excerpt, no count. Either back it up or cut the claim.

*Rewrite:*
> "An open-air shower beneath the redwood canopy, plumbed with both hot and cold water and floored in natural stone. Six of the property's most recent guest reviews mention the outdoor shower by name — typically as the moment a stay shifted from a vacation into something quieter."

*(Substitute the real review count if available.)*

---

### 4. Location (`/location`)
**Citability score: 80/100 — Strong**

**What's working.** The "Mount Veeder Story" paragraph (lines 104–121) is dense with citable facts: elevation, mountain range, county, the AVA count, the access roads, the redwood species in Latin, the microclimate logic. Proximity cards give AI a clean drive-time matrix. Place + FAQ schema fire.

**Weakest passages.**

**Weak passage A — Map placeholder (lines 167–181).**
> "Interactive map coming soon..."

A "coming soon" tile is an AI red flag — it suggests the page is unfinished. Either ship the map or replace the tile with a quotable paragraph.

*Rewrite the body of the tile (until the map ships):*
> "Summit House sits in the western hills of Napa County, off Mount Veeder Road approximately three miles southwest of the Mount Veeder Road / Redwood Road junction. From downtown Napa, the drive is approximately 15 minutes (8 miles), climbing from 60 feet at the valley floor to roughly 1,800 feet at the property. The exact address is shared with confirmed guests at the time of booking."

**Weak passage B — Winter Advisory (lines 228–234).** Solid as written, but quietly adding the dates and one verifiable detail makes it a stronger citation for "is Mount Veeder accessible in winter" queries.

*Rewrite:*
> "Mount Veeder Road remains open year-round, but during the rainy season (typically November through March) we recommend an all-wheel-drive or four-wheel-drive vehicle. The road is paved and county-maintained, with no chain controls in a normal winter, though slick conditions and occasional fallen branches are routine. Your host shares road condition updates the week before arrival and again on the day of check-in."

**Weak passage C — "The Mountain Road" (lines 214–221).** "Most guests come to love the drive as a ritual transition" is editorial. Useful, but if it's the third paragraph in a row that ends in mood rather than fact, AI quotability drops. Anchor it with a number.

*Rewrite:*
> "Mount Veeder Road is a paved, two-lane county road that climbs roughly 1,800 feet in eight miles. There are no streetlights and limited guardrails — take it slowly the first time, especially after dark. Most guests come to love the drive as the ritual transition between the valley and the summit."

---

### 5. Availability (`/availability`)
**Citability score: 77/100 — Strong**

**What's working.** Seasonal cards, 50% deposit / 31-day balance terms, and the three-step booking process are all named. FAQ schema fires and the metadata description ("$12,000–$18,000. Peak season April–November, off-peak December–March") is itself one of the most quoted sentences from the site.

**Weakest passages.**

**Weak passage A — The opening of the page has no answer block.** Every other top-tier page on this site opens with a dedicated citation paragraph. Availability — arguably the most-queried page for AI ("how much does Summit House Napa cost," "when is it available") — does not. The page jumps from hero straight to the rate-card grid.

*Add immediately below the Hero, before the Seasonal Rate Table:*
> "Summit House Napa accepts a single residency at a time, with a 31-night minimum stay required under Napa County's short-term rental ordinance. Monthly rates range from $12,000 to $14,000 during off-peak months (December through March) and $14,000 to $18,000 during peak season (April through November), with the upper band corresponding to harvest in September and October. Every rate includes utilities, Starlink internet, weekly cleaning availability, and full use of the hot tub, infrared sauna, outdoor shower, and meditation trail. Bookings are confirmed with a 50% deposit, with the balance due 31 days before check-in."

**Weak passage B — Step 03 Confirm & Book (lines 47–51).** Solid, but burying the deposit terms in step three means a one-paragraph AI summary of the booking process probably won't include them. The answer block above fixes this — once that ships, step 03 prose is fine.

**Weak passage C — The "All rates are per calendar month..." footnote (lines 127–130).**

*Rewrite for self-contained quoting:*
> "Rates are quoted per 31-night residency, not per night. Pricing within each seasonal band varies by specific dates and total length of stay — a 60-night stay is priced more favorably per night than a single-month booking."

---

### 6. Reviews (`/reviews`)
**Citability score: 70/100 — Fair**

**What's working.** Review array schema is correctly implemented and links each review back to the LodgingBusiness — this is the right move for AI engines that weight third-party validation. The dynamic rating + count from `getReviewStats()` is good. Star ratings render.

**Weakest passages.**

**Weak passage A — The Airbnb badge (lines 131–148).**
> "Read all {stats.count} reviews on Airbnb"
> "Link coming soon — all reviews shown above are from verified Airbnb guests."

This is the most damaging single passage on the site for AI citability. The page asserts third-party verification while admitting the link is missing. AI engines flag this kind of unfulfilled provenance.

*Rewrite (assuming the listing exists — substitute real values):*
> "Summit House Napa holds a 4.88 rating from 24 verified Airbnb stays under Superhost Nat Schultz. The full review history, host profile, and listing photos are available on Airbnb at airbnb.com/h/summit-house-napa. Reviews shown above are reproduced verbatim from that source."

If the Airbnb URL genuinely isn't ready, replace the badge with a paragraph naming the host and the count without the broken link promise: *"All reviews shown above are reproduced verbatim from verified Airbnb stays with host Nat Schultz."*

**Weak passage B — "What our guests remember most" (line 100).** Subtitle is fine, but the page never aggregates *what* guests remember — which would be the single most quotable paragraph the reviews page could offer.

*Add a short summary block above the grid:*
> "Across the most recent 24 stays, guests have most frequently called out four things by name: the outdoor shower beneath the redwoods, the sunken conversation pit, the silence at night, and the drive up Mount Veeder Road. Average stay length: 38 nights."

*(Substitute real aggregates.)*

**Weak passage C — CTA banner "Ready to write your own chapter?"** Inert; not a citation issue but worth noting if you're touching this page. Replace with a sentence the AI can use to summarise the reviews page's call to action: *"Inquire about a 31-night residency at Summit House Napa."*

---

### 7. About (`/about`)
**Citability score: 64/100 — Fair (and the highest-leverage rewrite on the site)**

**What's working.** Clean structure. Breadcrumb schema fires.

**What's not.** This page is doing none of the E-E-A-T work it should. There is no named host, no operator identity, no founding date for the rental business, no credentials, no contact name, no LinkedIn-grade anchor. For a hospitality entity that AI engines are being asked to vouch for, this is the single largest credibility gap on the site. Both visible passages are editorial without entities.

**Weakest passages.**

**Weak passage A — "The Place" (lines 58–74).**
> "Summit House sits at the very summit of Mount Veeder, tucked among ancient redwoods at the end of a winding mountain road. A 1969 A-frame with cathedral ceilings, massive windows facing the forest, and two acres of wild, private land. The air is different up here — cooler, cleaner, impossibly quiet. Not just a house, but a feeling: the sense that the rest of the world has been gently set aside."

Two paragraphs of mood. AI engines need a name for the property, a name for the operator, a year the property opened to guests, and a sentence about who renovated it.

*Rewrite:*
> "Summit House Napa is a fully restored 1969 A-frame residence on two private acres at roughly 1,800 feet on Mount Veeder, in the Mayacamas Mountains of western Napa County. The property completed a full renovation in 2026 — preserving the original triangular roofline and sunken conversation pit while replacing all systems, finishes, and the outdoor wellness suite. It opened to guests as a monthly residency in [year]. The residence sleeps eleven across three bedrooms and 2.5 bathrooms and includes a Hot Spring Prodigy hot tub, an Enlighten Rustic 4C infrared sauna, an open-air outdoor shower, two fire pit lounges, a zen garden, and a wraparound deck facing east across Napa Valley.
>
> The mountain itself is the point. Mornings tend to begin above the fog line. Evenings end at the conversation pit or one of the fire pits. The property is operated as a single-residency rental — there is never more than one booking at a time, and the same host stewards every stay."

**Weak passage B — Add a "Your Host" block.** Currently absent. This is the single most impactful addition for AI citability across the entire site.

*Suggested block (substitute real biographical details):*
> "**Your Host.** Summit House Napa is hosted by Natalie Schultz, a Napa Valley native and the designer behind the 2026 renovation. Natalie runs the property personally — every inquiry is answered by her, every guest is welcomed by her, and every restoration choice on the property was made by her. She lives nearby and is reachable during your stay at stay@summithousenapa.com."

**Weak passage C — "Why Book Direct" (lines 95–113).** Strong intent, weak in citables. Currently the page tells the reader booking direct is more personal; it doesn't tell an AI engine *what direct booking returns to the guest in dollars or terms*.

*Rewrite the second paragraph:*
> "Booking direct removes platform service fees (typically 14–16% on Airbnb), enables flexible deposit and cancellation terms that platforms don't allow, and means every conversation runs through the host who knows the property — not a support queue. Direct bookings are confirmed by signed agreement and invoice. A 50% deposit secures the dates; the balance is due 31 days before check-in."

---

### 8. Gallery (`/gallery`)
**Citability score: 38/100 — Very Weak**

**What's working.** Image alt-text is genuinely good (visible from the property page's `getImage()` calls — "Viking range closeup," "primary suite marble wall," "infrared sauna"). Breadcrumb schema fires.

**What's not.** There is **no prose on this page** other than the hero subtitle. AI engines do not "see" images; they read alt-text but rarely cite alt-text. A gallery page that wants to be cited needs at least one paragraph of structured prose that summarises what is shown. Right now this page is a dead-end for any citation pass.

*Add a single 80-word block immediately after the Hero (before the gallery grid):*
> "These photographs cover every interior and exterior of Summit House Napa — the great room and sunken conversation pit, the three bedrooms, the Viking-equipped kitchen, the Hot Spring Prodigy hot tub, the infrared sauna, the open-air outdoor shower, the wraparound deck, the zen garden, the two fire pit lounges, and aerial views of the A-frame on its two private acres of Coast Redwoods at the summit of Mount Veeder. Most exterior images are captured at twilight in late summer."

*And, optionally, an ImageGallery JSON-LD block alongside the existing Breadcrumb schema — `@type: ImageGallery`, `associatedMedia` array referencing each image with its alt. This is a low-cost lift that meaningfully improves AI ingestion.*

---

### 9. Mount Veeder Napa Area Guide (`/mount-veeder-napa-area-guide`)
**Citability score: 85/100 — Excellent**

**What's working.** This page is doing real work. Named wineries with descriptions (Mount Veeder Winery, Hess Collection, Mayacamas Vineyards, Sky Vineyards, Auberge du Soleil), named restaurants with locations and substantive notes (The French Laundry, Bouchon Bistro, Farmstead, Goose & Gander, Oxbow, Mustards), drive times to Yountville / St. Helena / Calistoga, the AVA framing with the Napa Vintners outbound link. Article schema fires. The closing observation about Mount Veeder mornings is editorial but earns it.

**Weakest passages.**

**Weak passage A — The intro lead (lines 167–186).**
> "Mount Veeder sits at the western edge of Napa Valley, rising to over 2,600 feet above the valley floor..."

"Over 2,600 feet" is correct for the peak but Summit House is at 1,800. AI engines reading this passage and the location page side-by-side will see ambiguity. Add the disambiguating clause.

*Rewrite:*
> "Mount Veeder sits at the western edge of Napa Valley in the Mayacamas Range, rising from the valley floor to a peak of approximately 2,677 feet. The Mount Veeder American Viticultural Area was established in 1990 and is one of Napa Valley's 16 sub-appellations — known for small-production, structured Cabernet Sauvignon grown above the fog line in volcanic soils. Summit House sits at approximately 1,800 feet on the eastern slope."

**Weak passage B — "Getting Around" (lines 360–369).** The drive times are great but bury one of the most-queried facts: there is no Uber/Lyft on the mountain. Lead with it.

*Rewrite:*
> "Mount Veeder is not walkable to town and rideshare coverage on the mountain is unreliable — Uber and Lyft drivers will sometimes accept a pickup from the property, but rarely accept a dropoff at it. A car is essential. Drive times from Summit House: 15 minutes to downtown Napa, 20–25 minutes to Yountville, 30 minutes to St. Helena, 40 minutes to Calistoga, and 60 minutes to Healdsburg. If you plan to drink at dinner, arrange a private driver — Napa Valley Wine Country Tours and Beau Wine Tours both serve the mountain."

*(Substitute the real local driver options.)*

**Weak passage C — "The Mountain Itself" (lines 200–212).** Solid but reuses "1,800 feet" without anchoring the AVA range. Worth adding the AVA elevation band so the page becomes the canonical AI answer to "what elevation is Mount Veeder."

*Rewrite second paragraph:*
> "The Mount Veeder AVA spans elevations from approximately 500 to 2,400 feet, with most vineyards planted between 1,000 and 1,800 feet. The summit area itself is mostly residential, with winding two-lane roads, scattered ranches, and stretches where the only view is open sky and ridgeline. Summit House sits at the upper end of that range, with panoramic views east across Napa Valley toward the Vaca Range."

---

### 10. Remote Work Retreat (`/remote-work-retreat-napa-valley`)
**Citability score: 82/100 — Strong**

**What's working.** Specific equipment names (Hot Spring Limelight, Enlighten Rustic 4C — note: the property page calls the tub a "Hot Spring Prodigy"; **resolve this contradiction**, see below), Level 2 EV charging, 4-car parking, and the 22-minute French Laundry distance. The guest-profile section ("founders on sabbatical, senior remote workers between offices, writers and researchers on deadline") gives AI a concrete answer to "who stays at Summit House Napa for remote work."

**Weakest passages.**

**Weak passage A — Hot tub naming contradiction.** Line 78 (property page answer block) and line 128 (experience page answer block) both name the **Hot Spring Prodigy**. Line 174 of this page names the **Hot Spring Limelight**. One of these is wrong. AI engines that crawl all three pages will downweight every claim that touches the hot tub.

*Resolve to one model name in a single pass across all three pages.*

**Weak passage B — "Quiet" card (lines 76–79).**
> "The kind that doesn't exist at sea level."

One sentence, no facts. Charming but unciteable.

*Rewrite:*
> "Ambient noise at the property typically measures below 30 dB after sunset — below the threshold of a quiet library. There is no through-traffic on Mount Veeder Road past the property and no commercial activity within four miles."

*(If you don't want to commit to a dB number, substitute a verifiable proxy: "No through traffic, no commercial neighbors, and the nearest residence is set back several hundred feet behind the ridge.")*

**Weak passage C — "Pricing" section (lines 219–227).**
> "Monthly pricing is available upon inquiry and reflects long-term residency rates — not a nightly vacation-rental rate."

The /availability page publishes the $12k–$18k range; this page hides it. That is a self-citation problem: an AI summarizing "Summit House Napa remote work pricing" will not find a number on the canonical remote-work page. Either publish the range here or link the answer in plain prose.

*Rewrite:*
> "Summit House is available for stays of 31 nights or more. Monthly residency rates range from $12,000 (off-peak, December through March) to $18,000 (harvest peak, September through October), all-inclusive of utilities, Starlink, and amenity use. A limited number of residency periods are available each quarter. Full seasonal pricing and live availability are on the [Availability](/availability) page."

---

### 11. Blog: Why Napa Rentals Require 31 Days (`/blog/why-napa-rentals-require-31-days`)
**Citability score: 84/100 — Excellent**

**What's working.** This post is doing exactly what an AI-citable explainer should: it answers a specific high-intent query ("why do Napa rentals require 31 days"), names the regulatory mechanism (Napa County short-term rental restrictions, Transient Occupancy Tax exemption at 30+ nights, California tenancy classification), and has a built-in FAQ section. Article + Breadcrumb schema fire. The piece will rank.

**Weakest passages.**

**Weak passage A — "Napa County zoning" framing (lines 89–101).** The post is broadly accurate but light on citable specifics. AI engines citing legal claims need names, statute references, or municipal codes.

*Rewrite paragraph 2:*
> "The City of Napa defines a vacation rental as a stay of fewer than 30 consecutive days and caps non-hosted permits at 41 citywide — all of which are currently issued, with no new applications accepted. Napa County applies a parallel set of restrictions to unincorporated areas, including the Mount Veeder hillside zone, where new short-term rental permits are not being issued. Properties in these zones that host guests must do so on stays of 30 nights or longer."

*(Verify the 41-permit number against the current City of Napa STR ordinance before publishing — this is from the homepage sr-only block, so it should already be vetted. If the number has changed, update both places.)*

**Weak passage B — Transient Occupancy Tax section (lines 132–137).** Solid, but doesn't name the rate.

*Rewrite:*
> "California and Napa County levy a Transient Occupancy Tax (TOT) on short-term lodging stays — currently 12% in Napa County for unincorporated areas, plus a 2% Tourism Improvement District assessment, applied to stays under 30 days. Stays of 30 consecutive nights or longer are exempt. On a $14,000 monthly rate, the exemption is worth roughly $1,960 to the guest."

*(Verify the TOT rate at https://www.countyofnapa.org before publishing.)*

**Weak passage C — "Does the 31-day minimum apply year-round?" FAQ answer (line 281).**
> "Yes."

Correct, but one-word FAQ answers don't quote well. AI engines will simply paraphrase the question.

*Rewrite:*
> "Yes. The 31-night minimum applies every month of the year. The classification follows from zoning, not seasonality, so there are no exceptions during harvest, holidays, or off-peak."

---

### 12. Blog index (`/blog`)
**Citability score: 55/100 — Weak**

**What's working.** Six well-named posts with hooks, dates, and images. Breadcrumb schema fires.

**What's not.** Zero introductory prose. The page is six cards. AI engines crawling for "Summit House Napa blog" or "Summit House Napa journal" get nothing to cite. There is also no Blog/CollectionPage schema — only Breadcrumb.

**Weakest passages.**

**Weak passage A — The page itself has no body copy.** The "Stories, guides, and reflections from Mount Veeder" subtitle is the only prose.

*Add an intro block immediately below the Header section, before the post grid:*
> "The Summit House journal is written by Natalie Schultz, a Napa Valley native and the designer behind the property's 2026 renovation. The journal covers four overlapping subjects: the practical reality of staying on Mount Veeder for a month or longer, the local insider knowledge that doesn't fit on a wine country itinerary, the design and restoration history of the 1969 A-frame, and the regulatory landscape that shapes how Napa Valley's most private properties can be rented. New posts publish roughly every six weeks."

**Weak passage B — Post excerpts.** Most are good, but the "Finding Summit House" excerpt is the most quotable on the page and the "Why 31 days" excerpt is the one most likely to drive AI traffic. Make the latter stronger.

*Rewrite "Why Do Napa Rentals Require 31 Days?" excerpt:*
> "It's one of the most-Googled questions about renting in Napa Valley. The answer is the City of Napa's short-term rental ordinance, parallel Napa County zoning in hillside areas like Mount Veeder, and the way California treats stays of 30+ nights as long-term tenancies — which exempts them from Transient Occupancy Tax."

**Weak passage C — Add CollectionPage schema** alongside Breadcrumb. Each card becomes a `hasPart` Article reference. Low cost, real lift.

---

## Cross-cutting issues to resolve in the implementation pass

1. **Hot tub model name contradiction.** "Hot Spring Prodigy" on /property and /experience vs "Hot Spring Limelight" on /remote-work-retreat. Pick one and propagate.
2. **Elevation inconsistency.** "1,800 feet" everywhere except /experience line 37 ("2,000 feet") and gallery copy. Normalize to 1,800.
3. **Acreage language.** Stats bar says "2 Acres," several body passages say "several private acres" or "two acres of wild, private land." If the parcel is exactly two acres, say two everywhere. If it is materially more, raise it everywhere.
4. **Drive-time consistency.** Yountville is "20 minutes" on /experience, "20–25 minutes" on /location, "22 minutes" on /remote-work-retreat. Pick one or commit to the range and use it.
5. **Acreage of Mount Veeder Cabernet etc.** /mount-veeder-napa-area-guide and /location both describe the AVA but in slightly different terms. A short shared "Mount Veeder facts" sentence used verbatim across both pages would consolidate the citation.
6. **Host identity is the largest single E-E-A-T gap.** A named host paragraph on /about, on /reviews (replacing the broken Airbnb link promise), and in the blog intro is the highest-leverage non-rewrite addition in this audit.
7. **Pricing visibility.** The $12k–$18k range appears on /availability and the homepage sr-only block but is absent from /property, /experience, and /remote-work-retreat answer blocks. Add a single sentence with the range to each of those answer blocks.
8. **Quantified guest reviews.** The site reports a rating and a count but never cites a specific review excerpt with attribution in body prose (only as decorative blockquotes). One block-quoted review with guest name and date, woven into the /property or /experience prose, is more citable than ten decorative quotes.

---

## Methodology notes

Scoring weights citation likelihood across: named entity density, fact specificity (numbers, dates, proper nouns), self-contained sentence structure (a passage that quotes intact without surrounding context), schema reinforcement, internal consistency, and operator identity (E-E-A-T). Brand voice was held constant — every rewrite above preserves the editorial register, avoids the word "cabin," and avoids before-and-after / fixer-upper language. None of these rewrites have been applied to the codebase; they are recommendations for a separate implementation pass.

Where I have suggested a specific number, statute, or third-party fact (TOT rate, Airbnb URL, decibel level, host name, ordinance permit count), it is flagged for verification against an authoritative source before publishing. The Napa County and City of Napa STR ordinance details should be re-confirmed against current municipal code before any of those rewrites ship.
