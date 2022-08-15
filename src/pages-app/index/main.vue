<template>
  <div class="cbapp-main" ref="main" @scroll="updateTransparency">
    <TopbarMain
      :active="activeClub"
      :options="clubs"
      :transparency="transparency"
      @option-change="clubChange"
      @left-clicked="search"
      @right-clicked="dispose"
    ></TopbarMain>
    <div class="cbapp-main__tools"></div>
    <div class="cbapp-main__pub"></div>
    <div class="cbapp-main__pins">
      <div class="__title">
        <n-icon size="20" :component="DocumentTextOutline"></n-icon>
        <div class="__title__left">&nbsp;官方资讯</div>
        <div class="__title__right" @click="viewAllPins">
          全部&nbsp;<n-icon size="10" :component="ArrowForward"></n-icon>
        </div>
      </div>
      <div class="pins__item" v-for="item in pins">
        <div class="pins__item__title">{{ item.title }}</div>
        <div class="pins__item__tag">{{ item.tag }}</div>
        <div class="pins__item__time">{{ item.time }}</div>
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
import { computed, reactive, ref } from 'vue';
import { NIcon } from 'naive-ui';
import { DocumentTextOutline, ArrowForward } from '@vicons/ionicons5';
import TopbarMain from '../../components-app/index/main/topbar-main.vue';
import ArticleMain from '../../components-app/index/main/article-main.vue';

// 全局相关 -----------------------------------------------------
// topbar透明度控制
const main = ref();
const transparency = ref(0);
const updateTransparency = (e: Event) => {
  const scrollTop = (e.target as HTMLElement).scrollTop;
  transparency.value = scrollTop > 100 ? 1 : scrollTop / 100;
};
// 下拉释放刷新

// topbar相关 -----------------------------------------------------
// topbar-club
let clubs = reactive([
  {
    id: 0,
    name: 'genshin',
  },
  {
    id: 1,
    name: 'zzz',
  },
  {
    id: 2,
    name: 'bhbhbhbh',
  },
  {
    id: 3,
    name: 'wdadadasfavcv',
  },
]);
const activeClub = ref(0);
const clubChange = (id: number) => {
  activeClub.value = id;
};
// topbar-events
const showSearch = ref(false);
const showDispose = ref(false);
const search = () => {
  showSearch.value = true;
};
const dispose = () => {
  showDispose.value = true;
};

// tools相关（各种链接入口） -----------------------------------------------------
// tools
let tools = reactive([
  {
    id: 0,
    name: 'genshin',
  },
  {
    id: 1,
    name: 'zzz',
  },
  {
    id: 2,
    name: 'bhbhbhbh',
  },
  {
    id: 3,
    name: 'wdadadasfavcv',
  },
]);

// pub相关（旅行者讨论区） -----------------------------------------------------
// pub

// pins相关（置顶资讯，本质也是帖子） -----------------------------------------------------
// pins
let pins = reactive([
  {
    id: 0,
    tag: '公告',
    title: '标题标题111233',
    time: '21小时前',
  },
  {
    id: 1,
    tag: '资讯',
    title: '标题标题啊啊啊时代',
    time: '1天前',
  },
  {
    id: 2,
    tag: '公告',
    title: '标题标题111233123qwer',
    time: '2022-08-13',
  },
  {
    id: 3,
    tag: '公告',
    title: '标题标题7896',
    time: '2022-08-11',
  },
]);
const viewAllPins = () => {};

// articles相关 -----------------------------------------------------
// 文章
const articles = reactive([
  {
    id: 0,
    tag: '公告',
    title: '标题标题111233',
    summary:
      '这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，',
    time: '21小时前',
  },
  {
    id: 1,
    tag: '资讯',
    title: '标题标题啊啊啊时代',
    summary:
      '这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，',
    time: '1天前',
  },
  {
    id: 2,
    tag: '公告',
    title: '标题标题111233123qwer',
    summary:
      '这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，',
    time: '2022-08-13',
  },
  {
    id: 3,
    tag: '公告',
    title: '标题标题7896',
    summary:
      '这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，这是一篇文章，',
    time: '2022-08-11',
  },
]);
</script>
<style scoped lang="scss">
.cbapp-main::-webkit-scrollbar {
  width: 0px;
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
.cbapp-main {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: scroll;
  &__tools {
    width: 100vw;
    height: 200px;
    background-color: darkblue;
  }
  &__pub {
    width: 100vw;
    height: 100px;
    background-color: palegreen;
  }
  &__pins {
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
  &__articles {
    position: relative;
    width: 100vw;
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
}
</style>
