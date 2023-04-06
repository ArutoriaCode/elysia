import useProp from "@/designer/hooks/useProp";
import { seletedSchema } from "@/designer/core/select.js";
import { useAttrs, ref } from "vue";

export default function () {
  const { property } = useAttrs();

  const {
    propertyModel: modelValue,
    propertyAlias: propertyCN,
    ...args
  } = useProp(property);

  const selectOptions = ref([]);
  const xSelects = seletedSchema.value['x-selects'] || [];
  if (xSelects && xSelects[property]) {
    selectOptions.value = xSelects[property];
  }

  return { property, modelValue, selectOptions, propertyCN, ...args };
}
