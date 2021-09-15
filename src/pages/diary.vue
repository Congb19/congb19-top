<template>
  <div>diary, {{ msg }}</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import store from '../store';
export default defineComponent({
  setup: () => {
    const count = ref(0);
    return { count, msg: store.state.message };
  },
});
</script>

<style lang="scss" scoped></style>
