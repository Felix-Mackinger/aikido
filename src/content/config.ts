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
    endDate: z.coerce.date().optional(),
    preview: z.string().optional(),
    type: z.enum(['news', 'event']).default('news'),
    location: z.string().optional(),
    display: z.enum(['modal', 'page']).default('page'),
    color: z.enum(['moss', 'sage', 'gold']).default('moss'),
    pdfs: z
      .object({
        de: z.string().optional(),
        en: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  pages,
  news,
};
