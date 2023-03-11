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
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    GithubOutlined: defineAsyncComponent(() =>
      import('@ant-design/icons-vue/GithubOutlined')
    )
  },
  props: {
    widget: Object
  }
}
</script>
