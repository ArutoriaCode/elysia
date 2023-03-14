<template>
  <div
    class="static-wrapper move-area"
    :class="{ [widget.name]: true, 'show-shadow': isSelected }"
    @click.stop.prevent="onSetSelect"
  >
    <div class="warapper-slot">
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
        <ArrowUpOutlined
          @click.stop.prevent="upMove(widget)"
          title="上移组件"
        />
        <ArrowDownOutlined
          @click.stop.prevent="downMove(widget)"
          title="下移组件"
        />
        <slot name="custom-bar"></slot>
        <DeleteFilled
          @click.stop.prevent="remove(widget)"
          title="删除组件"
        ></DeleteFilled>
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

const onSetSelect = () => {
  if (isViewStatus.value) {
    return // 查看记录的历史，不做操作
  }

  setSelected(props.widget)
}

setSelected(props.widget)
</script>
<style lang="less" scoped>
.static-wrapper {
  position: relative;
  margin-bottom: 3px;
  width: auto;
  padding: 12px;
  & + .static-wrapper {
    margin-top: 8px;
  }
  .static-tr {
    position: absolute;
    right: 12px;
    top: -8px;
    z-index: 99;
    background-color: var(--primary-color);
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
        background-color: var(--primary-color);
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
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }

  .baisc-btns {
    .anticon {
      background-color: var(--primary-color);
      color: #fff;
      padding: 3px;
      font-size: 20px;
    }
  }
  .move-area {
    cursor: move !important;
  }

  &.show-shadow {
    background-color: var(--primary-color-2);
  }
}
</style>
