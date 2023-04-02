<template>
  <p v-show="!model.hidden" :class="className">
    {{ model.text }}
  </p>
</template>
<script setup>
import useFormContext from '../../hooks/useFormContext'

const { widget } = defineProps({
  widget: Object
})

const { model, className } = useFormContext()
</script>
