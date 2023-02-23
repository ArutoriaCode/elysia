/** 基础组件 */
export const FIELD_TYPE = "field";
/** 容器组件 */
export const CONTAINER_TYPE = "container";

/** 右侧配置-基础属性 */
export const COMMON_KEY_NAME = "BASE_PROPERTYS";
/** 右侧配置-事件 */
export const EVENT_KEY_NAME = "EVENT_PROPERTYS";

/** 右侧配置-属性对标组件 */
export const PROPERTYS = {
  [COMMON_KEY_NAME]: {
    title: "text-input",
    text: "text-input",
    type: "type-select",
    hidden: "switch"
  },
  [EVENT_KEY_NAME]: {
    onClick: "js-code-editor"
  }
};

/** 左侧组件栏 */
export const PANEL_COMPONENT = "PANEL_COMPONENT";
