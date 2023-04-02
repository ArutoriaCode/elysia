<template>
  <static-wrapper :widget="widget">
    <a-form-item
      :label="model.label"
      :name="model.field"
      :required="model.required"
    >
      <a-radio-group
        :value="model.selectValue"
        :optionType="model.optionType"
        :options="selectOptions"
        :disabled="disabled"
        :size="size"
        @click.capture="onChange"
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

const { size, disabled, model } = useGlobalSetting()
const selectOptions = computed(() => {
  try {
    return JSON.parse(model.selectOptions)
  } catch (e) {
    return []
  }
})

const onChange = e => {
  model.selectValue = e.target._value
}
</script>
