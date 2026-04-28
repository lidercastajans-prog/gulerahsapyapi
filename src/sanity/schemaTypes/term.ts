import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "term",
  title: "Sözlük Terimi",
  type: "document",
  fields: [
    defineField({
      name: "term",
      title: "Terim",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "definition",
      title: "Tanım",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "related",
      title: "İlgili terimler",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: {
    select: { title: "term", subtitle: "definition" },
  },
  orderings: [
    {
      title: "Alfabetik",
      name: "termAsc",
      by: [{ field: "term", direction: "asc" }],
    },
  ],
});
