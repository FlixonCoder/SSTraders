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
  if (product.image) {
    const [widthStr, heightStr] = (product.imageDimensions || "1254x1254").split("x");
    const width = Number(widthStr) || 1254;
    const height = Number(heightStr) || 1254;

    return (
      <div className={`relative overflow-hidden rounded-xl border border-ink/10 bg-white ${className}`}>
        <Image
          src={product.image}
          alt={product.imageAlt || product.name}
          width={width}
          height={height}
          priority={priority}
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

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
