import { createApp } from 'vue';
import App from './App.vue';

import router from './routes';

import {
  // create naive ui
  create,
  darkTheme,
  // component
  NButton,
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  NCard,
  NConfigProvider,
  NElement,
  NSwitch,
  NH1,
  NH2,
  NA,
  NH3,
  NP,
  NUl,
  NLi,
  NOl,
  NHr,
  NBlockquote,
  NImage,
  NImageGroup,
  NDivider,
  ButtonGroupProps,
  NButtonGroup,
  NModal,
  NInput,
  NMessageProvider,
} from 'naive-ui';
// 通用字体
import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';
const naive = create({
  components: [
    NElement,
    NButton,
    darkTheme,
    NSpace,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NCard,
    NConfigProvider,
    NMessageProvider,
    NSwitch,
    NH1,
    NH2,
    NA,
    NH3,
    NP,
    NUl,
    NLi,
    NOl,
    NHr,
    NBlockquote,
    NImage,
    NImageGroup,
    NDivider,
    NButtonGroup,
    NModal,
    NInput,
  ],
});

const app = createApp(App);

app.use(router);
app.use(naive);

app.mount('#app');
