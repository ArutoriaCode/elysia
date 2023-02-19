import cloneDeep from "lodash.clonedeep";
import { findParent } from "./find";
import { cloneSchema } from "./clone";
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
  const parent = findParent(widget);
  const currentIndex = widget.path[widget.path.length - 1];
  const prevIndex = currentIndex - 1;

  const newChildrenList = cloneDeep(parent.childrenList);
  newChildrenList.splice(currentIndex, 1); // 从当前数组中删除
  newChildrenList.splice(prevIndex, 0, widget); // 删除后再往前面插入
  parent.childrenList = computedPath(newChildrenList, parent.path); // 移动后要重新计算路径信息
}
