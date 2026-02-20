import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  pages,
};
