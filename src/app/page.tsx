import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Truck, CreditCard } from "lucide-react";
import { siteConfig, fullAddress } from "@/config/site";
import { copy } from "@/copy";
import { getFeaturedProducts, getVisibleProducts, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, type Category } from "@/data/products";
import { ButtonLink } from "@/components/ui/Button";
import { CorrugationDivider } from "@/components/ui/CorrugationDivider";
import { ProductArt, type ProfileArt } from "@/components/product/ProductArt";
import { ProductCard } from "@/components/product/ProductCard";
import { SheetPicker } from "@/components/home/SheetPicker";
import { GENERIC_ENQUIRY, directionsUrl, telUrl, whatsappUrl } from "@/lib/whatsapp";
import { HOURS_SHORT } from "@/lib/hours";

import { getLocalBusinessJsonLd } from "@/lib/seo";

const CATEGORY_ICONS: Record<Category, ProfileArt> = {
  "roofing-sheets": "trapezoid",
  "insulation-daylight": "translucent",
  "waterproofing": "membrane",
  "pipes-steel": "pipe",
  "doors-fasteners": "door",
};

export default function HomePage() {
  const allProducts = getVisibleProducts();
  const featured = getFeaturedProducts();
  const localBusinessJson = getLocalBusinessJsonLd();

  // Category counts
  const categoryCounts = allProducts.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<Category, number>);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
      />
      {/* 1. Hero Section with animated drifting corrugation field */}
      <section className="relative overflow-hidden bg-ink text-paper py-20 md:py-32">
        {/* Subtle repeating drifting corrugation pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] drift select-none"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, #ffffff 0, #ffffff 2px, transparent 2px, transparent 24px)",
            width: "200%",
          }}
        />

        <div className="container-page relative z-10">
          <div className="max-w-4xl">
            {/* Proof strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/80 px-3 py-1 border border-zinc-700">
                <span className="size-2 rounded-full bg-signal" />
                {copy.hero.proofSince}
              </span>
              <a
                href={siteConfig.rating.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/80 px-3 py-1 border border-zinc-700 hover:text-signal transition"
              >
                ★ {siteConfig.rating.value} on JustDial (18 ratings)
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/80 px-3 py-1 border border-zinc-700">
                <Clock size={12} />
                {copy.hero.proofHours}
              </span>
            </div>

            <h1 className="font-display mt-6 text-[length:var(--text-hero)] font-extrabold tracking-tight leading-none text-paper">
              {copy.hero.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300 font-medium leading-relaxed">
              {copy.hero.subhead}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink
                variant="whatsapp"
                href={whatsappUrl(GENERIC_ENQUIRY)}
                className="text-base font-bold shadow-lg shadow-whatsapp/20"
              >
                <MessageCircle size={20} aria-hidden="true" />
                {copy.cta.whatsappUs}
              </ButtonLink>

              <ButtonLink
                variant="outline-light"
                href="/products"
                className="text-base font-semibold"
              >
                {copy.cta.browseProducts}
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Corrugation Divider */}
      <CorrugationDivider fillClassName="text-paper" className="-mt-px bg-ink" />

      {/* 2. Category Tiles */}
      <section className="container-page py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Core Catalogue</span>
            <h2 className="font-display mt-1 text-[length:var(--text-h2)] font-extrabold text-ink">
              Building & Roofing Categories
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-zinc-700 hover:text-ink underline underline-offset-4"
          >
            View all 20+ materials &rarr;
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => {
            const count = categoryCounts[cat] || 0;
            return (
              <Link
                key={cat}
                href={`/products?category=${cat}`}
                className="group flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-ink/30 hover:shadow-md"
              >
                <div>
                  <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl bg-zinc-100 p-4 text-zinc-700 transition-colors group-hover:bg-zinc-900 group-hover:text-paper">
                    <ProductArt art={CATEGORY_ICONS[cat]} className="h-10 w-auto" />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold text-ink group-hover:text-signal transition-colors">
                    {CATEGORY_LABELS[cat]}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {CATEGORY_DESCRIPTIONS[cat]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-ink/5 flex items-center justify-between text-xs font-semibold text-zinc-500">
                  <span>{count} products</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Interactive Guide: "Find the right sheet" */}
      <section className="container-page py-6">
        <SheetPicker />
      </section>

      {/* 4. Featured Products */}
      <section className="container-page py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">In-Demand Materials</span>
            <h2 className="font-display mt-1 text-[length:var(--text-h2)] font-extrabold text-ink">
              Featured Sheets & Panels
            </h2>
            <p className="mt-1 text-sm text-zinc-700">
              Verified specifications stocked at our Nayandahalli yard.
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-zinc-700 hover:text-ink underline underline-offset-4"
          >
            All products &rarr;
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* 5. Why SS Agencies (Strictly Verified Facts Only) */}
      <section className="bg-white border-y border-ink/10 py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Trust & Proven Track Record</span>
            <h2 className="font-display mt-1 text-[length:var(--text-h2)] font-extrabold text-ink">
              Why Deal With {siteConfig.brand.name}
            </h2>
            <p className="mt-2 text-base text-zinc-700">
              Serving Bengaluru contractors, fabricators, and builders with honest advice and ready material stock.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-ink/10 bg-paper p-6">
              <div className="grid size-12 place-items-center rounded-xl bg-ink text-signal">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-ink">59 Years Trading</h3>
              <p className="mt-1 text-sm text-zinc-700 leading-relaxed">
                Trading on Mysore Main Road since 1967. Reliable continuity and transparent local service.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-paper p-6">
              <div className="grid size-12 place-items-center rounded-xl bg-ink text-signal">
                <Truck size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-ink">South India Delivery</h3>
              <p className="mt-1 text-sm text-zinc-700 leading-relaxed">
                Prompt dispatch coordination for full truckloads and contractor orders across South India.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-paper p-6">
              <div className="grid size-12 place-items-center rounded-xl bg-ink text-signal">
                <CreditCard size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-ink">Flexible Payment</h3>
              <p className="mt-1 text-sm text-zinc-700 leading-relaxed">
                Pay conveniently with Cash, Cheque, DD, Visa, Mastercard, RuPay, or Amex.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-paper p-6">
              <div className="grid size-12 place-items-center rounded-xl bg-ink text-signal">
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-ink">6 Days Open</h3>
              <p className="mt-1 text-sm text-zinc-700 leading-relaxed">
                Open Monday to Saturday 10:30 am to 7:00 pm. Responsive replies within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How Ordering Works (3 Clear Steps) */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Simple Process</span>
          <h2 className="font-display mt-1 text-[length:var(--text-h2)] font-extrabold text-ink">
            How Ordering Works
          </h2>
          <p className="mt-2 text-base text-zinc-700">
            Get prompt quotes and scheduled delivery in three simple steps.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="relative rounded-2xl border border-ink/10 bg-white p-6 shadow-xs">
            <span className="font-display text-4xl font-extrabold text-zinc-300">01</span>
            <h3 className="font-display mt-2 text-xl font-bold text-ink">Choose Products</h3>
            <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
              Browse our verified catalogue of colour coated sheets, GI corrugated, PUF panels, or polycarbonate rolls.
            </p>
          </div>

          <div className="relative rounded-2xl border border-ink/10 bg-white p-6 shadow-xs">
            <span className="font-display text-4xl font-extrabold text-zinc-300">02</span>
            <h3 className="font-display mt-2 text-xl font-bold text-ink">Send WhatsApp Enquiry</h3>
            <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
              Tap the WhatsApp button or add items to your enquiry list. Your prefilled list sends directly to our sales desk.
            </p>
          </div>

          <div className="relative rounded-2xl border border-ink/10 bg-white p-6 shadow-xs">
            <span className="font-display text-4xl font-extrabold text-zinc-300">03</span>
            <h3 className="font-display mt-2 text-xl font-bold text-ink">Confirmation & Delivery</h3>
            <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
              We confirm available gauge thicknesses, lengths, batch quantities, and arrange dispatch to your site.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Visit Us & Store Information */}
      <section className="container-page py-8">
        <div className="rounded-3xl border border-ink/10 bg-zinc-900 text-paper p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-signal">Direct Store Visit</span>
              <h2 className="font-display mt-2 text-3xl md:text-4xl font-bold text-paper">
                Visit Our Nayandahalli Warehouse
              </h2>
              <address className="mt-4 not-italic text-zinc-300 leading-relaxed text-base">
                {fullAddress()}
                <br />
                <strong className="text-paper">{siteConfig.address.landmark}</strong>
              </address>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-signal" />
                  <span>{HOURS_SHORT}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  variant="signal"
                  href={directionsUrl()}
                  className="font-bold"
                >
                  <MapPin size={18} />
                  Get Directions
                </ButtonLink>
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-6 text-[15px] font-semibold text-paper hover:bg-zinc-700 transition duration-200"
                >
                  Open in Google Maps &rarr;
                </a>
                <ButtonLink
                  variant="outline-light"
                  href={telUrl(siteConfig.phones.primary.tel)}
                  className="font-semibold"
                >
                  <Phone size={18} />
                  Call {siteConfig.phones.primary.display}
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-zinc-700 bg-ink p-6">
                <h3 className="font-display text-lg font-bold text-paper">Phone Contacts</h3>
                <ul className="tabular mt-4 space-y-3 text-sm text-zinc-300">
                  <li className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span>Primary Mobile / WhatsApp:</span>
                    <a className="font-bold text-paper hover:text-signal" href={telUrl(siteConfig.phones.primary.tel)}>
                      {siteConfig.phones.primary.display}
                    </a>
                  </li>
                  <li className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span>Office Mobile:</span>
                    <a className="font-bold text-paper hover:text-signal" href={telUrl(siteConfig.phones.office.tel)}>
                      {siteConfig.phones.office.display}
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Staff Landline:</span>
                    <a className="font-bold text-paper hover:text-signal" href={telUrl(siteConfig.phones.landline.tel)}>
                      {siteConfig.phones.landline.display}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive 360 Street View / Map Embed */}
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-signal">
                Storefront 360° View &amp; Navigation
              </span>
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-zinc-300 hover:text-signal transition"
              >
                View full screen on Google Maps &rarr;
              </a>
            </div>
            <div className="aspect-[21/9] min-h-[280px] w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800">
              <iframe
                src={siteConfig.location.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="SS Agencies Location and 360 Street View"
                className="size-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
