<template>
  <div ref="refRootEle" :class="cn.root_container">
    <div :class="cn.left_panel">
      <Desinger />
    </div>
    <div :class="cn.right_panel">
      <Renderer :config="config" />
    </div>
  </div>
</template>

<script setup>
import Desinger from '@/desinger/index.vue'
import Renderer from '@/renderer/index.vue'
import { ref } from 'vue'
import config from './screen-configs/demo.json'

const refRootEle = ref(null)
</script>

<style lang="scss" module="cn">
.root_container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 8px;
  box-sizing: border-box;
}

.left_panel,
.right_panel {
  flex: 1;
  border: 1px solid #e5e5e5;
}
</style>
