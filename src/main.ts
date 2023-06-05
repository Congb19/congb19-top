// app
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';


const app = createApp(App);

// router
import router from './routes';
app.use(router);

// pinia
const pinia = createPinia();
app.use(pinia);

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
  NIcon,
  NForm,
  NFormItem,
  NLoadingBarProvider
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
    NLoadingBarProvider,
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
    NTag,
    // NIcon,
    NForm,
    NFormItem,
  ],
});
app.use(naive);
// // naive-ui 全局
// import naive from 'naive-ui';
// app.use(naive);



// combo-ui
import { create as createCombo, C } from '@congb19/combo-ui';
import '@congb19/combo-ui/dist/combo-ui/es/style.css';

const combo = createCombo(C.All);
console.log(combo)
app.use(combo);

// mount!
app.mount('#app');
