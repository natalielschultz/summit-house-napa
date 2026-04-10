# Summit House Napa — Website Copy Review & Changes

**Date:** March 29, 2026

---

## Summary of Changes Made

### Owner Name Removed (11 instances across 7 files)

All references to the owner's first name have been replaced with "your host" (anonymous, warm, professional). The site now fully separates the owner's personal identity from the business.

| File | Original | Changed To |
|------|----------|------------|
| `src/app/about/page.tsx` — metadata | "About Your Host — Natalie" | "The Story — Summit House Napa" |
| `src/app/about/page.tsx` — hero | "About Your Host" | "The Story" |
| `src/app/about/page.tsx` — section title | "Natalie's Story" | "The Discovery" |
| `src/app/about/page.tsx` — portrait | "Portrait of Natalie" | Property exterior photo |
| `src/app/about/page.tsx` — body copy | First-person narrative ("I first drove...") | Third-person, property-focused |
| `src/app/about/page.tsx` — Why Book Direct | "When you book with me..." | "Booking directly means working with a dedicated host..." |
| `src/app/about/page.tsx` — CTA | "I'd love to hear from you" | "We'd love to hear from you" |
| `src/app/location/page.tsx` — winter advisory | "Natalie will always provide..." | "Your host will always provide..." |
| `src/app/availability/page.tsx` — How It Works | "A Personal Call with Natalie" | "A Personal Call with Your Host" |
| `src/components/sections/FAQ.tsx` — monthly rate | "handwritten note from Natalie" | "from your host" |
| `src/components/sections/FAQ.tsx` — check-in | "Natalie will send detailed..." | "Your host will send..." |
| `src/components/sections/InquiryForm.tsx` — success | "Natalie will be in touch..." | "Your host will be in touch..." |
| `src/lib/constants.ts` — Sarah's review | "Natalie is an incredible host" | "The hosting is incredible — personal, attentive, and thoughtful" |

### Short-Term Rental Language Fixed

- **Property page, Guest Bedrooms:** "hosting friends for a long weekend" → "welcoming friends for part of your stay"
- **Navigation:** "About" → "Our Story"

### Airbnb References

Kept intact per owner preference. The Airbnb connection supports credibility for the long-term rental model.

### Final Verification

Full codebase scan confirmed zero remaining instances of: the owner's name, "short-term," "vacation rental," or "long weekend" in any source file.

---

## About Page Rewrite

The About page was fully rewritten. It is now titled "Our Story" in navigation and focuses on the property's history and renovation rather than the owner's personal story.

**Structure:**
1. Hero: "The Story" / "How a 1969 A-frame became a mountaintop sanctuary."
2. "The Discovery" — third-person narrative about the property's setting and character, with property exterior photo
3. "The Renovation" — kept nearly intact from original (strong copy), minor edits to remove first-person
4. "Why Book Direct" — rewritten with "your host" voice instead of first-person

---

## Competitive Research

Properties researched: Mayastoga, Four Seasons Residences Napa Valley, Vineskipper Properties, BeautifulPlaces, Edward Anthony Lifestyle.

**Key takeaways:**
- None of the top competitors lead with an owner's personal name or memoir
- Property-focused storytelling (architecture, renovation, setting) is the standard
- Monthly/extended stay framing targets remote workers and sabbatical travelers
- Airbnb is not prominently featured by premium competitors
- Concierge service is attributed to "the team" or "our hosts," not a named individual

---

## Luxury Renter Perspective Review

An independent review was conducted from the perspective of a luxury monthly renter in Napa Valley.

### Strengths
- Strong positioning: "A summit retreat hidden among ancient redwoods" signals exclusivity
- "Four acres of wild luxury at the summit" is specific and evocative
- Stats section (acreage, sq ft, 31-day minimum, rating) builds confidence
- Day timeline on Experience page is helpful and grounded
- Monthly CTAs are consistent throughout

### Areas for Future Improvement
- **Tone:** Occasionally overwritten. "Wild luxury" and "sensory" feel designed-by-committee. Luxury renters respond to specificity and restraint.
- **Social proof:** 16 reviews is a thin sample for a $10K–$16K/month property. Build the review base over time.
- **Operational details:** Strong on feeling but light on practical info — climate control, cleaning frequency, grocery delivery, concierge services.
- **Monthly value proposition:** The minimum is clear but the copy doesn't fully articulate why a month is the right duration. Future copy could celebrate what a month enables that a week doesn't.
- **Experience page tagline:** "Not just a place to stay. A way to live." is cliché in luxury hospitality. Consider something more distinctive.
- **Airbnb association:** Neutral to slightly negative for luxury positioning. As the direct-booking brand strengthens, worth revisiting.

### Verdict
Intriguing enough to inquire, but a luxury renter would have follow-up questions. Adding operational specifics would increase conversion confidence for the monthly commitment level.

---

## Files Changed

| File | Change |
|------|--------|
| `src/app/about/page.tsx` | Full rewrite — property story, no personal name, third-person voice |
| `src/app/location/page.tsx` | Replaced name with "your host" in winter advisory |
| `src/app/availability/page.tsx` | Replaced name in How It Works step 2 |
| `src/app/property/page.tsx` | Fixed "long weekend" language in guest bedroom description |
| `src/components/sections/FAQ.tsx` | Replaced name in 2 FAQ answers |
| `src/components/sections/InquiryForm.tsx` | Replaced name in form success message |
| `src/lib/constants.ts` | Edited Sarah's review text; renamed "About" nav link to "Our Story" |

---

## Important Context

- **Mt. Veeder Property LLC** was previously sued for short-term renting in Napa County and settled. No copy on this site should reference or imply short-term stays.
- **Minimum stay is 31 nights** (monthly rental). Language should be vague about duration or clearly state one month minimum. Never mention short-term, weekend, or nightly stays.
- **Owner's name must not appear anywhere** on the site. Use "your host" for personal references.
- **Airbnb references are kept** for credibility but may be revisited as the direct-booking brand grows.
