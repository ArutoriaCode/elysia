import store from "~core/store";
import useReactive from "../../hooks/useReactive";
import { computed, getCurrentInstance, onUnmounted, toRef } from "vue";
import { uniqueField } from "../core/store";

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

  const formIsReadonly = computed(() => {
    const { readonly = false } = model;
    return store.options.formReadonly && readonly;
  });

  const formIsDisabled = computed(() => {
    const { disabled = false } = model;
    return store.options.formDisabled && disabled;
  });

  const size = computed(() => store.options.formSize || model.size || "default");

  return {
    readonly: formIsReadonly,
    disabled: formIsDisabled,
    size,
    model
  };
}
