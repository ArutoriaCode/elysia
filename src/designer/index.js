import ElysiaDesigner from "./index.vue";
import Icons from "./icons/index.jsx";
import LazyUse from "./lazy-use.js";
import Components from "./components/index";

export default {
  install(app) {
    app.component(ElysiaDesigner);
    app.use(Icons).use(LazyUse).use(Components);
  }
};
