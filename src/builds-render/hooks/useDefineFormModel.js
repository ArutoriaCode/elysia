import { inject, reactive, onUnmounted, computed, unref, toRef } from "vue";
import set from "lodash.set";
import get from "lodash.get";

export const forms = reactive({});

/**
 * 定义 AFormItem 表单项相关属性，自动组成`FormData`对象
 * @param {{ widget: { id: string; field: string; options: {[key: string]: any}; [key: string]: any }, model: string }} param0
 * @example
 * ```javascript
 * const { modelValue, formItem } = useDefineFormModel({ widget: props.widget, model: '双向绑定的key' })
 *
 * // 如果有多个双向绑定，请自己定义
 * // const modelValue2 = toRef(formItem, 'modelValue2')
 * <a-input v-model:value="modelValue">
 * ```
 */
export default function useDefineFormModel({ widget, defaultValueKey }) {
  const useGetParentForm = inject("elysia-form");

  const form = useGetParentForm(); // 返回响应式对象
  const { name: formName } = unref(form);

  let path = [];
  const field = widget.options.field;
  const defaultValue = get(widget.options, defaultValueKey, undefined);

  if (formName === "root") {
    set(forms, field, defaultValue); // 定义表单的字段名称和字段值
  } else {
    // 处理子表单 (目前还没开发)
    const subFormName = formName;
    if (Array.isArray(subFormName)) {
      // 多层子表单
      subFormName.map(subName => set(forms, subName, {}));
      path = [...subFormName];
    } else if (!forms[subFormName]) {
      // 第二层的子表单
      set(forms, subFormName, {});
      path = [subFormName];
    }

    // 定义表单的字段名称和字段值
    set(forms, [...path, field], defaultValue);
  }

  const target = get(forms, path, forms);
  const modelValue = toRef(target, field);
  onUnmounted(() => {
    delete target[field];
  });

  return {
    modelValue,
    readonly: computed(() => {
      return unref(form).options.readonly || widget.options.readonly;
    }),
    disabled: computed(() => {
      return unref(form).options.disabled || widget.options.disabled;
    }),
    size: computed(() => {
      return unref(form).options.size || widget.options.size || "default";
    }),
    formItem: widget.options
  };
}
