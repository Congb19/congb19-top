<template>
  <div class="cbapp-avatar">
    <n-avatar round size="small" :src="info.src"></n-avatar>
    <div class="avatar__name">{{ info.name }}</div>
    <div class="avatar__time">{{ info.time }}</div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed, PropType } from 'vue';
import { NIcon, NAvatar } from 'naive-ui';
interface Avatar {
  id: number;
  name: string;
  src: string;
  time: string;
}
const props = defineProps({
  info: { type: Object as PropType<Avatar>, required: true },
});
</script>
<style lang="scss" scoped>
.cbapp-avatar {
  font-size: 10px;
  position: relative;
  .avatar__name{
    position: absolute;
    top: -4px;
    left: 35px;
  }
  .avatar__time{
    color: #C1C5C8;
    position: absolute;
    top: 13px;
    left: 35px;
  }
}
</style>
