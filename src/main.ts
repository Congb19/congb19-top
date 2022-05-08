// app
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

// router
import router from './routes';
app.use(router);

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
  NTag,
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
    NTag
  ],
});
app.use(naive);

// combo-ui
import { create as createCombo, C } from './combo-ui';
import './combo-ui/index.css';
const combo = createCombo(C.All);
app.use(combo);

// vant
import { Button, ConfigProvider } from 'vant';
app.use(Button);
app.use(ConfigProvider);

// mount!
app.mount('#app');
