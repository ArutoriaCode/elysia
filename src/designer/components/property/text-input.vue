<template>
  <a-form-item :label="propertyCN" class="property-editor">
    <a-input
      v-model:value="modelValue"
      @blur="action.record"
      allowClear
    ></a-input>
  </a-form-item>
</template>
<script setup>
import usePropEditorModel from '~property/hooks/usePropEditorModel.js'

const { propertyCN, modelValue, action } = usePropEditorModel()
</script>
