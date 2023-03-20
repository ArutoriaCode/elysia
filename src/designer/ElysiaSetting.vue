<template>
  <div
    class="elysia-setting"
    :class="{
      fixed: config.settingFixed,
      'hidden-setting': config.hiddenSetting
    }"
  >
    <div class="setting-header">
      <h2 class="setting-header-title">属性配置</h2>
      <div class="setting-header-actions">
        <pushpin-filled
          v-if="config.settingFixed"
          @click="setSettingFixed(false)"
        />
        <pushpin-outlined v-else @click="setSettingFixed(true)" />
        <close-outlined @click="setSettingVisible(false)" />
      </div>
    </div>
    <a-collapse
      v-show="hasSelected"
      v-model:activeKey="activeKey"
      :bordered="false"
      class="custom-collapse"
      ghost
    >
      <a-collapse-panel
        key="1"
        header="常见属性"
        v-show="commonComponentList.length > 0"
      >
        <a-form
          :model="seletedSchema.options"
          name="common"
          layout="horizontal"
          label-align="left"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
        >
          <template v-for="item in commonComponentList" :key="item.property">
            <Suspense>
              <component
                :is="item.module"
                :property="item.property"
              ></component>
              <template #fallback>
                <a-row :gutter="6" class="prop-loading-skeleton">
                  <a-col :span="8">
                    <a-skeleton-button active shape="default" block />
                  </a-col>
                  <a-col :span="16">
                    <a-skeleton-input style="width: 100%" active />
                  </a-col>
                </a-row>
              </template>
            </Suspense>
          </template>
        </a-form>
      </a-collapse-panel>
      <a-collapse-panel
        key="2"
        header="事件"
        v-show="eventComponentList.length > 0"
      >
        <a-form
          name="event"
          layout="horizontal"
          label-align="left"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
        >
          <template v-for="item in eventComponentList" :key="item.property">
            <Suspense>
              <component
                :is="item.module"
                :property="item.property"
              ></component>
              <template #fallback>
                <a-row :gutter="6" class="prop-loading-skeleton">
                  <a-col :span="8">
                    <a-skeleton-button active shape="default" block />
                  </a-col>
                  <a-col :span="16">
                    <a-skeleton-input style="width: 100%" active />
                  </a-col>
                </a-row>
              </template>
            </Suspense>
          </template>
        </a-form>
      </a-collapse-panel>
    </a-collapse>
  </div>
  <div
    class="show-setting-box"
    v-if="config.hiddenSetting"
    @click="setSettingVisible(true)"
  >
    <setting-outlined />
  </div>
</template>
<script setup>
import importUseComponent from './components/property/index.js'
import {
  PushpinFilled,
  PushpinOutlined,
  CloseOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'
import { COMMON_KEY_NAME, EVENT_KEY_NAME } from '@/designer/utils/helper.js'
import { seletedSchema } from './core/select'
import { isViewStatus } from './core/recorder'
import { ref, computed, watch, shallowRef } from 'vue'
import config, { setSettingFixed, setSettingVisible } from '~core/config.js'
const activeKey = ref(['1', '2'])
const hasSelected = computed(() => {
  if (isViewStatus.value) {
    return false
  }

  const selected = seletedSchema.value
  return selected && !!selected.id
})

const propertys = computed(() => Object.keys(seletedSchema.value.options || {}))
const commonComponentList = shallowRef([])
const eventComponentList = shallowRef([])

watch(
  propertys,
  () => {
    commonComponentList.value = importUseComponent(COMMON_KEY_NAME, propertys)
    eventComponentList.value = importUseComponent(EVENT_KEY_NAME, propertys)
  },
  { immediate: true }
)
</script>
<style lang="less">
.elysia-setting {
  height: 100vh;
  width: 25vw;
  background-color: #fff;
  border-left: 1px solid var(--primary-color);
  transition: display 0.2s;
  min-width: 172px;
  .ant-row.ant-form-item {
    border-top: 1px solid #f0f0f2;
    margin-bottom: 0;
    padding: 14px 0;
    &:first-child {
      padding-top: 0;
      border-top: 0;
    }
  }

  .ant-divider + .ant-row.ant-form-item {
    border-top: 0;
  }

  .property-editor {
    padding: 14px 0;
    &:first-child {
      padding-top: 0;
    }
  }

  .setting-header {
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    &-title {
      color: var(--primary-color);
      font-weight: bold;
      margin: 0;
      font-size: 18px;
    }
    &-actions {
      color: var(--primary-color);
      .anticon {
        cursor: pointer;
        padding: 4px;
        transition: transform 0.4s;
        font-size: 16px;
        & + .anticon {
          margin-left: 4px;
        }
        &:hover {
          transform: scale(1.4);
        }
        &.anticon-close:hover {
          transform: rotate(180deg);
        }
      }
    }
  }

  &.fixed {
    position: fixed;
    right: 0;
    z-index: 100;
  }

  &.hidden-setting {
    display: none !important;
  }

  .custom-collapse {
    height: calc(100% - 54px);
    overflow: hidden auto;
  }
}

.show-setting-box {
  position: fixed;
  z-index: 100;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: #fff;
  border: 1px solid var(--primary-color);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .anticon {
    font-size: 28px;
    color: var(--primary-color);
    transition: transform 0.3s;
  }
  &:hover {
    background-color: var(--primary-color-3);
    .anticon {
      transform: rotate(180deg);
    }
  }
}

.prop-loading-skeleton + .prop-loading-skeleton {
  margin-top: 14px;
}
</style>
