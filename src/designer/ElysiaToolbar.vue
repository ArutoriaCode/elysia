<template>
  <div class="elysia-toolbar">
    <div>
      <undo-icon title="撤销"></undo-icon>
      <redo-icon title="重做"></redo-icon>
    </div>

    <div>
      <clear-outlined title="清空设计" @click="clearStore" />
      <play-circle-filled title="预览" />
      <code-filled title="查看代码" />
    </div>
  </div>
</template>
<script setup>
import {
  PlayCircleFilled,
  CodeFilled,
  ClearOutlined
} from '@ant-design/icons-vue'
import { clearStore } from './core/store'
</script>
<style lang="less">
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
</style>
