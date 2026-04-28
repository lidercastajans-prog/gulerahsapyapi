import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { apiVersion, dataset, projectId, studioUrl } from "./src/sanity/env";

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId ?? "placeholder",
  dataset,
  title: "Güler Ahşap Yapı CMS",
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
