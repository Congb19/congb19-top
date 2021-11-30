<template>
  <n-card class="cb-kbn__opendays">已营业 {{ openDays }} 天</n-card>
  <n-h1>Congb19 的解忧杂货铺 </n-h1>
  <n-button-group size="large">
    <n-button type="success" round @click="showHappyModal = true">
      <template #icon> 🛫 </template>
      我要分享快乐
    </n-button>
    <n-button type="error" round @click="showWorryModal = true">
      <template #icon> 💢 </template>
      我有烦恼求助
    </n-button>
  </n-button-group>
  <kbn-item v-for="item in happinessList" :info="item"></kbn-item>
  <!-- <div>{{ store.state.message }}</div> -->
  <n-modal
    class="cb-modal"
    v-model:show="showHappyModal"
    preset="card"
    :style="modalStyle"
    title="分享快乐！"
    size="medium"
    :bordered="false"
  >
    <n-input
      v-model:value="happyForm.author_name"
      placeholder="该怎么称呼你？我叫 Congb19"
    >
      <template #prefix> 昵称 😀 </template>
    </n-input>
    <n-input
      v-model:value="happyForm.content"
      type="textarea"
      placeholder="今天喝了奥奥椰椰咖啡，特别好喝"
    >
      <template #prefix> 快乐 🍬 </template>
    </n-input>
    <n-input
      v-model:value="happyForm.contact_info"
      placeholder="如果你不愿意展示出来被人骚扰，可以不写"
    >
      <template #prefix> 联系方式 📧 </template>
    </n-input>
    <template #footer>
      <n-button type="success" round @click="handleHappy">
        <template #icon> 🛫 </template>
        分享
      </n-button>
    </template>
  </n-modal>
  <n-modal
    class="cb-modal"
    v-model:show="showWorryModal"
    preset="card"
    :style="modalStyle"
    title="解决烦恼！"
    size="medium"
    :bordered="false"
  >
    <n-input
      v-model:value="worryForm.author_name"
      placeholder="该怎么称呼你？我叫 Congb19"
    >
      <template #prefix> 昵称 🍪 </template>
    </n-input>
    <n-input
      v-model:value="worryForm.content"
      type="textarea"
      placeholder="今天请小姐姐去看电影，结果被 🕊 了"
    >
      <template #prefix> 烦恼 ☁ </template>
    </n-input>
    <n-input
      v-model:value="worryForm.contact_info"
      placeholder="如果我能帮到你，我会来找你的！"
    >
      <template #prefix> 联系方式 📧 </template>
    </n-input>
    <template #footer>
      <n-button type="success" round @click="handleWorry">
        <template #icon> 🛫 </template>
        发送
      </n-button>
    </template>
  </n-modal>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import { useMessage } from 'naive-ui';
import store from '../store';
import { getHappinessList, postKbn } from '../api';
import KbnItem from '../components/kbn-item.vue';
export default defineComponent({
  components: {
    KbnItem,
  },
  setup: () => {
    const message = useMessage();
    let openDays = ref(1);
    let showHappyModal = ref(false);
    let showWorryModal = ref(false);
    let modalStyle = ref({
      // width: '600px',
      // 'border-radius': '10px',
    });
    let happyForm = ref({
      type: 0, //0: happiness, 1: worry
      content: '',
      contact_info: '',
      author_name: '',
    });
    let worryForm = ref({
      type: 1, //0: happiness, 1: worry
      content: '',
      contact_info: '',
      author_name: '',
    });
    let happinessList = ref([
      {
        floor: 1,
        content: '今天吃了饭',
        created_time: '20210924',
        author_name: 'lyc',
      },
    ]);
    const initData = async () => {
      // let res = await getHappinessList();
      // console.log(res);
    };
    const setOpenDays = () => {
      let openday = new Date(2021, 8, 24);
      openDays.value = Math.ceil(
        (Date.now() - openday.getTime()) / (1000 * 60 * 60 * 24)
      );
    };
    const welcome = () => {
      console.log('欢迎大家光临！已营业', openDays.value, '天');
    };
    const handleHappy = async () => {
      console.log('handle happy', happyForm.value);
      //发送
      // let res = await postInfo({});
      //弹一个成功失败的info，成功则关闭modal，失败不关闭
      // message.success('分享成功！我审核通过后就会展示出来啦', {
      //   duration: 6000,
      // });
      message.warning('dbq，我还没写完，所以还分享不了QAQ', {
        duration: 4000,
      });
      showHappyModal.value = false;
    };
    const handleWorry = () => {
      message.warning('dbq，我还没写完，所以还分享不了QAQ', {
        duration: 4000,
      });
      showHappyModal.value = false;
    };
    onMounted(async () => {
      //初始化
      setOpenDays();
      welcome();
      //获取
      await initData();
      // if ((res.status = 1)) happinessList.value = res.data;
    });
    return {
      store,
      openDays,
      modalStyle,
      happyForm,
      worryForm,
      showHappyModal,
      showWorryModal,
      happinessList,
      handleHappy,
      handleWorry,
    };
  },
});
</script>

<style lang="scss" scoped>
.cb-kbn__opendays {
  position: absolute;
  right: 10px;
  width: 150px;
}
</style>
