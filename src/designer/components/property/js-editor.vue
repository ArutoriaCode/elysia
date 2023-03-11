<script setup>
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { ref } from 'vue'
import useDefineModel from '~property/useDefineModel.js'
const extensions = [javascript()]

const { modelValue, propertyCN, property } = useDefineModel()

const visible = ref(false)
const onEditCode = () => {
  visible.value = true
}
</script>
<template>
  <a-form-item class="javascript-editor" :label="propertyCN || property">
    <a-button @click="onEditCode" type="text">
      <code-icon></code-icon>
    </a-button>
    <a-modal
      v-model:visible="visible"
      :title="propertyCN || property"
      :footer="null"
    >
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
