"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Plus, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductImage } from "@/components/product/ProductImage";
import { productEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { useEnquiry } from "@/lib/enquiry-store";
import { track } from "@/lib/track";

export function ProductCard({ product }: { product: Product }) {
  const { addItem, isInEnquiry } = useEnquiry();
  const added = isInEnquiry(product.slug);

  const handleAddEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!added) {
      addItem({ slug: product.slug, name: product.name, quantity: "1" });
      track("enquiry_add", { product: product.slug });
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-ink/25 hover:shadow-md">
      <div>
        <Link href={`/products/${product.slug}`} className="block focus:outline-none">
          <ProductImage product={product} className="aspect-[4/3] w-full" />
          <h3 className="font-display mt-4 text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-signal">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm text-zinc-700 line-clamp-2 leading-relaxed">
          {product.summary}
        </p>

        {product.specs && product.specs.length > 0 && (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {product.specs.slice(0, 2).map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700"
              >
                <strong className="font-semibold text-ink mr-1">{s.label}:</strong> {s.value}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 pt-4 border-t border-ink/5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={`/products/${product.slug}`}
          className="text-xs font-semibold text-zinc-700 underline underline-offset-4 hover:text-ink"
        >
          View details &rarr;
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAddEnquiry}
            aria-label={added ? `${product.name} added to enquiry list` : `Add ${product.name} to enquiry list`}
            className={`inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full px-3.5 text-xs font-semibold transition ${
              added
                ? "bg-zinc-100 text-ink cursor-default"
                : "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper"
            }`}
          >
            {added ? (
              <>
                <Check size={14} className="text-whatsapp" aria-hidden="true" />
                Added
              </>
            ) : (
              <>
                <Plus size={14} aria-hidden="true" />
                Enquire
              </>
            )}
          </button>

          <a
            href={whatsappUrl(productEnquiryMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_whatsapp_product", { product: product.slug })}
            aria-label={`Ask price for ${product.name} on WhatsApp`}
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-whatsapp px-3.5 text-xs font-semibold text-ink transition hover:brightness-105"
          >
            <MessageCircle size={14} aria-hidden="true" />
            Price
          </a>
        </div>
      </div>
    </div>
  );
}
