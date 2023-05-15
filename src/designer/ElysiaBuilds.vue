<script setup>
import { nextTick, ref, watch } from 'vue';
import tabContent from './core/tabs'

const refresh = ref(true)
watch(tabContent, () => {
  refresh.value = false
  nextTick(() => {
    refresh.value = true
  })
})
</script>
<template>
  <div class="elysia-builds-render" v-if="refresh">
    <builds-render :schema-json="tabContent"></builds-render>
  </div>
</template>
