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
import history from '../core/history'

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
  widget: {
    type: Object,
    required: true
  },
  itemKey: {
    type: String,
    default: 'id'
  },
  handle: {
    type: String,
    default: '.move-area'
  }
})

const onAdd = evt => {
  const { path, name } = props.widget
  setSelected([...path, evt.newIndex])
  history.add(`向 ${name} 组件插入子组件`, 'history-add-icon')
}
</script>
