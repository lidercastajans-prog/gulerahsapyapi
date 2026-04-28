import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "processStep",
  title: "Süreç Adımı",
  type: "document",
  fields: [
    defineField({
      name: "number",
      title: "Adım numarası",
      type: "string",
      description: "Örn: 01, 02, 03 ...",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Adım başlığı",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "duration",
      title: "Süre",
      type: "string",
      description: "Örn: 1-2 hafta",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "weCheck",
      title: "Bizim sorumluluğumuz",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "weNeed",
      title: "Sizden beklediğimiz",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "order",
      title: "Sıra",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "duration" },
    prepare: ({ title, subtitle }) => ({
      title: `${title}`,
      subtitle,
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
