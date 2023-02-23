import useAlias from "@/designer/hooks/useAlias";
import { v4 as uuidv4 } from "uuid";
import { CONTAINER_TYPE, PANEL_COMPONENT } from '@/designer/utils/helper'

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
  }
];

export default containers.map(v => {
  v.nameAlias = useAlias([PANEL_COMPONENT, v.name]);
  return v;
});
