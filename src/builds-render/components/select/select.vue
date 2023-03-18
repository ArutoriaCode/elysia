<template>
  <a-form-item :label="model.label" :name="model.field">
    <a-select
      :size="size"
      :readonly="readonly"
      :disabled="disabled"
      :options="selectOptions"
      :allow-clear="model.allowClear"
      v-model:value="modelValue"
    >
    </a-select>
  </a-form-item>
</template>
<script setup>
import useFormContext from '../../hooks/useFormContext'
import { computed, ref } from 'vue'
import { execFunction } from '../../utils/helper'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model, modelValue, context } =
  useFormContext('selectValue')

// 可选项，目前支持同步和异步的数据
const selectOptions = ref([])
const jsonOptions = computed(() => {
  try {
    return JSON.parse(model.selectOptions)
  } catch {
    return null
  }
})

// JSON转换为数据
if (jsonOptions.value !== null) {
  selectOptions.value = jsonOptions.value
} else {
  // javascript代码执行返回数据
  const result = execFunction(context, model.selectOptions)
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
