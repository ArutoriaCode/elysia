<template>
  <p v-show="!widget.options.hidden">
    {{ widget.options.text }}
  </p>
</template>
<script>
export default {
  props: {
    widget: Object
  }
}
</script>
