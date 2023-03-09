import get from "lodash.get";
import set from "lodash.set";
import { reactive } from "vue";
import { COMMON_KEY_NAME, EVENT_KEY_NAME, PANEL_COMPONENT } from "../utils/helper";

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
    button: "按钮",
    text: "文本"
  }
});

/**
 * @param {string | string[]} key 用于新增、覆盖或者获取
 * @param {string} value 传值则新增或覆盖
 */
export default function useAlias(key, value) {
  let targetPath = key;
  let defaultValue = key;

  if (Array.isArray(key)) {
    defaultValue = [...key].pop();
  }

  // 无设置的值则为取值
  if (!value) {
    return get(aliasDict, targetPath, defaultValue);
  }

  set(aliasDict, key, value || defaultValue);
  return value || defaultValue;
}
