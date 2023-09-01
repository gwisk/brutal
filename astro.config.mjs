import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { remarkReadingTime } from './remark-reading-time.mjs';
import Compress from "astro-compress";
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: process.env.VERCEL_ENV === 'production' ? 'https://www.filmslop.com/' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3001/',
  trailingSlash: 'ignore',
  integrations: [
    sitemap(), 
    UnoCSS({
      injectReset: true
    }), 
    vue(), 
    robotsTxt(),
    Compress({ 
      Path: ["./target", "./build", "./dist"],
  })],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});