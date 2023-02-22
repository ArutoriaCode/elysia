<template>
  <a-list
    class="history-list"
    item-layout="vertical"
    row-key="recordTime"
    :data-source="history.historyList"
    :locale="{ emptyText: '暂无历史记录' }"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <!-- <template #actions>
          <a key="list-loadmore-edit">还原</a>
        </template> -->
        <a-list-item-meta :description="item.recordTime">
          <template #title>
            <span>{{ item.action }}</span>
          </template>
          <template #avatar>
            <component :is="item.icon"></component>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script setup>
import { history } from '../core/history'
</script>
<style lang="less">
.history-list {
  .ant-list-item {
    cursor: pointer;
    &:hover {
      background-color: var(--primary-color-3);
    }
  }
  .ant-list-item-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0 !important;
  }
  .ant-list-item-meta-avatar {
    margin-right: 0;
    padding: 0 12px;
    .anticon.elysia-icon {
      font-size: 20px;
    }
  }
}
</style>
