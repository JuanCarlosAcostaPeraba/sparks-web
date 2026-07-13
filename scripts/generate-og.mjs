import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = fileURLToPath(new URL("../public/og.svg", import.meta.url));
const output = fileURLToPath(new URL("../public/og.png", import.meta.url));

await sharp(source)
  .png({ compressionLevel: 9, palette: true })
  .toFile(output);

console.log("Generated public/og.png (1200×630)");
