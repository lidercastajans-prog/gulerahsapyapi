import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "public", "logo.png");

const meta = await sharp(src).metadata();
const size = Math.min(meta.width ?? 0, meta.height ?? 0);
const left = Math.max(0, Math.round(((meta.width ?? size) - size) / 2));
const top = Math.max(0, Math.round(((meta.height ?? size) - size) / 2));

const outputs = [
  { file: path.join(root, "src", "app", "icon.png"), size: 512 },
  { file: path.join(root, "src", "app", "apple-icon.png"), size: 180 },
  { file: path.join(root, "public", "logo-mark.png"), size: 256 },
];

for (const out of outputs) {
  await mkdir(path.dirname(out.file), { recursive: true });
  await sharp(src)
    .extract({ left, top, width: size, height: size })
    .resize(out.size, out.size, { fit: "cover" })
    .png({ quality: 95 })
    .toFile(out.file);
  console.log(`generated ${out.file} (${out.size}x${out.size})`);
}
