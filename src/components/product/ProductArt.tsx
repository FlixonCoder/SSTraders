export type ProfileArt =
  | "corrugated"
  | "trapezoid"
  | "flat"
  | "translucent"
  | "panel"
  | "membrane"
  | "pipe"
  | "door"
  | "fastener"
  | "angle";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;

/** Custom roofing-material profile art. Drawn in currentColor on a 120x80 box. */
export function ProductArt({
  art,
  className = "",
  title,
}: {
  art: ProfileArt;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {art === "corrugated" && (
        <g {...stroke}>
          <path d="M6 46 Q16 20 26 46 T46 46 T66 46 T86 46 T106 46 T114 46" />
          <path d="M6 58 Q16 32 26 58 T46 58 T66 58 T86 58 T106 58 T114 58" opacity="0.45" />
        </g>
      )}
      {art === "trapezoid" && (
        <g {...stroke}>
          <path d="M6 54 H16 L24 30 H38 L46 54 H60 L68 30 H82 L90 54 H104 L112 30" />
          <path d="M6 66 H16 L24 42 H38 L46 66 H60 L68 42 H82 L90 66 H104 L112 42" opacity="0.45" />
        </g>
      )}
      {art === "flat" && (
        <g {...stroke}>
          <path d="M14 56 L34 28 H106 L86 56 Z" />
          <path d="M14 56 V62 H86 V56" opacity="0.5" />
          <path d="M86 62 L106 34 V28" opacity="0.5" />
        </g>
      )}
      {art === "translucent" && (
        <g {...stroke}>
          <path d="M6 46 Q16 20 26 46 T46 46 T66 46 T86 46 T106 46 T114 46" strokeDasharray="2 7" />
          <path d="M30 12 L22 24 M50 8 L42 20 M70 12 L62 24" strokeWidth="2" opacity="0.7" />
          <path d="M6 58 Q16 32 26 58 T46 58 T66 58 T86 58 T106 58 T114 58" opacity="0.4" />
        </g>
      )}
      {art === "panel" && (
        <g {...stroke}>
          <path d="M8 22 H112" />
          <path d="M8 58 H112" />
          <path d="M8 22 V58 M112 22 V58" />
          <path d="M8 32 H112 M8 48 H112" strokeDasharray="1 6" opacity="0.6" />
          <path d="M20 22 L28 14 L36 22 L44 14 L52 22 L60 14 L68 22 L76 14 L84 22 L92 14 L100 22" opacity="0.5" />
        </g>
      )}
      {art === "membrane" && (
        <g {...stroke}>
          <ellipse cx="38" cy="40" rx="14" ry="26" />
          <ellipse cx="38" cy="40" rx="5" ry="10" opacity="0.6" />
          <path d="M38 14 H96 C104 14 104 66 96 66 H38" />
          <path d="M96 66 C88 66 88 14 96 14" opacity="0.5" />
        </g>
      )}
      {art === "pipe" && (
        <g {...stroke}>
          <ellipse cx="30" cy="40" rx="14" ry="22" />
          <ellipse cx="30" cy="40" rx="8" ry="13" opacity="0.6" />
          <path d="M30 18 H104 M30 62 H104" />
          <path d="M104 18 C112 28 112 52 104 62" />
        </g>
      )}
      {art === "door" && (
        <g {...stroke}>
          <rect x="34" y="8" width="52" height="66" rx="3" />
          <rect x="41" y="16" width="38" height="20" rx="2" opacity="0.6" />
          <rect x="41" y="44" width="38" height="22" rx="2" opacity="0.6" />
          <circle cx="78" cy="42" r="2.5" />
        </g>
      )}
      {art === "fastener" && (
        <g {...stroke}>
          <path d="M36 22 H60 L68 14 H84 L92 22 V32 L84 40 H68 L60 32 Z" />
          <path d="M64 40 V68" />
          <path d="M60 48 H68 M60 55 H68 M60 62 H68" opacity="0.6" />
        </g>
      )}
      {art === "angle" && (
        <g {...stroke}>
          <path d="M26 12 V62 H96" />
          <path d="M36 12 V52 H96" opacity="0.5" />
          <path d="M26 12 H36 M96 52 V62" />
        </g>
      )}
    </svg>
  );
}
