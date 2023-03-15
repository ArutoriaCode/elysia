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
import { execFunction } from '../../utils/helper'
const props = defineProps({
  widget: Object
})

const app = getCurrentInstance()
const onClick = () => {
  const { options } = props.widget
  if (options && options.onClick) {
    execFunction(app, options.onClick)
  }
}
</script>
