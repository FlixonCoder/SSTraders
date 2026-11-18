import Link from "next/link";
import { siteConfig, fullAddress } from "@/config/site";
import { copy } from "@/copy";
import { hoursRows } from "@/lib/hours";
import { telUrl } from "@/lib/whatsapp";
import { MapPin } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { CorrugationDivider } from "@/components/ui/CorrugationDivider";

export function Footer() {
  const { rating, phones, paymentModes } = siteConfig;
  return (
    <footer className="mt-24">
      <CorrugationDivider fillClassName="text-ink" />
      <div className="corrugated-dark -mt-px text-paper">
        <div className="container-page grid gap-12 py-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <Wordmark light />
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              {siteConfig.brand.legalDescriptor} in {siteConfig.address.locality}, {siteConfig.address.city}. Trading since {siteConfig.established}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">{copy.footer.explore}</h2>
            <ul className="mt-4 space-y-1 text-sm text-zinc-300">
              {copy.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="inline-flex min-h-10 items-center hover:text-signal">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/enquiry" className="inline-flex min-h-10 items-center hover:text-signal">Enquiry list</Link>
              </li>
              <li>
                <Link href="/privacy" className="inline-flex min-h-10 items-center hover:text-signal">Privacy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">{copy.footer.visit}</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-zinc-300">
              {fullAddress()}
              <br />
              {siteConfig.address.landmark}
            </address>
            <div className="mt-2.5">
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-signal hover:underline"
              >
                <MapPin size={13} aria-hidden="true" />
                <span>View on Google Maps &rarr;</span>
              </a>
            </div>
            <ul className="tabular mt-4 space-y-1 text-sm text-zinc-300">
              <li><a className="inline-flex min-h-10 items-center hover:text-signal" href={telUrl(phones.primary.tel)}>{phones.primary.display}</a></li>
              <li><a className="inline-flex min-h-10 items-center hover:text-signal" href={telUrl(phones.landline.tel)}>{phones.landline.display}</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">{copy.footer.hours}</h2>
            <dl className="tabular mt-4 space-y-1 text-sm text-zinc-300">
              {hoursRows().map((r) => (
                <div key={r.day} className="flex justify-between gap-4">
                  <dt>{r.day.slice(0, 3)}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-8 text-lg font-bold">{copy.footer.payment}</h2>
            <p className="mt-2 text-sm text-zinc-300">{paymentModes.join(", ")}</p>
          </div>
        </div>

        <div className="border-t border-paper/10">
          <div className="container-page flex flex-col gap-2 py-6 text-xs text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.brand.name}. {copy.footer.rights}
            </p>
            <a
              href={rating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center underline underline-offset-4 hover:text-signal"
            >
              {copy.footer.ratingSource}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
