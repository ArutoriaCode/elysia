import cloneDeep from "lodash.clonedeep";
import { v4 as uuidV4 } from "uuid";
import { CONTAINER_TYPE } from "@/designer/utils/helper";
import { reactive } from "vue";
import { checkSchema } from "./store";

/**
 * 深度克隆组件信息
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

  if (!checkSchema(schema)) {
    return schema;
  }

  if (Array.isArray(schema)) {
    return schema.map(s => _cloneDeepSchema(s));
  }

  return _cloneDeepSchema(schema);
}

/** 用于绑定到 `vuedraggable` 库的clone钩子函数，如要克隆组件信息请使用`cloneSchema` */
export function clone(widget) {
  const cloneWidget = cloneDeep(widget);
  cloneWidget.id = uuidV4(); // id 必须重新生成并覆盖

  cloneWidget.options = {
    field: widget.name + Math.round(Math.random() * 100 * Math.random()) * 5,
    ...cloneWidget.options
  };

  if (cloneWidget.type === CONTAINER_TYPE && !Array.isArray(cloneWidget.childrenList)) {
    cloneWidget.childrenList = []; // 容器组件如未定义子组件列表，自动定义
  }

  return reactive(cloneWidget);
}
