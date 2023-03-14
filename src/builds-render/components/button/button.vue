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
<script setup>
import { getCurrentInstance } from 'vue'
const props = defineProps({
  widget: Object
})

const app = getCurrentInstance()
const onClick = () => {
  const { options } = props.widget
  if (options && options.onClick) {
    try {
      const clickMethod = new Function('ctx', options.onClick)
      clickMethod(app)
    } catch (e) {
      console.error(props.widget.name + ' new function failed: ' + e.message)
    }
  }
}
</script>
