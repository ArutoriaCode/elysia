import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/elysia/" : "/",
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    visualizer({
      emitFile: false,
      file: "stats.html"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "install-builds.js"),
      name: "ElysiaBuildsRender",
      fileName: format => `render.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "ant-design-vue"],
      output: {
        globals: {
          vue: "Vue",
          "ant-design-vue": "antd"
        },
        assetFileNames: "elysia-render.style.css"
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/builds-render/index.less";'
      }
    }
  }
});
