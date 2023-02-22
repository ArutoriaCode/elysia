import { defineAsyncComponent, unref } from "vue";
import propertyCN from './property-cn.js'

export const COMMON_KEY_NAME = "BASE_PROPERTYS";
export const EVENT_KEY_NAME = "EVENT_PROPERTYS";
const PROPERTYS = {
  [COMMON_KEY_NAME]: {
    title: "text-input",
    text: "text-input",
    type: 'type-select',
    hidden: 'switch'
  },
  [EVENT_KEY_NAME]: {
    onClick: "js-code-editor"
  }
};

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
          propertyCN: propertyCN[prop],
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
        propertyCN: propertyCN[propertys],
        module: defineAsyncComponent(modules[name]) // 异步组件需要defineAsyncComponent包裹返回
      });
    }
  }

  return components;
}
