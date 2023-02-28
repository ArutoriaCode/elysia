import Text from "./text.vue";
import { COMMON_KEY_NAME, FIELD_TYPE, addSchema } from "@/designer/utils/helper";
import { defineAsyncComponent } from "vue";
import { v4 as uuidv4 } from "uuid";
import useAlias from "../../designer/hooks/useAlias";

addSchema(FIELD_TYPE, {
  id: uuidv4(),
  name: "text",
  nameAlias: useAlias([COMMON_KEY_NAME, "text"], "文本"),
  type: FIELD_TYPE,
  icon: defineAsyncComponent(() => import("@ant-design/icons-vue/GithubOutlined")),
  options: {
    text: "扩展字段",
    hidden: false
  }
});

export default Text;
