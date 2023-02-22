import { seletedSchema } from "@/designer/core/select.js";
import { useAttrs, toRef, ref } from "vue";
export default function () {
  const { property, propertyCN } = useAttrs();
  const modelValue = toRef(seletedSchema.value.options, property);

  const selectOptions = ref([]);
  const selects = seletedSchema.value.selects;
  if (selects && selects[property]) {
    selectOptions.value = selects[property];
  }

  // 后续property根据字典转换为中文
  return { property, modelValue, selectOptions, propertyCN };
}
