<script setup>
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { ctxComplete } from '@/designer/utils/complete.js'
import { ref } from 'vue'
import useDefineModel from '~property/useDefineModel.js'

const extensions = [javascript(), ctxComplete]

const { modelValue, propertyCN, property } = useDefineModel()

const visible = ref(false)
const onEditCode = () => {
  visible.value = true
}
</script>
<template>
  <a-form-item class="javascript-editor" :label="propertyCN || property">
    <a-button @click="onEditCode" class="code-edit-btn">
      <js-code-icon></js-code-icon>
      编辑
    </a-button>
    <a-modal
      v-model:visible="visible"
      :title="propertyCN || property"
      :footer="null"
      :keyboard="false"
      class="custom-code-modal"
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
      />
    </a-modal>
  </a-form-item>
</template>
