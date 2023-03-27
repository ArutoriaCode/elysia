<template>
  <a-form-item :label="propertyCN" :help="help" class="property-editor">
    <a-switch v-model:checked="modelValue" @change="action.record"></a-switch>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'
import { computed } from 'vue'

const { propertyCN, modelValue, property, action } = useDefineModel()
const help = computed(() => {
  const helps = {
    hidden: '注：隐藏组件需要在预览中才能看到效果',
    vertical: '注：设计器为了方便展示会有个默认最小高度，但预览需要你自身调整容器高度'
  }

  return helps[property] || null
})
</script>
