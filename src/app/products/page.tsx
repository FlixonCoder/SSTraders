"use client";

import React, { Suspense, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CategoryEnum, getVisibleProducts, type Category } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterRail } from "@/components/product/FilterRail";
import { SearchBox } from "@/components/product/SearchBox";

function ProductCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const allProducts = useMemo(() => getVisibleProducts(), []);

  // Derive initial values from URL search params
  const rawCat = searchParams.get("category");
  const validCategories = CategoryEnum.options as readonly string[];
  const category: Category | "all" =
    rawCat && validCategories.includes(rawCat)
      ? (rawCat as Category)
      : "all";

  const tag: string | null = searchParams.get("tag");

  const [query, setQuery] = useState(() => searchParams.get("q") || "");

  // Update URL on filter changes
  const updateUrl = (newCat: Category | "all", newTag: string | null, newQ: string) => {
    const params = new URLSearchParams();
    if (newCat !== "all") params.set("category", newCat);
    if (newTag) params.set("tag", newTag);
    if (newQ.trim()) params.set("q", newQ.trim());

    const qs = params.toString();
    router.replace(`/products${qs ? `?${qs}` : ""}`, { scroll: false });
  };

  const handleCategoryChange = (c: Category | "all") => {
    updateUrl(c, tag, query);
  };

  const handleTagChange = (t: string | null) => {
    updateUrl(category, t, query);
  };

  const handleQueryChange = (q: string) => {
    setQuery(q);
    updateUrl(category, tag, q);
  };

  // Instant client-side search and filtering
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      // Category filter
      if (category !== "all" && p.category !== category) return false;

      // Tag filter
      if (tag && !p.tags.includes(tag)) return false;

      // Search query (name, category, shortDescription, description, formAndFinish, typicalUses, keywords)
      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCatalogCat = p.catalogCategory.toLowerCase().includes(q);
        const matchesSummary = p.shortDescription.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesTags = p.tags.some((t) => t.toLowerCase().includes(q));
        const matchesKeywords = p.seo.keywords.some((k) => k.toLowerCase().includes(q));
        const matchesForm = p.formAndFinish.some((f) => f.toLowerCase().includes(q));
        const matchesUses = p.typicalUses.some((u) => u.toLowerCase().includes(q));

        if (
          !matchesName &&
          !matchesCatalogCat &&
          !matchesSummary &&
          !matchesDesc &&
          !matchesTags &&
          !matchesKeywords &&
          !matchesForm &&
          !matchesUses
        ) {
          return false;
        }
      }

      return true;
    });
  }, [allProducts, category, tag, query]);

  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Materials Catalogue</span>
        <h1 className="font-display mt-1 text-[length:var(--text-h1)] font-extrabold text-ink">
          Roofing & Building Materials
        </h1>
        <p className="mt-3 text-base text-zinc-700 leading-relaxed">
          Browse our catalogue of 25 roofing sheets, polycarbonate and FRP daylighting panels, insulated PUF panels, UPVC tiles and gutters, ventilators, structural steel, pipes, and fasteners.
        </p>
      </div>

      <div className="mt-8">
        <SearchBox value={query} onChange={handleQueryChange} />
      </div>

      <div className="mt-10 flex flex-col lg:flex-row lg:items-start lg:gap-8">
        <FilterRail
          selectedCategory={category}
          onSelectCategory={handleCategoryChange}
          selectedTag={tag}
          onSelectTag={handleTagChange}
          totalCount={filteredProducts.length}
        />

        <div className="flex-1">
          <div className="hidden lg:flex items-center justify-between pb-4 mb-4 border-b border-ink/10">
            <span className="text-sm font-semibold text-zinc-700">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </span>
            {(category !== "all" || tag !== null || query) && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  router.replace("/products", { scroll: false });
                }}
                className="text-xs font-semibold text-signal-ink underline underline-offset-4 hover:opacity-80"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-ink/20 p-12 text-center">
              <p className="font-display text-xl font-bold text-ink">No matching products found</p>
              <p className="mt-2 text-sm text-zinc-700">
                Try clearing your search query or adjusting your filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  router.replace("/products", { scroll: false });
                }}
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper"
              >
                View all products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="container-page py-16 text-center text-zinc-500">
          Loading products catalogue...
        </div>
      }
    >
      <ProductCatalog />
    </Suspense>
  );
}
