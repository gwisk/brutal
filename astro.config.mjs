import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import { remarkReadingTime } from './remark-reading-time.mjs';
import compress from "astro-compress";
import { astroImageTools } from "astro-imagetools";
import vue from "@astrojs/vue";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: process.env.VERCEL_ENV === 'production' ? 'https://brutal.elian.codes/' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3001/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), vue(), astroImageTools, robotsTxt(), compress()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});