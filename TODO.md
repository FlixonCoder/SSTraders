# SS Agencies Website (v1) — Pending Items & Brand Decisions (TODO.md)

This document tracks all **OPEN items** identified in `BRIEF.md` section 2. Nothing unverified has been invented in code. Placeholders in `src/config/site.ts` are marked with `TODO(OPEN)` and can be configured here once confirmed with the proprietor.

---

## 1. Brand Identity & Naming

- [x] **Final Business Name (`brand.name`)**
  - **Status:** Confirmed as `"SS Agencies"`.
  - **File:** `src/config/site.ts` (`siteConfig.brand.name` and `siteConfig.brand.wordmark`).
- [ ] **Tagline (`brand.tagline`)**
  - **Status:** Currently using placeholder: `"Roofing sheets, stocked since 1967."`.
  - **File:** `src/config/site.ts`.
- [ ] **Final Logo**
  - **Status:** Currently using responsive SVG wordmark placeholder `<Wordmark />`.
  - **File:** `src/components/layout/Wordmark.tsx`.
- [ ] **Proprietor Name Display Flag (`flags.showProprietor`)**
  - **Status:** Verified as *Mr Anees Khan* via JustDial, but hidden by default per brief instructions until confirmed.
  - **File:** `src/config/site.ts` (`flags.showProprietor: false`). Set to `true` to display in the About page.

---

## 2. Contact & Digital Channels

- [ ] **Primary Public Email**
  - **Status:** Suppressed across the entire site. Old site drafts showed three conflicting email variants.
  - **File:** `src/config/site.ts` (`siteConfig.email`). Update once an official inbox is designated.
- [ ] **Production Website URL (`siteUrl`)**
  - **Status:** Set to empty string placeholder.
  - **File:** `src/config/site.ts` (`siteConfig.siteUrl`). Used for `metadataBase`, `canonical` URLs, `sitemap.xml`, and `robots.txt`.
- [ ] **Social Media Profiles**
  - **Status:** None known. Currently an empty array in config.
  - **File:** `src/config/site.ts` (`siteConfig.social`).
- [ ] **Exact Map Coordinates**
  - **Status:** Google Maps directions links currently target the full address string: *"No. 15, Mysore Main Road (Bangalore-Mysore Highway), Nayandahalli, Bengaluru 560039"*.
  - **File:** `src/lib/whatsapp.ts` (`directionsUrl()`).

---

## 3. Product Catalog & Brand Partnerships

- [ ] **Hidden Products Requiring Confirmation**
  - **`cement-roofing-sheet-ramco`**: `visible: false`. Hidden until cement composite material is confirmed.
  - **`ac-sheets`**: `visible: false`. Described as asbestos cement in old listings. Do not publish until legal sale and stocking is confirmed.
  - **`ac-pipes`**: `visible: false`. Same reason as above.
  - **File:** `src/data/products.ts`.
- [ ] **Stocked Brands & Authorised Dealer Status**
  - **Status:** Brand names *Duratuf* and *Uttam Suraksha* are noted in product data with `needsConfirmation` flags and are not claimed as authorized partnerships on site copy.
  - **Rule:** Never claim "Authorized dealer" without written authorization.
- [ ] **Business Model Confirmation**
  - **Status:** Sourced and marked as dealer / stockist. Confirmation needed on whether they also manufacture any profiles in-house.

---

## 4. Logistics & Delivery

- [ ] **Delivery Area Terms & Minimum Order**
  - **Status:** Currently noted as "Delivery across South India" per old drafts. Needs confirmation of freight charges, truckload thresholds, or radius limitations.
  - **File:** `src/config/site.ts` (`siteConfig.delivery`).
