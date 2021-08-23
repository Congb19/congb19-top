<template>
  <img alt="logo" width="200" src="../assets/klee.jpeg" />
  <h1>你在烦恼什么呢</h1>
  <h2>这里是Congb19的小站！大家要天天开心</h2>
  <h3>联系我：</h3>
  <li><a href="mailto:linyc@congb19.com">linyc@congb19.com</a></li>
  <li><a href="https://blog.congb19.com">Congb19的博客</a></li>

  <h4>这个网站不知道写点什么了，走过路过来点idea吧~~</h4>
  <!-- <li><a href="https://docs.congb19.com">我的文档</a></li> -->
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

<style scoped>
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
