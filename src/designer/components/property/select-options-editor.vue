<script setup>
import { EditFilled } from '@ant-design/icons-vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'
import { ctxComplete } from '@/designer/utils/complete.js'
import { computed, ref } from 'vue'
import useDefineModel from '~property/useDefineModel.js'

const extensions = [json(), javascript(), ctxComplete]

const { modelValue, propertyCN, property, checkChangeRecord } = useDefineModel()
const visible = ref(false)
const onEditCode = () => {
  visible.value = true
}

const example = `/**
   * JSON字符串
   * [{"label":"标签","value":"值"}]
   * 
   * 同步返回
   * return [{ label: 'label', value: 'value' }]
   * 
   * 异步返回
   * return ctx.axios.post(...).then((res) => {
   *   省略错误处理的代码等，最终一定要返回数组
   *   return [{ label: 'label', value: 'value' }]
   * })
   * 
*/`

const value = computed({
  set (value) {
    if (modelValue.value == example) {
      return
    }

    modelValue.value = value
  },
  get () {
    if (!modelValue.value) {
      return example
    }

    return modelValue.value
  }
})
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
      @close="checkChangeRecord"
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
        v-model="value"
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
.select-options-editor {
  .property-edit-btn {
    line-height: 1;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>
