<template>
  <designer></designer>
</template>
<script>
import { importSchemaJson } from './designer/core/store'
import demoJSON from './demo.json'

importSchemaJson(demoJSON)
</script>
