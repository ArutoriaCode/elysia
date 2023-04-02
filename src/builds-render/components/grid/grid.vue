<template>
  <a-row
    :gutter="model.gutter"
    :type="model.flex ? 'flex' : undefined"
    :align="model.align"
    :justify="model.justify"
    :wrap="model.wrap"
    :class="className"
    style="width: 100%"
  >
    <elysia-build-col
      v-for="col in widget.childrenList"
      :key="col.id"
      :widget="col"
    />
  </a-row>
</template>
<script setup>
import elysiaBuildCol from './col.vue'
import useFormContext from '@/builds-render/hooks/useFormContext.js'

defineProps({
  widget: Object
})

const { className, model } = useFormContext()
</script>
