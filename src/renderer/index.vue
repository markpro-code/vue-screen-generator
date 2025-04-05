<template>
  <div ref="rootEle" :class="cn.renderer">
    <ComponentIterator :elements="config" />
  </div>
</template>
<script setup>
import ComponentIterator from '@/renderer/component-iterator.vue'
import ComponentManager from '@/renderer/component-manager'
import { provide, ref } from 'vue'

const rootEle = ref(null)
const componentManager = new ComponentManager()

// Provide component manager to descendants
provide('componentManager', componentManager)

const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
})

console.info('props.config', props.config)
</script>

<style lang="scss" module="cn">
.renderer {
  position: relative;
}
</style>
