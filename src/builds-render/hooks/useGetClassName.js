import { computed, isReactive, isRef } from "vue";
import { extractClassName } from "../../utils";

/** 提供给一些只负责展示的组件 */
export default function (options) {
  if (!isRef(options) && !isReactive(options)) {
    !import.meta.env.PROD && console.warn("操作的对象非响应式对象，可能会造成一些问题！");
  }

  return computed(() => {
    if (!Array.isArray(options.className)) {
      return [];
    }

    return extractClassName(options.className);
  });
}
