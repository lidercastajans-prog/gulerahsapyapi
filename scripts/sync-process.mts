/**
 * Sadece processStep dokümanlarını TS dosyasına göre Sanity'de günceller.
 * (Görsel yükleme yok, hızlı çalışır.)
 *
 * Çalıştırma: npx tsx --env-file=.env.local scripts/sync-process.mts
 */
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!projectId || !token) {
  console.error("Eksik env. seed-sanity.mts'te aynı kontroller var.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

const { processSteps } = await import("../src/lib/process");

console.log("Süreç adımları senkronize ediliyor...");
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
  console.log(`  ${s.number}: ${s.title}`);
}
console.log("✓ Bitti.");
