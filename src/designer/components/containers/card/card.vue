<template>
  <static-wrapper :widget="widget">
    <a-card :title="widget.options.title">
      <draggable :widget="widget" class="container-draggable">
        <!-- :is="elysia-xxx" 加上一个前缀，免得一些命名会被当做内置标签渲染 比如: button input -->
        <template #item="{ element: widget }">
          <component :is="'elysia-' + widget.name" :widget="widget"></component>
        </template>
      </draggable>
    </a-card>
  </static-wrapper>
</template>
<script setup>
import draggable from '@/designer/components/draggable.vue'
import staticWrapper from '@/designer/components/wrapper/static-wrapper.vue'
defineProps({
  widget: Object
})
</script>
<style>
.container-draggable {
  padding: 4px;
}
</style>
