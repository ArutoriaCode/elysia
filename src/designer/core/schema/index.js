import { shallowReactive } from "vue";
import containers from "./containers";
import fields from "./fields";

export const containersSchema = shallowReactive(containers);
export const fieldsSchema = shallowReactive(fields);
