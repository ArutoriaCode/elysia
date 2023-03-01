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
        :component-data="{ index: store.path, type: 'root-form' }"
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
  // vm 响应式对象
  const vm = evt.item._underlying_vm_
  if (evt.to !== evt.from) {
    // 不同容器内的子组件的拖拽，被拖拽过来的组件其容器内的子组件都需要重新计算路径
    const parent = evt.from.__draggable_component__.componentData
    computedPath(find(parent.index))
  } else {
    // 容器内排序
    const toData = evt.to.__draggable_component__.componentData
    vm.path = [...toData.index, evt.newIndex]
  }

  // 通过`computedPath` 或 `vm.path = [...toData.index, evt.newIndex]`重新计算了路径信息
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
