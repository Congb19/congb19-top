<template>
  <n-card class="cb-kbn__opendays">已营业 {{ openDays }} 天</n-card>
  <n-h1>Congb19 的解忧杂货铺 </n-h1>
  <n-button-group size="large">
    <n-button type="success" round @click="handleShow(1)">
      <template #icon> 🛫 </template>
      我要分享快乐
    </n-button>
    <n-button type="error" round @click="handleShow(2)">
      <template #icon> 💢 </template>
      我有烦恼求助
    </n-button>
  </n-button-group>
  <kbn-item v-for="item in happinessList" :info="item"></kbn-item>

  <n-modal
    class="cb-modal"
    v-model:show="showModal"
    preset="card"
    :style="modalStyle"
    :title="texts.title"
    size="medium"
    :bordered="false"
  >
    <n-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-placement="left"
      label-width="auto"
      require-mark-placement="right-hanging"
      :style="{
        maxWidth: '600px',
      }"
    >
      <n-form-item label="昵称 🍪" path="authorName">
        <n-input
          v-model:value="form.authorName"
          :placeholder="texts.authorName"
        >
          <!-- <template #prefix> 昵称 🍪 </template> -->
        </n-input>
      </n-form-item>
      <n-form-item label="内容 ❓ " path="content">
        <n-input
          v-model:value="form.content"
          type="textarea"
          :placeholder="texts.content"
        >
          <!-- <template #prefix>内容</template> -->
        </n-input>
      </n-form-item>
      <n-form-item label="联系方式 📧" path="contactInfo">
        <n-input
          v-model:value="form.contactInfo"
          :placeholder="texts.contactInfo"
        >
          <!-- <template #prefix> 联系方式 📧 </template> -->
        </n-input>
      </n-form-item>
    </n-form>
    <template #footer>
      <n-button type="success" round @click="handleShare">
        <template #icon> 🛫 </template>
        发送
      </n-button>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { onMounted, computed, reactive } from 'vue';
import { useMessage, FormInst } from 'naive-ui';
import { kbnList } from '@/types/kbn';
import { getHappinessList, postKbn } from '@/api';
import KbnItem from '@/components/kbn-item.vue';

// 全局工具/数据
const message = useMessage();
let openDays = $ref(1);
let happinessList: kbnList[] = reactive([]);

// type
let modalType: number = $ref(1); // 1 快乐 2 烦恼

// placeholder
const texts = computed(() => {
  return {
    title: modalType == 1 ? '分享快乐！' : '烦恼求助',
    authorName: '该怎么称呼你？我叫 Congb19',
    content:
      modalType == 1
        ? '今天喝了奥奥椰椰咖啡，特别好喝'
        : '约人看电影，结果被 🕊 了',
    contactInfo:
      modalType == 1
        ? '如果你不愿意展示出来被人骚扰，可以不写'
        : '如果我能帮到你，我会来找你的！',
    shareSuccess: ''
  };
});

// showModal
let showModal = $ref(false);
const handleShow = (type: number) => {
  modalType = type;
  showModal = true;
};
let modalStyle = {
  width: '600px',
  borderRadius: '10px',
};

// actions
let form = reactive({
  content: '',
  contactInfo: '',
  authorName: '',
});
let rules = {
  authorName: {
    required: true,
    message: '请输入昵称',
    trigger: 'blur',
  },
  content: {
    required: true,
    message: '请输入内容',
    trigger: ['input', 'blur'],
  },
  contactInfo: {},
};
const formRef = $ref<FormInst | null>(null);
const handleShare = async () => {
  console.log('handleShare', form);
  formRef?.validate((errors) => {
    if (!errors) {
      //发送
      const params = {
        type: modalType,
        ...form,
      };
      // let res = await postInfo(params);
      //弹一个成功失败的info，成功则关闭modal，失败不关闭
      // message.success('分享成功！我审核通过后就会展示出来啦。如果是烦恼，我会来联系你的', {
      //   duration: 6000,
      // });
      // showModal = false;
      message.warning('dbq，解忧杂货铺功能还没写完，所以还分享不了QAQ', {
        duration: 4000,
      });
    } else {
      console.log(errors);
      message.error('请填写完整');
    }
  });
};

// 初始化
const setOpenDays = () => {
  let openday = new Date(2021, 8, 24);
  openDays = Math.ceil(
    (Date.now() - openday.getTime()) / (1000 * 60 * 60 * 24)
  );
};
const welcome = () => {
  console.log('欢迎大家光临！已营业', openDays, '天');
};
onMounted(async () => {
  //初始化
  setOpenDays();
  welcome();
  //获取
  let res = await getHappinessList();
  console.log(res);
  if (res.code == 200) happinessList = [...res];
});
</script>

<style lang="scss" scoped>
.cb-kbn__opendays {
  position: absolute;
  right: 10px;
  width: 150px;
}
</style>
