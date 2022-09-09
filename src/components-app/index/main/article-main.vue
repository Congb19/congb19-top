<template>
  <div class="cbapp-article-main">
    <div class="article__header">
      <Avatar :info="avatarInfo" @click="showProfile"></Avatar>
    </div>
    <div class="article__title" @click="showArticle">{{ info.Title }}</div>
    <div class="article__summary" @click="showArticle">{{ info.Content }}</div>
    <div class="article__imgs" @click="showPictrue"></div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed, PropType, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { NIcon } from 'naive-ui';
import { Search, List } from '@vicons/ionicons5';
import sayu from '@/assets/sayu.jpg';
import klee from '@/assets/klee.jpeg';
import Avatar from '@/components-app/common/avatar.vue';
const props = defineProps({
  info: { type: Object as PropType<any>, required: true },
});
// console.log(props.info)
const avatarInfo = reactive({
  id: 1,
  name: 'Congb19',
  src: klee,
  time: '19小时前',
});
const router = useRouter();
const showArticle = () => {
  router.push('/app/article/' + props.info.ID);
};
const showProfile = () => {};
const showPictrue = () => {};
</script>
<style lang="scss" scoped>
.cbapp-article-main {
  width: calc(100vw - 30px);
  padding: 15px;
  // margin-bottom: 10px;
  .article__header {
  }
  .article__title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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