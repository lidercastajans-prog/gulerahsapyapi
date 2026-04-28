// GROQ sorguları — Sanity Studio Vision aracında test edilebilir.

export const allModelsQuery = /* groq */ `
*[_type == "model"] | order(category->order asc, order asc) {
  "slug": slug.current,
  name,
  area,
  layout,
  bath,
  capacity,
  levels,
  deliveryTime,
  highlight,
  description,
  longDescription,
  features,
  includes,
  options,
  "image": image.asset->url,
  "gallery": gallery[].asset->url,
  category->{
    "slug": slug.current,
    title,
    intro
  }
}
`;

export const modelBySlugQuery = /* groq */ `
*[_type == "model" && slug.current == $slug][0] {
  "slug": slug.current,
  name,
  area,
  layout,
  bath,
  capacity,
  levels,
  deliveryTime,
  highlight,
  description,
  longDescription,
  features,
  includes,
  options,
  "image": image.asset->url,
  "gallery": gallery[].asset->url,
  category->{
    "slug": slug.current,
    title,
    intro
  }
}
`;

export const allCategoriesQuery = /* groq */ `
*[_type == "category"] | order(order asc) {
  "slug": slug.current,
  title,
  intro,
  "models": *[_type == "model" && references(^._id)] | order(order asc) {
    "slug": slug.current,
    name,
    area,
    layout,
    bath,
    capacity,
    levels,
    deliveryTime,
    highlight,
    description,
    longDescription,
    features,
    includes,
    options,
    "image": image.asset->url,
    "gallery": gallery[].asset->url
  }
}
`;

export const allPostsQuery = /* groq */ `
*[_type == "post"] | order(date desc) {
  "slug": slug.current,
  title,
  excerpt,
  category,
  "date": date,
  readTime,
  "image": image.asset->url,
  body
}
`;

export const postBySlugQuery = /* groq */ `
*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  excerpt,
  category,
  "date": date,
  readTime,
  "image": image.asset->url,
  body
}
`;

export const allTestimonialsQuery = /* groq */ `
*[_type == "testimonial"] | order(date desc) {
  "id": _id,
  name,
  city,
  projectType,
  "modelSlug": model->slug.current,
  rating,
  quote,
  "date": date,
  featured
}
`;

export const allFaqGroupsQuery = /* groq */ `
*[_type == "faqGroup"] | order(order asc) {
  "slug": slug.current,
  title,
  items[] { q, a }
}
`;

export const allTermsQuery = /* groq */ `
*[_type == "term"] | order(term asc) {
  term,
  definition,
  related
}
`;

export const allProcessStepsQuery = /* groq */ `
*[_type == "processStep"] | order(order asc) {
  number,
  title,
  duration,
  description,
  weCheck,
  weNeed
}
`;

export const allGalleryImagesQuery = /* groq */ `
*[_type == "galleryImage"] | order(order asc) {
  "src": image.asset->url,
  "alt": coalesce(image.alt, caption, "Galeri görseli")
}
`;
