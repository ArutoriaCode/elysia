<template>
  <a-form-item :label="property">
    <a-switch v-model:checked="modelValue"></a-switch>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { property, modelValue } = useDefineModel()
</script>
