<template>
  <div class="panel-outline">
    <a-tree
      v-model:selectedKeys="selectedKeys"
      :tree-data="outlineTree"
      default-expand-all
    >
      <template #switcherIcon="{ switcherCls }">
        <down-outlined :class="switcherCls" />
      </template>
    </a-tree>
  </div>
</template>
<script setup>
import store from '@/designer/core/store.js'
import { DownOutlined } from '@ant-design/icons-vue'
import { computed, ref } from 'vue'

const selectedKeys = ref([])

function createTree (children) {
  if (children && children.length == 0) {
    return []
  }

  return children.map(v => {
    return {
      title: v.name,
      key: v.id,
      icon: v.icon,
      children: createTree(v.childrenList)
    }
  })
}

const outlineTree = computed(() => {
  return [
    {
      title: '表单',
      key: store.id,
      icon: 'layer-group-icon',
      children: createTree(store.childrenList)
    }
  ]
})
</script>
