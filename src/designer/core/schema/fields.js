import { FIELD_TYPE, PANEL_COMPONENT } from "@/designer/utils/helper";
import { v4 as uuidv4 } from "uuid";
import useAlias from "@/designer/hooks/useAlias";

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
    selects: {
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
    selects: {
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
      allowClear: true
    },
    selects: {
      size: [{ value: "large" }, { value: "default" }, { value: "small" }]
    }
  },
  {
    id: uuidv4(),
    name: "select", // 对应 components/fields/input/input.vue 的组件名称
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
    selects: {
      size: [{ value: "large" }, { value: "default" }, { value: "small" }]
    }
  },
  {
    id: uuidv4(),
    name: "checkbox", // 对应 components/fields/input/input.vue 的组件名称
    type: FIELD_TYPE,
    isFormItem: true, // 表单项
    icon: "checkbox-icon", // from icons/
    options: {
      label: "Label",
      selectValue: [],
      selectOptions: JSON.stringify([
        { label: "选项一", value: "option1" },
        { label: "选项二", value: "option2" }
      ]),
      required: false,
      "x-rules": [],
      "x-required-message": "",
      "x-error-message": "",
      disabled: false
    }
  }
];

export default fields.map(v => {
  v.nameAlias = useAlias([PANEL_COMPONENT, v.name]);
  return v;
});
