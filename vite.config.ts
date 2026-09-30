
import vinext from "vinext";
import { defineConfig } from "vite";
import { sites } from "./sites-vite-plugin";

export default defineConfig(async () => {
  const { cloudflare } = await import("@cloudflare/vite-plugin");
  return {
    plugins: [
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: { main: "./index.ts", compatibility_flags: ["nodejs_compat"] },
      }),
    ],
  };
});
