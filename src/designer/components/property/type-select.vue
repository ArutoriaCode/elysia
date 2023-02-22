<template>
  <a-form-item :label="property">
    <a-select v-model:value="modelValue">
      <a-select-option
        v-for="option in selectOptions"
        :value="option.value"
        :key="option.value"
      >
        {{ option.value }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { property, modelValue, selectOptions } = useDefineModel()
</script>
