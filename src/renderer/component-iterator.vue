<template>
  <component ref="refRootEle" v-for="ele in computedElements" :key="ele.commonProps.nodeId" :is="ele.component" :define="ele" />
</template>
<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  elements: {
    type: [Array, Object],
    required: true,
  },
})

console.info('props.elements', props.elements)

const componentManager = inject('componentManager')
const computedElements = computed(() =>
  (Array.isArray(props.elements) ? props.elements : [props.elements]).map((ele) => ({
    ...ele,
    component: componentManager.getComponent(ele.commonProps.type),
  })),
)
console.info('computedElements', computedElements.value)
</script>
<style lang="scss" module="cn"></style>
