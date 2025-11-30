import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "client",
  base: "/yunybeautysalon/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "../docs",
  },
});
