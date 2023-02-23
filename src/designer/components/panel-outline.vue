<template>
  <div class="panel-outline">
    <a-tree
      v-model:selectedKeys="selectedKeys"
      :tree-data="outlineTree"
      :selectedKeys="selectedKeys"
      default-expand-all
      @select="onSelect"
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
import { computed } from 'vue'
import { setSelected } from '../core/select'
import { seletedSchema } from '@/designer/core/select.js'

const selectedKeys = computed(() => {
  if (seletedSchema.value && seletedSchema.value.id) {
    return [seletedSchema.value.id]
  }

  return []
})

function createTree (children) {
  if (children && children.length == 0) {
    return []
  }

  return children.map(v => {
    return {
      title: v.nameAlias || v.name,
      key: v.id,
      icon: v.icon,
      path: v.path,
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

function onSelect (selectedKeys, { node }) {
  if (node.parent === undefined) {
    setSelected()
    return
  }

  setSelected(node.path)
}
</script>
<style>
.panel-outline {
  padding-top: 12px;
}
</style>