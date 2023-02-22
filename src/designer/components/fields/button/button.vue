<template>
  <static-wrapper :widget="widget">
    <a-button :type="widget.options.type">
      {{  widget.options.text  }}
    </a-button>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue';
defineProps({
  widget: Object
})
</script>