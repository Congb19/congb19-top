import { createRouter, createWebHistory } from 'vue-router';

import index from '../pages/index.vue';
import game from '../pages/game.vue';
import diary from '../pages/diary.vue';

// routes
const routes = [
  { path: '/', component: index },
  { path: '/game', component: game },
  { path: '/diary', component: diary },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
