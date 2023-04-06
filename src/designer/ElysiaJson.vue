<script setup>
import { json } from '@codemirror/lang-json'
import tabContent from './core/tabs'
const extensions = [json()]
</script>
<template>
  <div class="elysia-json">
    <codemirror
      v-model="tabContent"
      style="width: 100%; height: 100%"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      disabled
    />
  </div>
</template>
