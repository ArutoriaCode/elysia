import { FIELD_TYPE, PANEL_COMPONENT } from "@/designer/utils/helper";
import { v4 as uuidv4 } from "uuid";
import useAlias from "@/designer/hooks/useAlias";
import { seletedSchema } from "../select";

const fields = [
  {
    id: uuidv4(),
    name: "button", // 对应 components/fields/button/button.vue 的组件名称
    type: FIELD_TYPE,
    icon: "button-icon", // from icons/
    options: {
      text: "按钮",
      type: "default",
      shape: "default",
      size: "",
      ghost: false,
      disabled: false,
      block: false,
      onClick: ""
    },
    "x-selects": {
      type: [
        { value: "default" },
        { value: "primary" },
        { value: "danger" },
        { value: "link" }
      ],
      size: [{ value: "large" }, { value: "default" }, { value: "small" }],
      shape: [{ value: "default" }, { value: "circle" }, { value: "round" }]
    }
  },
  {
    id: uuidv4(),
    name: "text", // 对应 components/fields/text/text.vue 的组件名称
    type: FIELD_TYPE,
    icon: "text-icon", // from icons/
    options: {
      text: "文本",
      hidden: false
    }
  },
  {
    id: uuidv4(),
    name: "divider", // 对应 components/fields/divider/divider.vue 的组件名称
    type: FIELD_TYPE,
    icon: "divider-icon", // from icons/
    options: {
      title: "分割线",
      type: "horizontal",
      dashed: false,
      orientation: "center"
    },
    "x-selects": {
      type: [
        { value: "horizontal", label: "水平" },
        { value: "vertical", label: "垂直" }
      ],
      orientation: [{ value: "left" }, { value: "right" }, { value: "center" }]
    }
  },
  {
    id: uuidv4(),
    name: "input", // 对应 components/fields/input/input.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "input-icon", // from icons/
    options: {
      label: "Label",
      inputValue: "",
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      maxlength: undefined,
      size: undefined, // default
      readonly: false,
      disabled: false,
      allowClear: true,
      autofocus: false
    },
    "x-selects": {
      size: [{ value: "large" }, { value: "default" }, { value: "small" }]
    },
    "x-editor-props": {
      maxlength: {
        min: 1,
        precision: 0
      }
    }
  },
  {
    id: uuidv4(),
    name: "input-number", // 对应 components/fields/input-number/input-number.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "input-numeric-icon", // from icons/
    options: {
      label: "Label",
      numberValue: 1,
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      size: undefined, // default
      readonly: false,
      disabled: false,
      min: undefined,
      max: undefined,
      step: 1,
      allowClear: true,
      autofocus: false,
      controls: true,
      formatter: undefined,
      parser: undefined,
      keyboard: true,
      stringMode: false
    },
    "x-selects": {
      size: [{ value: "large" }, { value: "default" }, { value: "small" }]
    },
    "x-autocomplete": {
      formatter: [{ label: "value", info: "number | string" }],
      parser: [{ label: "value", info: "string" }]
    }
  },
  {
    id: uuidv4(),
    name: "select", // 对应 components/fields/select/select.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "down-select-icon", // from icons/
    options: {
      label: "Label",
      selectValue: [],
      selectOptions: "",
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      size: undefined, // default
      readonly: false,
      disabled: false,
      allowClear: true
    },
    "x-selects": {
      size: [{ value: "large" }, { value: "default" }, { value: "small" }]
    }
  },
  {
    id: uuidv4(),
    name: "checkbox", // 对应 components/fields/checkbox/checkbox.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "checkbox-icon", // from icons/
    options: {
      label: "Label",
      selectValue: [],
      selectOptions: JSON.stringify(
        [
          { label: "多选项一", value: "option1" },
          { label: "多选项二", value: "option2" }
        ],
        null,
        2
      ),
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      disabled: false
    }
  },
  {
    id: uuidv4(),
    name: "radio", // 对应 components/fields/radio/radio.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "radio-icon", // from icons/
    options: {
      label: "Label",
      selectValue: "",
      selectOptions: JSON.stringify(
        [
          { label: "单选项一", value: "option1" },
          { label: "单选项二", value: "option2" }
        ],
        null,
        2
      ),
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      optionType: "default",
      size: "default",
      disabled: false
    },
    "x-selects": {
      size: [{ value: "large" }, { value: "default" }, { value: "small" }],
      optionType: [{ value: "default" }, { value: "button" }]
    }
  },
  {
    id: uuidv4(),
    name: "rate", // 对应 components/fields/rate/rate.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "rate-icon", // from icons/
    options: {
      label: "Label",
      value: undefined,
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      disabled: false,
      allowClear: true,
      character: undefined,
      allowHalf: false,
      starCount: 5
    }
  },
  {
    id: uuidv4(),
    name: "slider", // 对应 components/fields/slider/slider.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "slider-icon", // from icons/
    options: {
      label: "Label",
      value: 0,
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      disabled: false,
      vertical: false,
      min: 0,
      max: 100,
      sliderStep: 1,
      autofocus: false,
      range: false,
      reverse: false,
      tooltipVisible: false,
      tooltipPlacement: "top"
    },
    "x-selects": {
      tooltipPlacement: [
        { value: "top" },
        { value: "left" },
        { value: "right" },
        { value: "bottom" },
        { value: "topLeft" },
        { value: "topRight" },
        { value: "bottomLeft" },
        { value: "bottomRight" },
        { value: "leftTop" },
        { value: "leftBottom" },
        { value: "rightTop" },
        { value: "rightBottom" }
      ]
    },
    "x-editor-props": {
      sliderStep: () => {
        const { min, max } = seletedSchema.value;
        return {
          min,
          max
        };
      }
    }
  },
  {
    id: uuidv4(),
    name: "switch", // 对应 components/fields/switch/switch.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "switch-icon", // from icons/
    options: {
      label: "Label",
      value: 0,
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      disabled: false,
      size: undefined,
      autofocus: false,
      loading: false,
      checkedChildren: "开",
      checkedValue: true,
      unCheckedChildren: "关",
      unCheckedValue: false,
      checked: false
    },
    "x-selects": {
      size: [{ value: "default" }, { value: "small" }]
    }
  }
];

export default fields.map(v => {
  v.nameAlias = useAlias([PANEL_COMPONENT, v.name]);
  return v;
});
