import { createApp } from "vue";
import "./style.less";
import App from "./App.vue";
import ElysiaDesigner from "./designer/index";
import extension from "./extension";

const app = createApp(App);
window.__elysia_app__ = app;

app.use(ElysiaDesigner).use(extension).mount("#app");