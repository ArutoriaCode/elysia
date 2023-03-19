<template>
  <static-wrapper :widget="widget">
    <a-button
      :type="model.type"
      :ghost="model.ghost"
      :disabled="disabled"
      :shape="model.shape"
      :block="model.block"
      :size="size"
    >
      {{ model.text }}
    </a-button>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting.js'
const props = defineProps({
  widget: Object
})

const { size, disabled, model } = useGlobalSetting()
</script>
