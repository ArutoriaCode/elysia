<template>
  <static-wrapper :widget="widget">
    <a-card :title="widget.options.title">
      <!-- :is="elysia-xxx" 加上一个前缀，免得一些命名会被当做内置标签渲染 比如: button input -->
      <container-draggable :widget="widget" class="container-draggable">
        <template #item="{ element }">
          <component
            :is="'elysia-' + element.name"
            :widget="element"
            :key="element.id"
          ></component>
        </template>
      </container-draggable>
    </a-card>
  </static-wrapper>
</template>
<script setup>
// import containerDraggable from '@/designer/components/container-draggable.vue'
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
import draggable from 'vuedraggable';
defineProps({
  widget: Object
})
</script>
<style>
.container-draggable {
  padding: 12px 0;
}
</style>
