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
        item-key="id"
        :list="containersSchema"
        :group="{ name: 'dragGroup', pull: 'clone', put: false }"
        :move="checkMove"
        :clone="clone"
        :sort="false"
        @end="onEndMove"
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
            {{ widget.nameAlias || widget.name }}
          </li>
        </template>
      </draggable>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="基础字段">
      <draggable
        tag="ul"
        class="widget-ul"
        item-key="id"
        :list="fieldsSchema"
        :group="{ name: 'dragGroup', pull: 'clone', put: false }"
        :clone="clone"
        :sort="false"
        :move="checkMove"
        @end="onEndMove"
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
            {{ widget.nameAlias || widget.name }}
          </li>
        </template>
      </draggable>
    </a-collapse-panel>
  </a-collapse>
</template>
<script setup>
import Draggable from 'vuedraggable'
import store from '@/designer/core/store.js'
import { clone } from '@/designer/core/clone.js'
import { checkMove } from '@/designer/core/move.js'
import { containersSchema, fieldsSchema } from '@/designer/core/schema/index.js'
import { setSelected } from '@/designer/core/select.js'
import { ref, nextTick } from 'vue'
import recorder from '../core/recorder'

const activeKey = ref(['1', '2'])

const onPushComponent = widget => {
  const indexInParent = store.childrenList.length - 1
  widget.path = [indexInParent < 0 ? 0 : indexInParent]
  store.childrenList.push(widget)
}

const onEndMove = evt => {
  if (evt.to === evt.from) {
    return
  }

  // 左侧栏无法移动，所以不需要计算拖拽来源的路径信息
  const vm = evt.item._underlying_vm_
  const toData = evt.to.__draggable_component__.componentData
  const action = toData.name
    ? `向${toData.name}组件插入${vm.nameAlias || vm.name}组件`
    : `添加${vm.nameAlias}组件`

  recorder.add(action, 'history-add-icon')
}
</script>
<style lang="less">
.custom-collapse {
  .ant-collapse-header {
    color: var(--primary-color) !important;
    span.anticon {
      color: var(--primary-color) !important;
    }
  }

  .widget-ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .widget-item {
    min-width: 84px;
    height: 36px;
    padding: 0 8px;
    line-height: 36px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid var(--info-color);
    color: var(--info-color);
    list-style: none;
    cursor: grab;
    margin: 0 6px 6px 0;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    white-space: nowrap;
    span.anticon {
      font-size: 18px;
      padding-right: 8px;
    }
  }
}
</style>
