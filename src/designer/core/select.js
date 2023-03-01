import { hasProp, isObject } from "../utils";
import { find } from "./find";
import { isReactive, shallowRef } from "vue";

/**
 * 当前选中的组件的schema
 *
 * 选中的组件可能包含着多个子组件，为了性能考虑，只对浅层做响应式处理
 */
export const seletedSchema = shallowRef({});

/**
 * 设置选中聚焦的组件
 * @param {Array | Object} value 包含着路径信息的组件对象或路径信息数组
 * @returns {null | { id: string; name: string; path: string; childrenList?: []}} 返回null 或者 选中的组件（响应式对象）
 */
export function setSelected(value) {
  console.log("🚀 ~ file: select.js:18 ~ setSelected ~ value:", value)
  if (value === undefined || value === null) {
    seletedSchema.value = {};
    return value;
  }

  let path = [];
  if (isObject(value) && hasProp(value, "path")) {
    path = value.path;
  } else {
    if (Array.isArray(value)) {
      path = value;
    } else {
      path = [value];
    }
  }

  const widget = find(path);
  seletedSchema.value = { ...widget };

  return widget;
}
