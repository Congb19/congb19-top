<template>
  <!-- 主四个页面 -->
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <TabbarIndex
    :options="pages"
    :active="activePage"
    @change="routeChange"
  ></TabbarIndex>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAppStore } from '@/store/index';
import TabbarIndex from '@/components-app/index/tabbar-index.vue';
import { useRouter } from 'vue-router';

const appStore = useAppStore();
console.log(appStore.count);

const pages = [
  {
    path: '/app/index/main',
    title: '首页',
  },
  {
    path: '/app/index/zone',
    title: '动态',
  },
  {
    path: '/app/index/msgs',
    title: '消息',
  },
  {
    path: '/app/index/me',
    title: '我的',
  },
];
const activePage = ref('/app/index/main');
const router = useRouter();
const routeChange = (path: string) => {
  console.log('routeChange', path);
  activePage.value = path;
  router.push(path);
};
</script>
