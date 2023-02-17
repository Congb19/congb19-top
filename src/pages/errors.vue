<template>
  <n-result
    class="cb-result"
    :status="code"
    :title="status.title"
    :description="status.description"
  >
    <template #footer>
      <n-button @click="why">{{ status.btn_content }}</n-button>
    </template>
  </n-result>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useMessage } from 'naive-ui';

const route = useRoute();
console.log(route.meta.status);

const message = useMessage();
const code:
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | '404'
  | '500'
  | '403'
  | '418'
  | undefined = '404';

let status = $computed(() => {
  return {
    title: route.meta.status as string,
    description: '坏了，出了点问题',
    btn_content: '为什么？',
  };
});
const why = () => {
  message.info('也许是我还没写好，别急！');
};
</script>
<style lang="scss" scoped>
.cb-result {
  height: 100%;
}
</style>
