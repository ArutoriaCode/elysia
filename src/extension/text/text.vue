<template>
  <p v-show="!widget.options.hidden">
    {{ widget.options.text }}
  </p>
</template>
<script setup>
defineProps({
  props: {
    widget: Object
  }
})
</script>
