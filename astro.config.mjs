import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});