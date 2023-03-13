<template>
  <div
    class="elysia-panel"
    :class="{ fixed: config.panelFixed, 'hidden-panel': config.hiddenPanel }"
  >
    <a-menu
      v-model:selectedKeys="activeKeys"
      mode="vertical"
      class="elysia-menu"
    >
      <a-menu-item
        :key="key"
        :title="menu.title"
        v-for="(menu, key) in menuItems"
        @click="setPanelVisible(true)"
      >
        <component :is="menu.icon"></component>
      </a-menu-item>
    </a-menu>
    <div class="menu-content">
      <div class="menu-header">
        <h2 class="menu-header-title">{{ menuItems[selectedKey].title }}</h2>
        <div class="menu-header-actions">
          <pushpin-filled
            v-if="config.panelFixed"
            @click="setPanelFixed(false)"
          />
          <pushpin-outlined v-else @click="setPanelFixed(true)" />
          <close-outlined @click="setPanelVisible(false)" />
        </div>
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
import {
  PushpinFilled,
  PushpinOutlined,
  CloseOutlined
} from '@ant-design/icons-vue'
import { ref, computed, defineAsyncComponent } from 'vue'
import config, { setPanelFixed, setPanelVisible } from '~core/config.js'
const panelComponent = defineAsyncComponent(() =>
  import('./components/panel-component.vue')
)
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
  height: 100%;
  width: 20vw;
  background-color: #fff;
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
      height: 49px;
      line-height: 56px;
      margin: 0 !important;
      span.anticon.elysia-icon {
        font-size: 24px;
      }
    }
  }

  .menu-content {
    z-index: 100;
    background-color: #fff;
    min-width: 130px;
    width: calc(100% - 56px);
    height: 100%;
    border-right: 1px solid var(--primary-color);
    .menu-header {
      padding: 10px 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-color);
      &-title {
        color: var(--primary-color);
        font-weight: bold;
        margin: 0;
        font-size: 20px;
      }

      &-actions {
        display: flex;
        align-items: center;
        color: var(--primary-color);
        .anticon {
          cursor: pointer;
          padding: 4px;
          transition: transform 0.4s;
          font-size: 16px;
          & + .anticon {
            margin-left: 4px;
          }
          &:hover {
            transform: scale(1.4);
          }
          &.anticon-close:hover {
            transform: rotate(180deg);
          }
        }
      }
    }

    .menu-body {
      width: 100%;
      max-height: calc(100vh - 54px);
      overflow: auto;
    }
  }

  &.fixed {
    width: 56px;
    .menu-content {
      position: fixed;
      z-index: 100;
      left: 57px; // 56px + 1px (border-right)
      width: calc(20vw - 56px);
    }
  }

  &.hidden-panel {
    width: 56px !important;
    .ant-menu.ant-menu-root {
      border-right: 1px solid var(--primary-color);
    }
    .menu-header,
    .menu-content {
      display: none;
    }
  }
}
</style>
