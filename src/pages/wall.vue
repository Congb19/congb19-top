<template>
  <div>wall, {{ msg }}</div>
  <wall-item></wall-item>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import store from '../store';
import WallItem from '../components/wall-item.vue';
export default defineComponent({
  components: {
    WallItem,
  },
  setup: () => {
    const count = ref(0);
    return { count, msg: store.state.message };
  },
});
</script>

<style lang="scss" scoped></style>
