"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/track";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [productInterest, setProductInterest] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const items = productInterest.trim()
      ? [{ slug: "custom", name: productInterest.trim(), quantity: "As requested in message" }]
      : [];

    const msg = buildEnquiryMessage({
      name,
      phone,
      location,
      notes: message,
      items,
    });

    track("contact_form_submit");
    const url = whatsappUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
          Your Name / Company *
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Anand Gowda"
          className="mt-1 w-full min-h-11 rounded-xl border border-ink/15 px-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
          Mobile Number *
        </label>
        <input
          id="contact-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 98860 XXXXX"
          className="mt-1 w-full min-h-11 rounded-xl border border-ink/15 px-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-product" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
          Material of Interest
        </label>
        <input
          id="contact-product"
          type="text"
          value={productInterest}
          onChange={(e) => setProductInterest(e.target.value)}
          placeholder="e.g. Colour Coated GI Sheets or PUF Panels"
          className="mt-1 w-full min-h-11 rounded-xl border border-ink/15 px-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-location" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
          Site / Delivery Area
        </label>
        <input
          id="contact-location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Nayandahalli / Mysore Road / Peenya"
          className="mt-1 w-full min-h-11 rounded-xl border border-ink/15 px-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
          Requirements / Custom Sizes / Quantities
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please specify thickness, profile preference, length, or delivery timeframe..."
          className="mt-1 w-full rounded-xl border border-ink/15 p-3.5 text-sm font-medium text-ink focus:border-signal focus:outline-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-bold text-ink hover:brightness-105 shadow-md shadow-whatsapp/20 transition"
        >
          <MessageCircle size={20} />
          <span>Send Message on WhatsApp</span>
        </button>
      </div>

      <p className="text-[11px] text-zinc-500 text-center leading-relaxed">
        Opens WhatsApp with your prefilled requirements directly with our Nayandahalli store desk.
      </p>
    </form>
  );
}
