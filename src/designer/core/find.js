import get from "lodash.get";
import store from "./store";
import { isObject, hasProp } from "@/utils/index.js";

/**
 * 通过组件schema中所带的path属性路径来查找到某个组件
 * @param {Array<string> | { id: string; path: Array<string> }} pathList
 * @returns {Reactive<{ id: string; childrenList?:[]; name: string; type: string; options: {} }>}
 */
export function find(indexInParentList) {
  if (isObject(indexInParentList) && hasProp(indexInParentList, "path")) {
    // 防止传递过来了组件对象
    indexInParentList = indexInParentList.path;
  }

  if (!Array.isArray(indexInParentList)) {
    indexInParentList = [indexInParentList];
  }

  if (indexInParentList.length === 1 && indexInParentList.includes("root")) {
    return store;
  }

  const fullPathList = [];
  indexInParentList.forEach(path => {
    if (path === "root") {
      return;
    } else {
      fullPathList.push("childrenList", path);
    }
  });

  return { ...get(store, fullPathList), path: indexInParentList };
}

/**
 * 查找到某个组件的父组件并返回
 *
 * TODO: 返回的是一个对象，如果需要在该父组件添加子组件，请在对象属性`childrenList`添加
 *
 * @param {Array<string> | { id: string; path: Array<string> }} indexInParentList
 * @returns {{ id: string; childrenList?:[]; name: string; type: string; options: {}, path: Array<string>}}
 */
export function findParent(indexInParentList) {
  if (isObject(indexInParentList) && hasProp(indexInParentList, "path")) {
    // 防止传递过来了是组件对象
    indexInParentList = indexInParentList.path;
  }

  const isRoot = indexInParentList.length <= 2 && indexInParentList[0] === "root";
  if (isRoot) {
    return store;
  }

  const findPath = indexInParentList.slice(0, indexInParentList.length - 1); // 寻找的是父级，所以去掉本层级的路径
  return find(findPath);
}
