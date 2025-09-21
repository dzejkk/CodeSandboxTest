// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)

const blog = defineCollection({
    schema: z.object({
    title: z.string(),
    date: z.date(),
    thumbnail: z.string(),
    rating: z.number(),
  }),
});

export const collections = { blog };
