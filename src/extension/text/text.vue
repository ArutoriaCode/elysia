<template>
  <static-wrapper :widget="widget">
    <p v-show="!widget.options.hidden">
      {{ widget.options.text }}
    </p>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
defineProps({
  widget: Object
})
</script>
