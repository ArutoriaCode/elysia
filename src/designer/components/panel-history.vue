<template>
  <div class="panel-history">
    <a-list
      item-layout="vertical"
      row-key="recordTime"
      :data-source="historys.historyList"
      :locale="{ emptyText: '暂无历史记录' }"
    >
      <template #renderItem="{ item }">
        <a-list-item @click="recorder.viewHistory(item)" :title="item.action">
          <a-list-item-meta :description="item.recordTime">
            <template #title>
              {{ item.action }}
            </template>
            <template #avatar>
              <component :is="item.icon"></component>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script setup>
import recorder, { historys } from '../core/recorder'
</script>
<style lang="less">
.panel-history {
  .ant-list-item {
    cursor: pointer;
    &:hover {
      background-color: var(--primary-color-3);
      .ant-list-item-meta-description {
        color: var(--primary-color);
      }
      .ant-list-item-meta-avatar .anticon {
        transform: scale(1.25);
      }
    }
  }
  .ant-list-item-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0 !important;

    .ant-list-item-meta-description {
      text-align: right;
      color: var(--primary-color-2);
    }

    .ant-list-item-meta-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--primary-color) !important;
      font-size: 15px;
    }

    .ant-list-item-meta-avatar {
      margin-right: 0;
      padding: 0 12px 0 24px;
      .anticon,
      .anticon.elysia-icon {
        font-size: 20px;
        transition: transform 0.42s;
        color: var(--primary-color);
      }
    }
    .ant-list-item-meta-content {
      padding-right: 24px;
    }
  }
}
</style>
