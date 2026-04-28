/**
 * Mevcut TS verisini Sanity'e seed eder.
 *
 * Çalıştırmadan önce:
 *   1. .env.local dosyasında şu üç değişken set olmalı:
 *      - NEXT_PUBLIC_SANITY_PROJECT_ID
 *      - NEXT_PUBLIC_SANITY_DATASET (genelde "production")
 *      - SANITY_API_WRITE_TOKEN  (sanity.io/manage > API > Tokens > "Editor" tipinde)
 *   2. `npm install` yapılmış olmalı
 *
 * Çalıştırma:
 *   node --env-file=.env.local scripts/seed-sanity.mjs
 *
 * Görseller: i0.wp.com'daki uzak URL'ler script tarafından indirilip Sanity assets'e yüklenir.
 *
 * Yeniden çalıştırılabilir: aynı slug'lar zaten varsa _id deterministik olduğu için update'ler.
 */

import { createClient } from "@sanity/client";
import {
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Eksik env: NEXT_PUBLIC_SANITY_PROJECT_ID ve SANITY_API_WRITE_TOKEN gerekli."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

// --- TS modüllerini dinamik yükle (tsx ile çalıştırıldığında native) ---
const { categories } = await import("../src/lib/models");
const { posts } = await import("../src/lib/posts");
const { testimonials } = await import("../src/lib/testimonials");
const { faqGroups } = await import("../src/lib/faqs");
const { glossary } = await import("../src/lib/glossary");
const { processSteps } = await import("../src/lib/process");
const { gallery: siteGallery } = await import("../src/lib/site");

// --- Görsel yükleme ---
const cacheDir = join(tmpdir(), "guler-seed-images");
if (!existsSync(cacheDir)) mkdirSync(cacheDir, { recursive: true });

const assetCache = new Map(); // url -> sanity asset ref

async function uploadImage(url, alt) {
  if (assetCache.has(url)) return assetCache.get(url);
  console.log(`  > image: ${url.slice(-60)}`);
  const fileName = url.split("/").pop().split("?")[0];
  const localPath = join(cacheDir, encodeURIComponent(fileName));
  if (!existsSync(localPath)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`fetch ${url}: ${res.status}`);
    await pipeline(Readable.fromWeb(res.body), createWriteStream(localPath));
  }
  const asset = await client.assets.upload("image", createReadStream(localPath), {
    filename: fileName,
  });
  const ref = {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    ...(alt ? { alt } : {}),
  };
  assetCache.set(url, ref);
  return ref;
}

const slugify = (s) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ş", "s")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// --- Kategoriler ---
console.log("Kategoriler...");
const categoryRefs = {};
for (let i = 0; i < categories.length; i++) {
  const c = categories[i];
  const _id = `category-${c.slug}`;
  await client.createOrReplace({
    _id,
    _type: "category",
    title: c.title,
    slug: { _type: "slug", current: c.slug },
    intro: c.intro,
    order: i,
  });
  categoryRefs[c.slug] = _id;
}

// --- Modeller ---
console.log("Modeller...");
const modelRefs = {}; // slug -> _id
for (let ci = 0; ci < categories.length; ci++) {
  const cat = categories[ci];
  for (let mi = 0; mi < cat.models.length; mi++) {
    const m = cat.models[mi];
    const _id = `model-${m.slug}`;
    console.log(`  ${m.name}`);
    const image = await uploadImage(m.image, m.name);
    const galleryRefs = [];
    for (const g of m.gallery ?? []) {
      const r = await uploadImage(g, m.name);
      galleryRefs.push({ ...r, _key: `g-${galleryRefs.length}` });
    }
    await client.createOrReplace({
      _id,
      _type: "model",
      name: m.name,
      slug: { _type: "slug", current: m.slug },
      category: { _type: "reference", _ref: categoryRefs[cat.slug] },
      area: m.area,
      layout: m.layout,
      bath: m.bath,
      capacity: m.capacity,
      levels: m.levels,
      deliveryTime: m.deliveryTime,
      highlight: m.highlight,
      description: m.description,
      longDescription: m.longDescription,
      features: m.features,
      includes: m.includes,
      options: m.options,
      image,
      gallery: galleryRefs,
      order: mi,
    });
    modelRefs[m.slug] = _id;
  }
}

// --- Blog yazıları ---
console.log("Blog yazıları...");
for (const p of posts) {
  const _id = `post-${p.slug}`;
  console.log(`  ${p.title}`);
  const image = await uploadImage(p.image, p.title);
  await client.createOrReplace({
    _id,
    _type: "post",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
    image,
    body: p.body,
  });
}

// --- Referanslar ---
console.log("Referanslar...");
for (const t of testimonials) {
  const _id = `testimonial-${t.id}`;
  await client.createOrReplace({
    _id,
    _type: "testimonial",
    name: t.name,
    city: t.city,
    projectType: t.projectType,
    ...(t.modelSlug && modelRefs[t.modelSlug]
      ? {
          model: {
            _type: "reference",
            _ref: modelRefs[t.modelSlug],
          },
        }
      : {}),
    rating: t.rating,
    quote: t.quote,
    date: t.date,
    featured: t.featured ?? false,
  });
}

// --- SSS ---
console.log("SSS grupları...");
for (let i = 0; i < faqGroups.length; i++) {
  const g = faqGroups[i];
  const _id = `faq-${g.slug}`;
  await client.createOrReplace({
    _id,
    _type: "faqGroup",
    title: g.title,
    slug: { _type: "slug", current: g.slug },
    order: i,
    items: g.items.map((it, idx) => ({
      _type: "faq",
      _key: `q-${idx}`,
      q: it.q,
      a: it.a,
    })),
  });
}

// --- Sözlük ---
console.log("Sözlük terimleri...");
for (const t of glossary) {
  const _id = `term-${slugify(t.term)}`;
  await client.createOrReplace({
    _id,
    _type: "term",
    term: t.term,
    definition: t.definition,
    related: t.related ?? [],
  });
}

// --- Süreç adımları ---
console.log("Süreç adımları...");
for (let i = 0; i < processSteps.length; i++) {
  const s = processSteps[i];
  const _id = `processStep-${s.number}`;
  await client.createOrReplace({
    _id,
    _type: "processStep",
    number: s.number,
    title: s.title,
    duration: s.duration,
    description: s.description,
    weCheck: s.weCheck,
    weNeed: s.weNeed,
    order: i,
  });
}

// --- Anasayfa galerisi ---
console.log("Galeri görselleri...");
for (let i = 0; i < siteGallery.length; i++) {
  const url = siteGallery[i];
  const _id = `galleryImage-${i}`;
  const image = await uploadImage(url, `Galeri ${i + 1}`);
  await client.createOrReplace({
    _id,
    _type: "galleryImage",
    image,
    caption: `Tamamlanan projeden kare ${i + 1}`,
    order: i,
  });
}

console.log("\n✓ Tüm içerik Sanity'e yüklendi.");
console.log(`Studio: https://${projectId}.sanity.studio  veya  /admin`);
