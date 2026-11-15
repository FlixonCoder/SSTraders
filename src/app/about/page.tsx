import React from "react";
import type { Metadata } from "next";
import { Clock, ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { copy } from "@/copy";
import { ButtonLink } from "@/components/ui/Button";
import { CorrugationDivider } from "@/components/ui/CorrugationDivider";
import { GENERIC_ENQUIRY, telUrl, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.brand.name} Nayandahalli (Est. 1967)`,
  description: `Established in 1967 on Mysore Main Road, Nayandahalli. Over 55+ years supplying colour coated roofing sheets, GI corrugated sheets, PUF panels, and building materials across Bengaluru and South India.`,
};

export default function AboutPage() {
  return (
    <div>
      {/* Editorial Hero */}
      <section className="corrugated-dark text-paper py-20 md:py-28">
        <div className="container-page max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-signal border border-zinc-700">
            <span>Trading in Nayandahalli Since 1967</span>
          </div>

          <h1 className="font-display mt-6 text-[length:var(--text-h1)] font-extrabold leading-tight text-paper">
            Over Half a Century of Roofing Material Stocking
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 leading-relaxed font-medium">
            Supplying contractors, fabricators, and building owners across Bengaluru and South India from our yard on Mysore Main Road.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink variant="whatsapp" href={whatsappUrl(GENERIC_ENQUIRY)}>
              <MessageCircle size={18} />
              {copy.cta.whatsappUs}
            </ButtonLink>
            <ButtonLink variant="outline-light" href="/products">
              {copy.cta.browseProducts}
            </ButtonLink>
          </div>
        </div>
      </section>

      <CorrugationDivider fillClassName="text-paper" className="-mt-px bg-ink" />

      {/* Honest Story Section */}
      <section className="container-page py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Our History</span>
            <h2 className="font-display text-3xl font-extrabold text-ink">
              Steady Service, Dependable Stock
            </h2>

            <p>
              <strong>{siteConfig.brand.name}</strong> was established in 1967 in Nayandahalli, Bengaluru. Over five decades of steady trade on the Bengaluru-Mysore Highway have given us deep experience in the structural roofing, cladding, and daylighting needs of South India.
            </p>

            <p>
              We stock an extensive range of roofing materials under one roof: colour-coated pre-painted sheets, classic galvanised corrugated (G.C.) sheets, galvanized plain (G.P.) sheets, PUF insulated composite panels, impact-resistant polycarbonate sheets, waterproofing membranes, structural steel pipes, angles, and roofing fasteners.
            </p>

            <p>
              Whether you are roofing an industrial warehouse shed, a commercial canopy, a farm shed, or a residential terrace, our team assists you in selecting the appropriate gauge, profile wave, and finish without guesswork.
            </p>

            {siteConfig.flags.showProprietor && (
              <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Leadership</p>
                <p className="font-display mt-1 text-xl font-bold text-ink">{siteConfig.flags.proprietorName}</p>
                <p className="text-sm text-zinc-600 mt-1">Proprietor, {siteConfig.brand.name}</p>
              </div>
            )}
          </div>

          {/* Verified Timeline Element */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">Verified Timeline</span>
              <h3 className="font-display mt-1 text-2xl font-bold text-ink">Milestones</h3>
              <p className="mt-1 text-xs text-zinc-500">
                Only verified records are maintained in our history.
              </p>

              <div className="relative mt-8 border-l-2 border-ink/15 pl-6 ml-3 space-y-10">
                {/* 1967 Milestone */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 size-4 rounded-full border-2 border-white bg-signal ring-4 ring-signal/20" />
                  <span className="font-display text-2xl font-extrabold text-ink">1967</span>
                  <h4 className="font-display text-base font-bold text-ink mt-0.5">Established in Nayandahalli</h4>
                  <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                    Commenced roofing sheet trade on Mysore Main Road, serving builders and industrial sheds in early Bengaluru.
                  </p>
                </div>

                {/* Today Milestone */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 size-4 rounded-full border-2 border-white bg-ink ring-4 ring-ink/10" />
                  <span className="font-display text-2xl font-extrabold text-ink">Today</span>
                  <h4 className="font-display text-base font-bold text-ink mt-0.5">Modern Rebrand & Stocking Hub</h4>
                  <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                    Over 55+ years later, continuing to serve contractors across Karnataka and South India with responsive WhatsApp enquiries and prompt dispatch.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-ink/10">
                <a
                  href={siteConfig.rating.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-signal transition"
                >
                  <span>Rated {siteConfig.rating.value} from 18 reviews on JustDial</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Commitments */}
      <section className="bg-white border-y border-ink/10 py-16">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-signal-ink">How We Work</span>
            <h2 className="font-display mt-1 text-[length:var(--text-h2)] font-extrabold text-ink">
              Core Principles
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-ink/10 bg-paper p-6">
              <ShieldCheck size={28} className="text-signal" />
              <h3 className="font-display mt-4 text-lg font-bold text-ink">Honest Material Specifications</h3>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                We state exact gauge thicknesses, zinc coating weights, and material compositions without exaggeration.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-paper p-6">
              <Truck size={28} className="text-signal" />
              <h3 className="font-display mt-4 text-lg font-bold text-ink">Prompt South India Delivery</h3>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                Coordinated logistics and direct truck dispatch from our Mysore Main Road yard to your project site.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-paper p-6">
              <Clock size={28} className="text-signal" />
              <h3 className="font-display mt-4 text-lg font-bold text-ink">Rapid WhatsApp Turnaround</h3>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                Quick responses within 24 hours to give you competitive rates and accurate dispatch timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="container-page py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-ink">
            Planning a Roofing Project?
          </h2>
          <p className="mt-3 text-base text-zinc-700">
            Speak to our team or send us your material list for an itemised quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink variant="whatsapp" href={whatsappUrl(GENERIC_ENQUIRY)}>
              <MessageCircle size={18} />
              Send Enquiry on WhatsApp
            </ButtonLink>
            <ButtonLink variant="outline" href={telUrl(siteConfig.phones.primary.tel)}>
              Call {siteConfig.phones.primary.display}
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
