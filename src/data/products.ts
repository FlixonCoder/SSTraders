import { z } from "zod";
import catalogProducts, {
  assetInventory,
  catalogMetadata,
  toProductJsonLd,
} from "./products-catalog.js";

export { assetInventory, catalogMetadata, toProductJsonLd };

export const CategoryEnum = z.enum([
  "roofing-sheets",
  "insulation-daylight",
  "panels-upvc-boards",
  "vents-gutters-fasteners",
  "pipes-steel",
]);

export type Category = z.infer<typeof CategoryEnum>;

export const CATEGORY_LABELS: Record<Category, string> = {
  "roofing-sheets": "Metal & Cement Roofing",
  "insulation-daylight": "Polycarbonate, FRP & Acrylic",
  "panels-upvc-boards": "PUF Panels, UPVC & Boards",
  "vents-gutters-fasteners": "Vents, Gutters & Fasteners",
  "pipes-steel": "Pipes & Structural Steel",
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  "roofing-sheets":
    "Meta Color pre-painted sheets, galvanized corrugated (GC), plain (GP), crimped curved sheets, GI decking, and AC roofing panels.",
  "insulation-daylight":
    "Compact, profile, textured, and embossed polycarbonate sheets, translucent FRP roofing panels, and clear acrylic sheets.",
  "panels-upvc-boards":
    "Insulated PUF sandwich roof panels, terracotta-profile UPVC tile sheets, printed PVC rolls, and Ramco Hilux calcium silicate boards.",
  "vents-gutters-fasteners":
    "Aluminium turbine roof ventilators, roof vent bases, UPVC rainwater gutters, Metacolor accessories, and self-drilling SDS roofing screws.",
  "pipes-steel":
    "Mild steel (MS) round pipes, structural L-angles, and socket-ended AC drainage pipe sections.",
};

export const ProfileArtEnum = z.enum([
  "corrugated",
  "trapezoid",
  "flat",
  "translucent",
  "panel",
  "membrane",
  "pipe",
  "door",
  "fastener",
  "angle",
]);

export const ProductSpecSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const AlternateImageSchema = z.object({
  file: z.string(),
  dimensions: z.string(),
  role: z.string(),
  reviewBeforeUse: z.string().optional(),
  url: z.string(),
});

export const ProductSourceSchema = z.object({
  title: z.string(),
  url: z.string(),
  use: z.string(),
});

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: CategoryEnum,
  catalogCategory: z.string(),
  tags: z.array(z.string()),
  profileArt: ProfileArtEnum,
  summary: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  material: z.object({
    value: z.string(),
    confidence: z.string(),
    supplierConfirmationRequired: z.boolean(),
  }),
  formAndFinish: z.array(z.string()),
  typicalUses: z.array(z.string()),
  bestApplications: z.array(z.string()),
  selectionChecklist: z.array(z.string()),
  cautions: z.array(z.string()),
  publicationStatus: z.string(),
  seo: z.object({
    title: z.string(),
    metaDescription: z.string(),
    keywords: z.array(z.string()),
  }),
  imageAlt: z.string(),
  imageDimensions: z.string(),
  imageNotes: z.string(),
  imageReview: z.string(),
  imagePath: z.string(),
  image: z.string(),
  alternateImages: z.array(AlternateImageSchema).optional(),
  sources: z.array(ProductSourceSchema).optional(),
  specs: z.array(ProductSpecSchema).optional(),
  availableIn: z.array(ProductSpecSchema).optional(),
  featured: z.boolean().optional(),
  visible: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;

type RawCatalogProduct = (typeof catalogProducts)[number];

const PRODUCT_ENRICHMENT: Record<
  string,
  {
    category: Category;
    tags: string[];
    profileArt: z.infer<typeof ProfileArtEnum>;
    featured?: boolean;
  }
