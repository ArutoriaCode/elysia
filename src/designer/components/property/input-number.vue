<template>
  <a-form-item class="property-editor" :label="propertyCN" :name="property">
    <a-input-number
      v-bind="numberProps"
      v-model:value="modelValue"
      @blur="onCustomRecord"
      style="width: 100%"
    ></a-input-number>
  </a-form-item>
</template>
<script setup>
import usePropEditorModel from '~property/hooks/usePropEditorModel.js'
import { seletedSchema } from '../../core/select'
import { ref } from 'vue';
const { property, propertyCN, modelValue, action } = usePropEditorModel()
const editorProps = seletedSchema.value['x-editor-props']
const numberProps = ref({})
if (editorProps) {
  if (typeof editorProps === 'function') {
    numberProps.value = editorProps()
  } else {
    numberProps.value = editorProps[property] || {}
  }
}

const onCustomRecord = () => {
  const { min = null, max = null } = numberProps
  if (min !== null && min > modelValue.value) {
    return
  }

  if (max !== null && max < modelValue.value) {
    return
  }

  action.record('')
}
</script>
