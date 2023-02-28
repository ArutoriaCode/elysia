<template>
  <div class="elysia-designer">
    <div class="aside-wrapper">
      <elysia-panel></elysia-panel>
    </div>
    <div class="main-wrapper" :style="mainWrapperStyle">
      <elysia-toolbar v-model="active">
        <elysia-render v-show="active === 'render'"></elysia-render>
        <elysia-json v-show="active === 'json'"></elysia-json>
        <elysia-builds v-show="active === 'builds'" />
      </elysia-toolbar>
    </div>
    <div class="aside-wrapper settings" :style="settingStyle">
      <elysia-setting></elysia-setting>
    </div>
  </div>
</template>
<script setup>
import ElysiaPanel from './ElysiaPanel.vue'
import ElysiaRender from './ElysiaRender.vue'
import ElysiaSetting from './ElysiaSetting.vue'
import ElysiaToolbar from './ElysiaToolbar.vue'
import ElysiaJson from './ElysiaJson.vue'
import ElysiaBuilds from './ElysiaBuilds.vue'
import { ref, computed } from 'vue'

const active = ref('render')
const mainWrapperStyle = computed(() =>
  active.value !== 'builds' ? { width: '55vw' } : { width: '80vw' }
)

const settingStyle = computed(() => {
  if (active.value !== 'builds') {
    return { width: '25vw' }
  }

  return { width: 0, display: 'none' }
})
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

  .main-wrapper {
    transition: width 0.3s;
    .elysia-main-content {
      padding: 24px;
      height: calc(100vh - 48px); // 48px = .elysia-toolbar height
      width: 100%;
      overflow: hidden;
      overflow-y: auto;
    }
  }

  .aside-wrapper.settings {
    transition: width 0.3s;
    .elysia-setting {
      height: 100vh;
      width: 100%;
      border-left: 1px solid var(--primary-color);
    }
  }
}
</style>
