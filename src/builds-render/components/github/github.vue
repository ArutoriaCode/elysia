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
import useFormContext from '@/builds-render/hooks/useFormContext.js'
import GithubOutlined from '@ant-design/icons-vue/GithubOutlined'

defineProps({
  widget: Object
})

const { className, model } = useFormContext()
</script>
