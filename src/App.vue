<template>
  <n-config-provider :theme="theme">
    <n-el tag="div" class="cb-view">
      <n-card class="cb-head">
        <n-menu
          class="cb-menu"
          @update:value="handleUpdateValue"
          mode="horizontal"
          :options="menuOptions"
        />
        <n-space class="cb-darkswitch">
          <n-button @click="theme = darkTheme">深色</n-button>
          <n-button @click="theme = null">浅色</n-button>
          <!-- <n-switch v-model:value="active" /> -->
        </n-space>
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
import { defineComponent, ref } from 'vue';
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
    return {
      menuOptions,
      darkTheme,
      active: ref(true),
      theme: ref(null),
      handleUpdateValue(key: RouteLocationRaw) {
        router.push(key);
        // message.info('[onUpdate:value]: ' + JSON.stringify(key))
        // message.info('[onUpdate:value]: ' + JSON.stringify(item))
      },
    };
  },
});
</script>

<style lang="scss" src="./app.scss"></style>
