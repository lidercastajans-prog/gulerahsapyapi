import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Anasayfa Galeri Görseli",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Görsel",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt metin" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "caption",
      title: "Açıklama (opsiyonel)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Sıra",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "caption", media: "image" },
    prepare: ({ title, media }) => ({
      title: title || "Galeri görseli",
      media,
    }),
  },
  orderings: [
    {
      title: "Sıra",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
