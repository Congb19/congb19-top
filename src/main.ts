import { createApp } from 'vue';
import App from './App.vue';

import router from './routes';

// naive-ui
import {
  create,
  darkTheme,
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
  NCollapse,
  NCollapseItem,
  NResult,
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
    NCollapse,
    NCollapseItem,
    NResult,
  ],
});

// combo-ui
import { create as createCombo, C } from './combo-ui';
import './combo-ui/index.css';
const combo = createCombo(C.All);

// varlet-ui
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'

// app
const app = createApp(App);

app.use(router);
app.use(naive);
app.use(combo);
app.use(Varlet);

app.mount('#app');

// router.push('/top');
