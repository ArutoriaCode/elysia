<template>
  <a-button :type="widget.options.type">
    {{ widget.options.text }}
  </a-button>
</template>
<script setup>
defineProps({
  widget: Object
})
</script>
