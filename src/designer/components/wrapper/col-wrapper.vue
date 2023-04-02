<template>
  <a-col
    class="col-wrapper"
    :class="colClassName"
    @click.stop.prevent="onSetSelect"
    :span="model.span"
    :pull="model.pull"
    :push="model.push"
    :offset="model.offset"
  >
    <slot></slot>
    <div class="col-tr" v-if="isSelected">
      <span class="w-name">
        <EyeInvisibleFilled v-show="model.hidden === true" title="已隐藏" />
        {{ widget.nameAlias }}
      </span>
      <div class="baisc-btns">
        <CopyOutlined @click.stop.prevent="onCopyCol" title="拷贝栅格" />
        <ArrowLeftOutlined
          @click.stop.prevent="upMove(widget)"
          title="左移栅格"
        />
        <ArrowRightOutlined
          @click.stop.prevent="downMove(widget)"
          title="右移栅格"
        />
        <DeleteFilled
          @click.stop.prevent="remove(widget)"
          title="删除栅格"
        ></DeleteFilled>
      </div>
    </div>
  </a-col>
</template>
<script setup>
import {
  CopyOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DeleteFilled,
  EyeInvisibleFilled
} from '@ant-design/icons-vue'
import { computed } from 'vue'
import { seletedSchema, setSelected } from '@/designer/core/select.js'
import { upMove, downMove, remove } from '@/designer/core/move.js'
import { isViewStatus } from '../../core/recorder'
import { findParent } from '../../core/find'
import copy from '@/designer/core/copy.js'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting'
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

const { className, model } = useGlobalSetting()
const colClassName = computed(() => {
  const classNameList = [props.widget.name]
  if (isSelected.value) {
    classNameList.push('show-shadow')
  }

  classNameList.push(...className.value)

  return classNameList
})

const onSetSelect = () => {
  if (isViewStatus.value) {
    return // 查看记录的历史，不做操作
  }

  setSelected(props.widget)
}

const onCopyCol = () => {
  copy(props.widget)
  const parentWidget = findParent(props.widget)
  parentWidget.options.cols += 1
}
</script>
<style lang="less" scoped>
.col-wrapper {
  position: relative;
  margin-bottom: 3px;
  width: auto;
  padding: 12px;
  border: 1px dashed var(--primary-color);
  .col-tr {
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
    background-color: var(--primary-color-3);
  }
}
</style>
