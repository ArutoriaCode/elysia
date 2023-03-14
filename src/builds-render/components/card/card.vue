<template>
  <a-card :title="widget.options.title" v-show="!widget.options.hidden">
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
defineProps({
  widget: Object
})
</script>
