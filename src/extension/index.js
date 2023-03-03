const extension = import.meta.glob("./**/index.js", { eager: true });
export default {
  install: app => {
    Object.keys(extension).forEach(key => {
      app.use(extension[key].default);
    });
  }
};
