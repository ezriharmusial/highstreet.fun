import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import config from "./src/config/config.json";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import svelte from "@astrojs/svelte";
const defaultOptions = {
  emitCss: true,
  compilerOptions: { dev: true, hydratable: true },
  preprocess: vitePreprocess(),
};

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://highstreet.fun",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [react(), svelte(defaultOptions), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  })],
  markdown: {
    remarkPlugins: [],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },
});
