"use client";

import React, { useState } from "react";
import { SlidersHorizontal, X, Check } from "lucide-react";
import { type Category, CATEGORY_LABELS } from "@/data/products";

export const USE_CASE_TAGS = [
  { id: "roofing", label: "Roofing" },
  { id: "insulation", label: "Insulation" },
  { id: "waterproofing", label: "Waterproofing" },
  { id: "daylighting", label: "Daylighting" },
  { id: "plumbing", label: "Plumbing" },
  { id: "doors", label: "Doors" },
  { id: "fasteners", label: "Fasteners" },
];

interface FilterRailProps {
  selectedCategory: Category | "all";
  onSelectCategory: (cat: Category | "all") => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  totalCount: number;
}

export function FilterRail({
  selectedCategory,
  onSelectCategory,
  selectedTag,
  onSelectTag,
  totalCount,
}: FilterRailProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const filterContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Categories</h3>
        <ul className="mt-3 space-y-1">
          <li>
            <button
              type="button"
              onClick={() => {
                onSelectCategory("all");
                setMobileOpen(false);
              }}
              className={`flex w-full min-h-10 items-center justify-between rounded-lg px-3 text-left text-sm font-semibold transition ${
                selectedCategory === "all"
                  ? "bg-ink text-paper"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-ink"
              }`}
            >
              <span>All Products</span>
              {selectedCategory === "all" && <Check size={16} aria-hidden="true" />}
            </button>
          </li>
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => {
                  onSelectCategory(cat);
                  setMobileOpen(false);
                }}
                className={`flex w-full min-h-10 items-center justify-between rounded-lg px-3 text-left text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-ink text-paper"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-ink"
                }`}
              >
                <span>{CATEGORY_LABELS[cat]}</span>
                {selectedCategory === cat && <Check size={16} aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-ink/10 pt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Use-Case Tags</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {USE_CASE_TAGS.map((t) => {
            const isSelected = selectedTag === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  onSelectTag(isSelected ? null : t.id);
                  setMobileOpen(false);
                }}
                className={`inline-flex min-h-9 items-center rounded-full px-3 text-xs font-semibold transition ${
                  isSelected
                    ? "bg-signal text-ink font-bold"
                    : "border border-ink/15 bg-white text-zinc-700 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {(selectedCategory !== "all" || selectedTag !== null) && (
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              onSelectCategory("all");
              onSelectTag(null);
              setMobileOpen(false);
            }}
            className="text-xs font-semibold text-signal-ink underline underline-offset-4 hover:opacity-80"
          >
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
          {filterContent}
        </div>
      </aside>

      {/* Mobile filter toggle bar */}
      <div className="flex items-center justify-between lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-ink/15 bg-white px-4 text-sm font-semibold text-ink shadow-sm"
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
          <span>Filters</span>
          {(selectedCategory !== "all" || selectedTag !== null) && (
            <span className="flex size-2 rounded-full bg-signal" />
          )}
        </button>
        <span className="text-xs font-medium text-zinc-500">
          Showing {totalCount} {totalCount === 1 ? "product" : "products"}
        </span>
      </div>

      {/* Mobile bottom sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-ink/50 backdrop-blur-xs lg:hidden">
          <div
            className="max-h-[85vh] overflow-y-auto rounded-t-3xl bg-paper p-6 shadow-2xl animate-in slide-in-from-bottom duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Filter products"
          >
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <h2 className="font-display text-xl font-bold">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid size-10 place-items-center rounded-full text-zinc-700 hover:bg-zinc-100"
                aria-label="Close filters"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-5">{filterContent}</div>
            <div className="mt-6 border-t border-ink/10 pt-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-full min-h-12 rounded-full bg-ink text-center text-sm font-semibold text-paper"
              >
                Show {totalCount} results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
