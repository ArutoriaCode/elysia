<template>
  <a-form-item
    :label="model.label"
    :name="model.field"
    :required="model.required"
  >
    <a-rate
      v-model:value="modelValue"
      :disabled="disabled || readonly"
      :count="model.starCount"
      :allowHalf="model.allowHalf"
      :allowClear="model.allowClear"
      :class="className"
    />
  </a-form-item>
</template>
<script setup>
import useFormContext from '@/builds-render/hooks/useFormContext.js'
const props = defineProps({
  widget: Object
})

const { disabled, readonly, model, modelValue, className } = useFormContext('value')
</script>
