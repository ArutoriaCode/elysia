<template>
  <static-wrapper :widget="widget">
    <a
      v-show="!widget.options.hidden"
      href="javascript:void(0)"
      :style="{ fontSize: widget.options.fontSize + 'px' }"
    >
      <component :is="widget.icon"></component> GitHub
    </a>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
defineProps({
  widget: Object
})
</script>
