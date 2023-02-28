<script setup>
import { viewBuildsJson } from '@/designer/core/store.js'
</script>
<template>
  <div class="elysia-builds-render">
    <builds-render :schema-json="viewBuildsJson"></builds-render>
  </div>
</template>
