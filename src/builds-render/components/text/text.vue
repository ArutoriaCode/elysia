<template>
  <p v-show="!widget.options.hidden">
    {{ widget.options.text }}
  </p>
</template>
<script setup>
defineProps({
  widget: Object
})
</script>
