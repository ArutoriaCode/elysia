import { reactive, isReactive, shallowRef, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import recorder from "./recorder";
import cloneDeep from "lodash.clonedeep";
import { CONTAINER_TYPE } from "../utils/helper";

/**
 * 回显`schemaJson`时调用
 */
export function computedPath(widget) {
  function _computed(childrenList, parentPath) {
    return childrenList.map((v, index) => {
      v.path = [...parentPath, index];
      if (v.type === CONTAINER_TYPE && Array.isArray(v.childrenList)) {
        _computed(v.childrenList, v.path);
      }
    });
  }

  const indexInParent = widget.path || ['root'];
  _computed(widget.childrenList, indexInParent);
}

const defaultGlobalOptions = {
  globalStyles: "",
  onMounted: "",
  onUnmounted: ""
};

/**
 * 设计器渲染响应式对象
 */
const schemaJson = reactive({
  id: uuidv4(),
  name: "a-form",
  childrenList: [],
  path: ["root"],
  options: { ...defaultGlobalOptions }
});

export function clearStore(record = true) {
  schemaJson.childrenList = [];
  schemaJson.options = { ...defaultGlobalOptions };

  if (record) {
    recorder.add(`清空数据`, "broom-icon");
  }
}

export const viewSchemaJson = shallowRef(null);
export const viewStatus = computed(() => !!viewSchemaJson.value);
export function viewJson() {
  viewSchemaJson.value = JSON.stringify(schemaJson, null, 2);
}

export const viewBuildsJson = shallowRef(null);
export const viewBuildsStatus = computed(() => !!viewBuildsJson.value);
export function viewBuilds() {
  viewBuildsJson.value = JSON.stringify(schemaJson, null, 2);
}

export default schemaJson;
