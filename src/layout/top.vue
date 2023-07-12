<template>
  <div class="cb-layout--top">
    <c-theme-provider>
      <c-message-provider>
        <n-config-provider :theme="theme">
          <n-message-provider>
            <n-loading-bar-provider>
              <n-card class="cb-background"></n-card>
              <n-card class="cb-head" content-style="padding: 5px;">
                <n-menu
                  class="cb-menu"
                  @update:value="handleRouteChange"
                  mode="horizontal"
                  :options="menuOptions"
                />
              </n-card>
              <n-card
                class="cb-content"
                :bordered="false"
                content-style="padding-bottom: 70px;"
              >
                <keep-alive><router-view></router-view></keep-alive>
              </n-card>
              <n-card class="cb-foot" content-style="padding: 0;">
                <n-a class="cb-beian" href="http://beian.miit.gov.cn">
                  浙ICP备2021020364号-1
                </n-a>
              </n-card>
              <n-card class="cb-darkswitch">
                <n-el tag="div">Dark</n-el>
                <n-switch v-model:value="themeSwitch" />
              </n-card>
            </n-loading-bar-provider>
          </n-message-provider>
        </n-config-provider>
      </c-message-provider>
    </c-theme-provider>
  </div>
</template>

<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router';
import router from '../routes';
import { useOsTheme, darkTheme, useMessage } from 'naive-ui';
import { useTitle } from '@vueuse/core';
import {
  CMessageProvider,
  CThemeProvider,
  useTheme
} from '@congb19/combo-ui/dist/combo-ui/es/src/index.mjs';

// title
const title = useTitle();
title.value = '你在烦恼什么呢';

// 系统主题
const osThemeRef = useOsTheme();
const { changeTheme } = useTheme();
// 自选主题
let themeSwitch = $ref(osThemeRef.value === 'dark' ? true : false);
let theme = $computed(() => {
  if (themeSwitch) changeTheme('dark')
  else changeTheme('light')
  return (themeSwitch ? darkTheme : null)
});

// 菜单
const menuOptions = [
  {
    label: '🏠',
    key: '/top',
  },
  // {
  //   label: '🥇',
  //   key: '/top/wall',
  // },
  {
    label: '🏪',
    key: '/top/kbn',
  },
];

window.$message = useMessage();

// 菜单路由跳转
const handleRouteChange = (key: RouteLocationRaw) => {
  router.push(key);
};
</script>

<style lang="scss" scoped>
// @font-face {
//   font-style: normal;
//   font-family: 'MiSans';
//   src: url('../assets/MiSans-Regular.ttf') format('truetype');
// }

.cb-layout--top {
  // font-family: PingFang SC, MiSans, Helvetica Neue, Microsoft YaHei, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    color: #42b983;
  }
  label {
    margin: 0 0.5em;
    font-weight: bold;
  }
  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
}
.cb-background {
  height: 100vh;
  width: 100vw;
  position: fixed;
}
.cb-head {
  position: fixed;
  height: 50px;
  line-height: 50px;
  padding: 0;
  z-index: 1;
  .cb-menu {
    position: absolute;
    // width: 100vw;
    left: 50%;
    transform: translateX(-50%);
  }
}
.cb-content {
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 50px;
  // box-sizing: border-box;
  // padding: 20px;
  // color: inherit;
}
.cb-foot {
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 50px;
  line-height: 50px;
  padding: 0;
  // z-index: 9998;
  .cb-beian {
    padding: 0;
  }
}
.cb-darkswitch {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 90px;
  height: 90px;
  // z-index: 9999;
  border-radius: 50%;
}

.cb-modal {
  width: 600px;
  border-radius: 10px;
}
</style>
