import type { SchemaTypeDefinition } from "sanity";
import category from "./category";
import model from "./model";
import post from "./post";
import testimonial from "./testimonial";
import faqGroup from "./faqGroup";
import term from "./term";
import processStep from "./processStep";
import galleryImage from "./galleryImage";

export const schemaTypes: SchemaTypeDefinition[] = [
  category,
  model,
  post,
  testimonial,
  faqGroup,
  term,
  processStep,
  galleryImage,
];
