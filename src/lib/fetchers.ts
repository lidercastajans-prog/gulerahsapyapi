/**
 * Tüm içerik kaynakları için async fetcher'lar.
 *
 * Strateji: Sanity yapılandırılmışsa (`NEXT_PUBLIC_SANITY_PROJECT_ID` set) Sanity'den
 * çekiyoruz; yoksa kod-tabanlı fallback verisini döndürüyoruz. Bu sayede:
 *   - Yeni geliştirici/CI Sanity hesabı olmadan da `npm run build` yapabiliyor
 *   - Üretimde Sanity bağlanınca tek satır env değişikliğiyle aktifleşiyor
 *   - Sanity geçici olarak erişilemediğinde site kırılmıyor
 */

import { sanityFetch } from "@/sanity/client";
import {
  allCategoriesQuery,
  allFaqGroupsQuery,
  allGalleryImagesQuery,
  allModelsQuery,
  allPostsQuery,
  allProcessStepsQuery,
  allTermsQuery,
  allTestimonialsQuery,
  modelBySlugQuery,
  postBySlugQuery,
} from "@/sanity/queries";

import { categories as fallbackCategories } from "@/lib/models";
import type { Model, ModelCategory } from "@/lib/models";
import { posts as fallbackPosts } from "@/lib/posts";
import type { Post } from "@/lib/posts";
import { testimonials as fallbackTestimonials } from "@/lib/testimonials";
import type { Testimonial } from "@/lib/testimonials";
import { faqGroups as fallbackFaqGroups } from "@/lib/faqs";
import type { FaqGroup } from "@/lib/faqs";
import { glossary as fallbackGlossary } from "@/lib/glossary";
import type { Term } from "@/lib/glossary";
import { processSteps as fallbackProcess } from "@/lib/process";
import type { ProcessStep } from "@/lib/process";
import { gallery as fallbackGallery } from "@/lib/site";

export type GalleryImage = { src: string; alt: string };

// ---- MODELS ----------------------------------------------------------------

export async function getCategories(): Promise<ModelCategory[]> {
  const remote = await sanityFetch<ModelCategory[]>(allCategoriesQuery, {}, [
    "model",
    "category",
  ]);
  if (remote && remote.length > 0) return remote;
  return fallbackCategories.map((c) => ({
    ...c,
    models: c.models.map((m) => ({
      ...m,
      image: "/bungalow.png",
      gallery: ["/hero.png", "/bungalow.png", "/tiny-house.png"],
    })),
  }));
}

export async function getAllModels(): Promise<
  (Model & { category: ModelCategory })[]
> {
  const remote = await sanityFetch<(Model & { category: ModelCategory })[]>(
    allModelsQuery,
    {},
    ["model"]
  );
  if (remote && remote.length > 0) return remote;
  return fallbackCategories.flatMap((c) =>
    c.models.map((m) => ({
      ...m,
      image: "/bungalow.png",
      gallery: ["/hero.png", "/bungalow.png", "/tiny-house.png"],
      category: c,
    }))
  );
}

export async function getModelBySlug(
  slug: string
): Promise<(Model & { category: ModelCategory }) | null> {
  const remote = await sanityFetch<Model & { category: ModelCategory }>(
    modelBySlugQuery,
    { slug },
    ["model"]
  );
  if (remote) return remote;
  for (const cat of fallbackCategories) {
    const m = cat.models.find((x) => x.slug === slug);
    if (m)
      return {
        ...m,
        image: "/bungalow.png",
        gallery: ["/hero.png", "/bungalow.png", "/tiny-house.png"],
        category: cat,
      };
  }
  return null;
}

// ---- POSTS -----------------------------------------------------------------

export async function getAllPosts(): Promise<Post[]> {
  const remote = await sanityFetch<Post[]>(allPostsQuery, {}, ["post"]);
  if (remote && remote.length > 0) return remote;
  return fallbackPosts.map((p) => ({ ...p, image: "/bungalow.png" }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const remote = await sanityFetch<Post>(postBySlugQuery, { slug }, ["post"]);
  if (remote) return remote;
  const p = fallbackPosts.find((x) => x.slug === slug);
  return p ? { ...p, image: "/bungalow.png" } : null;
}

// ---- TESTIMONIALS ----------------------------------------------------------

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const remote = await sanityFetch<Testimonial[]>(
    allTestimonialsQuery,
    {},
    ["testimonial"]
  );
  if (remote && remote.length > 0) return remote;
  return fallbackTestimonials;
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const all = await getAllTestimonials();
  return all.filter((t) => t.featured);
}

// ---- FAQ -------------------------------------------------------------------

export async function getFaqGroups(): Promise<FaqGroup[]> {
  const remote = await sanityFetch<FaqGroup[]>(allFaqGroupsQuery, {}, ["faq"]);
  if (remote && remote.length > 0) return remote;
  return fallbackFaqGroups;
}

// ---- GLOSSARY --------------------------------------------------------------

export async function getGlossary(): Promise<Term[]> {
  const remote = await sanityFetch<Term[]>(allTermsQuery, {}, ["term"]);
  if (remote && remote.length > 0) return remote;
  return fallbackGlossary;
}

// ---- PROCESS ---------------------------------------------------------------

export async function getProcessSteps(): Promise<ProcessStep[]> {
  const remote = await sanityFetch<ProcessStep[]>(
    allProcessStepsQuery,
    {},
    ["processStep"]
  );
  if (remote && remote.length > 0) return remote;
  return fallbackProcess;
}

// ---- GALLERY ---------------------------------------------------------------

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const remote = await sanityFetch<GalleryImage[]>(
    allGalleryImagesQuery,
    {},
    ["galleryImage"]
  );
  if (remote && remote.length > 0) return remote;
  return fallbackGallery.map((src, i) => ({
    src,
    alt: `Tamamlanan projeden kare ${i + 1}`,
  }));
}
