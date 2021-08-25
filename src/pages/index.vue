<template>
  <img alt="logo" width="200" src="../assets/klee.jpeg" />
  <n-h1>你在烦恼什么呢</n-h1>
  <n-h2>这里是Congb19的小站！大家要天天开心</n-h2>
  <n-h3>有烦恼请随时联系我：</n-h3>
  <n-li><n-a href="mailto:linyc@congb19.com">linyc@congb19.com</n-a></n-li>
  <n-li><n-a href="https://blog.congb19.com">Congb19的博客</n-a></n-li>

  <n-p>这个网站不知道写点什么了，走过路过来点idea吧~~</n-p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped></style>
