import { FIELD_TYPE } from "../store";
import { v4 as uuidv4 } from "uuid";
const fields = [
  {
    id: uuidv4(),
    name: "button", // 对应 components/fields/button/button.vue 的组件名称
    type: FIELD_TYPE,
    icon: "button-icon", // from icons/
    childrenList: [],
    options: {
      text: "按钮",
      type: "primary"
    },
    selects: {
      type: [
        { value: 'default' },
        { value: 'primary' },
        { value: 'danger' },
      ]
    }
  }
];

export default fields;
