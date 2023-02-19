import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [vue(), vueJsx(), svgLoader(), Components()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
});
