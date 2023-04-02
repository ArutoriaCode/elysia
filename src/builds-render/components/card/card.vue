<template>
  <a-card
    :title="model.title"
    v-show="!model.hidden"
    :class="className"
  >
    <!-- :is="ely-xxx" 加上一个前缀，免得一些命名会被当做内置标签渲染 比如: button input -->
    <component
      v-for="w in widget.childrenList"
      :is="getCompName(w)"
      :widget="w"
      :key="w.id"
    />
  </a-card>
</template>
<script setup>
import { getCompName } from '../../utils/helper'
import useFormContext from '@/builds-render/hooks/useFormContext.js'
defineProps({
  widget: Object
})

const { className, model } = useFormContext()
</script>
