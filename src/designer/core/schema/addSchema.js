import { CONTAINER_TYPE, FIELD_TYPE } from "../../utils/helper.js";
import { containersSchema, fieldsSchema } from "./index.js";

// 提供给外部使用的
export default function addSchema(type, schemaJson) {
  const schema = {
    [CONTAINER_TYPE]: containersSchema,
    [FIELD_TYPE]: fieldsSchema
  }[type];

  schema && schema.push(schemaJson);
}
