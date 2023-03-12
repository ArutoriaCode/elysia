<template>
  <a-divider
    :type="widget.options.type"
    :dashed="widget.options.dashed"
    :orientation="widget.options.orientation"
  >
    <template v-if="widget.options.title">
      {{ widget.options.title }}
    </template>
  </a-divider>
</template>
<script setup>
defineProps({
  widget: Object
})
</script>
