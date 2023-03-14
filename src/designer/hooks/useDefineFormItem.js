import store from "~core/store";
import { computed, unref } from "vue";

export default function useDefineFormItem(widget = {}) {
  const formIsReadonly = computed(() => {
    const { readonly = false } = unref(widget).options || {};
    return store.options.readonly && readonly;
  });

  const formIsDisabled = computed(() => {
    const { disabled = false } = unref(widget).options || {};
    return store.options.disabled && disabled;
  });

  const formItemSize = computed(
    () => widget.options.size || store.options.size || "default"
  );

  return {
    readonly: formIsReadonly,
    disabled: formIsDisabled,
    formItemSize
  };
}
