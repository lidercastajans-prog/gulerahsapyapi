import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Müşteri Yorumu",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Müşteri adı",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "city",
      title: "Şehir",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "projectType",
      title: "Proje türü",
      type: "string",
      description: "Örn: Sahil Bungalov, Tiny House",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "model",
      title: "İlgili model (opsiyonel)",
      type: "reference",
      to: [{ type: "model" }],
    }),
    defineField({
      name: "rating",
      title: "Yıldız (1-5)",
      type: "number",
      validation: (r) => r.required().min(1).max(5).integer(),
      initialValue: 5,
    }),
    defineField({
      name: "quote",
      title: "Yorum metni",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Tarih",
      type: "date",
      validation: (r) => r.required(),
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
    defineField({
      name: "featured",
      title: "Anasayfada öne çıkar",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "projectType" },
  },
  orderings: [
    {
      title: "Yeniden eskiye",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
