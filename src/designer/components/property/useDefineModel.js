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

  return { property, modelValue, selectOptions, propertyCN };
}
