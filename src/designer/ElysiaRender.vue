<template>
  <div class="elysia-render">
    <a-form class="root-form">
      <draggable
        scroll
        handle=".move-area"
        class="draggable-render"
        v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }"
        :list="widgetList"
        :move="checkMove"
        :disabled="readonly"
        @add="onDragAdd"
        item-key="id"
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
import store from './core/store'
import { checkMove } from './core/move'
import { setSelected } from './core/select'
import { ref, computed } from 'vue';

const widgetList = computed(() => store.childrenList)
const readonly = ref(false)
const onDragAdd = evt => {
  setSelected(evt.newIndex)
}
</script>

<style lang="less">
.elysia-render {
  height: 100vh;
  width: 55vw;
  padding: 24px;
  overflow: hidden;
  overflow-y: auto;

  .draggable-render {
    height: 100%;
    width: 100%;
  }

  .root-form {
    height: 100vh;
    width: 100%;
  }
}
</style>
