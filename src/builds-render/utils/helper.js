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

export function execFunction(ctx, fucn, argsName, ...args) {
  let execFun = null;
  try {
    if (Array.isArray(args) && Array.isArray(argsName)) {
      execFun = new Function("ctx", ...argsName, fucn);
      return execFun(ctx, ...args);
    } else {
      execFun = new Function("ctx", fucn);
      return execFun(ctx);
    }
  } catch (e) {
    console.error("Error executing", e.message);
  }
}
