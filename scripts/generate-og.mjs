import sharp from "sharp";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0E1A22"/>
  <g fill="none" stroke="#F26A1B" stroke-width="16" stroke-linecap="round">
    <path d="M100 420 Q180 260 260 420 T420 420 T580 420 T740 420 T900 420 T1060 420"/>
    <path d="M100 490 Q180 330 260 490 T420 490 T580 490 T740 490 T900 490 T1060 490" stroke-opacity="0.4"/>
  </g>
  <text x="100" y="180" fill="#F6F4F0" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="64" letter-spacing="-2">SS Agencies</text>
  <text x="100" y="245" fill="#F26A1B" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="28" letter-spacing="2">ROOFING &amp; BUILDING MATERIALS • ESTD. 1967</text>
  <text x="100" y="305" fill="#8A949B" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="24">Mysore Main Road, Nayandahalli, Bengaluru 560039</text>
</svg>`;

async function main() {
  await sharp(Buffer.from(svg))
    .png()
    .toFile("public/og-image.png");
  await sharp(Buffer.from(svg))
    .png()
    .toFile("src/app/opengraph-image.png");
  console.log("Generated public/og-image.png and src/app/opengraph-image.png");
}

main().catch(console.error);
