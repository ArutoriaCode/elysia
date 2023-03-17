<template>
  <a-form-item :label="propertyCN" class="property-editor">
    <a-input
      v-model:value.trim="modelValue"
      @blur="checkChangeRecord"
    ></a-input>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue, checkChangeRecord } = useDefineModel()
</script>
