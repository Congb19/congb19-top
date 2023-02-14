<template>
  <div>
    <n-divider title-placement="center">🛫</n-divider>
    <n-card :bordered="false" title=" ">
      <template #header-extra>{{ time }} #{{ info?.id }} </template>
      <!-- “{{ info?.content }}” -->
      <template #action>
        {{ info?.authorName }}：“{{ info?.content }}”
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { kbnInfo } from '@/types/kbn';
import { getPastTime } from '@/utils/useTime';

const props = defineProps<{
  info?: kbnInfo;
}>();

const time = $(getPastTime(props.info?.createdAt as string));
console.log(time);
</script>
