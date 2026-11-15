import React from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { ProductArt } from "@/components/product/ProductArt";

interface ProductImageProps {
  product: Product;
  className?: string;
  priority?: boolean;
}

export function ProductImage({ product, className = "", priority = false }: ProductImageProps) {
  // If a photo path is provided in product data
  if (product.image) {
    const baseName = product.image.replace(/^\/assets\/source\//, "").replace(/\.[^/.]+$/, "");
    const srcSetWebp = [
      `/assets/optimized/${baseName}-320.webp 320w`,
      `/assets/optimized/${baseName}-640.webp 640w`,
      `/assets/optimized/${baseName}-960.webp 960w`,
      `/assets/optimized/${baseName}-1200.webp 1200w`,
    ].join(", ");

    return (
      <div className={`relative overflow-hidden bg-zinc-100 ${className}`}>
        <picture>
          <source type="image/avif" srcSet={srcSetWebp.replace(/webp/g, "avif")} sizes="(max-width: 768px) 100vw, 50vw" />
          <source type="image/webp" srcSet={srcSetWebp} sizes="(max-width: 768px) 100vw, 50vw" />
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            priority={priority}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </picture>
      </div>
    );
  }

  // Visual SVG profile placeholder tile with modern industrial aesthetics
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-zinc-100 to-zinc-300/40 p-6 text-zinc-700 transition-colors duration-200 group-hover:text-ink ${className}`}
      aria-label={`${product.name} technical profile illustration`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #0e1a22 0, #0e1a22 2px, transparent 2px, transparent 16px)",
        }}
      />
      <div className="relative z-10 flex w-full max-w-[140px] flex-col items-center justify-center">
        <ProductArt art={product.profileArt} className="h-auto w-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
      </div>
    </div>
  );
}
