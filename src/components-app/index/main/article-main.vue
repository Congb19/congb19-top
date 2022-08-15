<template>
  <div class="cbapp-article-main">
    <div class="article__header"><Avatar :info="avatarInfo"></Avatar></div>
    <div class="article__title">{{ info.title }}</div>
    <div class="article__summary">{{ info.summary }}</div>
    <div class="article__imgs"></div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed, PropType, reactive } from 'vue';
import { NIcon } from 'naive-ui';
import { Search, List } from '@vicons/ionicons5';
import sayu from '../../../assets/sayu.jpg'
import klee from '../../../assets/klee.jpeg'
import Avatar from '../../avatar.vue';
interface Article {
  id: number;
  tag: string;
  title: string;
  summary: string;
  time: string;
}
const props = defineProps({
  info: { type: Object as PropType<Article>, required: true },
});
const avatarInfo = reactive({
  id: 1,
  name: 'Congb19',
  src: klee,
  time: '19小时前'
});
</script>
<style lang="scss" scoped>
.cbapp-article-main {
  width: calc(100vw - 30px);
  padding: 15px;
  // margin-bottom: 10px;
  .article__header {
  }
  .article__title {
  }
  .article__summary {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    // white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    color: #80858b;
    font-size: 12px;
  }
  .article__imgs {
  }
}
</style>
