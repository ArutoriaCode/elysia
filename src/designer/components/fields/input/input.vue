<template>
  <static-wrapper :widget="widget">
    <a-form-item :label="widget.options.label" :name="widget.options.field">
      <a-input
        :readonly="readonly"
        :disabled="disabled"
        :size="size"
        :allow-clear="widget.options.allowClear"
        :maxlength="widget.options.maxlength"
        v-model:value="widget.options.inputValue"
      />
    </a-form-item>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useDefineFormItem from '@/designer/hooks/useDefineFormItem.js'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size } = useDefineFormItem(props.widget)
</script>
