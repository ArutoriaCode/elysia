import { reactive, shallowRef, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import recorder from "./recorder";
import cloneDeep from "lodash.clonedeep";
import { CONTAINER_TYPE, FIELD_TYPE } from "../utils/helper";
import { isObject } from "../utils";

/**
 * 校验schema是否合法，支持单个schema对象或者多个schema对象的数组
 */
export function checkSchema(schema) {
  if (Array.isArray(schema)) {
    return schema.every(s => checkSchema(s));
  }

  if (!isObject(schema)) {
    return false;
  }

  const schemaKeys = ["id", "name", "options", "type"];
  const valid = schemaKeys.every(key => Reflect.has(schema, key));
  return valid && [CONTAINER_TYPE, FIELD_TYPE].includes(schema.type);
}

const defaultGlobalOptions = {
  // refs 中的名称
  formRefName: "formRef",
  // 全局样式
  globalStyle: "",
  // 全局表单项只读
  readonly: false,
  // 全局表单项禁用
  disabled: false,
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
  type: CONTAINER_TYPE,
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
