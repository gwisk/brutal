import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import { remarkReadingTime } from './remark-reading-time.mjs';
import partytown from "@astrojs/partytown";
import compress from "astro-compress";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: process.env.VERCEL_ENV === 'production' ? 'https://brutal.elian.codes/' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3001/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), partytown({
    config: {
      forward: ["datalayer.push"]
    }
  }), compress()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});