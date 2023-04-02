<template>
  <a-form-item
    :label="model.label"
    :name="model.field"
    :required="model.required"
  >
    <a-checkbox-group
      v-model:value="modelValue"
      :options="dataSource"
      :disabled="disabled"
      :class="className"
    />
  </a-form-item>
</template>
<script setup>
import useFormContext from '../../hooks/useFormContext'
import useGetDataSource from '../../hooks/useGetDataSource'
const props = defineProps({
  widget: Object
})

const { disabled, model, modelValue, className } = useFormContext('selectValue')

const dataSource = useGetDataSource()
</script>
