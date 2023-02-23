import { defineAsyncComponent, unref } from "vue";
import useAlias from "@/designer/hooks/useAlias";
import { PROPERTYS } from "@/designer/utils/helper";

function getPropertyType(type, prop) {
  if (Reflect.has(PROPERTYS[type], prop)) {
    return PROPERTYS[type][prop];
  }

  if (Reflect.has(PROPERTYS[type], prop)) {
    return PROPERTYS[type][prop];
  }
}

const modules = import.meta.glob("./*.vue");
export default function importUseComponent(type, propertys) {
  const components = [];
  propertys = unref(propertys);
  if (Array.isArray(propertys) && propertys.length > 0) {
    // propertys = ['title', 'hidden']
    propertys.map(prop => {
      const name = "./" + getPropertyType(type, prop) + ".vue";
      // modules = { './text-input.vue': () => import('./text-input.vue') }
      if (modules[name]) {
        components.push({
          type,
          property: prop,
          propertyCN: useAlias([type, prop]),
          module: defineAsyncComponent(modules[name]) // 异步组件需要defineAsyncComponent包裹返回
        });
      }
    });
  }

  if (typeof propertys === "string") {
    const name = "./" + getPropertyType(type, prop) + ".vue";
    if (modules[name]) {
      components.push({
        type,
        property: propertys,
        propertyCN: useAlias([type, propertys]),
        module: defineAsyncComponent(modules[name]) // 异步组件需要defineAsyncComponent包裹返回
      });
    }
  }

  return components;
}
