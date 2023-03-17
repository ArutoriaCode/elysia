<template>
  <static-wrapper :widget="widget">
    <a-button
      :type="widget.options.type"
      :ghost="widget.options.ghost"
      :disabled="disabled"
      :shape="widget.options.shape"
      :block="widget.options.block"
      :size="size"
    >
      {{ widget.options.text }}
    </a-button>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting.js';
const props = defineProps({
  widget: Object
})

const { size, disabled } = useGlobalSetting(props.widget)
</script>
