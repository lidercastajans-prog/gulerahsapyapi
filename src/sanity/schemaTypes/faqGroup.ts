import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "faqGroup",
  title: "SSS Grubu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Grup başlığı",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (anchor için)",
      type: "slug",
      options: { source: "title", maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      title: "Sıra",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "items",
      title: "Sorular",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [
            defineField({
              name: "q",
              title: "Soru",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "a",
              title: "Cevap",
              type: "text",
              rows: 4,
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "q" } },
        }),
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: "title", count: "items.length" },
    prepare: ({ title, count }: { title?: string; count?: number }) => ({
      title,
      subtitle: count != null ? `${count} soru` : undefined,
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
