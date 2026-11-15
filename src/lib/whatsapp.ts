import { siteConfig, fullAddress } from "@/config/site";

/** Build a wa.me URL with URL-encoded prefilled text. Number comes from siteConfig. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.phones.primary.wa}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const GENERIC_ENQUIRY = "Hello, I'd like to enquire about roofing materials.";

export function productEnquiryMessage(productName: string): string {
  return `Hello, I'd like the best price for: ${productName}. Please share availability and details.`;
}

export type EnquiryItem = { slug: string; name: string; quantity: string; note?: string };

export type EnquiryDetails = {
  name?: string;
  phone?: string;
  location?: string;
  siteArea?: string;
  notes?: string;
  items: EnquiryItem[];
};

/** Shared builder used by the enquiry list and the contact form. */
export function buildEnquiryMessage(d: EnquiryDetails): string {
  const lines: string[] = [`Hello ${siteConfig.brand.name}, I'd like to enquire:`, ""];
  if (d.items.length) {
    lines.push("Items:");
    d.items.forEach((it, i) => {
      const qty = it.quantity ? ` - Qty: ${it.quantity}` : "";
      const note = it.note ? ` (${it.note})` : "";
      lines.push(`${i + 1}. ${it.name}${qty}${note}`);
    });
    lines.push("");
  }
  if (d.name) lines.push(`Name: ${d.name}`);
  if (d.phone) lines.push(`Phone: ${d.phone}`);
  if (d.location) lines.push(`Delivery location: ${d.location}`);
  if (d.siteArea) lines.push(`Site area: ${d.siteArea}`);
  if (d.notes) lines.push(`Notes: ${d.notes}`);
  return lines.join("\n").trim();
}

export function telUrl(tel: string): string {
  return `tel:${tel}`;
}

/** Google Maps directions URL directing straight to the exact GPS coordinates. */
export function directionsUrl(): string {
  return siteConfig.location.directionsUrl;
}

/** Google Maps place listing URL for SS Agencies. */
export function locationUrl(): string {
  return siteConfig.location.mapsUrl;
}

