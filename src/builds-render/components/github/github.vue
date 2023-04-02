<template>
  <a
    v-show="!model.hidden"
    target="_blank"
    :href="model.link"
    :style="{ fontSize: model.fontSize + 'px' }"
    :class="className"
  >
    <GithubOutlined /> Github
  </a>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
import useFormContext from '@/builds-render/hooks/useFormContext.js'
const GithubOutlined = defineAsyncComponent(() =>
  import('@ant-design/icons-vue/GithubOutlined')
)
defineProps({
  widget: Object
})

const { className, model } = useFormContext()
</script>
