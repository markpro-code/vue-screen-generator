<template>
  <div>
    <ComponentIterator :elements="defaultSlotElements" />
  </div>
</template>
<script setup>
import ComponentIterator from '@/renderer/component-iterator.vue'
import { getComponentProps, useComponentBehavior } from '@/renderer/hooks/use-component-behavior'

const props = defineProps({
  ...getComponentProps(),
})

const { commonExpose, defaultSlotElements } = useComponentBehavior(props)

defineExpose({
  ...commonExpose,
})
</script>
<style lang="scss" module="cn"></style>
