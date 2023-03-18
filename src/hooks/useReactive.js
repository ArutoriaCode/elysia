import { reactive } from "vue";
import { isObject } from "@/utils";

export default function useReactive(target) {
  const reactiveData = reactive(target);
  const setData = (obj, val) => {
    if (typeof obj === "string") {
      reactiveData[obj] = val;
    }

    if (!isObject(obj)) {
      return;
    }
    Object.keys(obj).map(key => {
      reactiveData[key] = obj[key];
    });
  };

  return [reactiveData, setData];
}
