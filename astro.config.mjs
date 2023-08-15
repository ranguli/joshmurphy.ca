import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx()
  ],
  site: "https://joshmurphy.ca/",
});
