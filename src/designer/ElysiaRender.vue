<template>
  <div class="elysia-render">
    <a-form class="root-form">
      <draggable
        scroll
        handle=".move-area"
        class="draggable-render"
        v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }"
        :list="widgetList"
        :move="checkMove"
        :disabled="isViewStatus"
        @add="onDragAdd"
        item-key="id"
      >
        <!-- :is="elysia-xxx" 加上一个前缀，免得一些命名会被当做内置标签渲染 比如: button input -->
        <template #item="{ element: widget }">
          <component :is="'elysia-' + widget.name" :widget="widget"></component>
        </template>
      </draggable>
    </a-form>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import store from './core/store'
import { checkMove } from './core/move'
import { setSelected } from './core/select'
import { computed } from 'vue'
import recorder, { isViewStatus } from './core/recorder'

const widgetList = computed(() => store.childrenList)
const onDragAdd = evt => {
  setSelected(evt.newIndex)
  const { name, nameAlias } = evt.item._underlying_vm_
  recorder.add(`添加${nameAlias || name}组件`, 'history-add-icon')
}
</script>

<style lang="less">
.elysia-render {
  height: 100%;
  width: 100%;
  .draggable-render {
    height: 100%;
    width: 100%;
  }

  .root-form {
    height: 100%;
    width: 100%;
  }
}
</style>
