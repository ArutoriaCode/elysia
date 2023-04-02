import ElysiaBuildsRender from "./builds-render.vue";

ElysiaBuildsRender.install = app => {
  app.component("builds-render", ElysiaBuildsRender);
  const componets = import.meta.glob(["./components/**/*.vue", "!./components/grid/col.vue"], { eager: true });
  Object.keys(componets).forEach(key => {
    // 取出文件名并增加命名前缀；如果与设计器一同使用不能和设计器一样的命名前缀
    const name = key.replace(/\.\/components\/.*\/(.*?)\.vue$/, "ely-$1");
    app.component(name, componets[key].default);
  });
};

export default ElysiaBuildsRender;
