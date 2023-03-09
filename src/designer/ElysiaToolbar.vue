<template>
  <div class="elysia-main">
    <div class="elysia-toolbar">
      <div v-if="!isViewStatus">
        <undo-icon
          title="撤销"
          :class="{ disabled: disabledUndo }"
          @click="recorder.undo"
        ></undo-icon>
        <redo-icon
          title="重做"
          :class="{ disabled: disabledRedo }"
          @click="recorder.redo"
        ></redo-icon>
      </div>
      <div v-else>
        <restore-icon title="还原" @click="recorder.restore"></restore-icon>
      </div>

      <div>
        <template v-if="active === 'render'">
          <clear-outlined title="清空设计" @click="onClearStore" />
          <play-circle-filled title="预览" @click="onViewBuilds" />
          <code-filled title="查看代码" @click="onViewJson" />
        </template>
        <build-filled title="设计视图" v-else @click="onViewRender" />
      </div>
    </div>
    <div class="elysia-main-content" :class="{ [`active-${active}`]: true }">
      <slot :active="active"></slot>
    </div>
  </div>
</template>
<script setup>
import {
  PlayCircleFilled,
  CodeFilled,
  ClearOutlined,
  BuildFilled
} from '@ant-design/icons-vue'
import {
  clearStore,
  viewBuilds,
  viewJson,
  viewBuildsJson,
  viewSchemaJson
} from './core/store'
import recorder, {
  isViewStatus,
  disabledUndo,
  disabledRedo
} from './core/recorder'
import { computed } from 'vue'
import { setSelected } from '@/designer/core/select.js'

const props = defineProps({
  modelValue: String
})

const emits = defineEmits(['update:modelValue'])
const active = computed({
  set (value) {
    emits('update:modelValue', value)
  },
  get () {
    return props.modelValue
  }
})

const onClearStore = () => {
  if (isViewStatus.value) {
    return
  }

  setSelected(null)
  clearStore()
}

const onViewBuilds = () => {
  active.value = 'builds'
  viewBuilds()
}

const onViewJson = () => {
  active.value = 'json'
  viewJson()
}

const onViewRender = () => {
  viewBuildsJson.value = null
  viewSchemaJson.value = null
  active.value = 'render'
}
</script>
<style lang="less">
.elysia-main {
  .elysia-toolbar {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid var(--info-color);
    .anticon {
      font-size: 22px;
      color: var(--primary-color);
      cursor: pointer;
      user-select: none;
      padding: 8px;
      transition: transform 0.4s;
      &:hover {
        transform: scale(1.3);
      }
      &:active {
        transform: scale(1.1);
      }

      &.disabled {
        color: #bbbbbb !important;
        &:hover {
          transform: scale(1);
        }
        &:active {
          transform: scale(1);
        }
      }
    }
  }
  .elysia-main-content.active-json {
    padding: 0 !important;
  }
}
</style>
