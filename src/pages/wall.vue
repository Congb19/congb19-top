<template>
  <n-collapse default-expanded-names="1" accordion>
    <n-collapse-item title="GAME!" name="1">
      <!-- <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi a
        voluptates natus commodi minus facilis alias. Totam quam tempora sunt
        tempore assumenda architecto soluta enim fugit. Facilis quos ipsum
        placeat?
      </div>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" /> -->
      <wall-item v-for="item in gameList" :info="item"></wall-item>
    </n-collapse-item>
    <n-collapse-item title="OTHERS" name="2">
      <div>ASD</div>
    </n-collapse-item>
  </n-collapse>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
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
    return { gameList, msg: store.state.message };
  },
});
</script>

<style lang="scss" scoped></style>
