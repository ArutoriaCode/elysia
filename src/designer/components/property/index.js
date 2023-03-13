import { defineAsyncComponent, getCurrentInstance, unref } from "vue";
import useAlias from "@/designer/hooks/useAlias";
import usePropery from "../../hooks/usePropery";

function getPropertyType(type, prop) {
  return usePropery(type, prop);
}

let app = null;
const modules = import.meta.glob("./*.vue");
export default function importUseComponent(type, propertys) {
  const initApp = getCurrentInstance();
  if (initApp) {
    app = initApp;
  }

  const registeredComps = app && app.appContext ? app.appContext.components : {};
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
      propertyCN: useAlias([type, propertys]),
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
