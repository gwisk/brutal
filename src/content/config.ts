import { z, defineCollection } from "astro:content";

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		author: z.string(),
		tags: z.array(z.string()),
		description: z.string(),
		pubDate: z.string(),
		imgUrl: z.string(),
		draft: z.boolean().optional().default(false),
	}),
});

const authors = defineCollection({
	type: 'data',
	schema: z.object({
	  name: z.string(),
	  bio: z.string(),
	})
});  
  

export const collections = { blog, authors };
