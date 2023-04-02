import recorder from "./recorder";
import { reactive, shallowRef, computed, unref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { CONTAINER_TYPE, FIELD_TYPE } from "../utils/helper";
import { isObject } from "@/utils";

const defaultGlobalOptions = {
  // 表单名称 与field作用一致
  formField: "form" + Math.round(Math.random() * 100 * Math.random()) + Date.now(),
  // refs 中的名称
  formRefName: "formRef",
  // 全局样式
  globalStyle: "",
  // 当前表单使用到的样式名称（名称提取自globalStyle）
  className: [],
  // 全局表单项组件的大小
  formSize: "",
  // 全局表单项只读
  formReadonly: false,
  // 全局表单项禁用
  formDisabled: false,
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
  options: { ...defaultGlobalOptions },
  "x-selects": {
    formSize: [{ value: "large" }, { value: "default" }, { value: "small" }]
  }
});

/**
 * 所有组件的唯一标识
 * ```javascript
 * { id: Ref<string> }
 * ```
 */
export const uniqueField = {};

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

export function clearStore(record = true) {
  schemaJson.childrenList = [];
  schemaJson.options = { ...defaultGlobalOptions };

  if (record) {
    recorder.add(`清空数据`, "broom-icon");
  }
}

export function importSchemaJson(json) {
  json = unref(json);
  if (typeof json === "string") {
    try {
      json = JSON.parse(json);
    } catch (e) {
      return false;
    }
  }

  const result = checkSchema(json);
  if (!result) {
    return false;
  }

  Object.keys(schemaJson).map(key => {
    schemaJson[key] = json[key];
  });

  return true;
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
