<template>
  <a
    v-show="!model.hidden"
    target="_blank"
    :href="model.link"
    :style="{ fontSize: model.fontSize + 'px' }"
    :class="className"
  >
    码云 Gitee
  </a>
</template>
<script setup>
import useFormContext from '@/builds-render/hooks/useFormContext.js'

defineProps({
  widget: Object
})

const { className, model } = useFormContext()
</script>
./gitee-icon.jsx