<template>
  <a-form-item
    :label="model.label"
    :name="model.field"
    :required="model.required"
  >
    <a-checkbox-group
      v-model:value="model.selectValue"
      :options="dataSource"
      :disabled="disabled"
    />
  </a-form-item>
</template>
<script setup>
import useGlobalSetting from '@/designer/hooks/useGlobalSetting.js'
import useGetDataSource from '../../hooks/useGetDataSource'
const props = defineProps({
  widget: Object
})

const { disabled, model } = useGlobalSetting()

const dataSource = useGetDataSource()
</script>
