<template>
  <a-divider
    :type="model.type"
    :dashed="model.dashed"
    :orientation="model.orientation"
    :class="className"
  >
    <template v-if="model.title">
      {{ model.title }}
    </template>
  </a-divider>
</template>
<script setup>
import useFormContext from '@/builds-render/hooks/useFormContext.js'
defineProps({
  widget: Object
})

const { className, model } = useFormContext()
</script>
