<template>
  <static-wrapper :widget="widget">
    <p>
      {{ widget.options.text }}
    </p>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting'
defineProps({
  widget: Object
})

useGlobalSetting()
</script>
