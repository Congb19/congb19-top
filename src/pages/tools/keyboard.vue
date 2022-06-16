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
  <n-li>无法阻止系统行为的发生，例如 Alt/Command + Tab；</n-li>
  <n-li>Mac键位对应：Command->meta, option->alt。</n-li>
</template>
<script setup lang="ts">
import { onKeyStroke, useMagicKeys, useKeyModifier } from '@vueuse/core';
import { ref, reactive, watch } from 'vue';
import { NLi } from 'naive-ui';

const capsLock = useKeyModifier('CapsLock');
const numLock = useKeyModifier('NumLock');
const scrollLock = useKeyModifier('ScrollLock');

const keysReactive = useMagicKeys({
  passive: false,
  reactive: true,
  onEventFired(e) {
    // console.log('press', e);
    // 阻止一些浏览器行为。系统级的阻止不了。
    if (e.ctrlKey && e.key === 's' && e.type === 'keydown') e.preventDefault();
    if (e.altKey) e.preventDefault();
    if (e.key === 'Tab') e.preventDefault();
  },
});
const { current } = keysReactive;
</script>
