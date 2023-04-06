import { ref } from "vue";
import store from "./store";

/** 设计模式 */
export const DESIGN_TAB = "design";
/** 设计预览模式 */
export const BUILDS_TAB = "builds";
/** 设计源代码模式 */
export const JSONCODE_TAB = "jsoncode";

export const activeTab = ref(DESIGN_TAB);

const tabContent = ref("");

/** 更新当前模式所需要的内容 */
export function onUpdateTabContent() {
  if (activeTab.value === DESIGN_TAB) {
    tabContent.value = "";
    return;
  }

  tabContent.value = JSON.stringify(store, null, 2);
}

/** 切换模式视图 */
export function onChangeMountTab(tab) {
  const allow = [DESIGN_TAB, BUILDS_TAB, JSONCODE_TAB].includes(tab);
  if (!allow) {
    return;
  }

  if (activeTab.value === tab) {
    return;
  }

  activeTab.value = tab;
  onUpdateTabContent();
}

export default tabContent;
