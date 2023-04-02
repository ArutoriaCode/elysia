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
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue, action } = useDefineModel()
</script>
