<template>
  <a-form-item :label="propertyCN">
    <a-input v-model:value.trim="modelValue" @blur="activeRecod"></a-input>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue, useActiveRecord } = useDefineModel()

const activeRecod = useActiveRecord()
</script>
