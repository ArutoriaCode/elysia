<template>
  <a-form-item :label="propertyCN">
    <a-input-number
      v-model:value="modelValue"
      v-bind="inputNumberProps"
    ></a-input-number>
  </a-form-item>
</template>
<script setup>
import useDefineModel from '~property/useDefineModel.js'
import { seletedSchema } from '@/designer/core/select.js'
import { ref } from 'vue'

const { propertyCN, modelValue, property } = useDefineModel()

const { inputNumber } = seletedSchema.value
const inputNumberProps = ref({})
if (inputNumber && inputNumber[property]) {
  inputNumberProps.value = inputNumber[property]
}
</script>
