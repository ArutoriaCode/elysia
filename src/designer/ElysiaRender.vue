<template>
  <div
    class="elysia-render"
    :class="{ 'show-shadow': isSelected }"
    @click.stop="setSelected(store)"
  >
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
import { seletedSchema, setSelected } from './core/select'

const isSelected = computed(() => {
  if (isViewStatus.value) {
    return false
  }

  const selected = seletedSchema.value
  return selected && selected.id === store.id
})

const widgetList = computed(() => store.childrenList)

const onEndMove = evt => {
  const toData = evt.to.__draggable_component__.componentData
  const fromData = evt.from.__draggable_component__.componentData

  recorder.add(`${fromData.name}拖拽至${toData.name}组件`, 'sort-icon')
}
</script>

<style lang="less">
.elysia-main-content {
  padding: 28px 24px;
  height: calc(100vh - 48px); // 48px = .elysia-toolbar height
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}

.elysia-render {
  width: 100%;
  // min-height: 100%;

  .root-form {
    width: 100%;

    .draggable-render {
      width: 100%;
      // 48px: toolbar height; 50px: .elysia-main-content padding(top,bottom): 28px
      min-height: calc(100vh - 48px - 56px);
    }
  }

  &.show-shadow {
    outline: 2px dashed var(--info-color) !important;
  }
}
</style>
