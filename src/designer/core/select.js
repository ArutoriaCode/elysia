import { find } from "./find";
import { shallowRef } from "vue";

/**
 * 当前选中的组件的schema
 *
 * 选中的组件可能包含着多个子组件，为了性能考虑，只对浅层做响应式处理
 */
export const seletedSchema = shallowRef({});

export function setSelected(path) {
  const widget = find(path);
  seletedSchema.value = { ...widget };
}
