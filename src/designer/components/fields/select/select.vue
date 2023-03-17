<template>
  <static-wrapper :widget="widget">
    <a-form-item :label="widget.options.label" :name="widget.options.field">
      <a-select
        :size="size"
        :readonly="readonly"
        :disabled="disabled"
        :options="[]"
        :allow-clear="widget.options.allowClear"
        v-model:value="widget.options.value"
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
import useDefineFormItem from '@/designer/hooks/useDefineFormItem.js'
import { Empty } from 'ant-design-vue'
const simple = Empty.PRESENTED_IMAGE_SIMPLE

const props = defineProps({
  widget: Object
})

const { readonly, disabled, size } = useDefineFormItem(props.widget)
</script>
