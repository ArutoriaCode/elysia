export default {
  install(app) {
    const widgets = {
      ...import.meta.glob("./containers/**/*.vue", { eager: true }),
      ...import.meta.glob("./fields/**/*.vue", { eager: true })
    };

    Object.keys(widgets).forEach(key => {
      const name = key.replace(/\.\/.*\/(.*?)\.vue/, "elysia-$1");
      const comp = widgets[key].default;
      app.component(name, comp);
    });
  }
};
