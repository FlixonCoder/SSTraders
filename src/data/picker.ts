export interface PickerOption {
  id: string;
  label: string;
  hint: string;
}

export interface PickerQuestion {
  id: "structure" | "lightInsulation" | "tier";
  title: string;
  subtitle: string;
  options: PickerOption[];
}

export const PICKER_QUESTIONS: PickerQuestion[] = [
  {
    id: "structure",
    title: "1. What are you roofing?",
    subtitle: "Select your project type",
    options: [
      { id: "industrial", label: "Factory, Warehouse or Godown", hint: "Wide span, structural roofing" },
      { id: "residential", label: "Residential Terrace or Car Porch", hint: "Balcony, canopy, or sitout covering" },
      { id: "farmhouse", label: "Workshop, Farmhouse or Shed", hint: "Durable all-weather shelter" },
    ],
  },
  {
    id: "lightInsulation",
    title: "2. Do you need light or insulation?",
    subtitle: "Select your comfort & light requirement",
    options: [
      { id: "light", label: "Natural Daylight through Roof", hint: "Translucent panels or polycarbonate skylights" },
      { id: "insulation", label: "Heat / Acoustic Insulation", hint: "Keep temperature down and damp sound" },
      { id: "strength", label: "Maximum Weather Strength Only", hint: "Standard solid metal sheet coverage" },
    ],
  },
  {
    id: "tier",
    title: "3. Specification preference?",
    subtitle: "Select finish and material priority",
    options: [
      { id: "budget", label: "Standard Economy & Proven Durability", hint: "Classic galvanised finish or standard profile" },
      { id: "premium", label: "Aesthetic Colour Coating / High Performance", hint: "Pre-painted vibrant finish or multi-layer" },
    ],
  },
];

export interface RecommendationResult {
  title: string;
  reason: string;
  productSlugs: string[];
}

export function calculateRecommendation(answers: {
  structure?: string;
  lightInsulation?: string;
  tier?: string;
}): RecommendationResult {
  const { lightInsulation, tier } = answers;

  if (lightInsulation === "light") {
    return {
      title: "Polycarbonate & FRP Daylighting Sheets",
      reason: "For natural illumination across roof spans, skylights, and canopies.",
      productSlugs: [
        "polycarbonate-profile-sheets",
        "frp-roofing-sheets",
        "polycarbonate-compact-sheets",
      ],
    };
  }

  if (lightInsulation === "insulation") {
    return {
      title: "PUF Sandwich Panels & UPVC Tile Sheets",
      reason: "Provides thermal insulation and weather protection for temperature-controlled roofs and sheds.",
      productSlugs: [
        "puf-sandwich-roofing-panels",
        "upvc-tile-roofing-sheets",
        "meta-color-sheets",
      ],
    };
  }

  if (tier === "premium") {
    return {
      title: "Colour-Coated & Architectural Roofing Sheets",
      reason: "Pre-painted corrosion-resistant profile sheets, curved crimp panels, and tile-profile UPVC sheets.",
      productSlugs: [
        "meta-color-sheets",
        "crimped-curved-roofing-sheets",
        "upvc-tile-roofing-sheets",
      ],
    };
  }

  return {
    title: "Galvanized Corrugated (GC), Plain (GP) & Decking Sheets",
    reason: "Zinc-coated galvanized steel sheets and deep-rib structural decking panels.",
    productSlugs: [
      "gc-sheets-galvanized-corrugated-sheets",
      "gp-sheets-galvanized-plain-sheets",
      "gi-decking-sheets",
    ],
  };
}
