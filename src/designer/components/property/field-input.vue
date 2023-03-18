<template>
  <a-form-item
    class="property-editor"
    :label="propertyCN"
    :name="property"
    :rules="[
      {
        required: true,
        message: '唯一标识为必填项'
      }
    ]"
  >
    <a-input
      v-model:value.trim="modelValue"
      @blur="checkChangeRecord"
    ></a-input>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue, checkChangeRecord, property } = useDefineModel()
</script>
