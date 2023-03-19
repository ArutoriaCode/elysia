<template>
  <static-wrapper :widget="widget">
    <a-divider
      class="custom-divider"
      :type="widget.options.type"
      :dashed="widget.options.dashed"
      :orientation="widget.options.orientation"
    >
      <template v-if="widget.options.title">
        {{ widget.options.title }}
      </template>
    </a-divider>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting';
defineProps({
  widget: Object
})

useGlobalSetting()
</script>
<style lang="less">
.static-wrapper.divider {
  .custom-divider {
    padding: 3px 0;
  }
}

.draggable-render .static-wrapper.divider:first-child .custom-divider {
  margin-top: 0;
}
</style>
