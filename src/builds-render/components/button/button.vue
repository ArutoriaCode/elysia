<template>
  <a-button
    @click="onClick"
    :type="widget.options.type"
    :ghost="widget.options.ghost"
    :disabled="widget.options.disabled"
    :shape="widget.options.shape"
    :block="widget.options.block"
  >
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
