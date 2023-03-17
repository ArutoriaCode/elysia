<template>
  <a-form-item :label="formItem.label" :name="formItem.field">
    <a-select
      :size="size"
      :readonly="readonly"
      :disabled="disabled"
      :options="selectOptions"
      :allow-clear="formItem.allowClear"
      v-model:value="modelValue"
    >
    </a-select>
  </a-form-item>
</template>
<script setup>
import { getCurrentInstance, computed, ref } from 'vue'
import { useDefineFormItem } from '../../hooks/useDefineFormModel'
import { execFunction } from '../../utils/helper'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, formItem, modelValue } = useDefineFormItem({
  widget: props.widget,
  defaultValueKey: 'selectValue'
})

// 可选项，目前支持同步和异步的数据
const selectOptions = ref([])
const ctx = getCurrentInstance()
const jsonOptions = computed(() => {
  try {
    return JSON.parse(formItem.selectOptions)
  } catch {
    return null
  }
})

// JSON转换为数据
if (jsonOptions.value !== null) {
  selectOptions.value = jsonOptions.value
} else {
  // javascript代码执行返回数据
  const result = execFunction(ctx, formItem.selectOptions)
  if (Array.isArray(result)) {
    selectOptions.value = result
  }

  if (result && result.then && typeof result.then === 'function') {
    result.then(data => {
      selectOptions.value = data
    })
  }
}
</script>
