<template>
  <div class="cbapp-main__club">
    <div class="cbapp-main__tools" :style="style_tools">
      <div class="cbapp-main__pub"></div>
    </div>
    <div class="cbapp-main__pins">
      <div class="__title">
        <n-icon size="20" :component="DocumentTextOutline"></n-icon>
        <div class="__title__left">&nbsp;官方资讯</div>
        <div class="__title__right" @click="viewAllPins">
          全部&nbsp;<n-icon size="10" :component="ArrowForward"></n-icon>
        </div>
      </div>
      <div class="pins__item" v-for="item in pins">
        <div class="pins__item__title">{{ item.Title }}</div>
        <div class="pins__item__tag" v-for="i in item.Tags.split(',')">
          {{ i }}
        </div>
        <div class="pins__item__time">
          {{ item.time }}
        </div>
      </div>
    </div>
    <div class="cbapp-main__articles">
      <div class="cbapp-main__articles__title">
        <n-icon size="20" :component="DocumentTextOutline"></n-icon>
        <div class="cbapp-main__articles__title__left">&nbsp;推荐</div>
      </div>
      <div class="cbapp-main__articles__item" v-for="item in articles">
        <ArticleMain :info="item"></ArticleMain>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref, PropType } from 'vue';
import { NIcon, NSpin } from 'naive-ui';
import { DocumentTextOutline, ArrowForward } from '@vicons/ionicons5';
import { useTimeAgo } from '@vueuse/core';
import ArticleMain from '@/components-app/index/main/article-main.vue';

import * as API from '@/api/index_app';

const props = defineProps({
  info: { type: Object as PropType<any>, required: true },
});
const emits = defineEmits(['refreshOk']);
const id = props.info.ID;
const style_tools = {
  background: `url(${props.info.ImgSrc})`,
};

// 全局相关 -----------------------------------------------------
// 下拉释放刷新

// tools相关（各种链接入口） -----------------------------------------------------
// tools
let tools: any[] = reactive([]);

// pub相关（旅行者讨论区） -----------------------------------------------------
// pub

// pins相关（置顶资讯，本质也是帖子） -----------------------------------------------------
// pins
let pins: any[] = reactive([]);
const viewAllPins = () => {};

// articles相关 -----------------------------------------------------
// 文章
let articles: any[] = reactive([]);

onMounted(async () => {
  const res_tools = await API.PUBLIC.getTools(id);
  tools.length = 0;
  res_tools.data && tools.push(...res_tools.data);
  const res_articles = await API.PUBLIC.getArticles(id, 1);
  articles.length = 0;
  res_articles.data && articles.push(...res_articles.data);
  const res_pins = await API.PUBLIC.getPins(id);
  pins.length = 0;
  res_pins.data &&
    pins.push(
      ...res_pins.data.map((item: any) => {
        return { ...item, time: useTimeAgo(new Date(item.CreatedAt)) };
      })
    );
  Promise.all([res_tools, res_articles, res_pins]).then(() => {
    emits('refreshOk');
  });
});
</script>
<style scoped lang="scss">
.mask {
  z-index: 9999;
  height: 100vh;
  width: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.__title {
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 10px;
  &__left {
    display: inline-block;
    position: absolute;
    left: 32px;
    top: 16px;
  }
  &__right {
    display: inline-block;
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 10px;
  }
}
// .cbapp-main__club{
//   margin-bottom: 30px;
// }
.cbapp-main__club{
  background-color: #F6F6F6;
}
.cbapp-main__tools {
  width: 100vw;
  height: 230px;
  position: relative;
  .cbapp-main__pub {
    position: absolute;
    bottom: 8px;
    width: calc(100vw - 30px);
    height: 65px;
    margin: 15px;
    border-radius: 5px;
    background-color: #ffffff;
  }
}
.cbapp-main__pins {
  position: relative;
  top: -10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 15px;
  width: calc(100vw - 30px);
  background-color: #ffffff;
  .pins__item {
    position: relative;
    background-color: #f8f8f8;
    padding: 10px 8px 5px 8px;
    border-radius: 3px;
    height: 35px;
    margin-top: 10px;
    &__title {
      font-size: 14px;
      line-height: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    &__tag {
      position: absolute;
      bottom: 5px;
      left: 8px;
      font-size: 12px;
      line-height: 12px;
      background-color: #bda575;
      border-radius: 2px;
    }
    &__time {
      position: absolute;
      bottom: 5px;
      right: 8px;
      font-size: 12px;
      color: #999;
      line-height: 12px;
      border-radius: 2px;
    }
  }
}
.cbapp-main__articles {
  position: relative;
  width: 100vw;
  // background-color: #F6F6F6;
  &__title {
    font-size: 18px;
    line-height: 18px;
    padding: 15px;
    background-color: #ffffff;
    &__left {
      display: inline-block;
      position: absolute;
      left: 32px;
      top: 16px;
    }
  }
  &__item {
    margin-bottom: 10px;
    background-color: #ffffff;
  }
}
</style>
