<template>
  <a-form-item :label="propertyCN">
    <a-input v-model:value="modelValue"></a-input>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue } = useDefineModel()
</script>
