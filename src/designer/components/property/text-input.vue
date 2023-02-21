<template>
  <div>
    {{ property }}：
    <a-input v-model:value="modelValue"></a-input>
  </div>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { property, modelValue } = useDefineModel()
</script>
