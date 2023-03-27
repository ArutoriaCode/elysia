import { CONTAINER_TYPE, PANEL_COMPONENT } from "@/designer/utils/helper";
import { v4 as uuidv4 } from "uuid";
import useAlias from "@/designer/hooks/useAlias";
import { cloneSchema } from "../clone";

// 该组件不提供在左侧拖拽栏
export const colSchema = {
  id: "col-1",
  name: "col",
  nameAlias: useAlias([PANEL_COMPONENT, "col"]),
  type: CONTAINER_TYPE,
  childrenList: [],
  options: {
    responsive: false,
    offset: 0,
    span: 12,
    pull: 0,
    push: 0
  },
  "x-editor-props": {
    offset: {
      min: 0,
      max: 24,
      precision: 0
    },
    span: {
      min: 0,
      precision: 0
    },
    pull: {
      min: 0,
      precision: 0
    },
    push: {
      min: 0,
      precision: 0
    }
  }
};

const containers = [
  {
    id: uuidv4(),
    name: "card", // 对应 components/containers/card/card.vue 的组件名称
    type: CONTAINER_TYPE,
    icon: "card-icon", // from icons/
    childrenList: [],
    options: {
      title: "卡片标题",
      hidden: false,
      cardWidth: "100%"
    }
  },
  {
    id: uuidv4(),
    name: "grid", // 对应 components/containers/card/card.vue 的组件名称
    type: CONTAINER_TYPE,
    icon: "grid-icon", // from icons/
    childrenList: [cloneSchema(colSchema), cloneSchema(colSchema)],
    options: {
      hidden: false,
      cols: 2,
      gutter: 8,
      flex: false,
      align: "top",
      justify: "start",
      wrap: true
    },
    'x-selects': {
      align: [{ value: "top" }, { value: "middle" }, { value: "bottom" }],
      justify: [
        { value: "start" },
        { value: "end" },
        { value: "center" },
        { value: "space-around" },
        { value: "space-between" }
      ]
    },
    "x-editor-props": {
      gutter: {
        min: 0,
        max: 24,
        precision: 0,
        formatter: value => `${value}px`,
        parser: value => value.replace("px", "")
      }
    }
  }
];

export default containers.map(v => {
  v.nameAlias = useAlias([PANEL_COMPONENT, v.name]);
  return v;
});
