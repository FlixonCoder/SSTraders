import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = path.resolve("public/assets/source");
const OPTIMIZED_DIR = path.resolve("public/assets/optimized");
const WIDTHS = [320, 640, 960, 1200];
const FORMATS = ["webp", "avif"];

async function run() {
  await fs.mkdir(SOURCE_DIR, { recursive: true });
  await fs.mkdir(OPTIMIZED_DIR, { recursive: true });

  const files = await fs.readdir(SOURCE_DIR);
  const imageFiles = files.filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));

  if (imageFiles.length === 0) {
    console.log("No images found in public/assets/source to optimize.");
    return;
  }

  for (const file of imageFiles) {
    const inputPath = path.join(SOURCE_DIR, file);
    const parsed = path.parse(file);

    for (const width of WIDTHS) {
      for (const format of FORMATS) {
        const outName = `${parsed.name}-${width}.${format}`;
        const outputPath = path.join(OPTIMIZED_DIR, outName);

        try {
          await sharp(inputPath)
            .resize({ width, withoutEnlargement: true })
            .toFormat(format, { quality: 80 })
            .toFile(outputPath);
          console.log(`Generated: ${outName}`);
        } catch (err) {
          console.error(`Error processing ${file} for width ${width} (${format}):`, err);
        }
      }
    }
  }

  console.log("Image optimization complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
