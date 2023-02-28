import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElysiaDesigner from "./designer/index";
import extension from "./extension";

createApp(App).use(ElysiaDesigner).use(extension).mount("#app");
