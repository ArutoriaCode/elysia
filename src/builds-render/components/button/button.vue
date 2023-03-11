<template>
  <a-button :type="widget.options.type" @click="onClick">
    {{ widget.options.text }}
  </a-button>
</template>
<script>
export default {
  props: {
    widget: Object
  },
  methods: {
    onClick () {
      const { options } = this.widget
      if (options && options.onClick) {
        const clickMethod = new Function(options.onClick)
        clickMethod.call(this)
      }
    }
  }
}
</script>
