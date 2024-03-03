import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import storiesPlugin from "https://deno.land/x/fresh_stories@0.0.12/stories-plugin.ts";

console.log("import.meta.url", import.meta.url);

export default defineConfig({
  build: {
    target: "safari12",
  },
  plugins: [tailwind(), storiesPlugin({ baseLocation: import.meta.url })],
});
