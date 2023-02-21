<template>
  <div class="elysia-designer">
    <div class="aside-wrapper">
      <elysia-panel></elysia-panel>
    </div>
    <div class="main-wrapper">
      <div class="elysia-toolbar"></div>
      <elysia-render></elysia-render>
    </div>
    <div class="aside-wrapper settings">
      <elysia-setting></elysia-setting>
    </div>
  </div>
</template>
<script setup>
import ElysiaPanel from './ElysiaPanel.vue'
import ElysiaRender from './ElysiaRender.vue'
import ElysiaSetting from './ElysiaSetting.vue'
</script>
<style lang="less">
body {
  overflow: hidden;
}
.elysia-designer {
  display: flex;
  flex-direction: row;
}
</style>
