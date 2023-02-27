<template>
  <div class="elysia-main">
    <div class="elysia-toolbar">
      <div v-if="!isViewStatus">
        <undo-icon title="撤销"></undo-icon>
        <redo-icon title="重做"></redo-icon>
      </div>
      <div v-else>
        <restore-icon title="还原" @click="recorder.restore"></restore-icon>
      </div>

      <div>
        <clear-outlined title="清空设计" @click="clearStore" />
        <play-circle-filled title="预览" />
        <code-filled
          title="查看代码"
          v-if="active === 'render'"
          @click="onViewJson"
        />
        <build-filled title="设计视图" v-else @click="onViewRender" />
      </div>
    </div>
    <div class="elysia-main-content" :class="{ [`active-${active}`]: true }">
      <slot :active="active"></slot>
    </div>
  </div>
</template>
<script setup>
import {
  PlayCircleFilled,
  CodeFilled,
  ClearOutlined,
  BuildFilled
} from '@ant-design/icons-vue'
import { clearStore, viewJson, viewSchemaJson } from './core/store'
import recorder, { isViewStatus } from './core/recorder'
import { ref } from 'vue'

const active = ref('render')
const onViewJson = () => {
  active.value = 'json'
  viewJson()
}
const onViewRender = () => {
  viewSchemaJson.value = null
  active.value = 'render'
}
</script>
<style lang="less">
.elysia-main {
  .elysia-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid var(--info-color);
    .anticon {
      font-size: 22px;
      color: var(--primary-color);
      cursor: pointer;
      user-select: none;
      padding: 8px;
      &:hover {
        transition: transform 0.3s;
        transform: scale(1.2);
      }
    }
  }
  .elysia-main-content.active-json {
    padding: 0;
  }
}
</style>
