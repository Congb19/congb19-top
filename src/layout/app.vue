<template>
  <van-config-provider>
    <div class="cb-layout--app">
      <router-view></router-view>
    </div>
  </van-config-provider>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const theme = ref('dark');
</script>
<style lang="scss">
@font-face {
  font-style: normal;
  font-family: 'MiSans';
  src: url('../assets/MiSans-Regular.ttf') format('truetype');
}
.cb-layout--app {
  font-family: PingFang SC, MiSans, Helvetica Neue, Microsoft YaHei, sans-serif !important;
}
</style>
