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
    :component-data="{ index: widget.path, type: widget.name }"
    :item-key="itemKey"
    :disabled="isViewStatus"
    @end.stop.prevent="onEndMove"
  >
    <template v-for="slotKey in Object.keys($slots)" v-slot:[slotKey]="scope">
      <slot :name="slotKey" v-bind="scope" />
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
  console.log('🚀 ~ file: container-draggable.vue:60 ~ onEndMove ~ evt:', evt)
  if (evt.to !== evt.from) {
    const parent = evt.from.__draggable_component__.componentData
    // 不是容器内的排序操作，被拖拽过来的组件来源需要重新计算路径
    computedPath(find(parent.index))
  }

  const toData = evt.to.__draggable_component__.componentData
  const parentPathList = toData.index
  const vm = evt.item._underlying_vm_
  vm.path = [...parentPathList, evt.newIndex]

  setSelected(vm.path)
}
</script>
