<template>
  <p v-show="!model.options.hidden">
    {{ model.options.text }}
  </p>
</template>
<script setup>
import useFormContext from '../../hooks/useFormContext'

const { widget } = defineProps({
  widget: Object
})

const { model } = useFormContext()
</script>
