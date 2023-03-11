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
      name: widget.nameAlias || widget.name
    }"
    :item-key="itemKey"
    :disabled="isViewStatus"
    @end="onEndMove"
  >
    <!-- 传递插槽需要有个dom包括着，否则draggable在获取item插槽无法拿到对应dom节点，从而导致无法拖动 -->
    <template #item="scope">
      <div :id="scope.element.id">
        <slot
          v-bind="{
            element: {
              ...scope.element,
              path: [...widget.path, scope.index]
            },
            index: scope.index
          }"
        ></slot>
      </div>
    </template>
  </draggable>
</template>
<script setup>
import draggable from 'vuedraggable'
import { checkMove } from '../core/move'
import { clone } from '../core/clone'
import recorder, { isViewStatus } from '../core/recorder'

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
  const toData = evt.to.__draggable_component__.componentData
  const fromData = evt.from.__draggable_component__.componentData

  recorder.add(`${fromData.name}拖拽至${toData.name}组件`, 'sort-icon')
}
</script>
