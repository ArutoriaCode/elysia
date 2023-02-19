import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElysiaDesigner from "./designer/index";

createApp(App).use(ElysiaDesigner).mount("#app");
