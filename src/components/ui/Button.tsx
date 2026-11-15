import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "signal" | "whatsapp" | "ink" | "outline" | "outline-light";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold tracking-tight transition duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50";

const variants: Record<Variant, string> = {
  signal: "bg-signal text-ink hover:brightness-105",
  whatsapp: "bg-whatsapp text-ink hover:brightness-105",
  ink: "bg-ink text-paper hover:bg-zinc-900",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
  "outline-light": "border-2 border-paper/70 text-paper hover:bg-paper hover:text-ink",
};

type CommonProps = { variant?: Variant; className?: string; children: ReactNode };

export function ButtonLink({
  variant = "signal",
  className = "",
  href,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "signal",
  className = "",
  children,
  type = "button",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
