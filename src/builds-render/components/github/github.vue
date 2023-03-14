<template>
  <a
    v-show="!widget.options.hidden"
    :href="widget.options.link"
    target="_blank"
    :style="{ fontSize: widget.options.fontSize + 'px' }"
  >
    <GithubOutlined /> Github
  </a>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
const GithubOutlined = defineAsyncComponent(() =>
  import('@ant-design/icons-vue/GithubOutlined')
)

defineProps({
  widget: Object
})
</script>
