<template>
  <div class="static-wrapper">
    <div
      class="warapper-slot"
      :class="{ 'show-shadow': isSelected }"
      @click.stop="setSelected(widget.path)"
    >
      <slot></slot>
    </div>
    <div class="static-tr" v-if="isSelected">
      <span class="w-name">{{ widget.name }}</span>
      <div class="baisc-btns">
        <DragOutlined class="move-area" />
        <CopyOutlined @click="copy(widget)" />
        <ArrowUpOutlined @click="upMove(widget)" />
        <ArrowDownOutlined />
        <slot name="custom-bar"></slot>
        <MinusSquareOutlined class="trash-widget" />
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
  MinusSquareOutlined
} from '@ant-design/icons-vue'
import { computed } from 'vue'
import { seletedSchema, setSelected } from '@/designer/core/select.js'
import { upMove } from '@/designer/core/move.js'
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

    .trash-widget.anticon {
      background-color: var(--danger-color);
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
