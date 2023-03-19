import { CONTAINER_TYPE, PANEL_COMPONENT } from "@/designer/utils/helper";
import { v4 as uuidv4 } from "uuid";
import useAlias from "@/designer/hooks/useAlias";
import { cloneSchema } from "../clone";

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
    childrenList: [
      cloneSchema({
        id: "col-1",
        name: "col",
        nameAlias: useAlias([PANEL_COMPONENT, "col"], "栅格列"),
        type: CONTAINER_TYPE,
        childrenList: [],
        options: {
          span: 12
        }
      }),
      cloneSchema({
        id: "col-1",
        name: "col",
        nameAlias: useAlias([PANEL_COMPONENT, "col"], "栅格列"),
        type: CONTAINER_TYPE,
        childrenList: [],
        options: {
          span: 12
        }
      })
    ],
    options: {
      hidden: false,
      cols: 2,
      gutter: 8
    }
  }
];

export default containers.map(v => {
  v.nameAlias = useAlias([PANEL_COMPONENT, v.name]);
  return v;
});
