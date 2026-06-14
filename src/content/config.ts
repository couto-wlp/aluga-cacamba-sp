import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    capacity: z.string(),
    dimensions: z.string(),
    priceInfo: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'servicos': servicosCollection,
};
