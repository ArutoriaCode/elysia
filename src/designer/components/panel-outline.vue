<template>
  <div class="panel-outline">
    <a-tree
      v-model:selectedKeys="selectedKeys"
      :tree-data="outlineTree"
      :selectedKeys="selectedKeys"
      show-icon
      default-expand-all
      @select="onSelect"
    >
      <template #switcherIcon="{ switcherCls }">
        <down-outlined :class="switcherCls" />
      </template>
      <template #icon="{ iconType }">
        <component :is="iconType"></component>
      </template>
    </a-tree>
  </div>
</template>
<script setup>
import store from '@/designer/core/store.js'
import useDebounce from '@/designer/hooks/useDebounce'
import { DownOutlined } from '@ant-design/icons-vue'
import { watch, computed, shallowRef } from 'vue'
import { setSelected } from '../core/select'
import { seletedSchema } from '@/designer/core/select.js'
import { CONTAINER_TYPE } from '../utils/helper'

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
    const tree = {
      title: v.nameAlias || v.name,
      key: v.id,
      iconType: v.icon,
      path: v.path
    }

    if (v.type === CONTAINER_TYPE) {
      tree.children = createTree(v.childrenList)
    }

    return tree
  })
}

const outlineTree = shallowRef([
  {
    title: '表单',
    key: store.id,
    iconType: 'layer-group-icon',
    children: []
  }
])

const updateTree = useDebounce(childrenList => {
  outlineTree.children = createTree(childrenList)
}, 300)

watch(store.childrenList, updateTree)

function onSelect (selectedKeys, { node }) {
  if (node.parent === undefined) {
    setSelected()
    return
  }

  setSelected(node.path)
}
</script>
<style lang="less">
.panel-outline {
  padding-top: 12px;
  height: 100%;

  .ant-tree-node-content-wrapper {
    display: flex;
    align-items: center;
    .anticon.elysia-icon {
      font-size: 16px;
    }

    .ant-tree-title {
      min-width: 32px;
      text-align: center;
      color: var(--primary-color) !important;
    }
  }
}
</style>
