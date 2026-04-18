# Summit House Napa — Marketing Assets

Internal working files for the launch outreach campaign. **Not shipped to the site.**

## What's here

- `pitch-templates/` — Outlet-specific pitch drafts. Pick the closest fit, customize the [bracketed] fields, send.
- `outreach-tracker.md` — CRM-lite for tracking who's been pitched, when, and what came back.

## Workflow

1. **Pick an outlet** from `pitch-templates/`. Templates are tuned to the outlet's editorial voice and recurring story formats.
2. **Find the right editor** — usually the Travel Editor, Real Estate Editor, or Design Editor. LinkedIn or the masthead is the source. Add to the outreach tracker.
3. **Customize** the `[bracketed placeholders]` in the pitch (editor name, recent piece you're referencing, etc.).
4. **Send from `stay@summithousenapa.com`**, BCC the tracker email if you want a paper trail.
5. **Log it** in `outreach-tracker.md` with status = "sent" and a follow-up date 10 business days out.
6. **When a feature lands:**
   - Add the URL to `src/lib/featured-in.ts` — it auto-appears on the homepage
   - Add the URL to `SAME_AS` in `src/lib/structured-data.ts` — strengthens entity graph
   - Update tracker status to "published"
   - Reconsider the Person schema decision per the master GEO plan

## Outlets ranked by likely-yes / impact

| Outlet | Likely yes? | Brand fit | GEO impact when published |
|---|---|---|---|
| SF Chronicle Travel | High | Regional — direct audience match | Medium-high (regional authority) |
| Cup of Jo | Medium-high | Lifestyle — strong design/family audience | Very high (engagement + Reddit-adjacent buzz) |
| Sunset | Medium-high | West Coast travel — natural fit | High (West Coast authority) |
| Dwell | Medium | Design/architecture — A-frame is on-brand | Very high (Knowledge Graph + design entity) |
| Apartment Therapy | Medium | Design/renovation — story angle works | High (large readership) |
| AFAR | Medium-low | Travel — extended-stay angle is novel for them | Very high (luxury travel authority) |
| Domino | Low-medium | Interiors — beautiful but limited audience overlap | Medium |
| Conde Nast Traveler | Low | Aspirational reach but high editorial bar | Very high if it lands |

Start with the high-likely-yes column. One regional yes is worth more than 10 silent national pitches in the early funnel.

## Brand voice rules (LOCKED)

- "A-frame" / "rental" / "residence" / "monthly residency" — IN
- "Cabin" / "vacation home" / "Airbnb listing" / "weekend rental" — OUT
- Owner stays anonymous in pitches — sign as "Summit House Napa" or "the Summit House Napa team"
- Once an editor is genuinely engaged and asks for a name, that's the moment to share

See `/press` on the live site for the full media kit (boilerplate, photo downloads, brand voice).
