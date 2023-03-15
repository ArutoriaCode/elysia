import { seletedSchema } from "@/designer/core/select.js";
import { useAttrs, toRef, ref } from "vue";
import useProp from "./useProp";
export default function () {
  const { property } = useAttrs();

  const {
    propertyModel: modelValue,
    propertyAlias: propertyCN,
    ...args
  } = useProp(property);

  const selectOptions = ref([]);
  const selects = seletedSchema.value.selects;
  if (selects && selects[property]) {
    selectOptions.value = selects[property];
  }

  return { property, modelValue, selectOptions, propertyCN, ...args };
}
