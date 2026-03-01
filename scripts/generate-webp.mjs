import { mkdir, opendir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.resolve(process.cwd(), "public/assets");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxWidth = 1920;

async function* walk(dir) {
  const entries = await opendir(dir);
  for await (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
      continue;
    }
    yield fullPath;
  }
}

async function generateWebp(sourcePath) {
  const extension = path.extname(sourcePath).toLowerCase();
  if (!supportedExtensions.has(extension)) {
    return false;
  }

  const outputPath = sourcePath.replace(/\.(jpe?g|png)$/i, ".webp");
  await mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: maxWidth,
      withoutEnlargement: true,
      fit: "inside",
    })
    .webp({
      quality: 72,
      effort: 5,
    })
    .toFile(outputPath);

  return true;
}

async function main() {
  let total = 0;
  let generated = 0;

  for await (const file of walk(assetsDir)) {
    total += 1;
    if (await generateWebp(file)) {
      generated += 1;
    }
  }

  console.log(
    `Image optimization complete: generated ${generated} WebP files from ${total} assets.`,
  );
}

main().catch((error) => {
  console.error("Failed to generate WebP images:", error);
  process.exit(1);
});
