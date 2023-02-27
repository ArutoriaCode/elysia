<template>
  <draggable
    v-bind="$attrs"
    :handle="handle"
    :move="checkMove"
    :clone="clone"
    :list="widget.childrenList"
    :group="group"
    :ghostClass="ghostClass"
    :animation="animation"
    :component-data="{ path: widget.path }"
    :item-key="itemKey"
    :disabled="isViewStatus"
    @add="onAdd"
  >
    <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </draggable>
</template>
<script setup>
import draggable from 'vuedraggable'
import { checkMove } from '../core/move'
import { clone } from '../core/clone'
import { setSelected } from '../core/select'
import recorder, { isViewStatus } from '../core/recorder'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  group: {
    type: String,
    default: 'dragGroup'
  },
  ghostClass: {
    type: String,
    default: 'ghost'
  },
  animation: {
    type: Number,
    default: 300
  },
  // 组件信息，必须传递！ 用于move事件来自动计算路径信息
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

const onAdd = evt => {
  const { path, nameAlias } = props.widget
  setSelected([...path, evt.newIndex])
  recorder.add(`向${nameAlias}组件插入子组件`, 'history-add-icon')
}
</script>
