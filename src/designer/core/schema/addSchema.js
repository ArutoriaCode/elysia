import { CONTAINER_TYPE, FIELD_TYPE } from "../../utils/helper.js";
import { containersSchema, fieldsSchema } from "./index.js";

// 提供给外部拓展使用的
export default function addSchema(schemaJson) {
  const { type } = schemaJson;
  const schema = {
    [CONTAINER_TYPE]: containersSchema,
    [FIELD_TYPE]: fieldsSchema
  }[type];

  if (!schema) {
    throw new Error("type must be specified: container | field");
  }

  schema && schema.push(schemaJson);
}
