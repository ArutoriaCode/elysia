import { seletedSchema } from "@/designer/core/select.js";
import { useAttrs, toRef } from "vue";
export default function () {
  const { property } = useAttrs();
  const modelValue = toRef(seletedSchema.value.options, property);

  // 后续property根据字典转换为中文
  return { property, modelValue };
}
