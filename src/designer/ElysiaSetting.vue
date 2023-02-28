<template>
  <div class="elysia-setting">
    <a-collapse
      v-model:activeKey="activeKey"
      :bordered="false"
      v-show="hasSelected"
      class="custom-collapse"
      ghost
    >
      <a-collapse-panel
        key="1"
        header="常见属性"
        v-show="commonComponentList.length > 0"
      >
        <a-form
          layout="horizontal"
          label-align="left"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
        >
          <component
            v-for="item in commonComponentList"
            :is="item.module"
            :key="item.property"
            :property="item.property"
            :propertyCN="item.propertyCN"
          ></component>
        </a-form>
      </a-collapse-panel>
      <a-collapse-panel
        key="2"
        header="事件"
        v-show="eventComponentList.length > 0"
      >
        <a-form
          layout="horizontal"
          label-align="left"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
        >
          <component
            v-for="item in eventComponentList"
            :is="item.module"
            :key="item.property"
            :property="item.property"
            :propertyCN="item.propertyCN"
          ></component>
        </a-form>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script setup>
import { COMMON_KEY_NAME, EVENT_KEY_NAME } from '@/designer/utils/helper.js'
import importUseComponent from './components/property/index.js'
import { seletedSchema } from './core/select'
import { isViewStatus } from './core/recorder'
import { ref, computed, watch, shallowRef } from 'vue'
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
