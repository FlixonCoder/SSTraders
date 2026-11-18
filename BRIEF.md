# Build Brief: S S Agencies Website (v1)

> Paste this whole document into Antigravity as the task prompt. Keep it as `BRIEF.md` in the repo root so the agent can re-read it.

## 0. How to work

1. **Plan first.** Before writing code, output an implementation plan (file tree, component list, data model, phase breakdown) and wait for my approval.
2. **Build in the phases in section 11.** After each phase, run the dev server, check in the browser at 375px, 768px and 1440px widths, fix what is broken, and summarise what changed.
3. **Never invent business facts.** Use only the facts in section 2. Anything marked OPEN becomes a placeholder in `src/config/site.ts` with a `TODO` comment, and is also listed in a final `TODO.md`.
4. **Ask rather than guess** when a decision changes the architecture. For visual or copy decisions, pick the best option, note it in the summary, and move on.

---

## 1. Context and goal

**S S Agencies** is a roofing sheet dealer and stockist in Nayandahalli, Bengaluru, trading since 1967. This site is the first deliverable of a full rebrand. The new logo and final name are **not decided yet**, so the site must be easy to re-theme: every brand-level value (name, tagline, logo, colours, fonts) lives in one config file plus CSS variables, and nothing brand-specific is hard-coded in components.

**Audience:** homeowners, contractors, fabricators, builders and shed owners in Bengaluru and South India. Most will arrive on a mid-range Android phone over 4G, usually from Google or JustDial, and want to see what is available and talk to someone fast.

**Goal:** make the business look like the most credible, modern roofing supplier in its area, and make an enquiry possible in three taps or fewer.

**Primary conversions (in order):**
1. WhatsApp enquiry (prefilled message)
2. Phone call
3. Directions to the store

---

## 2. Verified facts

Sources: **[Site]** = old website draft, **[JD]** = JustDial listing (claimed listing). Use these exactly.

| Fact | Value | Source |
|---|---|---|
| Business name (working) | S S Agencies | Both |
| Established | 1967 | Both |
| Proprietor | Mr Anees Khan | JD |
| Address | No. 15, Mysore Main Road (Bangalore-Mysore Highway), Nayandahalli, Bengaluru 560039. Landmark: near Nayandahalli Metro Pillar 463. Old site also writes "ITI Layout 3rd Phase" | Both |
| Primary phone / WhatsApp | +91 98860 67098 | Both |
| Staff landline | 080 2670 5406 | Site |
| Office mobile | Discontinued (+91 98459 36391) | Site |
| Hours | Mon-Sat 10:30 am to 6:00 pm, Sunday closed | JD |
| Payment accepted | DD, Cash, UPI | Verified |
| Rating | 4.4 from 18 ratings on JustDial (no written review text available) | JD |
| Delivery | "South India only" | Site |
| Order process (old site) | Send enquiry, get a confirmation call, delivery arranged. Replies promised within 24 hours | Site |
| Core categories | Colour coated roofing sheets (JD primary), GI/GP/GC sheets, PUF insulated panels, polycarbonate, cement sheets, fibreglass, waterproofing membranes, pipes, doors, fasteners | Both |

### OPEN items (placeholders only, do not guess)

- `brand.name` (S S Agencies vs S S Traders) and `brand.tagline`
- Final logo, so use a text wordmark placeholder for now
- Primary public email (old site shows three variants, so **do not display any email** until resolved)
- Whether they are a dealer only, or also a manufacturer
- Which products are actually in stock, and the brands stocked (JD mentions Ramco, Duratuf, Uttam Suraksha)
- Social media handles (none known)
- Exact map coordinates (build the map link from the address string only)
- Delivery area wording and any minimum order

### Do NOT claim anywhere on the site

"80k+ customers", "50+ products", "manufacturer", ISI or any certification, warranties, specific brand partnerships ("authorised dealer"), invented testimonials, invented project counts, or competitor comparisons. The 4.4 JustDial rating may be shown only as "4.4 on JustDial (18 ratings)" with a link to the listing. Do not display prices (see section 7).

---

## 3. Design direction: "Zinc & Signal"

**Feel:** modern industrial-editorial. Confident, clean, spacious. It should look like a premium building-materials brand, not a classifieds listing. Avoid cartoon houses, stock-photo heroes, gradient blobs, and generic SaaS templates.

