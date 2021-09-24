import { createRouter, createWebHistory } from 'vue-router';

import index from '../pages/index.vue';
import game from '../pages/game.vue';
import diary from '../pages/diary.vue';
import kbn from '../pages/kbn.vue';

// routes
const routes = [
  { path: '/', component: index },
  { path: '/game', component: game },
  { path: '/diary', component: diary },
  { path: '/kbn', component: kbn },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
