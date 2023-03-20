<template>
  <a-row
    :gutter="widget.options.gutter"
    :type="widget.options.flex ? 'flex' : undefined"
    :align="widget.options.align"
    :justify="widget.options.justify"
    :wrap="widget.options.wrap"
    style="width: 100%"
  >
    <a-col
      v-for="col in widget.childrenList"
      :key="col.id"
      :span="col.options.span"
      :pull="col.options.pull"
      :push="col.options.push"
      :offset="col.options.offset"
    >
      <component
        v-for="w in col.childrenList"
        :is="getCompName(w)"
        :widget="w"
        :key="w.id"
      />
    </a-col>
  </a-row>
</template>
<script setup>
import { getCompName } from '../../utils/helper'

defineProps({
  widget: Object
})
</script>
