<template>
  <static-wrapper :widget="widget">
    <p :class="className">
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

const { className } = useGlobalSetting()
</script>
