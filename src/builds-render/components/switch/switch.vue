<template>
  <a-form-item :label="model.label" :name="model.field">
    <a-switch
      :disabled="disabled || readonly"
      :size="customSize"
      :min="model.min"
      :max="model.max"
      :autofocus="model.autofocus"
      :checkedChildren="model.checkedChildren"
      :checkedValue="model.checkedValue"
      :loading="model.loading"
      :unCheckedChildren="model.unCheckedChildren"
      :tooltipVisible="model.tooltipVisible"
      :unCheckedValue="model.unCheckedValue"
      :class="className"
      v-model:checked="modelValue"
    />
  </a-form-item>
</template>
<script setup>
import { computed } from 'vue'
import useFormContext from '../../hooks/useFormContext'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model, modelValue, className } = useFormContext('checked')

const customSize = computed(() => {
  if (size.value === 'large') {
    return 'default'
  }

  return size.value
})
</script>
