<template>
  <!-- <div>123</div>
  <div>{{ info }}</div> -->
  <div></div>
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
