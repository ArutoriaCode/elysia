<template>
  <div class="elysia-wrapper">
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
        <!-- <outline-panel v-show="selectedKey === '2'"></outline-panel>
        <history-panel v-show="selectedKey === '3'"></history-panel> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import panelComponent from './components/panel-component.vue'
import { ref, computed } from 'vue'

const selectedKey = ref('1')
const activeKeys = computed({
  set (value) {
    selectedKey.value = value.pop()
  },
  get () {
    return [selectedKey.value]
  }
})
const menuItems = ref({
  1: { title: '组件', icon: 'cubes-icon' },
  2: { title: '大纲', icon: 'bars-staggered-icon' },
  3: { title: '历史', icon: 'history-icon' }
})
</script>

<style lang="less">
.elysia-wrapper {
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: row;
  .elysia-menu {
    height: 100%;
    &.ant-menu-inline-collapsed {
      width: 60px;
    }

    .ant-menu-item {
      // padding: 0 12px !important;
      text-align: center;
      height: 48px;
      line-height: 48px;
      margin: 0;
      i.anticon {
        margin-right: 0;
        font-size: 20px;
        color: var(--primary-color);
      }
    }
  }

  .menu-content {
    width: 100%;
    border-right: 1px solid var(--primary-color);

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
  }
}
</style>
