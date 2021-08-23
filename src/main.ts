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
  ],
});

const app = createApp(App);

app.use(router);
app.use(naive);

app.mount('#app');
