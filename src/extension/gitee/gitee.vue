<template>
  <static-wrapper :widget="widget">
    <a
      v-show="!widget.options.hidden"
      href="javascript:void(0)"
      :style="{ fontSize: widget.options.fontSize + 'px' }"
    >
      <component :is="widget.icon"></component> Gitee
    </a>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting';
defineProps({
  widget: Object
})

useGlobalSetting()
</script>
