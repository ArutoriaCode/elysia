import useAlias from "@/designer/hooks/useAlias";
import { FIELD_TYPE, PANEL_COMPONENT } from '@/designer/utils/helper'
import { v4 as uuidv4 } from "uuid";

const fields = [
  {
    id: uuidv4(),
    name: "button", // 对应 components/fields/button/button.vue 的组件名称
    type: FIELD_TYPE,
    icon: "button-icon", // from icons/
    options: {
      text: "按钮",
      type: "default"
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

export default fields.map(v => {
  v.nameAlias = useAlias([PANEL_COMPONENT, v.name]);
  return v;
});;
