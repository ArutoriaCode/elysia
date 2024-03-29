import get from "lodash.get";
import set from "lodash.set";
import { reactive } from "vue";
import { COMMON_KEY_NAME, EVENT_KEY_NAME, PANEL_COMPONENT } from "../utils/helper";

const aliasDict = reactive({
  [COMMON_KEY_NAME]: {
    globalStyle: "全局样式",
    customStyle: "组件样式",
    title: "标题",
    text: "文本",
    type: "类型",
    hidden: "隐藏",
    ghost: "幽灵按钮",
    shape: "按钮形状",
    block: "块级按钮",
    disabled: "禁用",
    dashed: "是否虚线",
    orientation: "标题位置",
    field: "唯一标识",
    formField: "表单唯一标识",
    inputValue: "默认值",
    numberValue: "默认值",
    readonly: "只读",
    disabled: "禁用",
    size: "大小",
    formReadonly: "表单只读",
    formDisabled: "表单禁用",
    formSize: "全局大小",
    label: "标签",
    maxlength: "文本最大长度",
    allowClear: "可清除",
    required: "是否必填",
    "x-rules": "校验规则",
    "x-required-message": "必填校验提示",
    "x-error-message": "校验错误提示",
    formRefName: "引用名称",
    selectOptions: "数据选项",
    width: "宽度",
    offset: "左侧间隔格数",
    span: "栅格宽度",
    pull: "栅格左移格数",
    push: "栅格右移格数",
    gutter: "栅格间隔",
    flex: "flex布局",
    align: "flex垂直对齐方式",
    justify: "flex水平排列方式",
    wrap: "自动换行",
    optionType: "单选框类型",
    starCount: "star 总数",
    autofocus: "自动聚焦",
    controls: "显示增减按钮",
    keyboard: "启用键盘操作",
    stringMode: "字符值模式",
    min: "最小值",
    max: "最大值",
    formatter: "展示格式",
    parser: "转换方式",
    step: "步数",
    sliderStep: "步长",
    range: "双滑块模式",
    reverse: "反向坐标轴",
    tooltipPlacement: "提示显示方向",
    tooltipVisible: "始终显示提示",
    vertical: "垂直方向展示",
    loading: "显示加载",
    checkedChildren: "选中展示内容",
    checkedValue: "选中值",
    unCheckedChildren: "非选中展示内容",
    unCheckedValue: "非选中值"
  },
  [EVENT_KEY_NAME]: {
    onClick: "点击事件",
    onMounted: "",
    onUnmounted: ""
  },
  [PANEL_COMPONENT]: {
    card: "卡片",
    button: "按钮",
    text: "文本",
    divider: "分割线",
    input: "输入框",
    select: "选择器",
    grid: "栅格",
    col: "栅格列",
    checkbox: "多选项",
    radio: "单选项",
    rate: "评分",
    "input-number": "计数器",
    slider: "滑动条",
    switch: "开关"
  }
});

/**
 * @param {string | string[]} key 用于新增、覆盖或者获取
 * @param {string} value 传值则新增或覆盖
 */
export default function useAlias(key, value) {
  let targetPath = key;
  let defaultValue = key;

  if (Array.isArray(key)) {
    defaultValue = [...key].pop();
  }

  // 无设置的值则为取值
  if (!value) {
    return get(aliasDict, targetPath, defaultValue);
  }

  set(aliasDict, key, value || defaultValue);
  return value || defaultValue;
}
