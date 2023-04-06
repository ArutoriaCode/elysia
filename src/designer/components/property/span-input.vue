<template>
  <a-form-item class="property-editor" :label="propertyCN" :name="property">
    <a-input-number
      v-model:value="modelValue"
      @blur="onCustomRecord"
    />
  </a-form-item>
</template>
<script setup>
import usePropEditorModel from '~property/hooks/usePropEditorModel.js'
const { propertyCN, modelValue, action } = usePropEditorModel()
const onCustomRecord = () => {
  const span = modelValue.value
  if (span > 24 || span < 0) {
    return
  }

  action.record()
}
</script>
