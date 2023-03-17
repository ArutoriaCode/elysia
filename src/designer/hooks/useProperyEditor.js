import get from "lodash.get";
import set from "lodash.set";
import { COMMON_KEY_NAME, EVENT_KEY_NAME } from "../utils/helper";
import { reactive } from "vue";

const propertys = reactive({
  [COMMON_KEY_NAME]: {
    title: "text-input",
    text: "text-input",
    type: "selecter",
    shape: "selecter",
    hidden: "switch",
    ghost: "switch",
    disabled: "switch",
    block: "switch",
    dashed: "switch",
    orientation: "selecter",
    formName: "field-input",
    field: "field-input",
    inputValue: "text-input",
    readonly: "switch",
    disabled: "switch",
    formReadonly: "switch",
    formDisabled: "switch",
    label: "text-input",
    allowClear: "switch",
    maxlength: "text-input",
    size: "selecter",
    formSize: "selecter",
    required: "rules",
    formRefName: "text-input",
    selectOptions: "select-options-editor"
  },
  [EVENT_KEY_NAME]: {
    onClick: "js-editor",
    onMounted: "js-editor",
    onUnmounted: "js-editor"
  }
});

/**
 * 定义属性对应的编辑组件名称
 * @param {'BASE_PROPERTYS' | 'EVENT_PROPERTYS'} propType 属性所属类型（目前仅有基本属性和事件）
 * @param {string} propName 属性名称
 * @param {string} propComp 属性编辑所用的组件名称
 */
export default function useProperyEditor(propType, propName, propComp) {
  const compName = get(propertys, [propType, propName]);
  if (!propComp) {
    return compName;
  }

  if (compName) {
    console.warn(
      "Warning: Propery has already been defined And is not null or 'undefined'."
    );
  }

  set(propertys, [propType, propName], propComp);
  return propComp;
}
