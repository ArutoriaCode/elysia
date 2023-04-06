<template>
  <div class="elysia-designer">
    <div class="aside-wrapper">
      <elysia-panel></elysia-panel>
    </div>
    <div class="main-wrapper" :style="mainWrapperStyle">
      <elysia-toolbar>
        <elysia-design v-show="activeTab === DESIGN_TAB"></elysia-design>
        <elysia-json v-show="activeTab === JSONCODE_TAB"></elysia-json>
        <elysia-builds v-show="activeTab === BUILDS_TAB" />
      </elysia-toolbar>
    </div>
    <div class="aside-wrapper settings">
      <elysia-setting></elysia-setting>
    </div>
  </div>
</template>
<script setup>
import ElysiaPanel from './ElysiaPanel.vue'
import ElysiaDesign from './ElysiaDesign.vue'
import ElysiaSetting from './ElysiaSetting.vue'
import ElysiaToolbar from './ElysiaToolbar.vue'
import ElysiaJson from './ElysiaJson.vue'
import ElysiaBuilds from './ElysiaBuilds.vue'
import config from '~core/config.js'
import recorder from './core/recorder'
import { computed } from 'vue'
import { CheckCircleFilled } from '@ant-design/icons-vue'
import { activeTab, DESIGN_TAB, JSONCODE_TAB, BUILDS_TAB } from './core/tabs'

const mainWrapperStyle = computed(() => {
  let width = 80
  if (activeTab !== DESIGN_TAB) {
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

recorder.add('初始化缺省记录', CheckCircleFilled)
</script>
<style lang="less">
body {
  overflow: hidden;
}
.elysia-designer {
  display: flex;
  flex-direction: row;

  .aside-wrapper.settings {
    transition: width 0.3s;
  }
}
</style>
