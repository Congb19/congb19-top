<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-card class="cb-background"></n-card>
      <n-card class="cb-head" content-style="padding: 5px;">
        <n-menu
          class="cb-menu"
          @update:value="handleRouteChange"
          mode="horizontal"
          :options="menuOptions"
        />
      </n-card>
      <!-- <n-card class="cb-content" :bordered="false" content-style="padding-bottom: 70px;">
        <router-view></router-view>
      </n-card> -->
      <div class="cb-content">
        <div style="padding-bottom: 70px;"><router-view></router-view></div>
      </div>
      <n-card class="cb-foot" content-style="padding: 0;">
        <n-a class="cb-beian" href="http://beian.miit.gov.cn">
          浙ICP备2021020364号-1
        </n-a>
      </n-card>
      <n-card class="cb-darkswitch">
        <n-el tag="div">Dark</n-el>
        <n-switch v-model:value="active" @update:value="handleDarkModeChange" />
      </n-card>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import router from './routes';
import { useOsTheme, darkTheme } from 'naive-ui';

// 菜单
const menuOptions = [
  {
    label: '🏠',
    key: '/',
  },
  {
    label: '🥇',
    key: '/wall',
  },
  {
    label: '🏪',
    key: '/kbn',
  },
  {
    label: '🔑',
    key: '/admin/dashboard',
  },
  {
    label: '💣',
    key: '/combo/introduce',
  },
];

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    let theme = ref();
    let active = ref(false);
    const osThemeRef = useOsTheme();
    onMounted(() => {
      // 匹配系统暗黑模式
      if (osThemeRef.value == 'dark') {
        active.value = true;
        theme.value = darkTheme;
      }
    });
    // 菜单路由跳转
    const handleRouteChange = (key: RouteLocationRaw) => {
      router.push(key);
    };
    // 暗黑模式手动切换
    const handleDarkModeChange = (isDark: any) => {
      theme.value = isDark ? darkTheme : ref(null);
    };
    return {
      menuOptions,
      active,
      theme,
      handleRouteChange,
      handleDarkModeChange,
    };
  },
});
</script>

<style lang="scss" src="./app.scss"></style>
