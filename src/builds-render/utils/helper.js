import { CONTAINER_TYPE } from "../../designer/utils/helper";
import { fieldRefs } from "../hooks/useFormContext";
import { useGetForm } from "../hooks/useFormContext";
import { Modal } from "ant-design-vue";

export function getCompName(widget) {
  return "ely-" + widget.name;
}

export const GLOBAL_FORM_CONFIG = "form-config";

// 将表单配置分发下去，你可以理解为provide依赖注入
export function initFormSchema(store, formConfig) {
  if (!formConfig) {
    formConfig = store.options;
  }

  store[GLOBAL_FORM_CONFIG] = formConfig;

  if (!Array.isArray(store.childrenList)) {
    return store;
  }

  store.childrenList.map(s => {
    const isSubForm = s.type === CONTAINER_TYPE && s.options && s.options.formField;
    if (isSubForm) {
      initFormSchema(s, s.options);
    } else {
      initFormSchema(s, formConfig);
    }
  });

  return store;
}

export function execFunction(ctx, fucn, argsName, ...args) {
  // 获取组件所在的表单，取出表单绑定的响应式数据、校验规则，并合并到上下文中
  const { formField, formRefName } = ctx.props.widget[GLOBAL_FORM_CONFIG];
  const { formData, rules, formRef } = useGetForm(formField);
  const context = {
    ...ctx,
    ["$fieldRefs"]: fieldRefs, // 表单内所有组件的实例
    ["$formData"]: formData,
    ["$rules"]: rules,
    ['$modal']: Modal,
    [formRefName]: formRef,
  };
  
  let execFun = null;
  try {
    if (Array.isArray(args) && Array.isArray(argsName)) {
      execFun = new Function("ctx", ...argsName, fucn);
      return execFun(context, ...args);
    } else {
      execFun = new Function("ctx", fucn);
      return execFun(context);
    }
  } catch (e) {
    console.error("Error executing", e.message);
  }
}
