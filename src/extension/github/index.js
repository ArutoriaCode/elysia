import Github from "./github.vue";
import { COMMON_KEY_NAME, FIELD_TYPE } from "@/designer/utils/helper";
import { defineAsyncComponent } from "vue";
import { v4 as uuidv4 } from "uuid";
import useAlias from "@/designer/hooks/useAlias";
import addSchema from "@/designer/core/schema/addSchema";
import regiter from "../utils/regiter";

Github.name = "github"; // 与当前文件夹以及vue文件名对应
const GithubSchema = {
  id: uuidv4(),
  // 注册组件的名称（前面会自动拼上'elysia-'）
  name: Github.name,
  // 组件栏中别名（最终展示的文本）
  nameAlias: useAlias([COMMON_KEY_NAME, Github.name], "Github"),
  // 组件是容器类型还是字段类型
  type: FIELD_TYPE,
  // 可导入图标组件或者已经全局注册的组件名称（string）
  icon: defineAsyncComponent(() => import("@ant-design/icons-vue/GithubOutlined")),
  // 可编辑的属性
  options: {
    link: "https://arutoriacode.github.io/elysia/",
    fontSize: 18,
    hidden: false
  },
  // 自定义的选项，与自定义的属性编辑器搭配
  inputNumber: {
    fontSize: {
      formatter: value => `${value}px`,
      parser: value => value.replace("px", "")
    }
  }
};

// 注册自定义的属性编辑器
const GithubProperties = {
  fontSize: {
    // 属性编辑器组件注册名称：可以使用已经内置且注册的属性编辑器组件名称 又或者 使用下方component导入的组件
    name: "input-number",
    // 属性的类型 目前有基础属性以及事件属性
    type: COMMON_KEY_NAME,
    // 自定义属性编辑器组件需要自身导入
    component: defineAsyncComponent(() => import("./property/input-number.vue")),
    // useAlias([COMMON_KEY_NAME, 'fontSize', '字体大小'])
    alias: "字体大小"
  }
};

Github.install = () => {
  const schema = regiter(Github, GithubSchema, GithubProperties);
  addSchema(schema); // 加入到设计器组件栏中去
};

export default Github;
