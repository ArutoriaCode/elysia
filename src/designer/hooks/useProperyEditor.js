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
    formField: "field-input",
    field: "field-input",
    inputValue: "text-input",
    readonly: "switch",
    disabled: "switch",
    formReadonly: "switch",
    formDisabled: "switch",
    label: "text-input",
    allowClear: "switch",
    maxlength: "input-number",
    size: "selecter",
    formSize: "selecter",
    required: "rules",
    formRefName: "text-input",
    selectOptions: "select-options-editor",
    gutter: "input-number",
    flex: "switch",
    align: "selecter",
    justify: "selecter",
    wrap: "switch",
    cols: "col-editor",
    span: "span-input",
    pull: "input-number",
    push: "input-number",
    offset: "input-number",
    optionType: "selecter",
    starCount: "input-number",
    autofocus: "switch",
    controls: "switch",
    keyboard: "switch",
    stringMode: "switch",
    min: "input-number",
    max: "input-number",
    step: "input-number",
    formatter: "prop-func-editor",
    parser: "prop-func-editor",
    dots: "switch",
    range: "switch",
    reverse: "switch",
    sliderStep: "input-number",
    tooltipPlacement: "selecter",
    tooltipVisible: "switch",
    vertical: "switch",
    loading: "switch",
    checkedChildren: "text-input",
    unCheckedChildren: "text-input"
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
