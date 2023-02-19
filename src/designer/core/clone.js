import cloneDeep from "lodash.clonedeep";
import { v4 as uuidV4 } from "uuid";
import { CONTAINER_TYPE } from "./store";
import { reactive } from "vue";
import { isObject } from "../utils";

/**
 * 深度克隆组件信息
 * 
 * TODO: 如果要赋值到设计器渲染响应式对象（store）中，请注意调用`store`中`computedPath`重新计算路径
 * 
 * @param {{ id: string, name: string; path: string[]; childrenList?: [] } | Array<{ id: string, name: string; path: string[], childrenList?: [] }>} schema 要
 */
export function cloneSchema(schema) {
  function _cloneDeepSchema(value) {
    const newWidget = cloneDeep(value);
    newWidget.id = uuidV4(); // 更换id

    if (newWidget.type !== CONTAINER_TYPE) {
      return newWidget;
    }

    if (!Array.isArray(newWidget.childrenList)) {
      return newWidget;
    }

    if (newWidget.childrenList.length === 0) {
      return newWidget;
    }

    newWidget.childrenList = newWidget.childrenList.map(w => _cloneDeepSchema(w));
    return newWidget;
  }

  if (!isObject(schema) && !Array.isArray(schema)) {
    // 非对象和数组直接返回
    return schema;
  }

  // 单个组件及其子组件的克隆、路径重新计算
  if (isObject(schema)) {
    return _cloneDeepSchema(schema);
  }

  if (Array.isArray(schema) && schema.length === 0) {
    return schema;
  }

  return schema.map(s => _cloneDeepSchema(s));
}

/** 用于绑定到 `vuedraggable` 库的clone钩子函数，如要克隆组件信息请使用`cloneSchema` */
export function clone(widget) {
  const cloneWidget = cloneDeep(widget);
  cloneWidget.id = uuidV4(); // id 必须重新生成并覆盖

  cloneWidget.options = {
    field: cloneWidget.name + Math.round(Math.random() * 1000 * Math.random()) * 5, // 唯一字段标识
    ...(cloneWidget.options || {})
  };

  if (cloneWidget.type === CONTAINER_TYPE && !Array.isArray(cloneWidget.childrenList)) {
    cloneWidget.childrenList = []; // 容器组件如未定义子组件列表，自动定义
  }

  return reactive(cloneWidget);
}
