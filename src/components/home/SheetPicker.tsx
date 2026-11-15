"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, RotateCcw, MessageCircle } from "lucide-react";
import { PICKER_QUESTIONS, calculateRecommendation } from "@/data/picker";
import { getProductBySlug } from "@/data/products";
import { productEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/track";

export function SheetPicker() {
  const [answers, setAnswers] = useState<{
    structure?: string;
    lightInsulation?: string;
    tier?: string;
  }>({
    structure: "industrial",
    lightInsulation: "strength",
    tier: "premium",
  });

  const recommendation = calculateRecommendation(answers);
  const recommendedProducts = recommendation.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const handleSelect = (questionId: "structure" | "lightInsulation" | "tier", optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    track("picker_select", { question: questionId, option: optionId });
  };

  const handleReset = () => {
    setAnswers({
      structure: "industrial",
      lightInsulation: "strength",
      tier: "premium",
    });
  };

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm md:p-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-ink/10 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Interactive Guide</span>
          <h2 className="font-display mt-1 text-2xl md:text-3xl font-bold text-ink">
            Find the Right Roofing Sheet
          </h2>
          <p className="mt-1 text-sm text-zinc-700">
            Select your project specifications below for an instant recommendation.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3.5 py-1.5 text-xs font-semibold text-zinc-700 self-start md:self-auto">
          <span>A starting point, our team will confirm the right spec</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Questions selection */}
        <div className="space-y-6 lg:col-span-7">
          {PICKER_QUESTIONS.map((q) => (
            <div key={q.id}>
              <h3 className="font-display text-base font-bold text-ink">{q.title}</h3>
              <p className="text-xs text-zinc-500 mb-2.5">{q.subtitle}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={`flex flex-col text-left rounded-xl p-3.5 border transition-all ${
                        isSelected
                          ? "border-signal bg-signal/10 ring-1 ring-signal"
                          : "border-ink/10 bg-paper/50 hover:border-ink/30 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold ${isSelected ? "text-ink" : "text-zinc-700"}`}>
                          {opt.label}
                        </span>
                        {isSelected && <Check size={16} className="text-signal-ink shrink-0 ml-1" aria-hidden="true" />}
                      </div>
                      <span className="mt-1 text-xs text-zinc-500 line-clamp-1">{opt.hint}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic recommendation card */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 rounded-2xl border-2 border-ink/10 bg-paper p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Recommended Spec</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-ink"
                  title="Reset questions"
                >
                  <RotateCcw size={12} />
                  Reset
                </button>
              </div>

              <h4 className="font-display mt-4 text-xl font-bold text-ink">
                {recommendation.title}
              </h4>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                {recommendation.reason}
              </p>

              <div className="mt-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Matching Products In Stock:</p>
                {recommendedProducts.map((p) => (
                  <div
                    key={p.slug}
                    className="flex items-center justify-between gap-3 rounded-xl border border-ink/10 bg-white p-3 shadow-xs"
                  >
                    <div>
                      <Link href={`/products/${p.slug}`} className="font-display text-sm font-bold text-ink hover:text-signal line-clamp-1">
                        {p.name}
                      </Link>
                      <span className="text-xs text-zinc-500">{p.summary}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Link
                        href={`/products/${p.slug}`}
                        className="grid size-8 place-items-center rounded-full bg-zinc-100 text-ink hover:bg-ink hover:text-paper"
                        aria-label={`View ${p.name}`}
                      >
                        <ArrowRight size={14} />
                      </Link>
                      <a
                        href={whatsappUrl(productEnquiryMessage(p.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid size-8 place-items-center rounded-full bg-whatsapp text-ink hover:brightness-105"
                        aria-label={`WhatsApp price for ${p.name}`}
                      >
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-ink/10">
              <Link
                href="/products"
                className="w-full inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-xs font-semibold text-paper hover:bg-zinc-900 transition"
              >
                <span>Browse full catalogue</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
