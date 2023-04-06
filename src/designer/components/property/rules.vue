<template>
  <div class="rules-editor property-editor">
    <a-form-item :label="propertyCN">
      <a-switch v-model:checked="modelValue" />
    </a-form-item>
    <template v-if="modelValue">
      <a-form-item :label="requiredMessageLabel">
        <a-input
          v-model:value="requiredMessage"
          @blur="requiredAction.record"
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
          @change="rulesAction.record"
        />
      </a-form-item>
      <a-form-item :label="errorMessageLabel">
        <a-input
          v-model:value="errorMessage"
          @blur="messageAction.record"
        ></a-input>
      </a-form-item>
    </template>
  </div>
</template>
<script setup>
import usePropEditorModel from '~property/hooks/usePropEditorModel.js'
import useProp from '@/designer/hooks/useProp'

const { modelValue, propertyCN } = usePropEditorModel()

const {
  propertyAlias: rulesLabel,
  propertyModel: rules,
  action: rulesAction
} = useProp('x-rules')

const {
  propertyAlias: requiredMessageLabel,
  propertyModel: requiredMessage,
  action: requiredAction
} = useProp('x-required-message')

const {
  propertyAlias: errorMessageLabel,
  propertyModel: errorMessage,
  action: messageAction
} = useProp('x-error-message')

const defaultRules = [
  { value: '/^\w*?$/', label: '只允许字母' },
  { value: '/^\d*$/', label: '只允许数字' }
]
</script>
