import { reactive } from "vue";
import containers from "./containers";
import fields from "./fields";
import { CONTAINER_TYPE, FIELD_TYPE } from "@/designer/utils/helper";

export const containersSchema = reactive(containers);
export const fieldsSchema = reactive(fields);

// 提供给外部使用的
export function addSchema(type, schemaJson) {
  const schema = {
    [CONTAINER_TYPE]: containersSchema,
    [FIELD_TYPE]: fieldsSchema
  }[type];

  schema && schema.push(schemaJson);
}
