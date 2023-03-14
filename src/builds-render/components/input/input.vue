<template>
  <a-form-item :label="formItem.label" :name="formItem.field">
    <a-input
      :readonly="readonly"
      :disabled="disabled"
      :size="size"
      :allow-clear="formItem.allowClear"
      :maxlength="formItem.maxlength"
      v-model:value="modelValue"
    />
  </a-form-item>
</template>
<script setup>
import useDefineFormModel from '../../hooks/useDefineFormModel'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, formItem, modelValue } = useDefineFormModel({
  widget: props.widget,
  defaultValueKey: 'inputValue'
})
</script>
