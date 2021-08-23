<template>
  <div>
    <div>
      <n-menu
        @update:value="handleUpdateValue"
        mode="horizontal"
        :options="menuOptions"
      />
    </div>

    <router-view></router-view>
    <div class="beian">
      <a href="http://beian.miit.gov.cn">浙ICP备2021020364号-1</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { h } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import router from './routes';

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
      handleUpdateValue(key: RouteLocationRaw, item: any) {
        router.push(key);
        // message.info('[onUpdate:value]: ' + JSON.stringify(key))
        // message.info('[onUpdate:value]: ' + JSON.stringify(item))
      },
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.beian {
  position: fixed;
  width: 100%;
  bottom: 20px;
}
</style>
