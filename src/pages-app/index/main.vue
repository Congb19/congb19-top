<template>
  <div class="cbapp-main" ref="main" @scroll="updateTransparency">
    <TopbarMain
      :active="activeClub"
      :options="clubs"
      :transparency="transparency"
      @option-change="clubChange"
    ></TopbarMain>
    <div class="cbapp-main__tools"></div>
    <div class="cbapp-main__pub"></div>
    <div class="cbapp-main__pins"></div>
    <div class="cbapp-main__articles"></div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import TopbarMain from '../../components-app/topbar-main.vue';

const main = ref();

const clubs = reactive([
  {
    id: 0,
    name: 'genshin',
  },
  {
    id: 1,
    name: 'zzz',
  },
]);
const activeClub = ref(0);
const clubChange = (id: number) => {
  activeClub.value = id;
};
const transparency = ref(1);
const updateTransparency = (e: Event) => {
  const scrollTop = (e.target as HTMLElement).scrollTop;
  transparency.value = scrollTop > 100 ? 1 : scrollTop / 100;
};

const articles = reactive([]);
</script>
<style scoped lang="scss">
.cbapp-main::-webkit-scrollbar {
  width: 0px;
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
    width: 100vw;
    height: 100px;
    background-color: floralwhite;
  }
  &__articles {
    width: 100vw;
    height: 1000px;
    background-color: khaki;
  }
}
</style>
