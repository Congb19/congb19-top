<template>
  <n-result
    class="cb-result"
    :status="code"
    :title="status.title"
    :description="status.description"
  >
    <template #footer>
      <n-button>{{ status.btn_content }}</n-button>
    </template>
  </n-result>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: {},
  setup: () => {
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
      btn_content: '找点乐子吧',
    });
    const route = useRoute();
    console.log(route.meta.status);
    return { status, code };
  },
});
</script>
<style lang="scss" scoped>
.cb-result {
  height: 100%;
}
</style>
