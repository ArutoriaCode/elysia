<template>
  <a-form-item class="property-editor" :label="propertyCN" :name="property">
    <a-input-number
      v-model:value="modelValue"
      @blur="onCustomRecord"
    />
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'
const { propertyCN, modelValue, action } = useDefineModel()
const onCustomRecord = () => {
  const span = modelValue.value
  if (span > 24 || span < 0) {
    return
  }

  action.record()
}
</script>
