<template>
  <n-config-provider :theme="theme">
    <n-el tag="div" class="cb-view">
      <n-card class="cb-head" content-style="padding: 5px;">
        <n-menu
          class="cb-menu"
          @update:value="handleRouteChange"
          mode="horizontal"
          :options="menuOptions"
        />
        <n-card class="cb-darkswitch">
          <!-- <n-button @click="theme = darkTheme">深色</n-button>
          <n-button @click="theme = null">浅色</n-button> -->
          <n-label>Dark: </n-label>
          <n-switch
            v-model:value="active"
            @update:value="handleDarkModeChange"
          />
        </n-card>
      </n-card>
      <n-card class="cb-content">
        <router-view></router-view>
      </n-card>
      <n-card class="cb-foot">
        <!-- <n-card id="beian"> -->
        <n-a href="http://beian.miit.gov.cn"> 浙ICP备2021020364号-1 </n-a>
        <!-- </n-card> -->
      </n-card>
    </n-el>
  </n-config-provider>
  <!-- <n-el class="cb-view"></n-el> -->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUpdated } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import router from './routes';
import { useOsTheme, darkTheme } from 'naive-ui';

// 菜单
const menuOptions = [
  {
    label: '你好！',
    key: '/',
  },
  {
    label: '日记本',
    key: '/diary',
  },
];
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    let theme = ref(null);
    let active = ref(false);
    const osThemeRef = useOsTheme();
    onMounted(() => {
      // 匹配系统暗黑模式
      if (osThemeRef.value == 'dark') {
        active.value = true;
        theme.value = darkTheme;
      }
      console.log(
        'OS主题：',
        osThemeRef.value,
        '本站主题：',
        theme.value == null ? 'light' : 'dark'
      );
    });
    onUpdated(() => {
      // console.log('updated,', active, theme);
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
      darkTheme,
      active,
      theme,
      handleRouteChange,
      handleDarkModeChange,
    };
  },
});
</script>

<style lang="scss" src="./app.scss"></style>
