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
  unref
} from 'vue'
import { useGetForm } from './hooks/useDefineFormModel'
import { execFunction, initFormSchema } from './utils/helper'

const defaultSchemaJson = {
  id: 'default-root-id',
  name: 'a-form',
  childrenList: [],
  options: {
    globalStyle: '',
    onMounted: '',
    onUnmounted: '',
    formReadonly: false,
    formDisabled: false,
    formSize: '',
    formName: 'rootForm',
    formRefName: 'formRef'
  }
}

const props = defineProps({
  schemaJson: {
    type: [String, Object]
  }
})

const schemaJsonStore = computed(() => {
  let schemaJson = defaultSchemaJson
  if (typeof props.schemaJson === 'string') {
    try {
      schemaJson = JSON.parse(props.schemaJson)
    } catch (e) {
      // pass
    }
  }

  if (typeof props.schemaJson === 'object' && props.schemaJson !== null) {
    schemaJson = props.schemaJson
  }

  return initFormSchema(schemaJson)
})

const { formName, formRefName } = schemaJsonStore.value.options
const { formRef, formData, rules } = useGetForm(formName)

// 设置实例中refs对象的动态名称
const setDynamicRefName = (el, refs) => {
  if (el) {
    formRef.value = el
    refs[formRefName] = el
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
