<template>
  <div class="widget-button">
    <static-wrapper :widget="widget">
      <a-button :type="widget.options.type">
        {{  widget.options.text  }}
      </a-button>
    </static-wrapper>
  </div>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue';
defineProps({
  widget: Object
})
</script>