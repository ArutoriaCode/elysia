<template>
  <static-wrapper :widget="widget">
    <a-form-item
      :label="model.label"
      :name="model.field"
      :required="model.required"
    >
      <a-checkbox-group
        v-model:value="model.selectValue"
        :options="selectOptions"
        :disabled="disabled"
      />
    </a-form-item>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting.js'
import { computed } from 'vue'
const props = defineProps({
  widget: Object
})

const { disabled, model } = useGlobalSetting()
const selectOptions = computed(() => {
  try {
    return JSON.parse(model.selectOptions)
  } catch (e) {
    return []
  }
})
</script>
