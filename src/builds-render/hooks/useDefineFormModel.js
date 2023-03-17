import { shallowReactive, reactive, onUnmounted, computed, unref, toRef, ref } from "vue";
import set from "lodash.set";
import get from "lodash.get";
import { GLOBAL_FORM_CONFIG } from "../utils/helper";

export const formRefs = shallowReactive({});
export const forms = reactive({});
export const rules = reactive({});

export function useGetForm(formName) {
  if (!formRefs[formName]) {
    formRefs[formName] = null;
  }

  const formRef = toRef(formRefs, formName); // 使用toRef可以保证绑定到ref之后同步到formRefs对象
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
    message: requiredMessage || `[${field}]字段为必填项`,
    trigger: ["blur", "change"]
  });

  if (!Reflect.has(rules, formName)) {
    set(forms, formName, {});
  }

  set(rules, [formName, field], xRules);
}

/**
 * 定义 AFormItem 表单项相关属性，自动组成`FormData`对象
 * @param {{ id: string; options: { [key: string]:any }; name: string; nameAlias?: string; childrenList?: []}} widget
 * @param {string} 默认值key，在设计器没有可以配置默认值的情况下可以不传递
 * @example
 * ```javascript
 * const { modelValue, model } = useDefineFormModel(props.widget, '默认值key')
 *
 * // 如果有多个双向绑定，请自己定义
 * // const modelValue2 = toRef(formItem, 'modelValue2')
 * <a-input v-model:value="modelValue">
 * ```
 */
export function useDefineFormModel(widget, defaultValueKey) {
  const { formName } = widget[GLOBAL_FORM_CONFIG];

  const { required, field, [defaultValueKey]: defaultValue } = widget.options;

  const model = toRef(widget, "options");

  const readonly = computed(() => {
    const form = widget[GLOBAL_FORM_CONFIG];
    return unref(form).formReadonly || model.readonly;
  });

  const disabled = computed(() => {
    const form = widget[GLOBAL_FORM_CONFIG];
    return unref(form).formDisabled || model.disabled;
  });

  const size = computed(() => {
    const form = widget[GLOBAL_FORM_CONFIG];
    return unref(form).formSize || model.size || "default";
  });

  if (!field) {
    return {
      model,
      readonly,
      disabled,
      size
    };
  }

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
    model,
    modelValue,
    readonly: computed(() => {
      const form = widget[GLOBAL_FORM_CONFIG];
      return unref(form).formReadonly || model.readonly;
    }),
    disabled: computed(() => {
      const form = widget[GLOBAL_FORM_CONFIG];
      return unref(form).formDisabled || model.disabled;
    }),
    size: computed(() => {
      const form = widget[GLOBAL_FORM_CONFIG];
      return unref(form).formSize || model.size || "default";
    })
  };
}
