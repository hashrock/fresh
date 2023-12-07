import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import storiesPlugin from "https://deno.land/x/fresh_stories@0.0.9/stories-plugin.ts";

export default defineConfig({
  build: {
    target: "safari12",
  },
  plugins: [tailwind(), storiesPlugin({ baseLocation: import.meta.url })],
});
