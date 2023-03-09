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
import ElysiaJson from './ElysiaJson.vue'
import ElysiaBuilds from './ElysiaBuilds.vue'
import { ref, computed } from 'vue'
import config from '~core/config.js'

const active = ref('render')
const mainWrapperStyle = computed(() => {
  let width = 80
  if (active.value !== 'builds') {
    width = 55
  }

  if (config.hiddenPanel || config.panelFixed === true) {
    width += 20
  }
  if (config.hiddenSetting || config.settingFixed === true) {
    width += 25
  }

  return { width: width + 'vw' }
})
</script>
<style lang="less">
body {
  overflow: hidden;
}
.elysia-designer {
  display: flex;
  flex-direction: row;

  .main-wrapper {
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
  }
}
</style>
