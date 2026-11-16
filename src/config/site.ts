/**
 * Single source of truth for brand-level and business facts.
 * Only verified facts from BRIEF.md section 2 live here. OPEN items are
 * placeholders marked TODO and are listed in TODO.md.
 */

export type DayKey = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type DayHours = { open: string; close: string } | null; // "HH:mm" 24h, null = closed

export const siteConfig = {
  brand: {
    name: "SS Agencies",
    tagline: "Roofing sheets, stocked since 1967.",
    wordmark: "SS Agencies",
    legalDescriptor: "Roofing sheet dealer and stockist",
  },

  // Production site URL (configured via environment variable or Vercel system variables).
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "") ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""),

  established: 1967,

  address: {
    line1: "No. 15, Mysore Main Road (Bangalore-Mysore Highway)",
    locality: "Nayandahalli",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560039",
    country: "IN",
    landmark: "Near Nayandahalli Metro Pillar 463",
  },

  location: {
    lat: 12.9380567,
    lng: 77.5214928,
    placeName: "SS Agencies",
    mapsUrl: "https://maps.app.goo.gl/LLomkvjaZh8SgjxW9",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=12.9380567,77.5214928",
    embedUrl: "https://www.google.com/maps/embed?pb=!4v1791722532677!6m8!1m7!1s_pf6EtA-02tonvHPcrHCTw!2m2!1d12.93805666930016!2d77.5214927719504!3f290.37316513758094!4f1.0770433331407077!5f0.7820865974627469",
  },

  phones: {
    // Primary phone and WhatsApp (digits with country code for wa.me).
    primary: { display: "+91 98860 67098", tel: "+919886067098", wa: "919886067098" },
    landline: { display: "080 2670 5406", tel: "+918026705406" },
    office: { display: "+91 98459 36391", tel: "+919845936391" },
  },

  // TODO(OPEN): primary public email unresolved. Do NOT display any email.
  email: null as string | null,

  hours: {
    timeZone: "Asia/Kolkata",
    days: {
      mon: { open: "10:30", close: "19:00" },
      tue: { open: "10:30", close: "19:00" },
      wed: { open: "10:30", close: "19:00" },
      thu: { open: "10:30", close: "19:00" },
      fri: { open: "10:30", close: "19:00" },
      sat: { open: "10:30", close: "19:00" },
      sun: null,
    } as Record<DayKey, DayHours>,
  },

  paymentModes: ["Cash", "Cheque / DD", "Visa / Mastercard / RuPay", "Amex"],

  rating: {
    value: "4.4",
    count: 18,
    source: "JustDial",
    url: "https://www.justdial.com/Bangalore/S-S-Agencies-Near-to-Nayandhalli-Halli-Metropillar463/080P21988",
  },

  // TODO(OPEN): delivery area wording and any minimum order.
  delivery: { label: "Delivery across South India", note: "As per our previous website." },

  flags: {
    // Brief: proprietor is shown only once confirmed by the owner.
    showProprietor: false,
    proprietorName: "Mr Anees Khan",
  },

  // TODO(OPEN): social handles unknown.
  social: [] as { label: string; url: string }[],
} as const;

export type SiteConfig = typeof siteConfig;

export const DAY_ORDER: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
export const DAY_LABEL: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

export function fullAddress(): string {
  const a = siteConfig.address;
  return `${a.line1}, ${a.locality}, ${a.city} ${a.postalCode}`;
}
