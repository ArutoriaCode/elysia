<template>
  <v-draggable
    v-bind="$attrs"
    :handle="handle"
    :move="checkMove"
    :clone="clone"
    :list="widget.childrenList"
    :group="group"
    :ghostClass="ghostClass"
    :animation="animation"
    :component-data="{ parent: widget }"
    :item-key="itemKey"
    :disabled="isViewStatus"
    @add.stop="onAdd"
    @end.stop="onEnd"
  >
    <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-draggable>
</template>
<script setup>
import vDraggable from 'vuedraggable'
import { checkMove } from '../core/move'
import { clone } from '../core/clone'
import { setSelected } from '../core/select'
import recorder, { isViewStatus } from '../core/recorder'
import { nextTick } from 'vue'
import { computedPath } from '../core/store'
import store from '@/designer/core/store.js';

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
  store.childrenList = computedPath(store.childrenList)
  nextTick(() => {
    const { path, nameAlias } = props.widget
    const widget = setSelected([...path, evt.newIndex])
    recorder.add(
      `向${nameAlias}组件插入${widget.nameAlias}组件`,
      'history-add-icon'
    )
  })
}

const onEnd = evt => {
  console.log('onEnd -------------------->', evt)
  store.childrenList = computedPath(store.childrenList)
}
</script>
