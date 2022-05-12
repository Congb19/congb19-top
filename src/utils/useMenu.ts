import { h, ref, reactive, Component } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import {
  BookmarkOutline,
  LaptopOutline,
  LogOutOutline,
} from '@vicons/ionicons5';

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

export const collapsed = ref(true);
export const menuOptions = [
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
export const menuCollapse = (flag: boolean) => {
  collapsed.value = flag;
};
export const renderMenuLabel = (option: MenuOption) => {
  if ('href' in option) {
    return h(
      'a',
      { href: option.href, target: '_blank' },
      option.label as string
    );
  }
  return option.label as string;
};
export const renderMenuIcon = (option: MenuOption) => {
  // 渲染图标占位符以保持缩进
  if (option.key === '??') return true;
  // 返回 false 值，不再渲染图标及占位符
  if (option.key === '??') return null;
  return h(option.icon ? option.icon : h(BookmarkOutline));
};
