import recorder from "./recorder";
import cloneDeep from "lodash.clonedeep";
import { findParent } from "./find";
import { computedPath } from "./store";

/** 校验当前组件是否允许拖到目标组件下 */
export function checkMove(evt) {
  // _underlying_vm_ 是经过克隆函数后的响应式对象，也是最终要加入到拖拽目标所绑定的响应式列表
  const { _underlying_vm_: vm } = evt.dragged;
  const { futureIndex } = evt.draggedContext;
  const { component } = evt.relatedContext;

  const { path = [] } = component.componentData || {};
  vm.path = [...path, futureIndex]; // 记录各自在chilrenList列表的索引位置

  // pass
  return true;
}

/** 在父组件中向上移动 */
export function upMove(widget) {
  const { path, nameAlias } = widget;
  const currentIndex = path[path.length - 1];
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return;
  }

  const parent = findParent(path);
  const newChildrenList = cloneDeep(parent.childrenList);
  newChildrenList.splice(currentIndex, 1); // 从当前数组中删除
  newChildrenList.splice(prevIndex, 0, widget); // 删除后再往前面插入
  parent.childrenList = computedPath(newChildrenList, parent.path); // 移动后要重新计算路径信息

  recorder.add(`向上移动 ${nameAlias} 组件`, "history-up-icon");
}

/** 在父组件中向下移动 */
export function downMove(widget) {
  const { path, nameAlias } = widget;
  const parent = findParent(path);
  const currentIndex = path[path.length - 1];
  const nextIndex = currentIndex + 1;
  if (nextIndex > parent.childrenList.length) {
    return;
  }

  const newChildrenList = cloneDeep(parent.childrenList);
  newChildrenList.splice(currentIndex, 1); // 从当前数组中删除
  newChildrenList.splice(nextIndex, 0, widget);
  parent.childrenList = computedPath(newChildrenList, parent.path); // 移动后要重新计算路径信息

  recorder.add(`向下移动 ${nameAlias} 组件`, "history-down-icon");
}

/** 删除也算一种移动？ */
export function remove(widget) {
  const { path, nameAlias, id } = widget;
  const parent = findParent(path);
  if (parent) {
    const newChildrenList = parent.childrenList.filter(c => c.id !== id);
    parent.childrenList = computedPath(newChildrenList, parent.path);
    recorder.add(`删除 ${nameAlias} 组件`, "trash-icon", "var(--danger-color)");
  }
}
