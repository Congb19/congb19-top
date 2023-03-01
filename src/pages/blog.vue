<template>
  <div class="cb-blog">
    <!-- <div v-html="text"></div> -->
    <md-content></md-content>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';
import { html, VueComponent } from '../md/1.响应式简介.md'; 
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
console.log('test', html);
let text = html;
let mdContent = VueComponent;
onMounted(() => {
  hljs.highlightAll();
});
onUpdated(() => {
  hljs.highlightAll();
});
</script>
<style>
.cb-blog {
  text-align: left;
}
</style>
