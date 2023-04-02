<template>
  <static-wrapper :widget="widget">
    <a-row
      :gutter="widget.options.gutter"
      :type="widget.options.flex ? 'flex' : undefined"
      :align="widget.options.align"
      :justify="widget.options.justify"
      :wrap="widget.options.wrap"
      :class="className"
      style="width: 100%"
    >
      <elysia-col
        v-for="(col, index) in widget.childrenList"
        :key="col.id"
        :widget="{ ...col, path: [...widget.path, index] }"
      ></elysia-col>
    </a-row>
  </static-wrapper>
</template>
<script setup>
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import elysiaCol from './col.vue'
import useGlobalSetting from '@/designer/hooks/useGlobalSetting';
const props = defineProps({
  widget: Object
})

const { className } = useGlobalSetting()
</script>
<style lang="less">
.static-wrapper.grid {
  border: 1px dashed var(--primary-color);
  &.show-shadow {
    border-radius: 0;
  }
}
.container-draggable {
  padding: 12px 0;
}
</style>
