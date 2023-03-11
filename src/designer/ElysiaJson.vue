<script setup>
import { Codemirror } from 'vue-codemirror'
import { json } from '@codemirror/lang-json'
import { viewSchemaJson } from '@/designer/core/store.js'
const extensions = [json()]
</script>
<template>
  <div class="elysia-json">
    <codemirror
      v-model="viewSchemaJson"
      style="width: 100%"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      disabled
    />
  </div>
</template>
