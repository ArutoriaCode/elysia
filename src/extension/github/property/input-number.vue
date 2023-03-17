<template>
  <a-form-item :label="propertyCN" class="property-editor">
    <a-input-number
      v-model:value="modelValue"
      v-bind="inputNumberProps"
      @blur="checkChangeRecord"
    ></a-input-number>
  </a-form-item>
</template>
<script setup>
import useDefineModel from '~property/useDefineModel.js'
import { seletedSchema } from '@/designer/core/select.js'
import { ref } from 'vue'

const { propertyCN, modelValue, property, checkChangeRecord } = useDefineModel()

const { inputNumber } = seletedSchema.value
const inputNumberProps = ref({})
if (inputNumber && inputNumber[property]) {
  inputNumberProps.value = inputNumber[property]
}
</script>
