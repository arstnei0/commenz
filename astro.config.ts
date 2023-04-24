import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), tailwind()],
  output: "server",
  adapter: vercel({})
});