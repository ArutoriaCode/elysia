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
import { execFunction } from '../../utils/helper'
import { useDefineFormModel } from '../../hooks/useDefineFormModel'
import useDefineContext from '../../hooks/useDefineContext';
const props = defineProps({
  widget: Object
})

const { model, size, disabled } = useDefineFormModel(props.widget)
const ctx = useDefineContext(props.widget.field)
const onClick = () => {
  const { options } = props.widget
  if (options && options.onClick) {
    execFunction(ctx, options.onClick)
  }
}
</script>
