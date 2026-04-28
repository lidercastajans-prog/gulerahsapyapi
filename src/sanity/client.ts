import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

type SanityImageSource = Parameters<
  ReturnType<typeof createImageUrlBuilder>["image"]
>[0];

export const client = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
    })
  : null;

const builder = client ? createImageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource | string | null | undefined) {
  if (!source) return null;
  // Halihazırda mutlak URL geldiyse (fallback verisinde olduğu gibi) doğrudan döndür
  if (typeof source === "string") return source;
  if (!builder) return null;
  return builder.image(source).auto("format").fit("max").url();
}

/**
 * Sanity yapılandırılmamışsa null döndürür — çağıran kod fallback'e düşer.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = []
): Promise<T | null> {
  if (!client) return null;
  return client.fetch<T>(query, params, {
    next: { tags, revalidate: 60 },
  });
}
