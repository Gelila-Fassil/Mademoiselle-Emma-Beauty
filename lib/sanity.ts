// lib/sanity.ts

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImage } from "@/types/sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2023-11-15",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}















