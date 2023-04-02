<template>
  <a-col
    :span="model.span"
    :pull="model.pull"
    :push="model.push"
    :offset="model.offset"
    :class="className"
  >
    <component
      v-for="w in widget.childrenList"
      :is="getCompName(w)"
      :widget="w"
      :key="w.id"
    />
  </a-col>
</template>
<script setup>
import { getCompName } from '../../utils/helper'
import useFormContext from '@/builds-render/hooks/useFormContext.js'

const props = defineProps({
  widget: Object
})

const { model, className } = useFormContext()
</script>
