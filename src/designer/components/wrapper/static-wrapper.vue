<template>
  <div class="static-wrapper" @click.stop.prevent="onSetSelect">
    <div :class="{ 'warapper-slot': true, 'show-shadow': isSelected }">
      <slot></slot>
    </div>
    <div class="static-tr" v-if="isSelected">
      <span class="w-name move-area" title="长按拖拽">
        <EyeInvisibleFilled
          v-show="widget.options.hidden === true"
          title="已隐藏"
        />
        {{ widget.nameAlias }}
      </span>
      <div class="baisc-btns">
        <DragOutlined class="move-area" title="长按拖拽" />
        <CopyOutlined @click.stop.prevent="copy(widget)" title="拷贝组件" />
        <ArrowUpOutlined @click.stop.prevent="upMove(widget)" title="上移组件" />
        <ArrowDownOutlined @click.stop.prevent="downMove(widget)" title="下移组件" />
        <slot name="custom-bar"></slot>
        <DeleteFilled @click.stop.prevent="remove(widget)" title="删除组件"></DeleteFilled>
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
  DeleteFilled,
  EyeInvisibleFilled
} from '@ant-design/icons-vue'
import { computed } from 'vue'
import { seletedSchema, setSelected } from '@/designer/core/select.js'
import { upMove, downMove, remove } from '@/designer/core/move.js'
import copy from '@/designer/core/copy.js'
import { isViewStatus } from '../../core/recorder'
const props = defineProps({
  widget: {
    type: Object,
    default: () => ({})
  }
})

const isSelected = computed(() => {
  if (isViewStatus.value) {
    return false
  }

  const selected = seletedSchema.value
  return selected && selected.id === props.widget.id
})

const onSetSelect = evt => {
  console.log('🚀 ~ file: static-wrapper.vue:56 ~ onSetSelect ~ evt:', evt)
  if (isViewStatus.value) {
    return // 查看记录的历史，不做操作
  }

  if (isSelected.value) {
    return // 当前已经是选中的状态
  }

  console.log(
    '🚀 ~ file: static-wrapper.vue:67 ~ onSetSelect ~ props.widget:',
    props.widget
  )
  setSelected(props.widget)
}
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
    right: -2px;
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
      padding: 0 8px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;

      .anticon-eye-invisible {
        display: inline-block;
        background-color: var(--info-color);
        color: #fff;
        padding-top: 2px;
        font-size: 18px;
      }
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
