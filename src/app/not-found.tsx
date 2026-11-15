import { copy } from "@/copy";
import { ButtonLink } from "@/components/ui/Button";
import { ProductArt } from "@/components/product/ProductArt";
import { GENERIC_ENQUIRY, whatsappUrl } from "@/lib/whatsapp";

export const metadata = { title: copy.notFound.title };

export default function NotFound() {
  return (
    <section className="corrugated-dark text-paper">
      <div className="container-page py-24 md:py-32">
        <ProductArt art="corrugated" className="w-40 text-signal" />
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-signal">404</p>
        <h1 className="font-display mt-2 text-[length:var(--text-h1)] font-extrabold">{copy.notFound.title}</h1>
        <p className="mt-4 max-w-md text-zinc-300">{copy.notFound.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/products">{copy.cta.browseProducts}</ButtonLink>
          <ButtonLink variant="whatsapp" href={whatsappUrl(GENERIC_ENQUIRY)}>{copy.cta.whatsappUs}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
