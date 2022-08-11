<template>
  <n-config-provider :theme="theme">
    <n-space vertical>
      <n-layout>
        <n-layout-header bordered>
          <div class="cb-header-admin">
            <n-card :bordered="false"> congb19-admin </n-card>
            <n-card :bordered="false">
              <n-switch v-model:value="themeSwitch" size="medium">
                <template #checked-icon>
                  <n-icon :component="MoonOutline" />
                </template>
                <template #unchecked-icon>
                  <n-icon :component="SunnyOutline" />
                </template>
              </n-switch>
            </n-card>
          </div>
        </n-layout-header>
        <n-layout has-sider style="height: calc(100vh - 65px)">
          <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :collapsed="collapsed"
            show-trigger
            @collapse="menuCollapse(true)"
            @expand="menuCollapse(false)"
          >
            <n-menu
              :collapsed="collapsed"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
              :render-label="renderMenuLabel"
              :render-icon="renderMenuIcon"
              @update:value="menuCheck"
              :value="path"
            />
          </n-layout-sider>
          <n-layout>
            <div>
              <n-tag
                v-for="item in tags"
                :closable="item.closable"
                :bordered="false"
                :key="item.key"
                @close="tagClose(item.key)"
                :type="item.actived ? 'success' : 'default'"
              >
                <span @click="tagCheck(item.key)">{{ item.name }}</span>
              </n-tag>
            </div>
            <n-scrollbar style="max-height: calc(100vh - 94px)">
              <keep-alive><router-view></router-view></keep-alive>
            </n-scrollbar>
          </n-layout>
        </n-layout>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStorage } from '@vueuse/core';
import {
  NConfigProvider,
  NSpace,
  NCard,
  NTag,
  NSwitch,
  NIcon,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  NScrollbar,
} from 'naive-ui';
import { useOsTheme, darkTheme } from 'naive-ui';
import type { MenuOption } from 'naive-ui';

import { SunnyOutline, MoonOutline } from '@vicons/ionicons5';

import { getTreeItem } from '../utils/useCommon';
import {
  collapsed,
  menuOptions,
  menuCollapse,
  renderMenuLabel,
  renderMenuIcon,
} from '../utils/useMenu';

// common
// ------------------------------------------------------------------------------
const path = ref('/admin');
// 系统主题
const osThemeRef = useOsTheme();
let theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null));
let themeSwitch = ref(osThemeRef.value === 'dark' ? true : false);
// 自选主题
theme = computed(() => (themeSwitch.value ? darkTheme : null));

// router
// ------------------------------------------------------------------------------
const router = useRouter();
router.afterEach((to, from, failure) => {
  //如果路由发生变化
  if (to.fullPath !== from.fullPath) {
    const key = to.fullPath;
    // 同步菜单
    path.value = to.fullPath;
    // 同步tag
    tagSync(key);
  }
});
onMounted(() => {
  const key = router.currentRoute.value.fullPath;
  path.value = key;
  tagSync(key);
});

// menu
// ------------------------------------------------------------------------------
const menuCheck = (key: string, item: MenuOption) => {
  //路由RouterLink会处理。
  //添加tag，并check它
  tagAdd(key, item);
  tagCheck(key);
};

// tag
// ------------------------------------------------------------------------------
let tagsDefault = reactive([
  {
    name: '首页',
    key: '/admin',
    actived: true,
    closable: false,
  },
]);
const storageTags = useStorage('tags', tagsDefault);
let tags = storageTags.value;
const tagAdd = (key: string, item: MenuOption) => {
  let exist = false;
  tags.forEach((item, index) => {
    if (item.key == key) exist = true;
  });
  if (!exist) {
    let newTag = {
      name: item.name as string,
      key: item.key as string,
      actived: true,
      closable: true,
    };
    tags.push(newTag);
  }
};
const tagClose = (key: string) => {
  tags.forEach((item, index) => {
    if (item.key == key) {
      // 如果当前页面正好开着，就关掉，且跳回首页
      if (router.currentRoute.value.fullPath == item.key) {
        tags[0].actived = true;
        router.push(tags[0].key);
      }
      // 删掉这个tag
      tags.splice(index, 1);
    }
  });
};
const tagCheck = (key: string) => {
  tags.forEach((item, index) => {
    // 激活点击的tag页面，tag置为激活，其他tag置灰
    if (item.key == key) {
      router.push(item.key);
      tags[index].actived = true;
    } else tags[index].actived = false;
  });
};
const tagSync = (nowKey: string) => {
  const menuItem = getTreeItem(menuOptions, nowKey);
  // console.log('sync', menuItem);
  if (menuItem && menuItem.key.indexOf('/admin') >= 0) {
    tagAdd(nowKey, menuItem);
    tagCheck(nowKey);
  }
};
</script>
<style scoped>
.cb-header-admin {
  display: flex;
  /* height: 60px; */
}
</style>
