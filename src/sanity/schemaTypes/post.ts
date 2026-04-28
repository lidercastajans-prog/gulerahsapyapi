import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Yazısı",
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
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Özet",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "category",
      title: "Kategori (etiket)",
      type: "string",
      description: "Örn: Bakım, Karar Rehberi, Mevzuat",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Yayın tarihi",
      type: "date",
      validation: (r) => r.required(),
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
    defineField({
      name: "readTime",
      title: "Okuma süresi",
      type: "string",
      description: "Örn: 4 dk okuma",
    }),
    defineField({
      name: "image",
      title: "Kapak görseli",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt metin" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "İçerik (paragraflar)",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
  orderings: [
    {
      title: "Yeniden eskiye",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
