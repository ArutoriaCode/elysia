import buildsRender from "@/builds-render";

export default {
  install(app) {
    app.use(buildsRender);
  }
};
