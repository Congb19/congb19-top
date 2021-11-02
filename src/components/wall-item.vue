<template>
  <div>wall</div>
  <div>{{ info }}</div>
  <n-card title="带封面的卡片" size="medium">
    <template #cover>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    </template>
    卡片内容
  </n-card>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
export default defineComponent({
  props: {
    info: {
      type: Object,
    },
  },
  setup: () => {
    console.log('kbn-item');
  },
});
</script>
<style lang="scss" scoped>
.n-card {
  max-width: 300px;
}
</style>
