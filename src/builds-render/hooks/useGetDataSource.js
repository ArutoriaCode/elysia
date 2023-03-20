import { computed, getCurrentInstance, ref, toRef } from "vue";
import { execFunction } from "../utils/helper";

export default function useGetDataSource(codeKey = "selectOptions") {
  const ctx = getCurrentInstance();
  // 可选项，目前支持同步和异步的数据
  const dataSource = ref([]);
  const widget = toRef(ctx.props, "widget");
  const source =
    widget.value && widget.value.options ? widget.value.options[codeKey] : null;

  if (source === null) {
    return dataSource;
  }

  const jsonOptions = computed(() => {
    try {
      return JSON.parse(source);
    } catch {
      return null;
    }
  });

  // JSON转换为数据
  if (jsonOptions.value !== null) {
    dataSource.value = jsonOptions.value;
  } else {
    // javascript代码执行返回数据
    const result = execFunction(ctx, source);
    if (Array.isArray(result)) {
      dataSource.value = result;
    }

    if (result && result.then && typeof result.then === "function") {
      result.then(data => {
        dataSource.value = data;
      });
    }
  }

  return dataSource;
}
