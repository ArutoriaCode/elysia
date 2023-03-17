import { CONTAINER_TYPE } from "../../designer/utils/helper";
import { useGetForm } from "../hooks/useDefineFormModel";

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
    const isSubForm = s.type === CONTAINER_TYPE && s.options && s.options.formName;
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
  const { formName, formRefName } = ctx.props.widget[GLOBAL_FORM_CONFIG];
  const { formData, rules, formRef } = useGetForm(formName);
  Object.assign(ctx, {
    ["$formData"]: formData,
    ["$rules"]: rules,
    [formRefName]: formRef
  });

  let execFun = null;
  try {
    if (Array.isArray(args) && Array.isArray(argsName)) {
      execFun = new Function("ctx", ...argsName, fucn);
      return execFun(ctx, ...args);
    } else {
      execFun = new Function("ctx", fucn);
      return execFun(ctx);
    }
  } catch (e) {
    console.error("Error executing", e.message);
  }
}
