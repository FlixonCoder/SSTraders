import Link from "next/link";
import { siteConfig } from "@/config/site";

/** Text wordmark placeholder. Replace the body with the real logo once decided. */
export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.brand.name} home`}
      className={`font-display inline-flex items-center gap-2 text-xl font-extrabold tracking-tight md:text-2xl ${
        light ? "text-paper" : "text-ink"
      }`}
    >
      <svg viewBox="0 0 28 20" className="h-5 w-7 text-signal" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M2 14 Q7 2 12 14 T22 14 T27 14" />
      </svg>
      {siteConfig.brand.wordmark}
    </Link>
  );
}
