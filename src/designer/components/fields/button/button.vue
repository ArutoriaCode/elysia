<template>
  <static-wrapper :widget="widget">
    <a-button
      :type="widget.options.type"
      :ghost="widget.options.ghost"
      :disabled="widget.options.disabled"
      :shape="widget.options.shape"
      :block="widget.options.block"
    >
      {{ widget.options.text }}
    </a-button>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
defineProps({
  widget: Object
})
</script>
