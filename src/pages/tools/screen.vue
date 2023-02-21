<template>
  <n-carousel
    ref="el"
    id="screen-tester"
    :show-arrow="false"
    :show-dots="false"
    :current-index="currentIndex"
  >
    <div v-for="item in items" :style="item"></div>
  </n-carousel>
  <n-button @click="goFullScreen">开始</n-button>
  <h3>Help:</h3>
  <n-li>点击“开始”按钮开始全屏检测</n-li>
  <n-li>使用←、→方向键控制显示颜色</n-li>
  <n-li>点击esc键可退出全屏</n-li>
</template>
<script setup lang="ts">
import { useFullscreen, useMagicKeys } from '@vueuse/core';
import { NCarousel } from 'naive-ui';
import { ref, computed } from 'vue';

let el = ref<HTMLElement | null>(null);
let currentIndex = ref(0);
let isFull = ref(false);
const colors = [
  '#FAFAFC',
  'red',
  'blue',
  'green',
  'white',
  '#777777',
  'black',
  'linear-gradient(#e66465, #9198e5)',
  `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`,
];
const items = computed(() =>
  colors.map((color) => {
    return {
      width: '100vw',
      height: '100vh',
      background: color,
    };
  })
);
const keysReactive = useMagicKeys({
  passive: false,
  reactive: true,
  onEventFired(e) {
    if (e.type == 'keyup') {
      if (e.key == 'ArrowLeft') {
        currentIndex.value--;
        if (currentIndex.value < 0) currentIndex.value += colors.length;
      }
      if (e.key == 'ArrowRight') {
        currentIndex.value++;
        currentIndex.value = currentIndex.value % colors.length;
      }
    }
  },
});

const goFullScreen = async () => {
  const { enter, isFullscreen } = useFullscreen(el);
  await enter();
};
</script>
<style>
#screen-tester {
  width: 2px;
  height: 1px;
}
</style>
