import { siteConfig } from "@/config/site";

export function getLocalBusinessJsonLd() {
  const { address, phones, brand, hours } = siteConfig;

  // Format opening hours specifications
  const openingHoursSpec = Object.entries(hours.days)
    .filter(([, h]) => h !== null)
    .map(([day, h]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day.charAt(0).toUpperCase() + day.slice(1)}day`,
      opens: h!.open,
      closes: h!.close,
    }));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description: `${brand.name}: Roofing sheet dealer and stockist in Nayandahalli, Bengaluru. Supplying colour coated GI sheets, PUF panels, and building materials since ${siteConfig.established}.`,
    foundingDate: String(siteConfig.established),
    telephone: phones.primary.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.landmark}`,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },
    hasMap: siteConfig.location.mapsUrl,
    openingHoursSpecification: openingHoursSpec,
    paymentAccepted: siteConfig.paymentModes.join(", "),
  };
}
