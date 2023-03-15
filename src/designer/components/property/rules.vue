<template>
  <div class="rules-editor">
    <a-form-item :label="propertyCN">
      <a-switch v-model:checked="modelValue" />
    </a-form-item>
    <template v-if="modelValue">
      <a-form-item :label="requiredMessageLabel">
        <a-input
          v-model:value="requiredMessage"
          @blur="requiredActiveRecord"
        ></a-input>
      </a-form-item>
      <a-form-item :label="rulesLabel">
        <!-- 由于a-select的tags模式可以输入自定义值，所以要取消被动监听，使用change绑定主动记录函数 -->
        <a-select
          mode="tags"
          v-model:value="rules"
          placeholder="可输入正则表单式定义自定义的规则"
          :options="defaultRules"
          :max-tag-count="3"
          @change="rulesActiveRecord"
        />
      </a-form-item>
      <a-form-item :label="errorMessageLabel">
        <a-input
          v-model:value="errorMessage"
          @blur="messageActiveRecord"
        ></a-input>
      </a-form-item>
    </template>
  </div>
</template>
<script setup>
import useDefineModel from '~property/useDefineModel.js'
import useProp from '@/designer/hooks/useProp'

const { modelValue, propertyCN } = useDefineModel()

const {
  propertyAlias: rulesLabel,
  propertyModel: rules,
  useActiveRecord
} = useProp('x-rules')
const rulesActiveRecord = useActiveRecord()

const {
  propertyAlias: requiredMessageLabel,
  propertyModel: requiredMessage,
  useActiveRecord: useRequiredActiveRecord
} = useProp('x-required-message')

const requiredActiveRecord = useRequiredActiveRecord()

const {
  propertyAlias: errorMessageLabel,
  propertyModel: errorMessage,
  useActiveRecord: useMessageActiveRecord
} = useProp('x-error-message')

const messageActiveRecord = useMessageActiveRecord()

const defaultRules = [
  { value: '/^\w*?$/', label: '只允许字母' },
  { value: '/^\d*$/', label: '只允许数字' }
]
</script>
