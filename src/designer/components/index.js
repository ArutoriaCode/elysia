export default {
  install(app) {
    const widgets = {
      ...import.meta.glob("./containers/**/*.vue", { eager: true }),
      ...import.meta.glob("./fields/**/*.vue", { eager: true })
    };

    Object.keys(widgets).forEach(key => {
      const name = key.replace(/\.\/.*\/(.*?)\.vue/, "elysia-$1");
      const comp = widgets[key].default;
      console.log("🚀 ~ file: index.js:11 ~ Object.keys ~ comp", comp)
      app.component(name, comp);
    });
  }
};
