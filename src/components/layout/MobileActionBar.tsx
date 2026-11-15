"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { copy } from "@/copy";
import { GENERIC_ENQUIRY, directionsUrl, telUrl, whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/track";

const item =
  "flex min-h-[var(--action-bar-h)] flex-col items-center justify-center gap-1 text-[13px] font-semibold";

/** Sticky bottom action bar, mobile only. */
export function MobileActionBar() {
  return (
    <nav
      aria-label={copy.a11y.quickActions}
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-ink/15 bg-paper shadow-[0_-4px_16px_rgba(14,26,34,0.08)] md:hidden"
    >
      <a
        href={telUrl(siteConfig.phones.primary.tel)}
        onClick={() => track("cta_call", { place: "action_bar" })}
        className={`${item} text-ink`}
      >
        <Phone size={20} aria-hidden="true" />
        {copy.cta.call}
      </a>
      <a
        href={whatsappUrl(GENERIC_ENQUIRY)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("cta_whatsapp", { place: "action_bar" })}
        className={`${item} bg-whatsapp text-ink`}
      >
        <MessageCircle size={20} aria-hidden="true" />
        {copy.cta.whatsapp}
      </a>
      <a
        href={directionsUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("cta_directions", { place: "action_bar" })}
        className={`${item} text-ink`}
      >
        <MapPin size={20} aria-hidden="true" />
        {copy.cta.directions}
      </a>
    </nav>
  );
}
