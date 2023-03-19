<template>
  <a-form-item
    class="property-editor"
    :label="propertyCN"
    :name="property"
    :rules="rules"
    help="标识必须唯一，除非你并不需要操作该字段"
  >
    <a-input v-model:value.trim="modelValue" @blur="action.record"></a-input>
  </a-form-item>
</template>
<script setup>
import useDefineModel from './useDefineModel'
import { uniqueField } from '../../core/store'
import { message } from 'ant-design-vue'
import { reactive, unref } from 'vue'
import { seletedSchema } from '@/designer/core/select.js'

const { propertyCN, modelValue, action, property } = useDefineModel()

const rules = reactive([
  {
    required: true,
    message: '唯一标识为必填项',
    trigger: 'blur'
  },
  {
    validator: (_, value) => {
      const existField = Object.keys(uniqueField).some(id => {
        const field = unref(uniqueField[id])
        if (field === value) {
          if (id === seletedSchema.value.id) {
            return false
          }

          return true
        }

        return false
      })

      if (existField) {
        action.undoChange()
        message.error('唯一标识已存在，已撤销标识的更改！', 3)
      }

      return Promise.resolve()
    },
    trigger: 'blur'
  }
])
</script>
