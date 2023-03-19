<template>
  <a-form-item :label="propertyCN" class="property-editor">
    <a-select v-model:value="modelValue" allowClear @change="action.record">
      <a-select-option
        v-for="option in selectOptions"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label || option.value }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'

const { propertyCN, modelValue, selectOptions, action } = useDefineModel()
</script>
