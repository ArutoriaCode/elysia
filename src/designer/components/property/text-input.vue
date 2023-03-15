<template>
  <a-form-item :label="propertyCN">
    <a-input v-model:value="modelValue" @blur="activeRecord"></a-input>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue, useActiveRecord } = useDefineModel()
const activeRecord = useActiveRecord()
</script>
