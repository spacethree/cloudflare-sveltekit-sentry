import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sentrySvelteKit({
      sourceMapsUploadOptions: {
        org: "space3",
        project: "cloudflare-sveltekit",
      },
    }),
    sveltekit(),
  ],
  ssr: {
    external: ["@sentry/sveltekit"],
  },
});
