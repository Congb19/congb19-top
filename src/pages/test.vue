<template>
  <n-card>combo test</n-card>
  <CButton></CButton>
  <CTag size="s">TestTag0</CTag>
  <CTag size="m">TestTag1</CTag>
  <CTag size="l">测试标签2</CTag>
  <CTag size="xl" round>测试标签3</CTag>
  <van-button type="primary">主要按钮</van-button>
  <div ref="el" :style="style" style="position: fixed; border: 1px red solid; width: 300px; height: 300px;">Drag me! I am at {{ x }}, {{ y }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useDraggable } from '@vueuse/core';
const el = ref<HTMLElement | null>(null);
// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 200, y: 200 },
});
</script>
