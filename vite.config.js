import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import legacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/elysia/" : "/",
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    visualizer({
      emitFile: false,
      file: "stats.html"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/designer/components"),
      "@property": resolve(__dirname, "src/designer/components/property"),
    }
  },
  build: {
    outDir: "docs",
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const arr = id.toString().split("node_modules/")[1].split("/");
            switch (arr[0]) {
              case "@vue":
              case "ant-design-vue":
              case "@ant-design/icons-vue":
                return "module-" + arr[0];
                break;
              default:
                return "vendor";
                break;
            }
          }
        }
      }
    }
  }
});
