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
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useMessage } from 'naive-ui';
export default defineComponent({
  components: {},
  setup: () => {
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
    let status = ref({
      title: '404 资源不存在',
      description: '生活总归带点荒谬',
      btn_content: '为什么？',
    });
    const why = () => {
      message.info('也许是我还没写好，别急！');
    };
    const route = useRoute();
    console.log(route.meta.status);
    return { status, code, why };
  },
});
</script>
<style lang="scss" scoped>
.cb-result {
  height: 100%;
}
</style>
