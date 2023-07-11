<template>
  <img alt="logo" width="200" src="../assets/sayu.jpg" />
  <n-h1>你在烦恼什么呢</n-h1>
  <n-h2>这里是Congb19的小站！大家要天天开心</n-h2>

  <c-button
    type="success"
    clean
    @c_click="
      () => {
        msg.success('功德+1');
        gd++;
      }
    "
    >🐟 电子木鱼</c-button
  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;功德：{{ gd }}
  <n-divider title-placement="center">我的其他站</n-divider>
  <n-li>
    Combo UI ⚙：
    <n-a target="_blank" href="https://combo.congb19.com">@Combo UI</n-a>
  </n-li>
  <n-li>
    文档和博客站 📂：
    <n-a target="_blank" href="https://blog.congb19.com">@blog</n-a>
  </n-li>
  <n-li>
    Github 🐱：
    <n-a target="_blank" href="https://github.com/Congb19">@Congb19</n-a>
  </n-li>
  <n-li>
    解忧杂货铺 🏪：
    <n-a href="/top/kbn">@解忧杂货铺</n-a>
  </n-li>
  <n-divider title-placement="center">有烦恼吗？</n-divider>
  <n-li>
    悄悄聊:
    <n-a target="_blank" href="http://t.me/Congb19">@Congb19</n-a>
  </n-li>
  <n-li>
    私人邮箱 📧 :
    <n-a href="mailto:linyc@congb19.com">linyc@congb19.com</n-a>
  </n-li>
  <n-divider title-placement="center">小功能</n-divider>
  <n-li>
    小工具箱 🔧：
    <n-a target="_blank" href="/tools">@Toolbox</n-a>
  </n-li>
  <n-li> 暗黑模式（↘） </n-li>
  <n-divider title-placement="center">碎碎念</n-divider>
  <n-p>这个网站不知道写点什么了😭，走过路过，来点 IDEA 吧~~</n-p>

  <!-- <n-p>恋爱选我我超甜🍬</n-p> -->
</template>

<script lang="ts" setup>
import {
  CMessageProvider,
  useMsg,
  CButton,
} from '@congb19/combo-ui/dist/combo-ui/es/src/index.mjs';
import { ref } from 'vue';
const msg = useMsg();
const gd = ref(0);
</script>

<style scoped></style>
