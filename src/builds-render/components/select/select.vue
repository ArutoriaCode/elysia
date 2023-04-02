<template>
  <a-form-item :label="model.label" :name="model.field">
    <a-select
      :size="size"
      :readonly="readonly"
      :disabled="disabled"
      :options="dataSource"
      :allow-clear="model.allowClear"
      :class="className"
      v-model:value="modelValue"
    >
    </a-select>
  </a-form-item>
</template>
<script setup>
import useFormContext from '../../hooks/useFormContext'
import useGetDataSource from '../../hooks/useGetDataSource';
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model, modelValue, className } =
  useFormContext('selectValue')

const dataSource = useGetDataSource()
</script>
