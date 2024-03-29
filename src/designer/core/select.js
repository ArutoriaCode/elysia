import { find } from "./find";
import { shallowRef } from "vue";
import store, { checkSchema } from "./store";

/**
 * 当前选中的组件的schema
 *
 * 选中的组件可能包含着多个子组件，为了性能考虑，只对浅层做响应式处理
 */
export const seletedSchema = shallowRef({});

/**
 * 设置选中聚焦的组件
 * @param {Array | Object} value 组件对象或路径信息数组
 * @returns {null | { id: string; name: string; path: string; childrenList?: []}} 返回null 或者 选中的组件（响应式对象）
 */
export function setSelected(value) {
  if (value === undefined || value === null) {
    seletedSchema.value = {};
    return value;
  }

  if (Array.isArray(value)) {
    const widget = find(value);
    if (widget) {
      seletedSchema.value = { ...widget };
    }

    return widget;
  }

  if (checkSchema(value)) {
    const select = seletedSchema.value;
    if (select && select.id && select.id === value.id) {
      return; // 已经选中该组件了
    }

    seletedSchema.value = { ...value };
    return value;
  }

  return null;
}

/** 当前选中的组件是否为最顶级的表单 */
export function isRootForm() {
  return seletedSchema.value.id === store.id;
}
