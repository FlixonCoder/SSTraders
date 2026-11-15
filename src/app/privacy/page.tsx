import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.brand.name}`,
  description: `Privacy information for enquiries submitted to ${siteConfig.brand.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="container-page py-12 md:py-20 max-w-3xl">
      <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Legal Notice</span>
      <h1 className="font-display mt-1 text-[length:var(--text-h1)] font-extrabold text-ink">
        Privacy Policy
      </h1>

      <div className="mt-8 space-y-6 text-base text-zinc-700 leading-relaxed">
        <p>
          At <strong>{siteConfig.brand.name}</strong>, we respect your privacy. This website is a static catalogue and information portal. We do not maintain user accounts, process online card payments on this site, or store personal user data on external servers.
        </p>

        <h2 className="font-display text-xl font-bold text-ink pt-4">Enquiries & Communications</h2>
        <p>
          When you submit an enquiry through our website forms or enquiry list, your request is formatted and transmitted directly via WhatsApp or telephone to our customer service desk. Information provided (such as your name, contact telephone number, delivery location, and product specifications) is used solely to respond to your pricing enquiry, coordinate material dispatch, and service your order.
        </p>

        <h2 className="font-display text-xl font-bold text-ink pt-4">Local Storage</h2>
        <p>
          Our enquiry list tool uses your browser&apos;s local storage (localStorage) exclusively to temporarily remember the products and quantities you have added while browsing. This data remains on your device and is not tracked or sold to third parties.
        </p>

        <h2 className="font-display text-xl font-bold text-ink pt-4">Contact Information</h2>
        <p>
          If you have any questions about this privacy note, please contact our Nayandahalli office at {siteConfig.phones.primary.display}.
        </p>

        <div className="pt-8 border-t border-ink/10">
          <Link href="/" className="text-sm font-semibold text-ink underline underline-offset-4 hover:text-signal">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
