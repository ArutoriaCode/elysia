/** 左侧组件栏 */
export const PANEL_COMPONENT = "PANEL_COMPONENT";
/** 基础组件 */
export const FIELD_TYPE = "field";
/** 容器组件 */
export const CONTAINER_TYPE = "container";

/** 右侧配置-基础属性 */
export const COMMON_KEY_NAME = "BASE_PROPERTYS";

/** 右侧配置-事件 */
export const EVENT_KEY_NAME = "EVENT_PROPERTYS";

/**
 * 全局注册组件，并返回注册后的组件名称
 * @param {string} name
 * @param {import("vue").AsyncComponentOptions<T> | import("vue").AsyncComponentLoader<T> | import("vue").Component} component
 * @returns {string}
 */
export function regiterComponet(name, component) {
  const app = window.__elysia_app__;
  app.component(name, component);
  return name;
}
