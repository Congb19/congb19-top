import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from 'vue-router';

import index from '../pages/index.vue';
import wall from '../pages/wall.vue';
import kbn from '../pages/kbn.vue';
import errors from '../pages/errors.vue';
import test from '../pages/test.vue';

import admin from '../pages/admin/index.vue';
import dashboard from '../pages/admin/dashboard.vue';

import combo from '../pages/combo/index.vue';
import introduce from '../pages/combo/introduce.vue';

// routes
const routes = [
  {
    path: '/admin',
    component: admin,
    children: [
      { path: 'dashboard', component: dashboard },
      { path: ':pathMatch(.*)', component: errors, meta: { status: '404' } },
    ],
  },
  {
    path: '/combo',
    component: combo,
    children: [
      { path: 'introduce', component: introduce },
      { path: ':pathMatch(.*)', component: errors, meta: { status: '404' } },
    ],
  },
  { path: '/wall', component: wall },
  { path: '/kbn', component: kbn },
  { path: '/test', component: test },
  { path: '/', component: index },
  { path: '/:pathMatch(.*)', component: errors, meta: { status: '404' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
