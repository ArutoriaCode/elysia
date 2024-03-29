<template>
  <div class="panel-outline">
    <a-tree
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
import store from '~core/store.js'
import useDebounce from '@/designer/hooks/useDebounce'
import { DownOutlined } from '@ant-design/icons-vue'
import { watch, computed, reactive, nextTick } from 'vue'
import { setSelected } from '../core/select'
import { seletedSchema } from '@/designer/core/select.js'
import { CONTAINER_TYPE } from '../utils/helper'
import { DESIGN_TAB, onChangeMountTab } from '../core/tabs'

const selectedKeys = computed(() => {
  if (seletedSchema.value && seletedSchema.value.id) {
    return [seletedSchema.value.id]
  }

  return []
})

function createTree (children, path) {
  if (children && children.length == 0) {
    return []
  }

  return children.map((v, index) => {
    const tree = {
      title: v.nameAlias || v.name,
      key: v.id,
      iconType: v.icon,
      path: [...path, index]
    }

    if (v.type === CONTAINER_TYPE && Array.isArray(v.childrenList)) {
      tree.children = createTree(v.childrenList, tree.path)
    }

    return tree
  })
}

const outlineTree = reactive([
  {
    ...store,
    key: store.id,
    title: '表单',
    iconType: 'layer-group-icon',
    path: ['root'],
    children: []
  }
])

const updateTree = useDebounce(childrenList => {
  const children = createTree(childrenList, ['root'])
  outlineTree[0].children = children
}, 800)

watch(() => store.childrenList, updateTree, { deep: true, immediate: true })

function onSelect (selectedKeys, { node }) {
  onChangeMountTab(DESIGN_TAB)
  nextTick(() => {
    setSelected(node.path)
  })
}
</script>
<style lang="less">
.panel-outline {
  padding-top: 12px;
  height: 100%;

  .ant-tree-node-content-wrapper {
    display: flex;
    align-items: center;
    .anticon,
    .elysia-icon {
      font-size: 16px;
      color: var(--primary-color) !important;
    }

    .ant-tree-title {
      min-width: 32px;
      text-align: center;
      color: var(--primary-color) !important;
    }
  }
}
</style>
