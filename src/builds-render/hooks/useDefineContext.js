const { getCurrentInstance, shallowReactive } = require("vue");

const ctx = getCurrentInstance();

const componentRefs = shallowReactive({});
if (ctx.props && ctx.props.widget) {
  componentRefs[ctx.props.widget.field] = ctx;
}

export default function (field) {
  return componentRefs[field];
}
