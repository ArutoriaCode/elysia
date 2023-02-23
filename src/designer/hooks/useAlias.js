import { reactive } from "vue";
import get from "lodash.get";
import {
  COMMON_KEY_NAME,
  EVENT_KEY_NAME,
  PANEL_COMPONENT
} from "@/designer/utils/helper";

const aliasDict = reactive({
  [COMMON_KEY_NAME]: {
    title: "标题",
    text: "文本",
    type: "类型",
    hidden: "隐藏"
  },
  [EVENT_KEY_NAME]: {
    onClick: "点击触发"
  },
  [PANEL_COMPONENT]: {
    card: "卡片",
    button: "按钮"
  }
});

/**
 * @param {string} key 用于新增、覆盖或者获取
 * @param {string} value 传值则新增或覆盖
 */
export default function useAlias(key, value) {
  if ((key === "string" || Array.isArray(key)) && !value) {
    return get(aliasDict, key); // 取值
  }

  // 赋值
  if (typeof key === "string") {
    aliasDict[key] = value;
    return;
  }

  if (!Array.isArray(key)) {
    return;
  }

  let setValue = null;
  key.map(k => {
    if (setValue) {
      setValue = setValue[key];
      return;
    }
    setValue = aliasDict[key];
  });

  setValue = value;
  return;
}
