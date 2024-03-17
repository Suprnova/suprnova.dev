import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        ic: ["baseline-access-time", "outline-calendar-month"]
      }
    }),
    mdx()],
  site: 'https://suprnova.dev'
});