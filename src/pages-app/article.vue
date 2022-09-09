<template>
  <div class="cbapp-article-view">
    <div class="cbapp-article-detail">
      <div class="article__header">
        <Avatar :info="avatarInfo" @click="showProfile"></Avatar>
      </div>
      <div class="article__title">{{ info.Title }}</div>
      <div class="article__summary">{{ info.Content }}</div>
      <div class="article__imgs"></div>
    </div>
  </div>
  <TabbarArticle></TabbarArticle>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import klee from '@/assets/klee.jpeg';
import Avatar from '@/components-app/common/avatar.vue';
import TabbarArticle from '@/components-app/article/tabbar-article.vue';
import { useRoute } from 'vue-router';

import * as API from '@/api/index_app';

const route = useRoute();
const id = route.params.id;
let info = {
  Title: '测试标题',
  Content: '测hi',
};
let replies = [];
const avatarInfo = reactive({
  id: 1,
  name: 'Congb19',
  src: klee,
  time: '19小时前',
});
const showProfile = () => {};

onMounted(async () => {
  info = await API.ARTICLE.getArticleDetail(parseInt(id as string), 1);
});
</script>
<style scoped lang="scss">
  
.cbapp-article-detail {
  box-sizing: border-box;
  // height: 100vh;
  margin: 24px 12px 54px 12px;
}
.article__header {
}
.article__title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.article__summary {
  color: #80858b;
  font-size: 12px;
}
.article__imgs {
}
</style>