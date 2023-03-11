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
        :component-data="{ name: '表单' }"
        @end="onEndMove"
      >
        <!-- :is="elysia-xxx" 加上一个前缀，免得一些命名会被当做内置标签渲染 比如: button input -->
        <template #item="{ element: widget, index }">
          <component
            :is="'elysia-' + widget.name"
            :widget="{ ...widget, path: ['root', index] }"
          ></component>
        </template>
      </draggable>
    </a-form>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import store from './core/store'
import { checkMove } from './core/move'
import { computed } from 'vue'
import recorder, { isViewStatus } from './core/recorder'

const widgetList = computed(() => store.childrenList)

const onEndMove = evt => {
  const toData = evt.to.__draggable_component__.componentData
  const fromData = evt.from.__draggable_component__.componentData

  recorder.add(`${fromData.name}拖拽至${toData.name}组件`, 'sort-icon')
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
