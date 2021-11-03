<template>
  <n-card :title="info.title" size="medium">
    <template #cover>
      <img :src="info.imgsrc" />
    </template>
    {{ info.content }}
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
  setup: (props) => {
    console.log('kbn-item', props.info);
  },
});
</script>
<style lang="scss" scoped>
.n-card {
  max-width: 300px;
}
</style>
