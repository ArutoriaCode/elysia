<template>
  <a-form-item :label="propertyCN" :help="help">
    <a-switch v-model:checked="modelValue" @change="checkChangeRecord"></a-switch>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'
import { computed } from 'vue';

const { propertyCN, modelValue, property, checkChangeRecord } = useDefineModel()
const help = computed(() => property === 'hidden' ? '注：隐藏组件需要在预览中才能看到效果' : null)
</script>
