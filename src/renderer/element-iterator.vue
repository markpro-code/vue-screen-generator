<template>
  <component :is="define" v-for="ele in $props.elements" :key="ele.id" :schema="ele" />
</template>
<script setup>
import { inject, onMounted, shallowRef } from 'vue'

const props = defineProps({
  elements: {
    type: Array,
    required: true,
  },
})

const define = shallowRef(null)
const componentManager = inject('componentManager')

onMounted(() => {
  define.value = componentManager.getComponent(props.elements[0].type)
})
</script>
<style lang="scss" module="cn"></style>
