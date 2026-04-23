import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    preview: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  pages,
  news,
};

