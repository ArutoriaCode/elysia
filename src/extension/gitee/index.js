import Gitee from "./gitee.vue";
import { COMMON_KEY_NAME, FIELD_TYPE } from "@/designer/utils/helper";
import { v4 as uuidv4 } from "uuid";
import useAlias from "@/designer/hooks/useAlias";
import addSchema from "@/designer/core/schema/addSchema";
import regiter from "../utils/regiter";

Gitee.name = "gitee"; // 与当前文件夹以及vue文件名对应
const GiteeSchema = {
  id: uuidv4(),
  // 注册组件的名称（前面会自动拼上'elysia-'）
  name: Gitee.name,
  // 组件栏中别名（最终展示的文本）
  nameAlias: useAlias([COMMON_KEY_NAME, Gitee.name], "码云"),
  // 组件是容器类型还是字段类型
  type: FIELD_TYPE,
  // 可导入图标组件或者已经全局注册的组件名称（string）
  icon: 'gitee-icon',
  // 可编辑的属性
  options: {
    link: "https://gitee.com/Sabermisaka/elysia",
    fontSize: 18,
    hidden: false
  }
};

Gitee.install = () => {
  const schema = regiter(Gitee, GiteeSchema);
  addSchema(schema); // 加入到设计器组件栏中去
};

export default Gitee;
