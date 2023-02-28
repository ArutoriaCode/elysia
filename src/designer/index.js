import ElysiaDesigner from "./index.vue";
import ElysiaBuilds from "@/builds-render/index";
import Icons from "./icons/index.jsx";
import LazyUse from "./lazy-use.js";
import Components from "./components/index";

export default {
  install(app) {
    app.use(Icons).use(LazyUse).use(Components).use(ElysiaBuilds);
    app.component(ElysiaDesigner);
  }
};
