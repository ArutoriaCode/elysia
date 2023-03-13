import { CONTAINER_TYPE } from "@/designer/utils/helper";
import { FIELD_TYPE } from "../../designer/utils/helper";

export function getCompName(widget) {
  return "ely-" + widget.name;
}

export function flatMapSchema(schemaList, level = 0, flatList = []) {
  schemaList.map(sm => {
    flatList.push({ ...sm, level });
    if (sm.type === CONTAINER_TYPE) {
      flatList.push(...flatMapSchema(sm.childrenList, level + 1));
    }
  });

  return flatList;
}
