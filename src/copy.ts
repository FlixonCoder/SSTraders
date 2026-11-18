/**
 * All UI strings live here so a Kannada (ಕನ್ನಡ) translation can be added in phase 2.
 */
export const copy = {
  nav: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    whatsappUs: "WhatsApp us",
    whatsapp: "WhatsApp",
    call: "Call",
    directions: "Directions",
    browseProducts: "Browse products",
    getBestPrice: "Get best price",
    addToEnquiry: "Add to enquiry",
    details: "Details",
  },
  hero: {
    headline: "Roofing sheets, stocked since 1967.",
    subhead: "GI, colour coated, insulated, polycarbonate and more, from our Nayandahalli store.",
    proofSince: "Since 1967",
    proofHours: "Mon-Sat 10:30-6:00",
  },
  footer: {
    explore: "Explore",
    visit: "Visit us",
    payment: "We accept",
    hours: "Hours",
    ratingSource: "Rating source: JustDial",
    rights: "All rights reserved.",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    quickActions: "Quick actions",
    mainNav: "Main navigation",
  },
  notFound: {
    title: "Page not found",
    body: "That page does not exist, or has moved. Try our product list or message us on WhatsApp.",
  },
} as const;
