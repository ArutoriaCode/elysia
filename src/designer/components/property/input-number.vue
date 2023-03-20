<template>
  <a-form-item class="property-editor" :label="propertyCN" :name="property">
    <a-input-number
      v-bind="numberProps"
      v-model:value="modelValue"
      @blur="onCustomRecord"
    ></a-input-number>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'
import { seletedSchema } from '../../core/select'
const { property, propertyCN, modelValue, action } = useDefineModel()
const numberProps = seletedSchema.value['x-editor-props'][property] || {}
const onCustomRecord = () => {
  const { min = null, max = null } = numberProps
  if (min !== null && min > modelValue.value) {
    return
  }

  console.log("🚀 ~ file: input-number.vue:22 ~ onCustomRecord ~ max:", max)
  if (max !== null && max < modelValue.value) {
    return
  }

  action.record()
}
</script>
