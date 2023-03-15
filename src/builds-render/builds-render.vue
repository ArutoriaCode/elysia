<template>
  <a-form :model="formData" :rules="rules">
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
import { computed, provide } from 'vue'
import { useGetForm } from './hooks/useDefineFormModel'

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

const { formData, rules } = useGetForm('root-form')
provide('elysia-form', () => {
  return computed(() => ({
    name: 'root-form',
    options: schemaJsonStore.value.options
  }))
})

defineExpose({
  formData
})
</script>
