import { unref } from "vue";
import { flatMapSchema } from "../utils/helper";

export default function useDefineFormModel(store) {
  const flatSchemaList = flatMapSchema(unref(store).childrenList, 0, []);
  const formItemList = flatSchemaList.filter(sm => sm.isFormItem);

  const formData = {};
  formItemList.map(form => {
    formData[form.field] = "";
  });

  return formData;
}
