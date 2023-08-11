import { z, defineCollection } from "astro:content";

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		author: z.string(),
		bio: z.string(),
		tags: z.array(z.string()),
		description: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		imgUrl: z.string(),
		draft: z.boolean().optional().default(false),
	}),
});

const feature = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		author: z.string(),
		bio: z.string(),
		tags: z.array(z.string()),
		description: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
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
  

export const collections = { 
	'blog': blog,
	// 'authors': authors, 
	'feature': feature 
};
