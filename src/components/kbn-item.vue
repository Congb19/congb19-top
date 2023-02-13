<template>
  <div>{{ info?.content }}</div>
</template>

<script setup lang="ts">
import { kbnInfo } from '@/types/kbn';

defineProps<{
  info?: kbnInfo
}>()

console.log("kbn-item")
</script>
