"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { copy } from "@/copy";
import { GENERIC_ENQUIRY, whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/track";
import { useEnquiry } from "@/lib/enquiry-store";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16 md:h-20"
        }`}
      >
        <Wordmark />

        <nav aria-label={copy.a11y.mainNav} className="hidden items-center gap-8 md:flex">
          {copy.nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[15px] font-semibold text-zinc-700 transition hover:text-ink">
              {n.label}
            </Link>
          ))}
          <Link
            href="/enquiry"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-zinc-700 transition hover:text-ink"
          >
            <span>Enquiry</span>
            {count > 0 && (
              <span className="grid size-5 place-items-center rounded-full bg-signal text-[11px] font-bold text-ink">
                {count}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl(GENERIC_ENQUIRY)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_whatsapp", { place: "header" })}
            className="hidden min-h-12 items-center gap-2 rounded-full bg-whatsapp px-5 text-[15px] font-semibold text-ink transition hover:-translate-y-0.5 hover:brightness-105 sm:inline-flex"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {copy.cta.whatsappUs}
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? copy.a11y.closeMenu : copy.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="grid size-12 place-items-center rounded-full border border-ink/15 md:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label={copy.a11y.mainNav} className="border-t border-ink/10 bg-paper md:hidden">
          <ul className="container-page py-2">
            {copy.nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-display flex min-h-14 items-center text-2xl font-bold"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/enquiry"
                onClick={() => setOpen(false)}
                className="font-display flex min-h-14 items-center justify-between text-2xl font-bold"
              >
                <span>Enquiry list</span>
                {count > 0 && (
                  <span className="rounded-full bg-signal px-3 py-1 text-sm font-bold text-ink">
                    {count} {count === 1 ? "item" : "items"}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
