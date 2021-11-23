import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';

import index from '../pages/index.vue';
import game from '../pages/game.vue';
import wall from '../pages/wall.vue';
import kbn from '../pages/kbn.vue';
import wyw from '../pages/wyw.vue';
import dashboard from '../pages/dashboard/index.vue';
import errors from '../pages/errors.vue';

// routes
const routes = [
  { path: '/', component: index },
  { path: '/game', component: game },
  { path: '/wall', component: wall },
  { path: '/kbn', component: kbn },
  { path: '/wyw', component: wyw },
  { path: '/admin/dashboard', component: dashboard },
  { path: '/:pathMatch(.*)', component: errors, meta: { status: '404' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
