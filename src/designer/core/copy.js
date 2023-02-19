import { cloneSchema } from "./clone";
import { findParent } from "./find";
import { setSelected } from "./select";
import { computedPath } from "./store";
import cloneDeep from "lodash.clonedeep";

/** 复制当前组件 */
export default function copy(widget) {
  const { path = [] } = widget;
  const copyWidget = cloneSchema(widget);
  const parent = findParent(path);
  console.log("🚀 ~ file: copy.js:12 ~ copy ~ path", path)
  console.log("🚀 ~ file: copy.js:12 ~ copy ~ parent", parent)
  const newChildrenList = [...parent.childrenList, copyWidget];
  parent.childrenList = computedPath(newChildrenList, parent.path); // 重新计算路径

  setSelected(copyWidget.path); // 添加后并聚焦
}
