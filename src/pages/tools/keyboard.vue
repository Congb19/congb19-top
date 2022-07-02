<template>
  <h3>Holding:</h3>
  <span>&nbsp;</span>
  <span v-for="item of current.values()">{{ item }}, </span>
  <h3>Status:</h3>
  <n-li>{{ ' CapsLock: ' + capsLock }}</n-li>
  <n-li>{{ ' NumLock: ' + numLock }}</n-li>
  <n-li>{{ ' ScrollLock: ' + scrollLock }}</n-li>
  <h3>Help:</h3>
  <n-li>按键即可检测；</n-li>
  <n-li>fn键一般为键盘内置功能键，无法检测；</n-li>
  <n-li>无法阻止系统行为的发生，例如 Alt/Command + Tab 等；</n-li>
  <n-li>无法阻止部分浏览器行为的发生，例如 Control/Command + W 等；</n-li>
  <n-li>Mac键位对应：Command->meta, option->alt。</n-li>
</template>
<script setup lang="ts">
import { onKeyStroke, useMagicKeys, useKeyModifier } from '@vueuse/core';
import { ref, reactive, watch } from 'vue';
import { NLi } from 'naive-ui';

const capsLock = useKeyModifier('CapsLock');
const numLock = useKeyModifier('NumLock');
const scrollLock = useKeyModifier('ScrollLock');

const specialKeys = ['F1', 'F3', 'F5', 'F6', 'F7', 'F10', 'F11', 'F12', 'Tab'];

const keysReactive = useMagicKeys({
  passive: false,
  reactive: true,
  onEventFired(e) {
    // console.log('press', e);
    if (e.altKey) e.preventDefault();
    // w t n  阻止不了
    if (e.ctrlKey) e.preventDefault();
    if (specialKeys.indexOf(e.key) >= 0) e.preventDefault();
  },
});
const { current } = keysReactive;
</script>
