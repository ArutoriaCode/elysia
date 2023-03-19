import cloneDeep from "lodash.clonedeep";
import { v4 as uuidV4 } from "uuid";
import { CONTAINER_TYPE } from "@/designer/utils/helper";
import { reactive } from "vue";
import { checkSchema } from "./store";

function cloneWG(widget) {
  const newWidget = cloneDeep(widget);
  const uniqField =
    widget.name + Math.round(Math.random() * 100 * Math.random()) * Date.now();
  const isFormComp =
    widget.type === CONTAINER_TYPE && Reflect.has(widget.options, "formField");
  if (isFormComp) {
    delete newWidget.options.formField;
    newWidget.options = {
      formField: uniqField, // 让formField渲染成组件排在第一行
      ...newWidget.options
    };
  } else {
    delete newWidget.options.field;
    newWidget.options = {
      field: uniqField, // 让field渲染成组件排在第一行
      ...newWidget.options
    };
  }

  newWidget.id = uuidV4();
  return newWidget;
}

/**
 * 深度克隆组件信息
 *
 * @param {{ id: string, name: string; path: string[]; childrenList?: [] } | Array<{ id: string, name: string; path: string[], childrenList?: [] }>} schema 要
 */
export function cloneSchema(schema) {
  function _cloneDeepSchema(value) {
    const newWidget = cloneWG(value);

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
  const cloneWidget = cloneWG(widget);

  if (cloneWidget.type === CONTAINER_TYPE && !Array.isArray(cloneWidget.childrenList)) {
    cloneWidget.childrenList = []; // 容器组件如未定义子组件列表，自动定义
  }

  return reactive(cloneWidget);
}
