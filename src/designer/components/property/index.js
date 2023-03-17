import { defineAsyncComponent, unref } from "vue";
import useProperyEditor from "../../hooks/useProperyEditor";

function getPropertyType(type, prop) {
  return useProperyEditor(type, prop);
}

const modules = import.meta.glob("./*.vue");
export default function importUseComponent(type, propertys) {
  const app = window.__elysia_app__;
  const registeredComps = app && app._context ? app._context.components : {};
  const components = [];

  propertys = unref(propertys);
  if (Array.isArray(propertys) && propertys.length > 0) {
    // propertys = ['title', 'hidden']
    propertys.map(prop => components.push(...importUseComponent(type, prop)));
  }

  if (typeof propertys === "string") {
    const name = getPropertyType(type, propertys);
    const data = {
      type,
      property: propertys,
      module: null
    };

    // 已注册的组件
    if (registeredComps[name]) {
      data.module = name;
    } else {
      // modules = { './text-input.vue': () => import('./text-input.vue') }
      const key = "./" + name + ".vue";
      data.module = modules[key] ? defineAsyncComponent(modules[key]) : null;
    }

    if (data.module) {
      components.push(data);
    }
  }

  return components;
}
