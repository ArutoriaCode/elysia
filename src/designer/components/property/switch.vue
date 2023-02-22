<template>
  <a-form-item :label="propertyCN">
    <a-switch v-model:checked="modelValue"></a-switch>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue } = useDefineModel()
</script>
