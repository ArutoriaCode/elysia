<template>
  <a-form :model="formData" :rules="rules" :ref="setDynamicRefName">
    <template
      v-for="schema in schemaJsonStore?.childrenList || []"
      :key="schema.id"
    >
      <component :is="getCompName(schema)" :widget="schema">
        <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
          <slot :name="slot" v-bind="scope"></slot>
        </template>
      </component>
    </template>
  </a-form>
</template>
<script setup>
import { getCompName } from './utils/helper'
import {
  computed,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  provide
} from 'vue'
import { useGetForm } from './hooks/useDefineFormModel'
import { execFunction } from './utils/helper'

const defaultSchemaJson = {
  id: 'default-root-id',
  name: 'a-form',
  childrenList: [],
  options: {
    globalStyle: '',
    onMounted: '',
    onUnmounted: ''
  }
}

const props = defineProps({
  schemaJson: {
    type: [String, Object]
  }
})

const schemaJsonStore = computed(() => {
  if (typeof props.schemaJson === 'string') {
    return JSON.parse(props.schemaJson)
  }

  if (typeof props.schemaJson === 'object' && props.schemaJson !== null) {
    return props.schemaJson
  }

  return defaultSchemaJson
})

const rootForm = computed(() => ({
  name: 'rootForm', // 表单名称，在有多表时名称会不一样
  options: schemaJsonStore.value.options
}))

provide('elysia-form', () => rootForm.value)

const { formRef, formData, rules } = useGetForm(rootForm.value.name)

// 设置实例中refs对象的动态名称
const setDynamicRefName = (el, refs) => {
  if (el) {
    formRef.value = el
    refs[rootForm.value.options.formRefName || 'formRef'] = el
  }
}

const ctx = getCurrentInstance()
onMounted(() => {
  const { options } = schemaJsonStore.value
  if (options && options.onMounted) {
    execFunction(ctx, options.onMounted)
  }
})

onUnmounted(() => {
  const { options } = schemaJsonStore.value
  if (options && options.onUnmounted) {
    execFunction(ctx, options.onUnmounted)
  }
})
</script>
