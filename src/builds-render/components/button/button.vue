<template>
  <a-button
    @click="onClick"
    :size="size"
    :disabled="disabled"
    :type="model.type"
    :ghost="model.ghost"
    :shape="model.shape"
    :block="model.block"
  >
    {{ model.text }}
  </a-button>
</template>
<script setup>
import useFormContext from '../../hooks/useFormContext'
import { execFunction } from '../../utils/helper'
const props = defineProps({
  widget: Object
})

const { model, size, disabled, context } = useFormContext()
const onClick = () => {
  if (model && model.onClick) {
    execFunction(context, model.onClick)
  }
}
</script>
