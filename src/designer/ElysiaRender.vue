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
        :component-data="{ parent: store }"
        item-key="id"
        @add.stop="onAdd"
        @end.stop="onEnd"
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
import store, { computedPath } from './core/store'
import { checkMove } from './core/move'
import { setSelected } from './core/select'
import { computed, nextTick } from 'vue'
import recorder, { isViewStatus } from './core/recorder'

const widgetList = computed(() => store.childrenList)
const onAdd = evt => {
  store.childrenList = computedPath(store.childrenList)

  const { name, nameAlias } = evt.item._underlying_vm_
  recorder.add(`添加${nameAlias || name}组件`, 'history-add-icon')
  nextTick(() => {
    setSelected(evt.newIndex)
  })
}

const onEnd = evt => {
  console.log('onEnd -------------------->', evt)
  store.childrenList = computedPath(store.childrenList)
}
</script>

<style lang="less">
.elysia-render {
  width: 100%;
  // min-height: 100%;

  .root-form {
    width: 100%;

    .draggable-render {
      width: 100%;
      min-height: calc(100vh - 96px);
    }
  }
}
</style>
