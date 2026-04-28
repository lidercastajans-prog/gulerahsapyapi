export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";
export const studioUrl = "/admin";

// Sanity henüz yapılandırılmamışsa siteyi kırmadan, kod-tabanlı fallback verisine
// düşmek için bu bayrağı kullanıyoruz.
export const isSanityConfigured = Boolean(projectId);

export function assertSanityConfigured() {
  if (!projectId) {
    throw new Error(
      "Sanity yapılandırılmamış. NEXT_PUBLIC_SANITY_PROJECT_ID env değişkenini ayarlayın."
    );
  }
}
