<template>
  <n-collapse default-expanded-names="['1', '2']">
    <n-collapse-item title="GAME!" name="1">
      <wall-item v-for="item in gameList" :info="item"></wall-item>
    </n-collapse-item>
    <n-collapse-item title="OTHERS" name="2">
      <div>ASD</div>
    </n-collapse-item>
  </n-collapse>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import store from '../store';
import WallItem from '../components/wall-item.vue';
export default defineComponent({
  components: {
    WallItem,
  },
  setup: () => {
    let gameList = ref([
      {
        imgsrc: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        title: '123title',
        content: '123content',
      },
    ]);
    const initData = async () => {};
    onMounted(async () => {
      console.log('wall');
      await initData();
    });
    return { gameList, msg: store.state.message };
  },
});
</script>

<style lang="scss" scoped></style>
