<template>
  <div class="elysia-designer">
    <div class="aside-wrapper">
      <elysia-panel></elysia-panel>
    </div>
    <div class="main-wrapper">
      <div class="elysia-toolbar"></div>
      <elysia-render></elysia-render>
    </div>
    <div class="aside-wrapper settings"></div>
  </div>
</template>
<script setup>
import ElysiaPanel from './ElysiaPanel.vue'
import ElysiaRender from './ElysiaRender.vue'
</script>
<style lang="less">
body {
  overflow: hidden
}
.elysia-designer {
  display: flex;
  flex-direction: row;
}
</style>
