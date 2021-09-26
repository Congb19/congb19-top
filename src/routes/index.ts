import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';

import index from '../pages/index.vue';
import game from '../pages/game.vue';
import diary from '../pages/diary.vue';
import kbn from '../pages/kbn.vue';
import wyw from '../pages/wyw.vue';

// routes
const routes = [
  { path: '/', component: index },
  { path: '/game', component: game },
  { path: '/diary', component: diary },
  { path: '/kbn', component: kbn },
  { path: '/wyw', component: wyw },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
