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

const { disabled, model } = useGlobalSetting()
const selectOptions = computed(() => {
  try {
    return JSON.parse(model.selectOptions)
  } catch (e) {
    return []
  }
})

const onChange = e => {
  const value = e.target._value
  const index = model.selectValue.indexOf(value)
  if (index > -1) {
    model.selectValue.splice(index, 1)
  } else {
    model.selectValue.push(value)
  }
}
</script>
