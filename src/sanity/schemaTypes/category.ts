import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Model Kategorisi",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "intro",
      title: "Tanıtım metni",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      title: "Sıra",
      type: "number",
      description: "Sıralama için. Küçük sayı önce gelir.",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
  orderings: [
    {
      title: "Sıra",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
