"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Trash2, ArrowLeft, Plus } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useEnquiry } from "@/lib/enquiry-store";
import { buildEnquiryMessage, telUrl, whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/track";

export default function EnquiryPage() {
  const { items, removeItem, updateItem, clear } = useEnquiry();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [siteArea, setSiteArea] = useState("");
  const [notes, setNotes] = useState("");

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildEnquiryMessage({
      name,
      phone,
      location,
      siteArea,
      notes,
      items,
    });
    track("enquiry_send_whatsapp", { itemCount: items.length });
    const url = whatsappUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container-page py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-ink transition"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Continue browsing products
        </Link>
      </nav>

      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Direct Quotation Request</span>
        <h1 className="font-display mt-1 text-[length:var(--text-h1)] font-extrabold text-ink">
          Review Your Enquiry List
        </h1>
        <p className="mt-3 text-base text-zinc-700 leading-relaxed">
          Verify your requested materials, specify quantities or custom lengths, and send directly to {siteConfig.brand.name} via WhatsApp. We confirm exact batch availability and dispatch scheduling within 24 hours.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-dashed border-ink/20 bg-white p-12 text-center max-w-2xl mx-auto shadow-xs">
          <div className="grid size-16 place-items-center rounded-2xl bg-zinc-100 text-zinc-500 mx-auto">
            <Plus size={32} />
          </div>
          <h2 className="font-display mt-6 text-2xl font-bold text-ink">Your enquiry list is currently empty</h2>
          <p className="mt-2 text-sm text-zinc-700 max-w-md mx-auto">
            Browse our catalogue of colour coated sheets, GI corrugated sheets, PUF panels, and polycarbonate rolls to add materials for a quick price quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-8 text-sm font-semibold text-paper hover:bg-zinc-900 transition"
            >
              Browse Products Catalogue
            </Link>
            <a
              href={whatsappUrl("Hello, I need assistance choosing the right roofing materials.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-semibold text-ink hover:brightness-105 transition"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Items list */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <h2 className="font-display text-xl font-bold text-ink">
                Selected Materials ({items.length})
              </h2>
              <button
                type="button"
                onClick={clear}
                className="text-xs font-semibold text-zinc-500 hover:text-signal-ink transition"
              >
                Clear all items
              </button>
            </div>

            <ul className="mt-4 space-y-4">
              {items.map((it) => (
                <li
                  key={it.slug}
                  className="rounded-2xl border border-ink/10 bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <Link
                      href={`/products/${it.slug}`}
                      className="font-display text-lg font-bold text-ink hover:text-signal transition-colors"
                    >
                      {it.name}
                    </Link>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2">
                        <label htmlFor={`qty-${it.slug}`} className="text-xs font-semibold text-zinc-600">
                          Qty / Length:
                        </label>
                        <input
                          id={`qty-${it.slug}`}
                          type="text"
                          value={it.quantity}
                          onChange={(e) => updateItem(it.slug, { quantity: e.target.value })}
                          placeholder="e.g. 500 sq ft or 25 pcs"
                          className="w-40 rounded-lg border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink focus:border-signal focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <label htmlFor={`note-${it.slug}`} className="text-xs font-semibold text-zinc-600">
                          Spec note:
                        </label>
                        <input
                          id={`note-${it.slug}`}
                          type="text"
                          value={it.note || ""}
                          onChange={(e) => updateItem(it.slug, { note: e.target.value })}
                          placeholder="e.g. Blue colour, 0.50 mm"
                          className="w-44 rounded-lg border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink focus:border-signal focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(it.slug)}
                    aria-label={`Remove ${it.name} from enquiry`}
                    className="self-end sm:self-center grid size-10 place-items-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-ink transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-ink underline underline-offset-4"
              >
                <Plus size={16} />
                Add more materials to this enquiry
              </Link>
            </div>
          </div>

          {/* Contact Details & WhatsApp sender */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-xl font-bold text-ink">
                Project & Delivery Details
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Optional details to help us provide an accurate quotation and freight estimate.
              </p>

              <form onSubmit={handleSendWhatsApp} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="cust-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Your Name / Contractor Name
                  </label>
                  <input
                    id="cust-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="mt-1 w-full min-h-11 rounded-xl border border-ink/15 px-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="cust-phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Phone Number
                  </label>
                  <input
                    id="cust-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98860 XXXXX"
                    className="mt-1 w-full min-h-11 rounded-xl border border-ink/15 px-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="cust-location" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Delivery Location
                    </label>
                    <input
                      id="cust-location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Kengeri, Bengaluru"
                      className="mt-1 w-full min-h-11 rounded-xl border border-ink/15 px-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="cust-area" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Approx. Roof Area
                    </label>
                    <input
                      id="cust-area"
                      type="text"
                      value={siteArea}
                      onChange={(e) => setSiteArea(e.target.value)}
                      placeholder="e.g. 2,400 sq ft"
                      className="mt-1 w-full min-h-11 rounded-xl border border-ink/15 px-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cust-notes" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Special Requirements / Purlin Details
                  </label>
                  <textarea
                    id="cust-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Need self-drilling screws and ridge caps included..."
                    className="mt-1 w-full rounded-xl border border-ink/15 p-3 text-sm font-medium text-ink focus:border-signal focus:outline-none"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-bold text-ink hover:brightness-105 shadow-md shadow-whatsapp/20 transition"
                  >
                    <MessageCircle size={20} />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>

                  <a
                    href={telUrl(siteConfig.phones.primary.tel)}
                    onClick={() => track("enquiry_call_fallback", { itemCount: items.length })}
                    className="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-ink px-6 text-sm font-bold text-ink hover:bg-ink hover:text-paper transition"
                  >
                    <Phone size={18} />
                    <span>Call Sales Desk Instead ({siteConfig.phones.primary.display})</span>
                  </a>
                </div>

                <p className="text-[11px] text-zinc-500 text-center leading-relaxed">
                  No payment required online. We provide confirmed pricing and truck dispatch coordination directly via phone or WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
