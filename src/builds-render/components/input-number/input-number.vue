<template>
  <a-form-item :label="model.label" :name="model.field">
    <a-input-number
      :disabled="disabled"
      :readonly="readonly"
      :size="size"
      :min="model.min"
      :max="model.max"
      :autofocus="model.autofocus"
      :controls="model.controls"
      :bordered="model.bordered"
      :precision="model.precision"
      :step="model.step"
      :stringMode="model.stringMode"
      :formatter="formatter"
      :keyboard="model.keyboard"
      :parser="parser"
      :class="className"
      v-model:value="modelValue"
    />
  </a-form-item>
</template>
<script setup>
import { computed } from 'vue';
import useFormContext from '../../hooks/useFormContext'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model, modelValue, className } =
  useFormContext('numberValue')

const formatter = computed(() => {
  if (typeof model.formatter !== 'string') {
    return undefined
  }

  try {
    const execFun = new Function('value', model.formatter)
    return value => execFun(value)
  } catch (e) {
    return undefined
  }
})

const parser = computed(() => {
  if (typeof model.parser !== 'string') {
    return undefined
  }

  try {
    const execFun = new Function('value', model.parser)
    return value => execFun(value)
  } catch (e) {
    return undefined
  }
})
</script>
