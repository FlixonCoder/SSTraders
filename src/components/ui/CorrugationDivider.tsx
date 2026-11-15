type Props = {
  className?: string;
  /** Wave shape: sine-like corrugation or trapezoid box profile. */
  variant?: "sine" | "trapezoid";
  /** Colour of the wave (fill), i.e. the colour of the NEXT section. */
  fillClassName?: string;
  flip?: boolean;
};

/** Reusable corrugated-sheet profile used as a section divider. */
export function CorrugationDivider({
  className = "",
  variant = "sine",
  fillClassName = "text-ink",
  flip = false,
}: Props) {
  const d =
    variant === "sine"
      ? "M0 24 Q15 0 30 24 T60 24 T90 24 T120 24 V48 H0 Z"
      : "M0 24 L8 4 H22 L30 24 L38 44 H52 L60 24 L68 4 H82 L90 24 L98 44 H112 L120 24 V48 H0 Z";
  return (
    <div aria-hidden="true" className={`w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        className={`block h-6 w-full md:h-8 ${fillClassName}`}
        viewBox="0 0 120 48"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <defs />
        <path d={d} />
      </svg>
    </div>
  );
}
