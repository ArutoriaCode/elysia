<template>
  <col-wrapper :widget="widget" :auto-active="false">
    <container-draggable :widget="widget" class="container-draggable">
      <template #default="{ element }">
        <component
          :is="'elysia-' + element.name"
          :widget="element"
          :key="element.id"
        ></component>
      </template>
    </container-draggable>
  </col-wrapper>
</template>
<script setup>
import containerDraggable from '@/designer/components/container-draggable.vue'
import colWrapper from '@/designer/components/wrapper/col-wrapper.vue'
defineProps({
  widget: Object
})
</script>
<style lang="less">
.col-wrapper.col {
  .warapper-slot .ant-col {
    min-height: 30px;
  }
}
.container-draggable {
  padding: 12px 0;
}
</style>