**Palette (CSS variables, easy to swap once the real brand lands):**

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0E1A22` | Text, dark sections |
| `--zinc-900/700/500/300/100` | cool grey ramp (derive from `#8A949B`) | Surfaces, borders |
| `--paper` | `#F6F4F0` | Page background (warm off-white) |
| `--signal` | `#F26A1B` | Accent, primary CTA, key highlights |
| `--signal-ink` | `#B94A0B` | Accent text on light backgrounds (check contrast) |
| `--whatsapp` | `#25D366` | WhatsApp button only |

**Type:** `Bricolage Grotesque` (display, tight tracking, large sizes) with `Inter` (body), loaded through `next/font`. Use a fluid scale (`clamp`). Hero headline should be very large and confident. Use tabular figures for specs.

**Signature motif: corrugation.** The visual identity of the site is the profile of a roofing sheet.
- A reusable SVG `CorrugationDivider` (sine/trapezoid wave) between sections.
- A subtle repeating corrugation line texture on dark sections.
- Each product card gets a small **custom SVG profile icon** (corrugated, trapezoidal/box profile, flat, translucent, panel with core, pipe, door, fastener, membrane roll). No emoji, no icon-font clichés.
- Hero: oversized type over an animated, slow-drifting corrugation line field (CSS/SVG only, no video, no heavy library). Respect `prefers-reduced-motion`.

**Motion:** restrained. Fade/translate-on-scroll (Framer Motion or CSS), hover lift on cards, smooth filter transitions. Nothing that delays content or hurts LCP.

**Layout rules:** mobile-first, 12-col grid on desktop, generous whitespace, max content width ~1200px, 8px spacing scale, large tap targets (min 48px), sticky bottom action bar on mobile (Call / WhatsApp / Directions).

