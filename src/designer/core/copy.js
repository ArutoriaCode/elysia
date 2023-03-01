import { cloneSchema } from "./clone";
import { findParent } from "./find";
import { setSelected } from "./select";
import { computedPath } from "./store";
import recorder from "./recorder";

/** 复制当前组件 */
export default function copy(widget) {
  const { path = [], nameAlias } = widget;
  const copyWidget = cloneSchema(widget);
  const parent = findParent(path);
  parent.childrenList = [...parent.childrenList, copyWidget]
  computedPath(parent); // 重新计算路径

  setSelected(copyWidget.path); // 添加后并聚焦
  recorder.add(`复制${nameAlias}组件`, "copy-icon");
}
