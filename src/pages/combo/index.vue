<template>
  <!-- todo: 侧边栏菜单+路由跳转 -->
  <router-view></router-view>
</template>
<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
import router from '../../routes';
// 菜单路由跳转
const handleRouteChange = (key: RouteLocationRaw) => {
  router.push(key);
};
</script>
