<template>
  <static-wrapper :widget="widget">
    <a-form-item :label="model.label" :name="model.field">
      <a-slider
        :disabled="disabled || readonly"
        :min="model.min"
        :max="model.max"
        :autofocus="model.autofocus"
        :dots="model.dots"
        :range="model.range"
        :reverse="model.reverse"
        :step="model.sliderStep"
        :vertical="model.vertical"
        :tooltipVisible="model.tooltipVisible"
        :tooltipPlacement="model.tooltipPlacement"
        v-model:value="modelValue"
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

const { readonly, disabled, model } = useGlobalSetting()
const modelValue = computed({
  set (value) {
    model.value = value
  },
  get () {
    if (model.range) {
      if (Array.isArray(model.value)) {
        return model.value
      }

      return [model.value, model.max]
    }

    return model.value
  }
})
</script>
<style>
.warapper-slot .ant-slider.ant-slider-vertical {
  min-height: 200px;
}
</style>
