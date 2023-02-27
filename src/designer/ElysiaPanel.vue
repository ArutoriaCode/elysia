<template>
  <div class="elysia-panel">
    <a-menu
      v-model:selectedKeys="activeKeys"
      mode="vertical"
      class="elysia-menu"
    >
      <a-menu-item
        :key="key"
        :title="menu.title"
        v-for="(menu, key) in menuItems"
      >
        <component :is="menu.icon"></component>
      </a-menu-item>
    </a-menu>
    <div class="menu-content">
      <div class="menu-header">
        <h2 class="menu-header-title">{{ menuItems[selectedKey].title }}</h2>
        <div class="menu-header-actions"></div>
      </div>
      <div class="menu-body">
        <panel-component v-show="selectedKey === '1'"></panel-component>
        <panel-outline v-show="selectedKey === '2'"></panel-outline>
        <panel-history v-show="selectedKey === '3'"></panel-history>
      </div>
    </div>
  </div>
</template>

<script setup>
import panelComponent from './components/panel-component.vue'
import { ref, computed, defineAsyncComponent } from 'vue'

const panelOutline = defineAsyncComponent(() =>
  import('./components/panel-outline.vue')
)
const panelHistory = defineAsyncComponent(() =>
  import('./components/panel-history.vue')
)

const menuItems = {
  1: { title: '组件', icon: 'cubes-icon' },
  2: { title: '大纲', icon: 'bars-staggered-icon' },
  3: { title: '历史', icon: 'history-icon' }
}
const selectedKey = ref('1')
const activeKeys = computed({
  set (value) {
    selectedKey.value = value.pop()
  },
  get () {
    return [selectedKey.value]
  }
})
</script>

<style lang="less">
.elysia-panel {
  .elysia-menu {
    height: 100%;
    &.ant-menu-inline-collapsed {
      width: 60px;
    }

    .ant-menu-item {
      // padding: 0 12px !important;
      text-align: center;
      height: 52px;
      line-height: 56px;
      margin: 0 !important;

      span.anticon.elysia-icon {
        font-size: 24px;
      }
    }
  }

  .menu-content {
    width: calc(100% - 57px);
    .menu-header {
      padding: 10px 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-color);
      &-title {
        margin: 0;
        font-size: 20px;
      }

      &-actions {
        display: flex;
        align-items: center;
      }
    }

    .menu-body {
      width: 100%;
      max-height: calc(100vh - 54px);
      overflow: auto;
    }
  }
}
</style>
