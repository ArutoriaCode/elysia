<template>
  <a-form-item :label="model.label" :name="model.field">
    <a-input
      :readonly="readonly"
      :disabled="disabled"
      :size="size"
      :allow-clear="model.allowClear"
      :maxlength="model.maxlength"
      v-model:value="modelValue"
    />
  </a-form-item>
</template>
<script setup>
import useDefineContext from '../../hooks/useDefineContext';
import { useDefineFormModel } from '../../hooks/useDefineFormModel'
const props = defineProps({
  widget: Object
})

useDefineContext() // 调不调用都无所谓
const { readonly, disabled, size, model, modelValue } = useDefineFormModel(
  props.widget,
  'inputValue'
)
</script>
