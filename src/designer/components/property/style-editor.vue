<script setup>
import { css } from '@codemirror/lang-css'
import { ref, toRef, unref } from 'vue'
import { insertCustomCssToHead, extractCssClass } from '@/utils'
import { seletedSchema, isRootForm } from '@/designer/core/select.js'
import usePropEditorModel from '~property/hooks/usePropEditorModel.js'
import store from '@/designer/core/store.js'
const extensions = [css()]
const visible = ref(false)
const onEditStyle = () => {
  visible.value = true
}

const { modelValue: styles, propertyCN, property, action } = usePropEditorModel()
const className = toRef(seletedSchema.value.options, 'className') // 当前选中的样式名称
const classNameList = ref([])

function createClassNameList () {
  if (unref(styles)) {
    insertCustomCssToHead(unref(styles), seletedSchema.value.id)
  }

  let newClassNameList = []
  if (!isRootForm() && store.options.globalStyle) {
    newClassNameList.push(
      ...extractCssClass(store.options.globalStyle, value => {
        // 全局和组件的样式可能会命名重复，所以value需要加个 $global- 前缀作为区分
        return {
          value: '$global-' + value,
          label: '[Global] ' + value
        }
      })
    )
  }

  const extractClassName = extractCssClass(styles, value => {
    return {
      value: value,
      label: value,
      key: value
    }
  })

  if (extractClassName.length > 0) {
    newClassNameList.push(...extractClassName)
  }

  classNameList.value = newClassNameList
}

createClassNameList()

const onRecord = () => {
  action.record(() => createClassNameList())
}
</script>
<template>
  <a-form-item class="style-editor" :label="propertyCN || property">
    <a-select
      showSearch
      mode="multiple"
      style="width: calc(100% - 90px)"
      v-model:value="className"
      :options="classNameList"
      :max-tag-count="2"
      allowClear
    />
    <a-button @click="onEditStyle" class="property-edit-btn">
      <css-icon></css-icon>
      <span style="margin-bottom: 2px">编辑</span>
    </a-button>
    <a-modal
      v-model:visible="visible"
      :title="propertyCN || property"
      :footer="null"
      :keyboard="false"
      class="custom-code-modal"
      @cancel="onRecord"
      @ok="onRecord"
    >
      <codemirror
        v-model="styles"
        style="width: 100%; height: 450px"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
      />
    </a-modal>
  </a-form-item>
</template>
<style lang="less">
.style-editor .ant-form-item-control-input-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  .property-edit-btn {
    margin-left: 2px;
  }
}
</style>
