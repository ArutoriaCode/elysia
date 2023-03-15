import { inject, reactive, onUnmounted, computed, unref, toRef, ref } from "vue";
import set from "lodash.set";
import get from "lodash.get";

export const forms = reactive({});
export const rules = reactive({});

export function useGetForm(formName) {
  const formRef = ref(null);
  return {
    formRef,
    formData: toRef(forms, formName, {}),
    rules: toRef(rules, formName, {})
  };
}

function handleRules(
  formName,
  {
    field,
    required,
    ["x-rules"]: xRules,
    ["x-required-message"]: requiredMessage,
    ["x-error-message"]: errorMessage
  }
) {
  if (!required) {
    return;
  }

  if (!Array.isArray(xRules)) {
    xRules = [];
  }

  xRules = xRules.map(rule => {
    if (typeof rule !== "string") {
      return rule;
    }

    const reg = new RegExp(rule);
    return {
      validator: async (_, value) => {
        return reg.test(value)
          ? Promise.resolve()
          : Promise.reject(errorMessage || `[${field}]字段校验错误`);
      },
      trigger: ["blur", "change"]
    };
  });

  xRules.unshift({
    required: true,
    message: requiredMessage,
    trigger: ["blur", "change"]
  });

  if (!Reflect.has(rules, formName)) {
    set(forms, formName, {});
  }

  set(rules, [formName, field], xRules);
}

/**
 * 定义 AFormItem 表单项相关属性，自动组成`FormData`对象
 * @param {{ widget: { id: string; field: string; options: {[key: string]: any}; [key: string]: any }, model: string }} param0
 * @example
 * ```javascript
 * const { modelValue, formItem } = useDefineFormItem({ widget: props.widget, model: '双向绑定的key' })
 *
 * // 如果有多个双向绑定，请自己定义
 * // const modelValue2 = toRef(formItem, 'modelValue2')
 * <a-input v-model:value="modelValue">
 * ```
 */
export function useDefineFormItem({ widget, defaultValueKey }) {
  const useGetParentForm = inject("elysia-form");

  const form = useGetParentForm(); // 返回响应式对象
  const { name: formName } = unref(form);

  const { required, field, [defaultValueKey]: defaultValue } = widget.options;

  if (!Reflect.has(forms, formName)) {
    set(forms, formName, {});
  }

  // 设置字段在响应式对象中，并设置可能有的默认值
  set(forms[formName], field, defaultValue); // 定义表单的字段名称和字段值

  // 处理字段的校验
  handleRules(formName, widget.options);

  onUnmounted(() => {
    delete forms[formName][field];
    if (required) {
      delete rules[formName][field];
    }
  });

  const target = get(forms, formName);
  const modelValue = toRef(target, field);
  return {
    modelValue,
    formItem: widget.options,
    readonly: computed(() => {
      return unref(form).options.readonly || widget.options.readonly;
    }),
    disabled: computed(() => {
      return unref(form).options.disabled || widget.options.disabled;
    }),
    size: computed(() => {
      return unref(form).options.size || widget.options.size || "default";
    })
  };
}
