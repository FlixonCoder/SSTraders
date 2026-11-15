"use client";

import React, { useState } from "react";
import { MessageCircle, Plus, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useEnquiry } from "@/lib/enquiry-store";
import { productEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/track";

export function DetailActions({ product }: { product: Product }) {
  const { addItem, isInEnquiry } = useEnquiry();
  const added = isInEnquiry(product.slug);
  const [quantity, setQuantity] = useState("1");

  const handleAdd = () => {
    if (!added) {
      addItem({
        slug: product.slug,
        name: product.name,
        quantity: quantity || "1",
      });
      track("enquiry_add_detail", { product: product.slug, quantity });
    }
  };

  return (
    <div className="mt-8 rounded-2xl border border-ink/15 bg-white p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Pricing & Availability</span>
          <p className="font-display text-2xl font-bold text-ink">Price on Enquiry</p>
          <p className="text-xs text-zinc-500 mt-0.5">Rates vary by gauge, length, and batch order size.</p>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="detail-qty" className="text-xs font-semibold text-zinc-700">
            Qty:
          </label>
          <input
            id="detail-qty"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            disabled={added}
            placeholder="e.g. 20 pcs"
            className="w-24 rounded-lg border border-ink/20 px-3 py-1.5 text-sm font-medium text-ink focus:border-signal focus:outline-none disabled:bg-zinc-100"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className={`flex-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${
            added
              ? "bg-zinc-100 text-ink cursor-default"
              : "border-2 border-ink text-ink hover:bg-ink hover:text-paper"
          }`}
        >
          {added ? (
            <>
              <Check size={18} className="text-whatsapp" aria-hidden="true" />
              Added to enquiry list
            </>
          ) : (
            <>
              <Plus size={18} aria-hidden="true" />
              Add to enquiry list
            </>
          )}
        </button>

        <a
          href={whatsappUrl(productEnquiryMessage(product.name))}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_whatsapp_detail", { product: product.slug })}
          className="flex-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-semibold text-ink transition hover:brightness-105"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Get price on WhatsApp
        </a>
      </div>
    </div>
  );
}
