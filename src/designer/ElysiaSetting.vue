<template>
  <div class="elysia-setting">
    <a-collapse
      v-model:activeKey="activeKey"
      :bordered="false"
      v-show="hasSelected"
      class="custom-collapse"
    >
      <a-collapse-panel
        key="1"
        header="常见属性"
        v-show="commonComponentList.length > 0"
      >
        <component
          v-for="item in commonComponentList"
          :is="item.module"
          :key="item.property"
          :property="item.property"
        ></component>
      </a-collapse-panel>
      <a-collapse-panel
        key="2"
        header="事件"
        v-show="eventComponentList.length > 0"
      >
        <component
          v-for="item in eventComponentList"
          :is="item.module"
          :key="item.property"
          :property="item.property"
        ></component>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script setup>
import importUseComponent, {
  COMMON_KEY_NAME,
  EVENT_KEY_NAME
} from './components/property/index.js'
import { seletedSchema } from './core/select'
import { ref, computed, watch, shallowRef } from 'vue'
const activeKey = ref(['1', '2'])
const hasSelected = computed(
  () => seletedSchema.value && seletedSchema.value.id
)

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
<style>
.elysia-setting {
  height: 100vh;
  width: 25vw;
  border-left: 1px solid var(--primary-color);
}
</style>