<template>
  <static-wrapper :widget="widget">
    <a-card v-bind="widget.options">
      <draggable
        handle=".move-area"
        v-bind="{
          group: 'dragGroup',
          ghostClass: 'ghost',
          animation: 300
        }"
        :list="widget.childrenList"
        :move="checkMove"
        :component-data="{ path: widget.path }"
        @add="onDragAdd"
        item-key="id"
        class="container-draggable"
      >
        <!-- :is="elysia-xxx" 加上一个前缀，免得一些命名会被当做内置标签渲染 比如: button input -->
        <template #item="{ element: widget }">
          <component :is="'elysia-' + widget.name" :widget="widget"></component>
        </template>
      </draggable>
    </a-card>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import { checkMove } from '@/designer/core/move.js'
import { setSelected } from '@/designer/core/select.js'
import draggable from 'vuedraggable'
const { widget } = defineProps({
  widget: Object
})

const onDragAdd = evt => {
  setSelected([...widget.path, evt.newIndex])
}
</script>
<style>
.container-draggable {
  padding: 4px;
}
</style>