**Imagery:** I will supply real product and store photos in `/public/assets/source/` (the old site's product images and JustDial photos). Until then, use clean placeholders built from the SVG profile icons on `--zinc-100` tiles. Build `<ProductImage>` so swapping in a real photo is a data-only change. Optimise everything through `next/image`.

---

## 4. Sitemap and pages

```
/                      Home
/products              Catalogue (filter, search)
/products/[slug]       Product detail
/about                 About (since 1967, how they work)
/contact               Visit / call / WhatsApp / enquiry form
/enquiry               Enquiry list review + send (see 5.4)
/privacy               Short privacy note (placeholder text)
```

### 4.1 Home (top to bottom)

1. **Header:** wordmark left, nav (Products, About, Contact), prominent "WhatsApp us" button. Sticky, compacts on scroll.
2. **Hero:** large headline, one-line subhead, two CTAs (WhatsApp enquiry, Browse products), a small proof strip: "Since 1967", "4.4 on JustDial", "Mon-Sat 10:30-7:00". Suggested headline: *"Roofing sheets, stocked since 1967."* Subhead: *"GI, colour coated, insulated, polycarbonate and more, from our Nayandahalli store."* (Improve if you can, but keep it honest.)
3. **Category tiles:** Roofing Sheets, Insulation and Translucent, Waterproofing, Pipes and Steel, Doors and Fasteners. Each with SVG profile art and product count.
4. **"Find the right sheet" guide:** 3-question interactive picker (What are you roofing? Need light through it, insulation, or just strength? Budget-conscious or premium?) that recommends 1-3 product types from the catalogue and links to them. Logic must be simple, transparent, and driven from data. Label it "A starting point, our team will confirm the right spec."
5. **Featured products:** 6 cards from data.
6. **Why S S Agencies:** 3-4 truthful points only (59 years trading since 1967, wide range under one roof, pay by cash/cheque/card, delivery across South India [per old site], open Mon-Sat). No invented numbers.
7. **How ordering works:** 3 steps (Choose products, Send enquiry on WhatsApp, We confirm and arrange delivery).
8. **Visit us:** address, hours, map link, call button.
9. **Footer:** wordmark, links, address, phones, hours, payment modes, small "Rating source: JustDial" link.

### 4.2 Products
- Left filter rail (bottom sheet on mobile): category, use-case tags (roofing, insulation, waterproofing, daylighting, plumbing, doors, fasteners), and a search box with instant client-side results.
- Grid of `ProductCard`s: SVG art or photo, name, one-line description, key spec chips, "Add to enquiry" and "Details".
- URL-synced filters (`?category=sheets&tag=insulation`).

### 4.3 Product detail
- Gallery (photo or SVG placeholder), description, spec table (from data), "Available in" (thickness, colours, sizes only where sourced), notes, **Add to enquiry** and **Ask on WhatsApp about this product** (prefilled with product name), related products.
- `Product` JSON-LD (no price).

### 4.4 Enquiry list
- Lightweight client-side "enquiry list" (not a cart, no checkout, no payment). Users add products, set quantity and notes, then tap **Send on WhatsApp**, which opens `wa.me/919886067098` with a nicely formatted prefilled message (name, phone, items, quantities, notes, site area/location). Persist in `localStorage` with a try/catch fallback. Also offer "Call instead".
- No backend required for v1. Structure the code so an email/API route can be added later.

### 4.5 About
- Short, honest story: trading since 1967, Nayandahalli, wide range of roofing and building materials. Include a clean timeline element with only one verified node (1967) plus a "Today" node. No invented milestones. Include proprietor name only if I confirm; leave it off by default behind a config flag.

### 4.6 Contact
- Three big action cards (WhatsApp, Call, Directions), hours table, address, payment modes, enquiry form (name, phone, product interest, message) that submits to WhatsApp using the same builder as 4.4. Directions button uses a Google Maps URL built from the address string.

---

## 5. Cross-cutting features

- `siteConfig` (name, tagline, phones, address, hours, payment modes, ratings, flags) as the single source of truth for header, footer, schema, WhatsApp links.
- **Sticky mobile action bar** (Call, WhatsApp, Directions), hidden on desktop.
- **Open/closed indicator** computed client-side from the hours in config in Asia/Kolkata time ("Open now, closes 7:00 pm" / "Closed, opens Monday 10:30 am").
- Link tracking hooks: wrap CTA clicks in a `track(event, props)` helper that is a no-op for now (so analytics can be added later).
- Kannada support is **phase 2**, but keep all UI strings in a single `copy.ts` so adding `ಕನ್ನಡ` later is easy.

---

## 6. Product data model

Create `src/data/products.ts` (typed, validated with Zod or TypeScript types).

```ts
type Product = {
  slug: string;
  name: string;
  category: 'roofing-sheets' | 'insulation-daylight' | 'waterproofing' | 'pipes-steel' | 'doors-fasteners';
  tags: string[];                 // e.g. ['roofing','insulation']
  profileArt: 'corrugated' | 'trapezoid' | 'flat' | 'translucent' | 'panel' | 'membrane' | 'pipe' | 'door' | 'fastener' | 'angle';
  summary: string;                // one line, plain language
  description: string;            // 2-3 sentences, no unverified claims
  specs?: { label: string; value: string }[];   // only sourced specs
  source: 'site' | 'justdial' | 'both';
  featured?: boolean;
  visible: boolean;               // false = hidden pending confirmation
  needsConfirmation?: string;     // internal note, never rendered
  image?: string;                 // later
};
```

### Products to seed (write the plain-language copy yourself; specs below are the only ones allowed)

| Name | Category | Source | Allowed specs / notes |
|---|---|---|---|
| Colour Coated GI Roofing Sheet | roofing-sheets | JD (+site "META Colour Sheets") | Thickness 0.30-0.80 mm, multicolour. Featured |
| Precoated Roofing Sheet (Duratuf) | roofing-sheets | JD | Width 1200 mm, GI. Brand name needs confirmation |
| GI Roofing Sheet (Uttam Suraksha) | roofing-sheets | JD | Silver. Brand name needs confirmation |
| G.P. (Galvanized Plain) Sheets | roofing-sheets | Site | Zinc-coated, silver finish |
| G.C. (Galvanized Corrugated) Sheets | roofing-sheets | Site | Bundles; lengths 6/8/10/12 ft; width 2.75-3.0 ft. Featured |
| Krinkled Sheets | roofing-sheets | Site | Textured finish |
| Metal Roofing Sheet | roofing-sheets | JD | Metal |
| GI Decking Sheet | roofing-sheets | JD | Zinc coating 80-275 gsm |
| PUF Insulated Roofing Panels | insulation-daylight | Both | Panel thickness 30-100 mm; steel facing; thermal and acoustic insulation. Featured |
| Polycarbonate Profile Roofing Sheet | insulation-daylight | Both | Thickness 0.8-1.5 mm, multicolour. Featured |
| Polycarbonate Rolls | insulation-daylight | Site | Transparent, impact resistant |
| Transparent Roofing Sheet | insulation-daylight | JD | Thickness 0.8-1.5 mm |
| Fibreglass Sheets | insulation-daylight | Site | Translucent |
| Fibre Corrugated Sheets | insulation-daylight | Site | Corrugated; overlap guidance only |
| Cement Roofing Sheet (Ramco) | roofing-sheets | JD | Grey. **Hidden** until material is confirmed |
| A.C. Sheets | roofing-sheets | Site | **visible: false**. Described as asbestos cement. Do not publish until the owner confirms they stock and legally sell it |
| A.C. Pipes | pipes-steel | Site | **visible: false**, same reason |
| Bitumen Sheets | waterproofing | Site | Roof waterproofing membrane |
| Tarfelt Sheets | waterproofing | Site | Polymeric bitumen membrane |
| M.S. Round Pipes | pipes-steel | Site | Mild steel; plumbing, firefighting, HVAC |
| Mild Steel Angle | pipes-steel | JD | Mild steel |
| PVC Doors | doors-fasteners | Site | Low-maintenance alternative to wooden doors |
| G.I. Bolts and Nuts | doors-fasteners | Site | Roofing fasteners |

Rules:
- **Never show prices.** JustDial prices are indicative and some look inconsistent. Store none in the data; every product uses "Get best price" which opens a prefilled WhatsApp message.
- The old site's Size/Colour fields are copy-pasted and unreliable. Do not render sizes or colours unless listed above.
- Collapse overlapping items sensibly in the UI (e.g., one "Colour Coated" family), but keep the data granular.

---

## 7. Tech stack and structure

- **Next.js (App Router) + TypeScript + Tailwind CSS**, statically generated (`output: 'export'` or fully SSG). No database, no auth, no server runtime needed.
- Framer Motion (or CSS only) for animation; `lucide-react` for UI icons only (product art is custom SVG).
- Deploy target: Vercel or any static host. Include a README with run/build instructions.
- Suggested structure:

```
src/
  app/ (routes)
  components/ (ui, layout, product, home)
  config/site.ts
  data/products.ts
  lib/ (whatsapp.ts, hours.ts, enquiry-store.ts, seo.ts)
  styles/tokens.css
  copy.ts
public/assets/ (source/, optimized/)
```

---

## 8. SEO and local discovery

- Per-page metadata, Open Graph, canonical URLs, `sitemap.xml`, `robots.txt`.
- **`LocalBusiness` JSON-LD** on home/contact using only verified data: name, address, phone, opening hours, `foundingDate: 1967`, `priceRange` omitted, `aggregateRating` omitted (do not mark up the JustDial rating as if it were first-party).
- Titles/H1s targeting: "roofing sheets in Nayandahalli", "colour coated roofing sheet dealers Bengaluru", "GI sheets Mysore Road".
- Semantic HTML, a single H1 per page, descriptive alt text.

---

## 9. Quality bar (acceptance criteria)

- Lighthouse mobile: Performance, Accessibility, Best Practices, SEO all **90+**. LCP under 2.5 s on throttled 4G. CLS under 0.05.
- WCAG AA contrast (check `--signal` on `--paper` and on `--ink`; use `--signal-ink` for small text).
- Full keyboard navigation, visible focus states, `prefers-reduced-motion` honoured, correct landmarks and labels on forms.
- Works at 360px width with no horizontal scroll.
- Every CTA works: `tel:` links, `wa.me` links with correctly URL-encoded prefilled text, Google Maps directions.
- Enquiry list survives reload; degrades gracefully if `localStorage` is unavailable.
- No lorem ipsum, no broken images, no invented facts. `TODO.md` lists every OPEN item.
- Build passes with zero TypeScript or ESLint errors.

---

## 10. Out of scope for v1

Online payments, user accounts, a live price list, admin/CMS (products are edited in `products.ts` for now), blog, Kannada translation, analytics (hooks only), chat widgets.

---

## 11. Phases

1. **Foundation:** project setup, tokens, fonts, `siteConfig`, layout (header, footer, mobile action bar), corrugation divider, SVG product-art set.
2. **Data and catalogue:** `products.ts`, product grid, filters, search, product detail pages.
3. **Home:** hero, category tiles, "find the right sheet" guide, featured, trust points, ordering steps, visit block.
4. **Enquiry flow:** enquiry list, WhatsApp message builder, contact page and form, open/closed indicator.
5. **About, SEO, polish:** About page, metadata, JSON-LD, sitemap, motion pass, accessibility pass, Lighthouse pass.
6. **Handoff:** README, `TODO.md`, and a short guide on swapping brand tokens, adding a product, and replacing placeholder art with real photos.

Start with the implementation plan. Do not write code until I approve it.
