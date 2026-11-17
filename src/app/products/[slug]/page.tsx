import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";
import {
  getVisibleProducts,
  getProductBySlug,
  getRelatedProducts,
  toProductJsonLd,
} from "@/data/products";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.seo.title} | ${siteConfig.brand.name}`,
    description: product.seo.metaDescription,
    keywords: product.seo.keywords,
    openGraph: {
      title: `${product.seo.title} | ${siteConfig.brand.name}`,
      description: product.seo.metaDescription,
      images: product.image ? [{ url: product.image, alt: product.imageAlt }] : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 3);
  const jsonLd = toProductJsonLd(product);

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
        {/* Product Image & Alternate Gallery */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <ProductImage product={product} className="aspect-square w-full" priority />
              <p className="mt-4 text-center text-xs text-zinc-500">
                {product.imageAlt}
              </p>
            </div>

            {product.alternateImages && product.alternateImages.length > 0 && (
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                  Additional Product View
                </p>
                <div className="space-y-4">
                  {product.alternateImages.map((altImg) => {
                    const [wStr, hStr] = (altImg.dimensions || "1536x1024").split("x");
                    return (
                      <div key={altImg.file} className="overflow-hidden rounded-xl border border-ink/10 bg-white">
                        <Image
                          src={altImg.url}
                          alt={`${product.name} - ${altImg.role}`}
                          width={Number(wStr) || 1536}
                          height={Number(hStr) || 1024}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Details & Actions */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">
            {product.catalogCategory}
          </span>
          <h1 className="font-display mt-2 text-[length:var(--text-h1)] font-extrabold text-ink">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-zinc-700 leading-relaxed font-medium">
            {product.shortDescription}
          </p>

          <p className="mt-3 text-base text-zinc-700 leading-relaxed">
            {product.description}
          </p>

          {/* Interactive Actions (Add to Enquiry + WhatsApp) */}
          <DetailActions product={product} />

          {/* Material & Form / Finish */}
          <div className="mt-10 border-t border-ink/10 pt-8">
            <h2 className="font-display text-xl font-bold text-ink">
              Material &amp; Form Details
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-xs">
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr className="border-b border-ink/10">
                    <th scope="row" className="w-1/3 bg-zinc-100/60 px-4 py-3 font-semibold text-ink">
                      Category
                    </th>
                    <td className="px-4 py-3 text-zinc-700 font-medium">
                      {product.catalogCategory}
                    </td>
                  </tr>
                  <tr className="border-b border-ink/10">
                    <th scope="row" className="w-1/3 bg-zinc-100/60 px-4 py-3 font-semibold text-ink">
                      Material
                    </th>
                    <td className="px-4 py-3 text-zinc-700 font-medium">
                      {product.material.value}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-1/3 bg-zinc-100/60 px-4 py-3 font-semibold text-ink align-top">
                      Form &amp; Finish
                    </th>
                    <td className="px-4 py-3 text-zinc-700 font-medium">
                      <ul className="list-disc pl-4 space-y-1">
                        {product.formAndFinish.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Typical Uses & Best Applications */}
          <div className="mt-8 border-t border-ink/10 pt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-xs">
              <h2 className="font-display text-lg font-bold text-ink">Typical Uses</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {product.typicalUses.map((use) => (
                  <li key={use} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal-ink shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-xs">
              <h2 className="font-display text-lg font-bold text-ink">Best Applications</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 leading-relaxed">
                {product.bestApplications.map((app) => (
                  <li key={app}>{app}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Selection Checklist */}
          {product.selectionChecklist && product.selectionChecklist.length > 0 && (
            <div className="mt-8 border-t border-ink/10 pt-8">
              <h2 className="font-display text-xl font-bold text-ink">
                Specification &amp; Ordering Checklist
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Key parameters to confirm with our sales desk when requesting a quote:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {product.selectionChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-lg bg-zinc-100 px-3.5 py-2.5 text-sm font-medium text-zinc-800"
                  >
                    <span className="size-1.5 rounded-full bg-signal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Important Notes / Cautions */}
          {product.cautions && product.cautions.length > 0 && (
            <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-50/60 p-4 text-xs text-zinc-800 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-ink">
                <AlertTriangle size={15} className="text-amber-600 shrink-0" aria-hidden="true" />
                <span>Technical &amp; Specification Notes</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-zinc-700">
                {product.cautions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Sourcing note */}
          <div className="mt-6 rounded-xl border border-dashed border-ink/15 bg-paper p-4 text-xs text-zinc-700">
            <strong>Stock note:</strong> Contact {siteConfig.brand.name} at our Nayandahalli warehouse on WhatsApp or phone to confirm exact stock specifications, dimensions, and dispatch scheduling across South India.
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
