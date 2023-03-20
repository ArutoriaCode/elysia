<template>
  <a-form-item
    :label="model.label"
    :name="model.field"
    :required="model.required"
  >
    <a-radio-group
      v-model:value="model.selectValue"
      :optionType="model.optionType"
      :options="dataSource"
      :disabled="disabled"
      :size="size"
    />
  </a-form-item>
</template>
<script setup>
import useGlobalSetting from '@/designer/hooks/useGlobalSetting.js'
import useGetDataSource from '../../hooks/useGetDataSource'
const props = defineProps({
  widget: Object
})

const { disabled, size, model } = useGlobalSetting()

const dataSource = useGetDataSource()
</script>
