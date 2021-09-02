<template>
  <div>diary, {{ msg }}</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import exampleStore from '../store';
export default defineComponent({
  setup: () => {
    const count = ref(0);
    return { count, msg: exampleStore.state.message };
  },
});
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
