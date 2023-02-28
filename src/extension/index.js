const extension = import.meta.glob("./**/index.js", { eager: true });
export default {
  install: app => {
    Object.keys(extension).forEach(key => {
      const name = key.replace(/\.\/(.*?)\/index\.js/, "elysia-render-$1");
      app.component(name, extension[key])
    })
  }
};
