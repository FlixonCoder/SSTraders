import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getVisibleProducts, getProductBySlug, getRelatedProducts } from "@/data/products";
import { siteConfig } from "@/config/site";
import { ProductImage } from "@/components/product/ProductImage";
import { ProductCard } from "@/components/product/ProductCard";
import { DetailActions } from "./DetailActions";

export const dynamicParams = false;

export async function generateStaticParams() {
  const visible = getVisibleProducts();
  return visible.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} | ${siteConfig.brand.name} Nayandahalli`,
    description: product.summary,
    openGraph: {
      title: `${product.name} | ${siteConfig.brand.name}`,
      description: product.summary,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 3);

  // Schema.org Product JSON-LD without price
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: siteConfig.brand.name,
        telephone: siteConfig.phones.primary.display,
      },
    },
  };

  return (
    <div className="container-page py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-ink transition"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to all products
        </Link>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Gallery / Product Artwork tile */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <ProductImage product={product} className="aspect-[4/3] w-full" priority />
            <p className="mt-4 text-center text-xs text-zinc-500">
              Schematic profile / technical illustration
            </p>
          </div>
        </div>

        {/* Product Details & Actions */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">
            {product.category.replace("-", " & ")}
          </span>
          <h1 className="font-display mt-2 text-[length:var(--text-h1)] font-extrabold text-ink">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-zinc-700 leading-relaxed font-medium">
            {product.summary}
          </p>

          <p className="mt-3 text-base text-zinc-700 leading-relaxed">
            {product.description}
          </p>

          {/* Interactive Actions (Add to Enquiry + WhatsApp) */}
          <DetailActions product={product} />

          {/* Technical Specifications */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-10 border-t border-ink/10 pt-8">
              <h2 className="font-display text-xl font-bold text-ink">Verified Specifications</h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-xs">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {product.specs.map((s, idx) => (
                      <tr
                        key={s.label}
                        className={idx !== 0 ? "border-t border-ink/10" : ""}
                      >
                        <th
                          scope="row"
                          className="w-1/3 bg-zinc-100/60 px-4 py-3 font-semibold text-ink"
                        >
                          {s.label}
                        </th>
                        <td className="px-4 py-3 text-zinc-700 font-medium">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Available In Options */}
          {product.availableIn && product.availableIn.length > 0 && (
            <div className="mt-8 border-t border-ink/10 pt-8">
              <h2 className="font-display text-xl font-bold text-ink">Available In</h2>
              <ul className="mt-4 space-y-2">
                {product.availableIn.map((opt) => (
                  <li
                    key={opt.label}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 rounded-lg bg-zinc-100 px-4 py-3 text-sm"
                  >
                    <span className="font-semibold text-ink">{opt.label}:</span>
                    <span className="text-zinc-700 font-medium">{opt.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sourcing note */}
          <div className="mt-8 rounded-xl border border-dashed border-ink/15 bg-paper p-4 text-xs text-zinc-700">
            <strong>Stock note:</strong> Sourced directly by {siteConfig.brand.name} at our Nayandahalli warehouse. Contact our sales desk on WhatsApp or phone for immediate batch availability and dispatch scheduling across South India.
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-20 border-t border-ink/10 pt-16">
          <h2 className="font-display text-2xl font-bold text-ink">Related Materials</h2>
          <p className="mt-1 text-sm text-zinc-700">Explore complementary sheets and profiles.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rp) => (
              <ProductCard key={rp.slug} product={rp} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
