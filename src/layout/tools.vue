<template>
  <n-message-provider>
    <n-layout embedded content-style="padding: 24px;" class="cb-background">
      <n-card>
        <n-card>
          <h2>Congb19's Toolbox</h2>
          <n-menu
            :options="menuOptions"
            v-model:value="activeTool"
            mode="horizontal"
          />
        </n-card>
        <n-card><router-view></router-view></n-card>
      </n-card>
    </n-layout>
  </n-message-provider>
</template>
<script setup lang="ts">
import { ref, h, Component } from 'vue';
import { NMessageProvider, NLayout, NCard, NIcon } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink, useRouter } from 'vue-router';
import { useTitle } from '@vueuse/core';
import {
  KeypadOutline,
  InformationCircleOutline,
  ColorFilterOutline,
} from '@vicons/ionicons5';
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const title = useTitle();
title.value = "Congb19's Toolbox";
const router = useRouter();
const activeTool = ref('/tools/keyboard');
activeTool.value = router.currentRoute.value.fullPath;
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/tools/keyboard',
          },
        },
        { default: () => '键盘检测工具' }
      ),
    key: '/tools/keyboard',
    icon: renderIcon(KeypadOutline),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/tools/screen',
          },
        },
        { default: () => '屏幕检测工具' }
      ),
    key: '/tools/screen',
    icon: renderIcon(ColorFilterOutline),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/tools/sysinfo',
          },
        },
        { default: () => '系统基本信息' }
      ),
    key: '/tools/sysinfo',
    icon: renderIcon(InformationCircleOutline),
  },
];
</script>
<style scoped>
.cb-background {
  height: 100vh;
  width: 100vw;
  position: fixed;
}
</style>
