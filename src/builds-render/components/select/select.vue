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
import useDefineContext from '../../hooks/useDefineContext'
import { getCurrentInstance, computed, ref, toRef } from 'vue'
import { useDefineFormModel } from '../../hooks/useDefineFormModel'
import { execFunction } from '../../utils/helper'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model, modelValue } = useDefineFormModel(
  props.widget,
  'selectValue'
)

// 可选项，目前支持同步和异步的数据
const selectOptions = ref([])
const jsonOptions = computed(() => {
  try {
    return JSON.parse(model.selectOptions)
  } catch {
    return null
  }
})

const ctx = useDefineContext(props.widget.field)
// JSON转换为数据
if (jsonOptions.value !== null) {
  selectOptions.value = jsonOptions.value
} else {
  // javascript代码执行返回数据
  const result = execFunction(ctx, model.selectOptions)
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
