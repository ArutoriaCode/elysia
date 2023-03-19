<template>
  <static-wrapper :widget="widget">
    <a-form-item :label="model.label" :name="model.field" :required="model.required">
      <a-select
        :size="size"
        :readonly="readonly"
        :disabled="disabled"
        :options="[]"
        :allow-clear="model.allowClear"
        v-model:value="model.value"
      >
        <template #dropdownRender>
          <a-empty description="请通过预览查看选项" :image="simple" />
        </template>
      </a-select>
    </a-form-item>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting.js'
import { Empty } from 'ant-design-vue'
const simple = Empty.PRESENTED_IMAGE_SIMPLE

const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model } = useGlobalSetting()
</script>
