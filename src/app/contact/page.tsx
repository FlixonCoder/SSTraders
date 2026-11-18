import React from "react";
import type { Metadata } from "next";
import { MessageCircle, Phone, MapPin, Clock, CreditCard } from "lucide-react";
import { siteConfig } from "@/config/site";
import { hoursRows } from "@/lib/hours";
import { directionsUrl, telUrl, whatsappUrl, GENERIC_ENQUIRY } from "@/lib/whatsapp";
import { OpenStatus } from "@/components/layout/OpenStatus";
import { getLocalBusinessJsonLd } from "@/lib/seo";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: `Contact & Visit | ${siteConfig.brand.name} Nayandahalli, Bengaluru`,
  description: `Visit ${siteConfig.brand.name} on Mysore Main Road, Nayandahalli, Bengaluru. Call ${siteConfig.phones.primary.display} or send an enquiry directly via WhatsApp for roofing sheets, PUF panels, and building materials.`,
};

export default function ContactPage() {
  const { phones, paymentModes, address } = siteConfig;
  const hours = hoursRows();
  const localBusinessJson = getLocalBusinessJsonLd();

  return (
    <div className="container-page py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
      />
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Visit & Contact</span>
        <h1 className="font-display mt-1 text-[length:var(--text-h1)] font-extrabold text-ink">
          Get in Touch with Our Sales Desk
        </h1>
        <p className="mt-3 text-base text-zinc-700 leading-relaxed">
          Reach our Nayandahalli store for material quotes, gauge verifications, stock availability, and South India truck deliveries.
        </p>
      </div>

      {/* 3 Big Action Cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* 1. WhatsApp Card */}
        <a
          href={whatsappUrl(GENERIC_ENQUIRY)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-whatsapp hover:shadow-md"
        >
          <div>
            <div className="grid size-12 place-items-center rounded-2xl bg-whatsapp text-ink">
              <MessageCircle size={24} />
            </div>
            <h2 className="font-display mt-5 text-xl font-bold text-ink group-hover:text-whatsapp transition-colors">
              Chat on WhatsApp
            </h2>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Fastest way to get price quotes, product photos, and verify current stock.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between font-bold text-sm text-ink">
            <span>{phones.primary.display}</span>
            <span className="text-whatsapp group-hover:translate-x-1 transition-transform">&rarr;</span>
          </div>
        </a>

        {/* 2. Call Card */}
        <a
          href={telUrl(phones.primary.tel)}
          className="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-ink/40 hover:shadow-md"
        >
          <div>
            <div className="grid size-12 place-items-center rounded-2xl bg-ink text-paper">
              <Phone size={24} />
            </div>
            <h2 className="font-display mt-5 text-xl font-bold text-ink group-hover:text-signal transition-colors">
              Call Direct
            </h2>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Speak directly with our counter staff regarding bulk sheets, lengths, and dispatch.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between font-bold text-sm text-ink">
            <span>{phones.primary.display}</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </div>
        </a>

        {/* 3. Directions Card */}
        <a
          href={directionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-signal hover:shadow-md"
        >
          <div>
            <div className="grid size-12 place-items-center rounded-2xl bg-signal text-ink">
              <MapPin size={24} />
            </div>
            <h2 className="font-display mt-5 text-xl font-bold text-ink group-hover:text-signal-ink transition-colors">
              Get Directions
            </h2>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Navigate straight to our yard on Mysore Main Road near Nayandahalli Metro Pillar 463.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between font-bold text-sm text-ink">
            <span>Open in Google Maps</span>
            <span className="text-signal-ink group-hover:translate-x-1 transition-transform">&rarr;</span>
          </div>
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Hours, Address, Payment */}
        <div className="space-y-8 lg:col-span-5">
          {/* Operating Hours Block */}
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-signal" />
                <h3 className="font-display text-lg font-bold text-ink">Store Hours</h3>
              </div>
              <OpenStatus />
            </div>

            <dl className="tabular mt-4 divide-y divide-ink/5 text-sm">
              {hours.map((r) => (
                <div key={r.day} className="flex justify-between py-2 text-zinc-700">
                  <dt className="font-medium">{r.day}</dt>
                  <dd className={`font-semibold ${r.value === "Closed" ? "text-zinc-400" : "text-ink"}`}>
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Physical Address Block */}
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 border-b border-ink/10 pb-4">
              <MapPin size={18} className="text-signal" />
              <h3 className="font-display text-lg font-bold text-ink">Warehouse Location</h3>
            </div>
            <address className="mt-4 not-italic text-sm text-zinc-700 leading-relaxed">
              <strong className="text-base text-ink font-bold">{siteConfig.brand.name}</strong>
              <br />
              {address.line1}
              <br />
              {address.locality}, {address.city} {address.postalCode}
              <br />
              <span className="inline-block mt-2 font-medium text-ink bg-zinc-100 rounded-md px-2.5 py-1">
                Landmark: {address.landmark}
              </span>
            </address>

            <div className="mt-6 pt-4 border-t border-ink/10 flex flex-col sm:flex-row gap-2">
              <a
                href={directionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-xs font-semibold text-paper hover:bg-zinc-900 transition"
              >
                <MapPin size={14} />
                Get Directions
              </a>
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-4 text-xs font-semibold text-ink hover:bg-zinc-50 transition"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Landline & Payment Modes */}
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-xs">
            <h3 className="font-display text-lg font-bold text-ink">Landline Contact</h3>
            <ul className="tabular mt-4 space-y-2 text-sm text-zinc-700">
              <li className="flex justify-between">
                <span>Staff Landline:</span>
                <a className="font-semibold text-ink hover:text-signal" href={telUrl(phones.landline.tel)}>
                  {phones.landline.display}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-ink/10">
              <div className="flex items-center gap-2">
                <CreditCard size={16} className="text-zinc-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Accepted Payment Modes</span>
              </div>
              <p className="mt-2 text-xs font-medium text-zinc-700">
                {paymentModes.join(" • ")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Send Fast Message</span>
            <h2 className="font-display mt-1 text-2xl font-bold text-ink">
              Direct Enquiry Form
            </h2>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Fill in your requirement below. Tapping submit will open a cleanly formatted WhatsApp message directly with our sales team.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>

      {/* Interactive 360° Street View & Google Map Section */}
      <div className="mt-14 rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-ink/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Interactive Street View &amp; Map</span>
            <h2 className="font-display mt-1 text-2xl font-bold text-ink">
              Locate SS Agencies in Nayandahalli
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              No. 15, Mysore Main Road, Nayandahalli, Bengaluru 560039 &bull; Near Nayandahalli Metro Pillar 463
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={directionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-signal px-5 text-xs font-bold text-ink hover:brightness-105 transition shadow-xs"
            >
              <MapPin size={15} />
              Get Directions
            </a>
            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-5 text-xs font-semibold text-ink hover:bg-zinc-50 transition"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </div>

        <div className="mt-6 aspect-[16/9] md:aspect-[21/9] min-h-[350px] w-full overflow-hidden rounded-2xl border border-ink/10 bg-zinc-100 shadow-inner">
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
  );
}
