import store from "~core/store";
import useReactive from "../../hooks/useReactive";
import { computed, getCurrentInstance, onUnmounted, toRef } from "vue";
import { uniqueField } from "../core/store";
import { extractClassName } from "@/utils";

// 获取设计器的全局配置
export default function useGlobalSetting() {
  const ctx = getCurrentInstance();
  const [widget] = useReactive(ctx.props.widget, true);
  const [model] = useReactive(widget.options, true);

  let field = toRef(model, "field");
  if (Reflect.has(model, "formField")) {
    field = toRef(model, "formField");
  }

  // 记录唯一标识，用于全局校验
  uniqueField[widget.id] = field;
  onUnmounted(() => {
    delete uniqueField[widget.id];
  });

  // 整个表单是否只读
  const formIsReadonly = computed(() => {
    return store.options.formReadonly || model.readonly;
  });

  // 整个表单是否禁用
  const formIsDisabled = computed(() => {
    return store.options.formDisabled || model.disabled;
  });

  // 表单输入控件全局大小设置
  const size = computed(() => store.options.formSize || model.size || "default");

  // 全局定义的样式
  const className = computed(() => {
    if (!Array.isArray(model.className)) {
      return [];
    }

    return extractClassName(model.className);
  });

  return {
    readonly: formIsReadonly,
    disabled: formIsDisabled,
    className,
    size,
    model
  };
}
