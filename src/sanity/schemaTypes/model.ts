import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "model",
  title: "Model",
  type: "document",
  groups: [
    { name: "general", title: "Genel" },
    { name: "specs", title: "Teknik" },
    { name: "content", title: "İçerik" },
    { name: "media", title: "Görseller" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Model adı",
      type: "string",
      group: "general",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "general",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "reference",
      group: "general",
      to: [{ type: "category" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "highlight",
      title: "Öne çıkan özellik (kısa)",
      type: "string",
      group: "general",
      description: "Modelin en ayırt edici tek cümlesi.",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "area",
      title: "Alan",
      type: "string",
      group: "specs",
      description: "Örn: 24 m²",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "layout",
      title: "Plan",
      type: "string",
      group: "specs",
      description: "Örn: 1+1",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "bath",
      title: "Banyo",
      type: "string",
      group: "specs",
      description: "Örn: 1 banyo",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "capacity",
      title: "Kapasite",
      type: "string",
      group: "specs",
      description: "Örn: 2-3 kişi",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "levels",
      title: "Kat",
      type: "string",
      group: "specs",
      description: "Örn: Tek kat + mezzanine",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "deliveryTime",
      title: "Teslim süresi",
      type: "string",
      group: "specs",
      description: "Örn: 5-7 hafta",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "description",
      title: "Kısa açıklama",
      type: "text",
      group: "content",
      rows: 3,
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "longDescription",
      title: "Detaylı açıklama (paragraflar)",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({
      name: "features",
      title: "Standart özellikler",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "includes",
      title: "Standart pakete dahil",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "options",
      title: "Eklenebilir opsiyonlar",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })],
    }),

    defineField({
      name: "image",
      title: "Ana görsel",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt metin" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galeri görselleri",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt metin" }],
        }),
      ],
    }),

    defineField({
      name: "order",
      title: "Sıra (kategori içinde)",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.title",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Kategori + sıra",
      name: "categoryOrder",
      by: [
        { field: "category.title", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
});
