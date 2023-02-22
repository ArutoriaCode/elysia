<template>
  <a-form-item :label="property">
    <a-input v-model:value="modelValue"></a-input>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { property, modelValue } = useDefineModel()
</script>
