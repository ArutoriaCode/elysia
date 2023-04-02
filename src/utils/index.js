import { unref } from "vue";

export const isObject = anyValue =>
  typeof anyValue === "object" && anyValue !== null && !Array.isArray(anyValue);

export const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

/** function code from Variant Form */
export function extractCssClass(cssContent, callback = null) {
  let cssNameArray = [];
  if (!unref(cssContent)) {
    return cssNameArray;
  }

  let regExp = /\..*{/g;
  let result = unref(cssContent).match(regExp);

  if (!Array.isArray(result)) {
    return cssNameArray;
  }

  if (result.length === 0) {
    return cssNameArray;
  }

  result.forEach(rItem => {
    let classArray = rItem.split(","); //切分逗号分割的多个class
    if (classArray.length > 0) {
      classArray.forEach(cItem => {
        let caItem = cItem.trim();
        let newClass = null;
        if (caItem.indexOf(".", 1) !== -1) {
          //查找第二个.位置
          newClass = caItem.substring(caItem.indexOf(".") + 1, caItem.indexOf(".", 1)); //仅截取第一、二个.号之间的class
        } else if (caItem.indexOf(" ") !== -1) {
          //查找第一个空格位置
          newClass = caItem.substring(caItem.indexOf(".") + 1, caItem.indexOf(" ")); //仅截取第一、二个.号之间的class
        } else {
          if (caItem.indexOf("{") !== -1) {
            //查找第一个{位置
            newClass = caItem.substring(caItem.indexOf(".") + 1, caItem.indexOf("{"));
          } else {
            newClass = caItem.substring(caItem.indexOf(".") + 1);
          }
        }

        if (!newClass) {
          return;
        }

        let value = newClass.trim();
        if (typeof callback === "function") {
          newClass = callback(value);
          newClass = newClass ? newClass : value; // callback返回的值为空时使用原数据
        } else {
          newClass = value;
        }

        cssNameArray.push(newClass);
      });
    }
  });

  return cssNameArray;
}

export function insertCustomCssToHead(cssCode, id) {
  const elysiaStyles = "elysia-custom-styles" + "-" + id;
  const head = document.getElementsByTagName("head")[0];
  const oldStyles = document.getElementById(elysiaStyles);
  if (!!oldStyles) {
    head.removeChild(oldStyles);
  }

  const styles = document.createElement("style");
  styles.type = "text/css";
  styles.rel = "stylesheet";
  styles.id = elysiaStyles;
  try {
    styles.appendChild(document.createTextNode(cssCode));
  } catch (ex) {
    styles.styleSheet.cssText = cssCode;
  }

  head.appendChild(styles);
}

export function extractClassName(className) {
  if (!Array.isArray(className)) {
    return [];
  }

  const classNameList = [];
  className.forEach(name => {
    const isGlobalClass = name.startsWith("$global-");
    if (isGlobalClass) {
      name = name.replace("$global-", "");
    }

    if (classNameList.includes(name)) {
      return;
    }

    classNameList.push(name);
  });

  return classNameList;
}
