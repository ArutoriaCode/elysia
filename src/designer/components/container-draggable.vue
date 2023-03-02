<template>
  <draggable
    v-bind="$attrs"
    :list="widget.childrenList"
    :handle="handle"
    :move="checkMove"
    :clone="clone"
    :group="group"
    :ghostClass="ghostClass"
    :animation="animation"
    :component-data="{
      index: widget.path,
      name: widget.nameAlias || widget.name
    }"
    :item-key="itemKey"
    :disabled="isViewStatus"
    @end="onEndMove"
  >
    <!-- 传递插槽需要有个dom包括着，否则draggable在获取item插槽无法拿到对应dom节点，从而导致无法拖动 -->
    <template #item="scope">
      <div :id="scope.element.id">
        <slot v-bind="scope"></slot>
      </div>
    </template>
  </draggable>
</template>
<script setup>
import draggable from 'vuedraggable'
import { checkMove } from '../core/move'
import { clone } from '../core/clone'
import { setSelected } from '../core/select'
import recorder, { isViewStatus } from '../core/recorder'
import { computedPath } from '../core/store'
import { find } from '../core/find'
import store from '@/designer/core/store.js'
import { nextTick } from 'vue'

const props = defineProps({
  group: {
    type: [String, Object],
    default: () => ({
      name: 'dragGroup',
      pull: true,
      put: true
    })
  },
  ghostClass: {
    type: String,
    default: 'ghost'
  },
  animation: {
    type: Number,
    default: 300
  },
  widget: {
    type: Object,
    required: true
  },
  itemKey: {
    type: String,
    default: 'id'
  },
  // 可以进行拖拽操作的区域
  handle: {
    type: String,
    default: '.move-area'
  }
})

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
    setSelected(vm.path)
  })

  recorder.add(`${fromData.name}拖拽至${toData.name}组件`, 'sort-icon')
}
</script>
