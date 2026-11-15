import { z } from "zod";

export const CategoryEnum = z.enum([
  "roofing-sheets",
  "insulation-daylight",
  "waterproofing",
  "pipes-steel",
  "doors-fasteners",
]);

export type Category = z.infer<typeof CategoryEnum>;

export const CATEGORY_LABELS: Record<Category, string> = {
  "roofing-sheets": "Roofing Sheets",
  "insulation-daylight": "Insulation & Translucent",
  "waterproofing": "Waterproofing",
  "pipes-steel": "Pipes & Steel",
  "doors-fasteners": "Doors & Fasteners",
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  "roofing-sheets": "Durable corrugated, trapezoidal, and plain metal sheets for industrial and residential roofing.",
  "insulation-daylight": "Polycarbonate, fibreglass, and thermal insulated PUF panels for light transmission and temperature control.",
  "waterproofing": "High-grade bitumen and polymeric membranes to safeguard roofs from rain and dampness.",
  "pipes-steel": "Mild steel round pipes and structural angles for plumbing, HVAC, fabrication, and structural frameworks.",
  "doors-fasteners": "Durable PVC door solutions and heavy-duty roofing bolts and fasteners.",
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

export const ProductSchema = z.object({
  slug: z.string(),
  name: z.string(),
  category: CategoryEnum,
  tags: z.array(z.string()),
  profileArt: ProfileArtEnum,
  summary: z.string(),
  description: z.string(),
  specs: z.array(ProductSpecSchema).optional(),
  availableIn: z.array(ProductSpecSchema).optional(),
  source: z.enum(["site", "justdial", "both"]),
  featured: z.boolean().optional(),
  visible: z.boolean(),
  needsConfirmation: z.string().optional(),
  image: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

export const rawProducts: Product[] = [
  {
    slug: "colour-coated-gi-roofing-sheet",
    name: "Colour Coated GI Roofing Sheet",
    category: "roofing-sheets",
    tags: ["roofing", "colour-coated", "gi"],
    profileArt: "trapezoid",
    summary: "Durable pre-painted galvanised iron sheets in multiple colours.",
    description: "Colour coated galvanised iron roofing sheets designed for aesthetic appeal, weather protection, and long service life across residential and industrial sheds.",
    specs: [
      { label: "Thickness", value: "0.30 - 0.80 mm" },
      { label: "Material", value: "Galvanised Iron (GI)" },
      { label: "Finish", value: "Multicolour coated" },
    ],
    availableIn: [
      { label: "Colours", value: "Multicolour (Blue, Red, Green, Grey and more on enquiry)" },
      { label: "Thickness Options", value: "0.30 mm to 0.80 mm" },
    ],
    source: "both",
    featured: true,
    visible: true,
  },
  {
    slug: "precoated-roofing-sheet-duratuf",
    name: "Precoated Roofing Sheet (Duratuf)",
    category: "roofing-sheets",
    tags: ["roofing", "precoated", "gi"],
    profileArt: "trapezoid",
    summary: "Wide-span 1200 mm precoated galvanised sheets.",
    description: "Precoated sheets engineered for broad coverage and corrosion resistance. Suitable for industrial roofing, cladding, and warehouse installations.",
    specs: [
      { label: "Width", value: "1200 mm" },
      { label: "Material", value: "Galvanised Iron (GI)" },
    ],
    source: "justdial",
    visible: true,
    needsConfirmation: "Brand name Duratuf needs confirmation",
  },
  {
    slug: "gi-roofing-sheet-uttam-suraksha",
    name: "GI Roofing Sheet (Uttam Suraksha)",
    category: "roofing-sheets",
    tags: ["roofing", "gi", "silver"],
    profileArt: "corrugated",
    summary: "Silver-finish galvanised iron roofing sheets.",
    description: "Galvanised iron roofing sheets featuring a protective zinc barrier with a classic silver finish for all-weather outdoor durability.",
    specs: [
      { label: "Material", value: "Galvanised Iron (GI)" },
      { label: "Finish", value: "Silver" },
    ],
    source: "justdial",
    visible: true,
    needsConfirmation: "Brand name Uttam Suraksha needs confirmation",
  },
  {
    slug: "gp-galvanized-plain-sheets",
    name: "G.P. (Galvanized Plain) Sheets",
    category: "roofing-sheets",
    tags: ["roofing", "plain", "gi"],
    profileArt: "flat",
    summary: "Zinc-coated plain flat sheets with clean silver finish.",
    description: "Galvanized plain flat sheets engineered for metal fabrication, flashing, guttering, and architectural panel work.",
    specs: [
      { label: "Finish", value: "Silver zinc-coated" },
      { label: "Form", value: "Plain / Flat sheet" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "gc-galvanized-corrugated-sheets",
    name: "G.C. (Galvanized Corrugated) Sheets",
    category: "roofing-sheets",
    tags: ["roofing", "corrugated", "gi"],
    profileArt: "corrugated",
    summary: "Traditional corrugated galvanised iron sheets in standard bundled lengths.",
    description: "Classic sinusoidal corrugated sheets offering dependable structural rigidity and rain runoff for sheds, workshops, and perimeter walls.",
    specs: [
      { label: "Available Lengths", value: "6, 8, 10, 12 ft" },
      { label: "Available Width", value: "2.75 - 3.0 ft" },
      { label: "Packaging", value: "Supplied in bundles" },
    ],
    availableIn: [
      { label: "Standard Lengths", value: "6 ft, 8 ft, 10 ft, 12 ft" },
      { label: "Standard Widths", value: "2.75 ft to 3.0 ft" },
    ],
    source: "site",
    featured: true,
    visible: true,
  },
  {
    slug: "krinkled-sheets",
    name: "Krinkled Sheets",
    category: "roofing-sheets",
    tags: ["roofing", "textured"],
    profileArt: "corrugated",
    summary: "Textured finish roofing sheets for enhanced architectural rigidity.",
    description: "Roofing sheets with an embossed krinkled texture designed to minimise glare and provide a refined textured appearance.",
    specs: [
      { label: "Finish", value: "Textured / Krinkled" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "metal-roofing-sheet",
    name: "Metal Roofing Sheet",
    category: "roofing-sheets",
    tags: ["roofing", "metal"],
    profileArt: "trapezoid",
    summary: "Heavy-duty metal sheets for standard structural roofing.",
    description: "General-purpose metal roofing sheets engineered for sturdy load distribution and weather barrier applications.",
    specs: [
      { label: "Material", value: "Metal" },
    ],
    source: "justdial",
    visible: true,
  },
  {
    slug: "gi-decking-sheet",
    name: "GI Decking Sheet",
    category: "roofing-sheets",
    tags: ["roofing", "decking", "gi"],
    profileArt: "trapezoid",
    summary: "Structural steel decking sheets with high zinc coating.",
    description: "Trapezoidal steel profile decking sheets intended for composite floor slabs and mezzanine construction.",
    specs: [
      { label: "Zinc Coating", value: "80 - 275 gsm" },
      { label: "Material", value: "Galvanised Iron" },
    ],
    source: "justdial",
    visible: true,
  },
  {
    slug: "puf-insulated-roofing-panels",
    name: "PUF Insulated Roofing Panels",
    category: "insulation-daylight",
    tags: ["insulation", "thermal", "puf", "roofing"],
    profileArt: "panel",
    summary: "Sandwich panels offering thermal insulation and sound reduction.",
    description: "Polyurethane foam (PUF) core sandwich panels with durable steel facings on both sides. Delivers superior energy efficiency, temperature moderation, and acoustic insulation.",
    specs: [
      { label: "Panel Thickness", value: "30 - 100 mm" },
      { label: "Facing", value: "Steel facing" },
      { label: "Performance", value: "Thermal and acoustic insulation" },
    ],
    availableIn: [
      { label: "Core Thickness", value: "30 mm, 50 mm, 80 mm, 100 mm" },
    ],
    source: "both",
    featured: true,
    visible: true,
  },
  {
    slug: "polycarbonate-profile-roofing-sheet",
    name: "Polycarbonate Profile Roofing Sheet",
    category: "insulation-daylight",
    tags: ["daylighting", "translucent", "polycarbonate", "roofing"],
    profileArt: "translucent",
    summary: "Impact-resistant translucent profile sheets for natural skylights.",
    description: "High impact strength polycarbonate profiled sheets that integrate directly into metal roofing to provide energy-free natural daylighting.",
    specs: [
      { label: "Thickness", value: "0.8 - 1.5 mm" },
      { label: "Colours", value: "Multicolour / Clear / Tinted" },
    ],
    availableIn: [
      { label: "Thickness Options", value: "0.8 mm, 1.0 mm, 1.2 mm, 1.5 mm" },
    ],
    source: "both",
    featured: true,
    visible: true,
  },
  {
    slug: "polycarbonate-rolls",
    name: "Polycarbonate Rolls",
    category: "insulation-daylight",
    tags: ["daylighting", "rolls", "polycarbonate"],
    profileArt: "flat",
    summary: "Flexible transparent rolls with high impact resistance.",
    description: "Transparent, flexible polycarbonate sheets supplied in rolls for curved canopies, awnings, and greenhouse partitions.",
    specs: [
      { label: "Clarity", value: "Transparent" },
      { label: "Characteristics", value: "Impact resistant, flexible roll form" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "transparent-roofing-sheet",
    name: "Transparent Roofing Sheet",
    category: "insulation-daylight",
    tags: ["daylighting", "transparent"],
    profileArt: "translucent",
    summary: "Clear daylighting sheets in 0.8-1.5 mm thickness.",
    description: "Clear roofing sheets providing maximum illumination while maintaining weather integrity.",
    specs: [
      { label: "Thickness", value: "0.8 - 1.5 mm" },
    ],
    source: "justdial",
    visible: true,
  },
  {
    slug: "fibreglass-sheets",
    name: "Fibreglass Sheets",
    category: "insulation-daylight",
    tags: ["daylighting", "fibreglass", "translucent"],
    profileArt: "translucent",
    summary: "Translucent fibreglass reinforced panels for soft diffused light.",
    description: "FRP fibreglass sheets that diffuse sunlight evenly across workshop and shed interiors without harsh hotspots.",
    specs: [
      { label: "Light Transmission", value: "Translucent diffused" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "fibre-corrugated-sheets",
    name: "Fibre Corrugated Sheets",
    category: "insulation-daylight",
    tags: ["daylighting", "corrugated", "fibreglass"],
    profileArt: "corrugated",
    summary: "Corrugated profile fibreglass sheets matching standard profiles.",
    description: "Corrugated fibre sheets engineered to match standard metal profile waves for seamless overlap installation and weather sealing.",
    specs: [
      { label: "Profile", value: "Corrugated" },
      { label: "Installation", value: "Standard overlap guidance" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "cement-roofing-sheet-ramco",
    name: "Cement Roofing Sheet (Ramco)",
    category: "roofing-sheets",
    tags: ["roofing", "cement"],
    profileArt: "corrugated",
    summary: "Grey cement based corrugated roofing sheet.",
    description: "Traditional grey cement sheets for standard outdoor sheds.",
    specs: [
      { label: "Colour", value: "Grey" },
    ],
    source: "justdial",
    visible: false,
    needsConfirmation: "Hidden until material is confirmed",
  },
  {
    slug: "ac-sheets",
    name: "A.C. Sheets",
    category: "roofing-sheets",
    tags: ["roofing", "asbestos-cement"],
    profileArt: "corrugated",
    summary: "Asbestos cement roofing sheets.",
    description: "Corrugated sheets from historical product listings.",
    source: "site",
    visible: false,
    needsConfirmation: "Described as asbestos cement. Do not publish until the owner confirms they stock and legally sell it",
  },
  {
    slug: "ac-pipes",
    name: "A.C. Pipes",
    category: "pipes-steel",
    tags: ["pipes", "asbestos-cement"],
    profileArt: "pipe",
    summary: "Asbestos cement pipes.",
    description: "Drainage and drainage piping from historical product listings.",
    source: "site",
    visible: false,
    needsConfirmation: "Same reason as A.C. Sheets",
  },
  {
    slug: "bitumen-sheets",
    name: "Bitumen Sheets",
    category: "waterproofing",
    tags: ["waterproofing", "membrane"],
    profileArt: "membrane",
    summary: "Heavy-duty waterproofing membrane sheets for roof surfaces.",
    description: "Waterproofing membrane sheets formulated to prevent rainwater penetration, pooling damage, and dampness across flat and pitched roofs.",
    specs: [
      { label: "Function", value: "Roof waterproofing membrane" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "tarfelt-sheets",
    name: "Tarfelt Sheets",
    category: "waterproofing",
    tags: ["waterproofing", "membrane", "bitumen"],
    profileArt: "membrane",
    summary: "Polymeric bitumen waterproofing membrane.",
    description: "Proven polymeric bitumen tarfelt rolls for multi-layer roof waterproofing, basements, and terrace treatments.",
    specs: [
      { label: "Type", value: "Polymeric bitumen membrane" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "ms-round-pipes",
    name: "M.S. Round Pipes",
    category: "pipes-steel",
    tags: ["pipes", "steel", "ms"],
    profileArt: "pipe",
    summary: "Mild steel round pipes for plumbing, HVAC, and fire protection.",
    description: "Mild steel circular pipes engineered for water transmission, firefighting conduits, HVAC loops, and structural fabrication.",
    specs: [
      { label: "Material", value: "Mild Steel (M.S.)" },
      { label: "Application", value: "Plumbing, firefighting, HVAC, structural" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "mild-steel-angle",
    name: "Mild Steel Angle",
    category: "pipes-steel",
    tags: ["steel", "structural", "angle"],
    profileArt: "angle",
    summary: "Structural mild steel L-angles for shed frames and trusses.",
    description: "Standard equal angle sections in mild steel, essential for roofing purlins, shed trusses, braces, and general metal fabrication.",
    specs: [
      { label: "Material", value: "Mild Steel" },
      { label: "Type", value: "Equal angle / L-section" },
    ],
    source: "justdial",
    visible: true,
  },
  {
    slug: "pvc-doors",
    name: "PVC Doors",
    category: "doors-fasteners",
    tags: ["doors", "pvc"],
    profileArt: "door",
    summary: "Water-resistant, low-maintenance alternative to wooden doors.",
    description: "Durable PVC door panels ideal for bathrooms, utility sheds, and high-humidity areas, requiring no painting and offering zero termite risk.",
    specs: [
      { label: "Material", value: "PVC" },
      { label: "Advantage", value: "Low-maintenance alternative to wooden doors" },
    ],
    source: "site",
    visible: true,
  },
  {
    slug: "gi-bolts-and-nuts",
    name: "G.I. Bolts and Nuts",
    category: "doors-fasteners",
    tags: ["fasteners", "bolts", "gi"],
    profileArt: "fastener",
    summary: "Corrosion-resistant roofing fasteners, hook bolts, and nuts.",
    description: "Galvanised iron roofing fasteners, J-bolts, and hex nuts with sealing washers engineered for secure fastening of sheets to steel and timber purlins.",
    specs: [
      { label: "Material", value: "Galvanised Iron (GI)" },
      { label: "Use", value: "Roofing fasteners, purlin fixing" },
    ],
    source: "site",
    visible: true,
  },
];

// Validate all seeded items against schema at compile time
export const products: Product[] = rawProducts.map((p) => ProductSchema.parse(p));

export function getVisibleProducts(): Product[] {
  return products.filter((p) => p.visible);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.visible && p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.visible && p.slug === slug);
}

export function getRelatedProducts(product: Product, limit: number = 3): Product[] {
  return getVisibleProducts()
    .filter((p) => p.slug !== product.slug && (p.category === product.category || p.tags.some((t) => product.tags.includes(t))))
    .slice(0, limit);
}
