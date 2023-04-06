<script setup>
import { EditFilled } from '@ant-design/icons-vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'
import { ctxComplete } from '@/designer/utils/complete.js'
import { ref } from 'vue'
import usePropEditorModel from '~property/hooks/usePropEditorModel.js'

const extensions = [javascript(), ctxComplete, json()]

const { modelValue, propertyCN, property, action } = usePropEditorModel()
const visible = ref(false)
const onEditCode = () => {
  visible.value = true
}

const example = `
  合法的JSON
  [{"label":"标签","value":"值"}]

  js代码直接返回数组
  return [{ label: 'label', value: 'value' }]

  js代码异步请求返回数组数据
  return ctx.axios.post(...).then((res) => {
    省略错误处理的代码等，最终一定要返回数组
    return [{ label: 'label', value: 'value' }]
  })
`
</script>
<template>
  <a-form-item
    class="select-options-editor property-editor"
    :label="propertyCN || property"
  >
    <a-button @click="onEditCode" class="property-edit-btn" block>
      <edit-filled />
      编辑数据来源
    </a-button>
    <a-modal
      v-model:visible="visible"
      :title="propertyCN || property"
      :footer="null"
      :keyboard="false"
      class="custom-code-modal"
      @cancel="action.record"
      @ok="action.record"
    >
      <a-alert type="info" show-icon>
        <template #message>
          <div>
            可以使用
            <span style="font-weight: bold">ctx</span>
            来获取组件实例上下文
          </div>
        </template>
      </a-alert>
      <codemirror
        v-model="modelValue"
        style="width: 100%; height: 450px"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        :placeholder="example"
      />
    </a-modal>
  </a-form-item>
</template>
