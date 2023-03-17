import store from "~core/store";
import { computed, toRef, unref } from "vue";

export default function useGlobalSetting(widget = {}) {
  const model = toRef(widget, "options", {});
  const formIsReadonly = computed(() => {
    const { readonly = false } = unref(model);
    return store.options.formReadonly && readonly;
  });

  const formIsDisabled = computed(() => {
    const { disabled = false } = unref(model);
    return store.options.formDisabled && disabled;
  });

  const size = computed(() => store.options.formSize || unref(model).size || "default");

  return {
    readonly: formIsReadonly,
    disabled: formIsDisabled,
    size,
    model
  };
}
