import {
  shallowReactive,
  reactive,
  onUnmounted,
  computed,
  toRef,
  getCurrentInstance,
  watch
} from "vue";
import set from "lodash.set";
import get from "lodash.get";
import useReactive from "@/hooks/useReactive";
import { GLOBAL_FORM_CONFIG } from "../utils/helper";
import { extractClassName, insertCustomCssToHead } from "../../utils";
import useGetClassName from "./useGetClassName";

export const formRefs = shallowReactive({});
export const fieldRefs = shallowReactive({});
export const forms = reactive({});
export const rules = reactive({});

export function useGetForm(formField) {
  if (!formRefs[formField]) {
    formRefs[formField] = {};
  }

  const [formRef, setFormRef] = useReactive(formRefs[formField]); // 使用toRef可以保证绑定到ref之后同步到formRefs对象
  return {
    setFormRef,
    formRef,
    formData: toRef(forms, formField, {}),
    rules: toRef(rules, formField, {})
  };
}

function handleRules(
  formField,
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

  if (!Reflect.has(rules, formField)) {
    set(rules, formField, {});
  }

  set(rules, [formField, field], xRules);
}

/**
 * 定义 AFormItem 表单项相关属性，自动组成表单数据、生成校验规则、记录组件实例等操作
 *
 * ! 函数只允许在 setup() 调用
 *
 * @param {string} 默认值key，在设计器没有可以配置默认值的情况下可以不传递
 * @example
 * ```vue
 * <script setup>
 *  const { modelValue, model } = useFormContext('默认值key')
 * </script>
 * <template>
 *  <a-input v-model:value="modelValue" :allowClear="model.allowClear">
 * </template>
 * ```
 */
export default function useFormContext(defaultValueKey) {
  const ctx = getCurrentInstance();
  if (!ctx) {
    throw new Error("Please execute it in setup().");
  }

  const [widget, setWidget] = useReactive(ctx.props.widget);
  // 指向组件可绑定的属性对象
  const [model, setModel] = useReactive(widget.options);
  // 合并到上下文，让用户可以在自定义代码可以操作、修改
  ctx.model = model;

  // 插入自定义的样式到head中
  if (model.customStyle) {
    insertCustomCssToHead(model.customStyle, widget.id);
  }

  const { formField } = widget[GLOBAL_FORM_CONFIG]; // 组件所在的表单
  const {
    required,
    field,
    formField: subFormField, // 子表
    [defaultValueKey]: defaultValue
  } = widget.options;

  const uniField = subFormField || field; // 表单组件或者容器、字段组件的唯一标识
  fieldRefs[uniField] = ctx; // 记录组件的上下文，在执行组件的用户自定义代码让用户通过ctx操作组件

  // 表单全局只读
  const readonly = computed(() => {
    const formConfig = widget[GLOBAL_FORM_CONFIG];
    return formConfig.formReadonly || model.readonly;
  });
  // 表单全局禁用
  const disabled = computed(() => {
    const formConfig = widget[GLOBAL_FORM_CONFIG];
    return formConfig.formDisabled || model.disabled;
  });
  // 表单全局大小
  const size = computed(() => {
    const formConfig = widget[GLOBAL_FORM_CONFIG];
    return formConfig.formSize || model.size || "default";
  });
  // 组件使用到的样式名称
  const className = computed(() => {
    if (!Array.isArray(model.className)) {
      return [];
    }

    return extractClassName(model.className);
  });

  if (!Reflect.has(forms, formField)) {
    set(forms, formField, {});
  }

  // 设置字段在响应式对象中，并设置可能有的默认值
  set(forms[formField], uniField, defaultValue); // 定义表单的字段名称和字段值

  // 处理字段的校验
  handleRules(formField, widget.options);

  // 监听属性变化（应该不会变）
  watch(
    () => ctx.props.widget,
    val => {
      setWidget(val);
      setModel(val.options);
    },
    { deep: true }
  );

  onUnmounted(() => {
    delete fieldRefs[uniField];
    delete forms[formField][uniField];
    if (required) {
      delete rules[formField][uniField];
    }
  });

  const target = get(forms, formField);
  const modelValue = toRef(target, uniField);

  return {
    model,
    modelValue,
    readonly,
    disabled,
    size,
    className,
    context: ctx
  };
}
