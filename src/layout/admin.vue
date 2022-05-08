<template>
  <n-space vertical>
    <n-layout>
      <n-layout-header bordered>
        <n-card :bordered="false">congb19-admin</n-card>
      </n-layout-header>
      <n-layout has-sider
          style="height: calc(100vh - 62px)">
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
          />
        </n-layout-sider>
        <n-layout>
          <div>
            <!-- <n-tag :bordered="false"> 💣 </n-tag> -->
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
          <router-view></router-view>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-space>
</template>
<script setup lang="ts">
import { h, ref, reactive, Component } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { NIcon } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import {
  BookmarkOutline,
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon,
} from '@vicons/ionicons5';

const router = useRouter();

// menu
const collapsed = ref(true);
const menuCollapse = (flag: boolean) => {
  collapsed.value = flag;
};
const menuCheck = (key: string, item: MenuOption) => {
  console.log(key);
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
  tagCheck(key);
};
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
const menuOptions: MenuOption[] = [
  {
    name: '首页',
    label: h(
      RouterLink,
      {
        to: {
          path: '/admin',
        },
      },
      { default: () => '首页！' }
    ),
    key: '/admin',
    icon: renderIcon(WorkIcon),
  },
  {
    name: '仪表盘',
    label: h(
      RouterLink,
      {
        to: {
          path: '/admin/dashboard',
        },
      },
      { default: () => '仪表盘' }
    ),
    key: '/admin/dashboard',
    icon: renderIcon(WorkIcon),
  },
  {
    name: 'kbn',
    label: 'kbn',
    key: 'dance-dance-dance',
    icon: renderIcon(HomeIcon),
    children: [],
  },
];
const renderMenuLabel = (option: MenuOption) => {
  if ('href' in option) {
    return h(
      'a',
      { href: option.href, target: '_blank' },
      option.label as string
    );
  }
  return option.label as string;
};
const renderMenuIcon = (option: MenuOption) => {
  // 渲染图标占位符以保持缩进
  if (option.key === '??') return true;
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === '??') return null;
  return h(option.icon ? option.icon : h(BookmarkOutline));
};

// tag
let tags = reactive([
  {
    name: '首页',
    key: '/admin',
    actived: true,
    closable: false,
  },
]);
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
</script>
