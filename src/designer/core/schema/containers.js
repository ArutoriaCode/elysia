import { CONTAINER_TYPE } from "../store";
import { v4 as uuidv4 } from "uuid";
const containers = [
  {
    id: uuidv4(),
    name: "card", // 对应 components/containers/card/card.vue 的组件名称
    type: CONTAINER_TYPE,
    icon: "card-icon", // from icons/
    childrenList: [],
    options: {
      title: "卡片",
      hidden: false,
      cardWidth: "100%"
    }
  }
];

export default containers;
