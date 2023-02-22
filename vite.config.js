import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import Components from "unplugin-vue-components/vite";
import { splitVendorChunkPlugin } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "pproduction" ? "/elysia/" : "/",
  plugins: [vue(), vueJsx(), svgLoader(), Components(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    outDir: "docs",
    assetsDir: "elysia"
  }
});
