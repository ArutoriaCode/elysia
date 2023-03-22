<template>
  <static-wrapper :widget="widget">
    <a-form-item
      :label="model.label"
      :name="model.field"
      :required="model.required"
    >
      <a-rate
        v-model:value="model.value"
        :disabled="disabled || readonly"
        :count="model.starCount"
        :allowHalf="model.allowHalf"
        :allowClear="model.allowClear"
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

const { disabled, readonly, model } = useGlobalSetting()
</script>
<style lang="less">
.rate.show-shadow {
  .ant-rate-star.ant-rate-star-zero .ant-rate-star-second {
    color: #fff;
  }
}
</style>
