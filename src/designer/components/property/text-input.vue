<template>
  <a-form-item :label="propertyCN">
    <a-input v-model:value="modelValue" @blur="checkChangeRecord"></a-input>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue, checkChangeRecord } = useDefineModel()
</script>
