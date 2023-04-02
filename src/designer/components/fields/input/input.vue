<template>
  <static-wrapper :widget="widget">
    <a-form-item :label="model.label" :name="model.field" :required="model.required">
      <a-input
        :readonly="readonly"
        :disabled="disabled"
        :size="size"
        :allow-clear="model.allowClear"
        :maxlength="model.maxlength"
        :class="className"
        v-model:value="model.inputValue"
      />
    </a-form-item>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting.js'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model, className } = useGlobalSetting()
</script>
