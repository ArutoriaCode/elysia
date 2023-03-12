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
      shape: [{ value: "default" }, { value: "circle" }, { value: "round" }]
    }
  },
  {
    id: uuidv4(),
    name: "divider", // 对应 components/fields/button/button.vue 的组件名称
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
    name: "text", // 对应 components/fields/button/button.vue 的组件名称
    type: FIELD_TYPE,
    icon: "text-icon", // from icons/
    options: {
      text: "文本",
      hidden: false
    }
  }
];

export default fields.map(v => {
  v.nameAlias = useAlias([PANEL_COMPONENT, v.name]);
  return v;
});
