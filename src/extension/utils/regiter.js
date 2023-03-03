import { isObject } from "@/designer/utils";
import { PROPERTYS } from "@/designer/utils/helper";

/**
 * 注册组件并处理schema中的一些情况
 * @param {import("vue").App} app
 * @param {import("vue").Component} component
 * @param {{ id: string; name: string; nameAlias?: string; type: 'container' | 'field'; icon: string | import("vue").AsyncComponentOptions<T> | import("vue").AsyncComponentLoader<T>; options: { [key: string]: any } }} schemaJson
 * @param {{ [key: string]: { name: string; type: 'BASE_PROPERTYS' | 'EVENT_PROPERTYS'; component?: import("vue").AsyncComponentOptions<T> | import("vue").AsyncComponentLoader<T> }; }} propertys
 * @returns
 */
export default function (app, component, schemaJson, propertys = {}) {
  app.component("elysia-" + schemaJson.name, component);
  if (typeof schemaJson.icon !== "string" && isObject(schemaJson.icon)) {
    // 处理reactive将图标组件进行深层的响应式转换的问题，先行注册图标组件，并把icon对象转为组件名称的文本
    const iconName = schemaJson.name + "-icon";
    app.component(iconName, schemaJson.icon);
    schemaJson.icon = iconName;
  }

  Object.keys(propertys).forEach(key => {
    const { name, type, component } = propertys[key];
    if (component) {
      app.component(name, component);
    }

    PROPERTYS[type][key] = name;
  });

  return schemaJson;
}
