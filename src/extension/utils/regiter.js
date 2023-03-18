import useAlias from "../../designer/hooks/useAlias";
import useProperyEditor from "../../designer/hooks/useProperyEditor";
import { isObject } from "@/utils";
import { regiterComponet } from "../../designer/utils/helper";

/**
 * 注册组件并处理schema中的一些情况
 * @param {import("vue").Component} component
 * @param {{ id: string; name: string; nameAlias?: string; type: 'container' | 'field'; icon: string | import("vue").AsyncComponentOptions<T> | import("vue").AsyncComponentLoader<T> | import("vue").Component; options: { [key: string]: any } }} schemaJson
 * @param {{ [key: string]: { name: string; type: 'BASE_PROPERTYS' | 'EVENT_PROPERTYS'; component?: import("vue").AsyncComponentOptions<T> | import("vue").AsyncComponentLoader<T> | import("vue").Component }; }} propertys
 * @returns
 */
export default function (component, schemaJson, propertys = {}) {
  regiterComponet("elysia-" + schemaJson.name, component);

  if (typeof schemaJson.icon !== "string" && isObject(schemaJson.icon)) {
    // 先行注册图标组件，以免reactive将该图标组件进行深层次转换
    schemaJson.icon = regiterComponet(schemaJson.name + "-icon", schemaJson.icon);
  }

  Object.keys(propertys).forEach(key => {
    const { name, type, component, alias } = propertys[key];
    if (component) {
      regiterComponet(name, component);
    }

    useProperyEditor(type, key, name);
    if (alias) {
      useAlias([type, key], alias);
    }
  });

  return schemaJson;
}
