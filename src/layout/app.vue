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
<style lang="scss" src="./app.scss"></style>
