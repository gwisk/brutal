import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { remarkReadingTime } from './remark-reading-time.mjs';
import compress from "astro-compress";
import sitemap from '@astrojs/sitemap';
import { astroImageTools } from "astro-imagetools";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: process.env.VERCEL_ENV === 'production' ? 'https://www.filmslop.com/' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3001/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), vue(), astroImageTools, robotsTxt(), compress()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});