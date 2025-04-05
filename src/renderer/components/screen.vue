<template>
  <div>
    <ComponentIterator :elements="props.define.slots.default" />
  </div>
</template>
<script setup>
import ComponentIterator from '@/renderer/component-iterator.vue'
import { getComponentProps } from '@/renderer/hooks/use-component-behavior'
const props = defineProps({
  ...getComponentProps(),
})
</script>
<style lang="scss" module="cn"></style>
