<template>
  <static-wrapper :widget="widget">
    <a-form-item :label="model.label" :name="model.field">
      <a-switch
        :disabled="disabled || readonly"
        :size="customSize"
        :min="model.min"
        :max="model.max"
        :autofocus="model.autofocus"
        :checkedChildren="model.checkedChildren"
        :checkedValue="model.checkedValue"
        :loading="model.loading"
        :unCheckedChildren="model.unCheckedChildren"
        :tooltipVisible="model.tooltipVisible"
        :unCheckedValue="model.unCheckedValue"
        :class="className"
        v-model:checked="model.checked"
      />
    </a-form-item>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting.js'
import { computed } from 'vue'
const props = defineProps({
  widget: Object
})

const { readonly, disabled, size, model, className } = useGlobalSetting()

const customSize = computed(() => {
  if (size.value === 'large') {
    return 'default'
  }

  return size.value
})
</script>
