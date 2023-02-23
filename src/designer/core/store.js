import { reactive, isReactive } from "vue";
import { v4 as uuidv4 } from "uuid";

/**
 * 重新计算某个组件在`childrenList`的路径信息
 *
 * 使用示例：
 * ```javascript
 * import store from 'path/store';
 *
 * const newWidget = { ...省略 } // 要存储到 设计器渲染响应式对象 的数据
 *
 * const { path, childrenList } = store
 * store.childrenList = computedPath([...childrenList, newWidget], path) // 重新计算路径
 *
 * // 假设 store.childrenList = [{ childrenList: [{ childrenList: [], ...省略 }] }]
 * const { path, childrenList } = store.childrenList[0]
 *
 * // 同样要重新计算路径
 * store.childrenList[0].childrenList = computedPath([...childrenList, newWidget], path)
 * ```
 */
export function computedPath(childrenList, indexInParent = []) {
  return childrenList.map((v, index) => {
    v.path = [...indexInParent, index];
    if (Array.isArray(v.childrenList)) {
      v.childrenList = computedPath(v.childrenList, v.path);
    }

    return isReactive(v) ? v : reactive(v);
  });
}

/**
 * 设计器渲染响应式对象
 */
const schemaJson = reactive({
  id: uuidv4(),
  name: "a-form",
  childrenList: [],
  path: [],
  options: {
    globalStyles: "",
    onMounted: "",
    onUnmounted: ""
  }
});

export default schemaJson;
