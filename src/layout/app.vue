<template>
  <div class="cb-layout--app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
</script>
<style scoped>
@font-face {
  font-style: normal;
  font-family: 'MiSans';
  src: url('../assets/MiSans-Regular.ttf') format('truetype');
}
.cb-layout--app {
  font-family: PingFang SC, MiSans, Helvetica Neue, Microsoft YaHei, sans-serif !important;
  /* overflow: hidden; */
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
