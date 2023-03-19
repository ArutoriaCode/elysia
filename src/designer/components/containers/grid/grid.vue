<template>
  <static-wrapper :widget="widget">
    <a-row :gutter="widget.options.gutter" style="width: 100%">
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
const props = defineProps({
  widget: Object
})
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
