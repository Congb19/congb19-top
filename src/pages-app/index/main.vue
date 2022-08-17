<template>
  <n-spin :show="loading">
    <div class="cbapp-main" ref="main" @scroll="updateTransparency">
      <TopbarMain
        :active="activeClub"
        :options="clubs"
        :transparency="transparency"
        @option-change="clubChange"
        @left-clicked="search"
        @right-clicked="dispose"
      ></TopbarMain>
      <div v-for="item in clubs" :key="item.ID">
        <ClubMain
          v-if="item.ID == activeClub"
          :info="item"
          @refreshOk="refreshOk"
        ></ClubMain>
      </div>
    </div>
  </n-spin>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { NIcon, NSpin } from 'naive-ui';
import { DocumentTextOutline, ArrowForward } from '@vicons/ionicons5';
import TopbarMain from '@/components-app/index/main/topbar-main.vue';
import ArticleMain from '@/components-app/index/main/article-main.vue';
import ClubMain from '@/components-app/index/main/club-main.vue';

import * as API from '@/api/index_app';

// 全局相关 -----------------------------------------------------

const loading = ref(false);
// topbar透明度控制
const main = ref();
const transparency = ref(0);
const updateTransparency = (e: Event) => {
  const scrollTop = (e.target as HTMLElement).scrollTop;
  transparency.value = scrollTop > 100 ? 1 : scrollTop / 100;
};

// topbar相关 -----------------------------------------------------
// topbar-club
let clubs: any[] = reactive([]);
const activeClub = ref(1);
const clubChange = (id: number) => {
  loading.value = true;
  activeClub.value = id;
};
const refreshOk = () => {
  loading.value = false;
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

onMounted(async () => {
  const res_clubs = await API.PUBLIC.getClubs();
  clubs.length = 0;
  clubs.push(...res_clubs.data);
});
</script>
<style scoped lang="scss">
.cbapp-main::-webkit-scrollbar {
  width: 0px;
}
.cbapp-main {
  width: 100vw;
  height: calc(100vh - 0px);
  padding: 0;
  margin: 0;
  overflow: scroll;
}
</style>
