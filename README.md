# SS Agencies — Website (v1)

A high-performance, mobile-first static web application for **SS Agencies**, roofing sheet dealers and stockists in Nayandahalli, Bengaluru (trading since 1967).

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS 4**, configured for zero-runtime static HTML export (`output: 'export'`).

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 2. Static Production Build
```bash
npm run build
```
Generates a fully optimized, static bundle in the `out/` directory ready to host on Vercel, Netlify, Cloudflare Pages, S3, or any static server.

### 3. Image Optimization Pipeline
```bash
npm run images
```
Processes high-resolution photographs placed in `public/assets/source/` into responsive WebP and AVIF formats at multiple widths (320px, 640px, 960px, 1200px) inside `public/assets/optimized/`.

---

## 🏗️ Architecture & Key Concepts

- **Zero Invention of Business Facts:** Every phone number, address string, operating hour, and specification originates from verified sources (JustDial listing and historical records). All unverified items are documented in [TODO.md](./TODO.md).
- **Centralized Brand Config:** Brand name, taglines, phone numbers, hours, and payment modes live exclusively in `src/config/site.ts`. No brand details are hard-coded into component trees.
- **Client-Side Enquiry Flow:** Lightweight enquiry list that persists to `localStorage` with in-memory fallback. Tapping "Send Enquiry on WhatsApp" generates a formatted message with requested products, custom lengths, notes, and site area sent directly to `wa.me/919886067098`.
- **Live Open/Closed Computation:** Evaluates current time in `Asia/Kolkata` against the configured operating hours without SSR hydration mismatch.
- **Corrugation Signature Motif:**
  - `CorrugationDivider`: Reusable SVG trapezoidal/sinusoidal profile divider.
  - Repeating corrugation textures on dark sections.
  - 10 custom SVG profile illustrations (`corrugated`, `trapezoid`, `flat`, `translucent`, `panel`, `membrane`, `pipe`, `door`, `fastener`, `angle`).
  - Animated drifting corrugation field in the Hero respecting `prefers-reduced-motion`.

---

## 🎨 How-To Guides

### 1. Swapping Brand Tokens (Colors & Fonts)
To re-theme the entire website once the new identity is finalized:
1. Open `src/styles/tokens.css`.
2. Update the CSS custom properties:
   ```css
   --ink: #0E1A22;         /* Dark surfaces, text */
   --paper: #F6F4F0;       /* Warm background */
   --signal: #F26A1B;      /* Brand accent / CTA */
   --signal-ink: #B94A0B;  /* Contrast text on paper */
   ```
3. To update the business name, open `src/config/site.ts` and edit `siteConfig.brand.name`.
4. To replace the temporary text wordmark with a real SVG logo, edit `src/components/layout/Wordmark.tsx`.

---

### 2. Adding or Editing Products
All products are typed and validated using **Zod** in `src/data/products.ts`.
To add a new product:
1. Open `src/data/products.ts`.
2. Add an entry to the `rawProducts` array:
   ```ts
   {
     slug: "new-profile-sheet",
     name: "Heavy Duty Profile Sheet",
     category: "roofing-sheets",
     tags: ["roofing", "heavy-duty"],
     profileArt: "trapezoid",
     summary: "High tensile profile sheet for industrial applications.",
     description: "Engineered for wide purlin spacing and extreme rain runoff.",
     specs: [
       { label: "Thickness", value: "0.50 mm" },
       { label: "Width", value: "1050 mm" }
     ],
     source: "site",
     visible: true,
   }
   ```
3. Run `npm run build` to verify types and regenerate the static catalogue.

---

### 3. Replacing Placeholder Art with Real Photos
When real photos of products and the store are available:
1. Place the original high-resolution images in `public/assets/source/` (e.g. `public/assets/source/puf-panels.jpg`).
2. Run the image optimization pipeline:
   ```bash
   npm run images
   ```
   This generates responsive WebP and AVIF files in `public/assets/optimized/`.
3. In `src/data/products.ts`, specify the `image` property on the product:
   ```ts
   image: "/assets/source/puf-panels.jpg",
   ```
4. `<ProductImage>` will automatically generate responsive `srcset` markup with zero layout shift.

---

## 🔍 SEO & Local Search Setup

- **`LocalBusiness` Schema:** Embedded in Home and Contact pages using verified business name, Nayandahalli address, phone, and hours. Prices and external ratings are omitted from schema per brief requirements.
- **`Product` Schema:** Prerendered on each product detail page without fictitious pricing.
- **Static Routes:** `sitemap.xml` and `robots.txt` are statically generated at build time with `export const dynamic = 'force-static'`.

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. In Vercel, click **Add New Project** and import the repository.
3. Vercel will automatically detect **Next.js** with default settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build` (or `npm run build`)
   - **Output Directory:** Automatically detected
4. *(Optional)* Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your custom production domain (e.g. `https://ssagencies.in`). If omitted, Vercel system environment variables (`VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`) will be used automatically.
5. Click **Deploy**. Security headers and static asset caching are configured in [vercel.json](./vercel.json).
