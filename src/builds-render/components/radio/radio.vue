<template>
  <a-form-item
    :label="model.label"
    :name="model.field"
    :required="model.required"
  >
    <a-radio-group
      v-model:value="modelValue"
      :optionType="model.optionType"
      :options="dataSource"
      :disabled="disabled"
      :size="size"
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

const { disabled, size, model, modelValue, className } = useFormContext('selectValue')

const dataSource = useGetDataSource()
</script>
