<template>
  <div class="elysia-designer">
    <div class="aside-wrapper">
      <elysia-panel></elysia-panel>
    </div>
    <div class="main-wrapper">
      <elysia-toolbar>
        <template v-slot:default="{ active }">
          <elysia-render v-show="active === 'render'"></elysia-render>
          <elysia-json v-show="active === 'json'"></elysia-json>
        </template>
      </elysia-toolbar>
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
import ElysiaToolbar from './ElysiaToolbar.vue'
import { defineAsyncComponent } from 'vue'

const ElysiaJson = defineAsyncComponent(() => import('./ElysiaJson.vue'))
</script>
<style lang="less">
body {
  overflow: hidden;
}
.elysia-designer {
  display: flex;
  flex-direction: row;

  .elysia-panel {
    height: 100%;
    width: 20vw;
    display: flex;
    flex-direction: row;
    border-right: 1px solid var(--primary-color);
  }

  .elysia-toolbar {
    width: 100%;
    height: 48px;
  }

  .elysia-main-content {
    padding: 24px;
    height: calc(100vh - 48px); // 48px = .elysia-toolbar height
    width: 55vw;
    overflow: hidden;
    overflow-y: auto;
  }

  .elysia-setting {
    height: 100vh;
    width: 25vw;
    border-left: 1px solid var(--primary-color);
  }
}
</style>
