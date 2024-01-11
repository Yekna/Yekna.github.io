import { z, defineCollection } from 'astro:content';

const experience = defineCollection({
    schema: () => z.object({
        title: z.string(),
        role: z.string(),
        date: z.string(),
        description: z.string(),
        stack: z.array(z.string()),
        href: z.string(),
    }),
});

const projects = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        stack: z.array(z.string()),
    }),
});

export const collections = {
    experience,
    projects
}