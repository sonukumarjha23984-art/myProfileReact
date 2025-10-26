import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      ["@"]: "/src",
    },
  },
  plugins: [react()],
  base: "/myprofile/",
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
  },
  assetsInclude: ['**/*.otf']
});
