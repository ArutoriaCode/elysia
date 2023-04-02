<template>
  <a-form-item :label="model.label" :name="model.field">
    <a-input
      :readonly="readonly"
      :disabled="disabled"
      :size="size"
      :allow-clear="model.allowClear"
      :maxlength="model.maxlength"
      :autofocus="model.autofocus"
      :class="className"
      v-model:value="modelValue"
    />
  </a-form-item>
</template>
<script setup>
import useFormContext from '../../hooks/useFormContext'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model, modelValue, className } =
  useFormContext('inputValue')
</script>
