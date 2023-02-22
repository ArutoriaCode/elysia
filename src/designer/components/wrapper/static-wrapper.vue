<template>
  <div class="static-wrapper">
    <div
      class="warapper-slot"
      :class="{ 'show-shadow': isSelected }"
      @click="setSelected(widget.path)"
    >
      <slot></slot>
    </div>
    <div class="static-tr" v-if="isSelected">
      <span class="w-name move-area" title="长按拖拽">{{ widget.name }}</span>
      <div class="baisc-btns">
        <DragOutlined class="move-area" title="长按拖拽" />
        <CopyOutlined @click="copy(widget)" title="拷贝组件" />
        <ArrowUpOutlined @click="upMove(widget)" title="上移组件" />
        <ArrowDownOutlined @click="downMove(widget)" title="下移组件" />
        <slot name="custom-bar"></slot>
        <DeleteFilled @click="remove(widget)" title="删除组件"></DeleteFilled>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  DragOutlined,
  CopyOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  DeleteOutlined,
  DeleteFilled
} from '@ant-design/icons-vue'
import { computed } from 'vue'
import { seletedSchema, setSelected } from '@/designer/core/select.js'
import { upMove, downMove, remove } from '@/designer/core/move.js'
import copy from '@/designer/core/copy.js'
const props = defineProps({
  widget: {
    type: Object,
    default: () => ({})
  }
})

const isSelected = computed(
  () => seletedSchema.value && seletedSchema.value.id === props.widget.id
)
</script>
<style lang="less" scoped>
.static-wrapper {
  position: relative;
  margin-bottom: 3px;
  width: auto;
  & + .static-wrapper {
    margin-top: 8px;
  }
  .static-tr {
    position: absolute;
    right: -1px;
    top: -26px;
    z-index: 99;
    background-color: var(--info-color);
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    .w-name {
      text-align: center;
      line-height: 26px;
      color: #fff;
      display: inline-block;
      padding: 0 8px;
      cursor: pointer;
    }
    .anticon {
      color: #fff;
      padding: 3px;
      font-size: 20px;
      padding: 0 4px;
      cursor: pointer;
    }
  }

  .baisc-btns {
    .anticon {
      background-color: var(--info-color);
      color: #fff;
      padding: 3px;
      font-size: 20px;
    }
  }
  .move-area {
    cursor: move !important;
  }

  .warapper-slot.show-shadow {
    outline: 2px solid var(--info-color) !important;
  }
}
</style>
