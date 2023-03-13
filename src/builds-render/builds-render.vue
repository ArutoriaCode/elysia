<template>
  <a-form>
    <template
      v-for="schema in schemaJsonStore?.childrenList || []"
      :key="schema.id"
    >
      <component :is="getCompName(schema)" :widget="schema">
        <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
          <slot name="slot" v-bind="scope"></slot>
        </template>
      </component>
    </template>
  </a-form>
</template>
<script setup>
import { getCompName } from './utils/helper'
import { computed, ref, watch } from 'vue'
import useDefineFormModel from './hooks/useDefineFormModel'

const defaultSchemaJson = {
  id: 'default-root-id',
  name: 'a-form',
  childrenList: [],
  path: [],
  options: {
    globalStyles: '',
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

const formData = ref({})
watch(
  schemaJsonStore,
  val => {
    formData.value = useDefineFormModel(val)
  },
  { immediate: true }
)
</script>
