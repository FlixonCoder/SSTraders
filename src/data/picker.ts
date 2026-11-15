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
      title: "Translucent & Daylighting Sheets",
      reason: "For natural illumination without electric lighting during the day.",
      productSlugs: ["polycarbonate-profile-roofing-sheet", "fibreglass-sheets", "transparent-roofing-sheet"],
    };
  }

  if (lightInsulation === "insulation") {
    return {
      title: "PUF Insulated Composite Panels",
      reason: "Provides superior thermal barriers and acoustic dampening for comfortable interior temperatures.",
      productSlugs: ["puf-insulated-roofing-panels", "colour-coated-gi-roofing-sheet"],
    };
  }

  if (tier === "premium") {
    return {
      title: "Colour Coated Profile Roofing Sheets",
      reason: "Modern pre-painted corrosion-resistant profile sheets with high aesthetic appeal and long lifespan.",
      productSlugs: ["colour-coated-gi-roofing-sheet", "precoated-roofing-sheet-duratuf"],
    };
  }

  return {
    title: "Galvanised Corrugated (G.C.) & Plain (G.P.) Sheets",
    reason: "Time-tested zinc-coated sheets offering high structural rigidity and unmatched value per square foot.",
    productSlugs: ["gc-galvanized-corrugated-sheets", "gi-roofing-sheet-uttam-suraksha", "gp-galvanized-plain-sheets"],
  };
}
