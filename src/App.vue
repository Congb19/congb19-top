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
import { darkTheme } from 'naive-ui';

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
    onMounted(() => {});
    onUpdated(() => {
      console.log('updated,', active, theme);
    });
    const handleRouteChange = (key: RouteLocationRaw) => {
      router.push(key);
    };
    const handleDarkModeChange = (isDark: any) => {
      theme.value = isDark ? darkTheme : ref(null);
      // if (isDark) theme.value = ref(null);
      // else theme.value = darkTheme;
      // console.log(isLight, theme, darkTheme);
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
