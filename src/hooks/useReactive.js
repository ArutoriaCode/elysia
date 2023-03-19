import { reactive, watch } from "vue";
import { isObject } from "@/utils";
import set from "lodash.set";

/**
 *
 * @param {any} target
 * @param {boolean} syncChange 依赖更改后同步修改
 * @returns
 */
export default function useReactive(target, syncChange = false) {
  const reactiveData = reactive(target);
  const setData = (obj) => {
    if (typeof obj === "string") {
      reactiveData[obj] = val;
    }

    if (Array.isArray(obj)) {
      reactiveData.splice(0, reactiveData.length, ...obj);
    }

    if (!isObject(obj)) {
      return;
    }

    Object.keys(obj).map(key => {
      reactiveData[key] = obj[key];
    });
  };

  if (syncChange) {
    watch(
      () => target,
      val => setData(val),
      { deep: true }
    );
  }

  return [reactiveData, setData];
}
