<template>
  <a-collapse
    v-model:activeKey="activeKey"
    :bordered="false"
    class="custom-collapse"
    ghost
  >
    <a-collapse-panel key="1" header="容器组件">
      <draggable
        tag="ul"
        class="widget-ul"
        :list="containersSchema"
        :group="{ name: 'dragGroup', pull: 'clone', put: false }"
        :move="checkMove"
        :clone="clone"
        item-key="id"
      >
        <template #item="{ element: widget, index }">
          <li
            class="widget-item"
            :key="index"
            :title="widget.name"
            @dblclick="onPushComponent(widget)"
            slot="item"
          >
            <component :is="widget.icon"></component>
            {{ widget.name }}
          </li>
        </template>
      </draggable>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="基础字段">
      <draggable
        tag="ul"
        class="widget-ul"
        :list="fieldsSchema"
        :group="{ name: 'dragGroup', pull: 'clone', put: false }"
        :move="checkMove"
        :clone="clone"
        item-key="id"
      >
        <template #item="{ element: widget, index }">
          <li
            class="widget-item"
            :key="index"
            :title="widget.name"
            @dblclick="onPushComponent(widget)"
            slot="item"
          >
            <component :is="widget.icon"></component>
            {{ widget.name }}
          </li>
        </template>
      </draggable>
    </a-collapse-panel>
  </a-collapse>
</template>
<script setup>
import Draggable from 'vuedraggable'
import { clone } from '@/designer/core/clone.js'
import { checkMove } from '@/designer/core/move.js'
import { containersSchema, fieldsSchema } from '@/designer/core/schema/index.js'
import { ref } from 'vue'

const activeKey = ref(['1', '2'])

const onPushComponent = widget => {}
</script>
<style lang="less">
.custom-collapse {
  .widget-ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  .widget-item {
    min-width: 84px;
    height: 40px;
    padding: 0 12px;
    line-height: 40px;
    text-align: center;
    border-radius: 6px;
    background-color: var(--info-color);
    color: #fff;
    list-style: none;
    cursor: grab;
    margin: 0 4px 4px 0;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    span.anticon.elysia-icon {
      font-size: 18px;
      padding-right: 8px;
      color: #fff !important;
    }
  }
}
</style>
