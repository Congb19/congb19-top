<template>
  <n-card class="cb-kbn__opendays">已营业 {{ openDays }} 天</n-card>
  <n-h1>Congb19 的解忧杂货铺 </n-h1>
  <n-button-group size="large">
    <n-button type="success" round @click="handleHappy">
      <template #icon> 🛫 </template>
      我要分享快乐
    </n-button>
    <n-button type="error" round @click="handleSad">
      <template #icon> 💢 </template>
      我有烦恼求助
    </n-button>
  </n-button-group>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import store from '../store';
import { getHappinessList, postInfo } from '../api';
export default defineComponent({
  setup: () => {
    let openDays = ref(1);
    let happinessList = ref([
      {
        floor: 1,
        content: '今天吃了饭',
        created_time: '20210924',
        author_name: 'lyc',
      },
    ]);
    const setOpenDays = () => {
      let openday = new Date(2021, 8, 24);
      openDays.value = Math.ceil(
        (Date.now() - openday.getTime()) / (1000 * 60 * 60 * 24)
      );
    };
    const welcome = () => {
      console.log('欢迎大家光临！已营业', openDays.value, '天');
    };
    const handleHappy = () => {
      //发送
    };
    const handleSad = () => {
      //发送
    };
    onMounted(async () => {
      setOpenDays();
      welcome();
      // console.log(Date.now(), openday.getTime());
      // happinessList.value = await getHappinessList();
    });
    return { openDays, handleHappy, handleSad };
  },
});
</script>

<style lang="scss" scoped>
.cb-kbn__opendays {
  width: 150px;
  position: absolute;
  right: 10px;
  // float: right;
}
</style>
