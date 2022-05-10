<template>
  <n-space vertical>
    <n-layout>
      <n-layout-header bordered>
        <n-card :bordered="false">congb19-admin</n-card>
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
          <n-scrollbar style="max-height: calc(100vh - 94px)">
            <router-view></router-view>
          </n-scrollbar>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-space>
</template>
<script setup lang="ts">
import { h, ref, reactive, Component, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useStorage } from '@vueuse/core';
import { NIcon, NScrollbar } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import {
  BookmarkOutline,
  LaptopOutline,
  LogOutOutline,
} from '@vicons/ionicons5';

// common
// ------------------------------------------------------------------------------
const collapsed = ref(true);
const path = ref('/admin');
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
const storage = useStorage('test', 1);

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
    icon: renderIcon(LaptopOutline),
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
    icon: renderIcon(LaptopOutline),
  },
  {
    name: '退出',
    label: h(
      RouterLink,
      {
        to: {
          path: '/login',
        },
      },
      { default: () => '退出' }
    ),
    key: '/login',
    icon: renderIcon(LogOutOutline),
  },
];
const getMenuOption = (
  menuOptions: MenuOption[] | undefined,
  key: string
): MenuOption | null => {
  let res: MenuOption | null = null;
  if (menuOptions)
    for (let i = 0; i < menuOptions.length; i++) {
      if (menuOptions[i].key == key) {
        res = menuOptions[i];
        return res;
      }
      if (menuOptions[i].children) {
        res = getMenuOption(menuOptions[i].children, key);
        if (res) return res;
      }
    }
  return res;
};
const menuCollapse = (flag: boolean) => {
  collapsed.value = flag;
};
const menuCheck = (key: string, item: MenuOption) => {
  //路由RouterLink会处理。
  //添加tag，并check它
  tagAdd(key, item);
  tagCheck(key);
};
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
// ------------------------------------------------------------------------------
let tags = reactive([
  {
    name: '首页',
    key: '/admin',
    actived: true,
    closable: false,
  },
]);
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
  const menuItem = getMenuOption(menuOptions, nowKey);
  if (menuItem) {
    tagAdd(nowKey, menuItem);
    tagCheck(nowKey);
  }
};
</script>
