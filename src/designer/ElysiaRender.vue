<template>
  <div class="elysia-render">
    <a-form class="root-form">
      <draggable
        scroll
        handle=".move-area"
        class="draggable-render"
        item-key="id"
        :group="{
          name: 'dragGroup',
          pull: true,
          put: true
        }"
        ghostClass="ghost"
        :animation="300"
        :list="widgetList"
        :move="checkMove"
        :disabled="isViewStatus"
        :component-data="{ index: store.path }"
        @end="onEndMove"
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
import { find } from './core/find'

const widgetList = computed(() => store.childrenList)

const onEndMove = evt => {
  const vm = evt.item._underlying_vm_

  const { to, from } = evt
  const toData = evt.to.__draggable_component__.componentData
  const fromData = evt.from.__draggable_component__.componentData
  const targetIsRoot =
    toData.index.length === 1 && toData.index.includes('root')

  if (to !== from && targetIsRoot) {
    // 如果拖拽的目标是最外层，就没必要再计算拖拽源头的路径信息了，因为整个数据包括源头都会被重新计算
    computedPath(store)
    recorder.add(`${fromData.name}拖拽至顶层`, 'sort-icon')
    setSelected(vm.path)
    return
  }

  const fromIsRoot =
    fromData.index.length === 1 && fromData.index.includes('root')
  if (fromIsRoot) {
    computedPath(store)
    nextTick(() => {
      const parentPathList = evt.to.__draggable_component__.componentData.index // 变量重新指向最新路径信息
      vm.path = [...parentPathList, evt.newIndex]
    })

    recorder.add(`${vm.nameAlias}拖拽至${toData.name}组件`, 'sort-icon')
    return
  }

  if (to !== from) {
    // 重新计算拖拽源头的容器下的所有子组件路径信息
    const parent = find(fromData.index)
    computedPath(parent)
  }

  nextTick(() => {
    const parentPathList = evt.to.__draggable_component__.componentData.index // 变量重新指向最新路径信息
    vm.path = [...parentPathList, evt.newIndex]
  })

  recorder.add(`${from.nameAlias}拖拽至${toData.name}组件`, 'sort-icon')

  setSelected(vm.path)
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
