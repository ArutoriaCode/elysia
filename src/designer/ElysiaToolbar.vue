<template>
  <div class="elysia-main" :class="{ [`active-nav-${active}`]: true }">
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
        <rollback-outlined title="取消返回" @click="recorder.cancelView" />
        <restore-icon title="还原" @click="recorder.restore" />
      </div>
      <div class="page-view">
        <span id="busuanzi_container_site_pv">
          本 站 总 访 问 量 <span id="busuanzi_value_site_pv"></span> 次
        </span>
      </div>
      <div class="action-bar">
        <import-icon title="导入JSON" @click="onImport"></import-icon>
        <clear-outlined
          title="清空设计"
          @click="onClearStore"
          :class="{ disabled: isEmptySotre(store) }"
        />
        <play-circle-filled
          title="预览"
          @click="onChangeMountTab(BUILDS_TAB)"
        />
        <code-filled title="查看代码" @click="onChangeMountTab(JSONCODE_TAB)" />
        <build-filled title="设计视图" @click="onChangeMountTab(DESIGN_TAB)" />
      </div>
    </div>
    <div class="elysia-main-content">
      <slot :active="active"></slot>
    </div>
  </div>

  <a-modal
    class="custom-code-modal"
    v-model:visible="showImport"
    title="导入jsonSchema"
    ok-text="确认导入"
    cancel-text="取消"
    @ok="onConfirmImport"
  >
    <codemirror
      v-model="importJson"
      :style="{ width: '100%', height: '480px' }"
      :autofocus="true"
      :indentWithTab="true"
      :tabSize="2"
      :extensions="[json()]"
    ></codemirror>
  </a-modal>
</template>
<script setup>
import store, { importSchemaJson } from '@/designer/core/store.js'
import recorder, {
  isViewStatus,
  disabledUndo,
  disabledRedo
} from './core/recorder'
import { clearStore, isEmptySotre } from './core/store'
import { computed, ref } from 'vue'
import { setSelected } from '@/designer/core/select.js'
import { json } from '@codemirror/lang-json'
import { message } from 'ant-design-vue'
import {
  PlayCircleFilled,
  CodeFilled,
  ClearOutlined,
  BuildFilled,
  RollbackOutlined
} from '@ant-design/icons-vue'
import {
  onChangeMountTab,
  BUILDS_TAB,
  JSONCODE_TAB,
  DESIGN_TAB,
  onUpdateTabContent
} from './core/tabs'

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

  // 数据已清空，不再重复清空
  if (isEmptySotre(store)) {
    return
  }

  setSelected(null)
  clearStore()
  onUpdateTabContent()
}

const showImport = ref(false)
const importJson = ref('')
const onImport = () => {
  importJson.value = JSON.stringify(store, null, 2)
  showImport.value = true
}

const onConfirmImport = () => {
  const result = importSchemaJson(importJson)
  if (!result) {
    message.error('导入错误，jsonSchema不符合规范!')
    return
  }

  showImport.value = false
  message.success('导入成功！')
}
</script>
<style lang="less">
.elysia-main {
  .elysia-toolbar {
    position: relative;
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

  &.active-nav {
    &-design .action-bar .anticon-build {
      color: var(--danger-color);
    }
    &-jsoncode .action-bar .anticon-code {
      color: var(--danger-color);
    }
    &-builds .action-bar .anticon-play-circle {
      color: var(--danger-color);
    }
  }

  &.active-nav-jsoncode .elysia-main-content {
    padding: 0 !important;
  }

  .page-view {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    #busuanzi_container_site_pv {
      font-size: 13px;
      color: #bbbbbb;
      user-select: none;
      font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, Arial,
        'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', STHeiti, sans-serif;
    }
  }
}
</style>