> = {
  "meta-color-sheets": {
    category: "roofing-sheets",
    tags: ["roofing", "structural"],
    profileArt: "trapezoid",
    featured: true,
  },
  "gc-sheets": {
    category: "roofing-sheets",
    tags: ["roofing", "structural"],
    profileArt: "corrugated",
    featured: true,
  },
  "gp-sheets": {
    category: "roofing-sheets",
    tags: ["roofing", "structural"],
    profileArt: "flat",
  },
  "crimping-sheets": {
    category: "roofing-sheets",
    tags: ["roofing", "structural"],
    profileArt: "corrugated",
  },
  "gi-decking-sheets": {
    category: "roofing-sheets",
    tags: ["roofing", "structural"],
    profileArt: "trapezoid",
  },
  "ac-sheets": {
    category: "roofing-sheets",
    tags: ["roofing"],
    profileArt: "corrugated",
  },
  "coloured-ac-sheets": {
    category: "roofing-sheets",
    tags: ["roofing"],
    profileArt: "corrugated",
  },
  "polycarbonate-profile-sheets": {
    category: "insulation-daylight",
    tags: ["roofing", "daylighting", "polycarbonate"],
    profileArt: "translucent",
  },
  "polycarbonate-compact-sheets": {
    category: "insulation-daylight",
    tags: ["daylighting", "polycarbonate"],
    profileArt: "flat",
  },
  "textured-polycarbonate-sheets": {
    category: "insulation-daylight",
    tags: ["daylighting", "polycarbonate"],
    profileArt: "translucent",
    featured: true,
  },
  "polycarbonate-embossed-colour-sheets": {
    category: "insulation-daylight",
    tags: ["daylighting", "polycarbonate"],
    profileArt: "translucent",
  },
  "frp-sheets": {
    category: "insulation-daylight",
    tags: ["roofing", "daylighting"],
    profileArt: "translucent",
    featured: true,
  },
  "acrylic-sheets": {
    category: "insulation-daylight",
    tags: ["daylighting"],
    profileArt: "flat",
  },
  "puf-sandwich-sheets": {
    category: "panels-upvc-boards",
    tags: ["roofing", "insulation"],
    profileArt: "panel",
    featured: true,
  },
  "upvc-tile-sheets": {
    category: "panels-upvc-boards",
    tags: ["roofing", "insulation"],
    profileArt: "corrugated",
    featured: true,
  },
  "pvc-printed-rolls": {
    category: "panels-upvc-boards",
    tags: ["roofing", "daylighting"],
    profileArt: "membrane",
  },
  "hilux-calcium-silicate-board": {
    category: "panels-upvc-boards",
    tags: ["insulation", "structural"],
    profileArt: "flat",
  },
  "aluminium-turbine-vents": {
    category: "vents-gutters-fasteners",
    tags: ["ventilation"],
    profileArt: "panel",
  },
  "vent-base": {
    category: "vents-gutters-fasteners",
    tags: ["ventilation", "daylighting"],
    profileArt: "translucent",
  },
  "upvc-gutters-accessories": {
    category: "vents-gutters-fasteners",
    tags: ["ventilation"],
    profileArt: "pipe",
  },
  "metacolor-accessories": {
    category: "vents-gutters-fasteners",
    tags: ["fasteners", "roofing"],
    profileArt: "fastener",
  },
  "sds-screws": {
    category: "vents-gutters-fasteners",
    tags: ["fasteners", "roofing"],
    profileArt: "fastener",
  },
  "ms-round-pipes": {
    category: "pipes-steel",
    tags: ["structural"],
    profileArt: "pipe",
  },
  "ms-angle": {
    category: "pipes-steel",
    tags: ["structural"],
    profileArt: "angle",
  },
  "ac-pipes": {
    category: "pipes-steel",
    tags: ["ventilation"],
    profileArt: "pipe",
  },
};

function mapCatalogProduct(raw: RawCatalogProduct): Product {
  const enrichment = PRODUCT_ENRICHMENT[raw.id] ?? {
    category: "roofing-sheets" as Category,
    tags: ["roofing"],
    profileArt: "corrugated" as const,
  };

  const specs: { label: string; value: string }[] = [
    { label: "Category", value: raw.category },
    { label: "Material", value: raw.material.value },
  ];

  if (raw.formAndFinish.length > 0) {
    specs.push({
      label: "Form & Finish",
      value: raw.formAndFinish.join(" • "),
    });
  }

  const availableIn = raw.selectionChecklist.map((item) => ({
    label: "Selection Parameter",
    value: item,
  }));

  return ProductSchema.parse({
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    category: enrichment.category,
    catalogCategory: raw.category,
    tags: enrichment.tags,
    profileArt: enrichment.profileArt,
    summary: raw.shortDescription,
    shortDescription: raw.shortDescription,
    description: raw.description,
    material: raw.material,
    formAndFinish: raw.formAndFinish,
    typicalUses: raw.typicalUses,
    bestApplications: raw.bestApplications,
    selectionChecklist: raw.selectionChecklist,
    cautions: raw.cautions,
    publicationStatus: raw.publicationStatus,
    seo: raw.seo,
    imageAlt: raw.imageAlt,
    imageDimensions: raw.imageDimensions,
    imageNotes: raw.imageNotes,
    imageReview: raw.imageReview,
    imagePath: raw.imagePath,
    image: raw.image,
    alternateImages: raw.alternateImages,
    sources: raw.sources,
    specs,
    availableIn,
    featured: enrichment.featured ?? false,
    visible: true,
  });
}

// Validate all 25 products from products.js against schema
export const products: Product[] = catalogProducts.map(mapCatalogProduct);

export function getVisibleProducts(): Product[] {
  return products.filter((p) => p.visible);
}

const FEATURED_PRODUCT_IDS = [
  "meta-color-sheets",
  "puf-sandwich-sheets",
  "gc-sheets",
  "upvc-tile-sheets",
  "textured-polycarbonate-sheets",
  "frp-sheets",
] as const;

export function getFeaturedProducts(): Product[] {
  const featuredMap = new Map(
    products.filter((p) => p.visible && p.featured).map((p) => [p.id, p])
  );
  const ordered = FEATURED_PRODUCT_IDS.map((id) => featuredMap.get(id)).filter(
    (p): p is Product => Boolean(p)
  );
  const remaining = products.filter(
    (p) => p.visible && p.featured && !FEATURED_PRODUCT_IDS.includes(p.id as (typeof FEATURED_PRODUCT_IDS)[number])
  );
  return [...ordered, ...remaining];
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.visible && (p.slug === slug || p.id === slug));
}

export function getRelatedProducts(product: Product, limit: number = 3): Product[] {
  return getVisibleProducts()
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.catalogCategory === product.catalogCategory ||
          p.category === product.category ||
          p.tags.some((t) => product.tags.includes(t)))
    )
    .slice(0, limit);
}
