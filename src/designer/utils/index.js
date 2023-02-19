export const isObject = anyValue =>
  typeof anyValue === "object" && anyValue !== null && !Array.isArray(anyValue);

export const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
