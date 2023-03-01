<template>
  <n-h1>Congb19 的解忧杂货铺 </n-h1>
  <n-h3>——已营业 {{ openDays }} 天</n-h3>
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

  <div v-for="item in happinessList" :key="item.id">
    <KbnItem :info="item" />
  </div>

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
        </n-input>
      </n-form-item>
      <n-form-item label="内容 ❓" path="content">
        <n-input
          v-model:value="form.content"
          type="textarea"
          :placeholder="texts.content"
        >
        </n-input>
      </n-form-item>
      <n-form-item label="联系方式 📧" path="contactInfo">
        <n-input
          v-model:value="form.contactInfo"
          :placeholder="texts.contactInfo"
        >
        </n-input>
      </n-form-item>
    </n-form>
    <template #footer>
      <n-button
        type="success"
        round
        @click="handleShare"
        :loading="submitLoading"
        :disabled="submitDisabled"
      >
        <template #icon> 🛫 </template>
        发送
      </n-button>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { onMounted, computed, reactive, ref } from 'vue';
import { useMessage, FormInst, useLoadingBar } from 'naive-ui';
import { kbnInfo } from '@/types/kbn';
import { getHappinessList, postKbn } from '@/api';

import KbnItem from '@/components/kbn-item.vue';

// 全局工具/数据
const message = useMessage();
const loadingBar = useLoadingBar();
let openDays = ref(1);
let happinessList: kbnInfo[] = reactive([]);
let submitLoading = ref(false);
let submitDisabled = ref(false);

// type
let modalType = ref(1); // 1 快乐 2 烦恼

// placeholder
const texts = $computed(() => {
  return {
    title: modalType.value == 1 ? '分享快乐！' : '烦恼求助',
    authorName: '该怎么称呼你？我叫 Congb19',
    content:
      modalType.value == 1
        ? '今天喝了奥奥椰椰咖啡，特别好喝'
        : '约人看电影，结果被 🕊 了',
    contactInfo:
      modalType.value == 1 ? '可以不写' : '如果我能帮到你，我会来找你的！',
    shareSuccess:
      modalType.value == 1
        ? '分享成功！我审核通过后就会展示出来啦。'
        : '分享成功！我会找个时间来联系你的。',
    shareFailed: '抱歉，服务器好像出了点问题',
    incomplete: '请填写完整',
  };
});

// showModal
let showModal = ref(false);
const handleShow = (type: number) => {
  modalType.value = type;
  showModal.value = true;
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
let rules = computed(() => {
  return {
    authorName: {
      required: true,
      message: '请输入昵称',
      trigger: ['input', 'blur'],
    },
    content: {
      required: true,
      message: '请输入内容',
      trigger: ['input', 'blur'],
    },
    contactInfo: {
      required: modalType.value == 2 ? true : false,
      message: '请输入联系方式',
      trigger: ['input', 'blur'],
    },
  };
});
const formRef = $ref<FormInst | null>(null);
const handleShare = async () => {
  formRef?.validate(async (errors) => {
    if (!errors) {
      //发送
      const params = {
        type: modalType,
        ...form,
      };
      loadingBar.start();
      let res = await postKbn(params);
      if (res.data?.code == 200) {
        loadingBar.finish();
        message.success(texts.shareSuccess, {
          duration: 4000,
        });
        showModal.value = false;
      } else {
        loadingBar.error();
        message.error(texts.shareFailed, {
          duration: 4000,
        });
      }
    } else {
      message.warning(texts.incomplete);
    }
  });
};

// 初始化
const setOpenDays = () => {
  let openday = new Date(2021, 8, 24);
  openDays.value = Math.ceil(
    (Date.now() - openday.getTime()) / (1000 * 60 * 60 * 24)
  );
};
const welcome = () => {
  console.log('欢迎大家光临！已营业', openDays.value, '天');
};

onMounted(async () => {
  //初始化
  setOpenDays();
  welcome();
  loadingBar.start();
  //获取
  let res = await getHappinessList();
  // console.log(res);
  if (res && res?.code == 200) {
    loadingBar.finish();
    happinessList.push(...res.data.sort((a, b) => b.id - a.id));
  } else loadingBar.error();
});
</script>

<style lang="scss" scoped></style>
