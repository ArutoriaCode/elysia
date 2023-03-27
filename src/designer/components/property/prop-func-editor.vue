<script setup>
import { javascript } from '@codemirror/lang-javascript'
import { propComplete } from '@/designer/utils/complete.js'
import { ref } from 'vue'
import useDefineModel from '~property/useDefineModel.js'

const { modelValue, propertyCN, property, action } = useDefineModel()
const extensions = [javascript(), propComplete(property)]
const visible = ref(false)
const onEditCode = () => {
  visible.value = true
}

const example = {
  formatter: `示例：
return value + "%"`,
  parser: `示例：
return Number(value.replace("%", ""))`
}
</script>
<template>
  <a-form-item class="javascript-editor" :label="propertyCN || property">
    <a-button @click="onEditCode" class="property-edit-btn" block>
      <js-code-icon></js-code-icon>
      <span style="margin-bottom: 2px">编辑</span>
    </a-button>
    <a-modal
      class="custom-code-modal"
      v-model:visible="visible"
      :title="propertyCN || property"
      :footer="null"
      :keyboard="false"
      @cancel="action.record"
      @ok="action.record"
    >
      <codemirror
        v-model="modelValue"
        style="width: 100%; height: 450px"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        :placeholder="example[property] || ''"
      />
    </a-modal>
  </a-form-item>
</template>
