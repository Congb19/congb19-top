import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from 'vue-router';

//login
import login from '../pages/login.vue';
//layout
import top from '../layout/top.vue';
import app from '../layout/app.vue';
import admin from '../layout/admin.vue';
import combo from '../layout/combo.vue';

//top 主页下的页面
import index from '../pages/index.vue';
import wall from '../pages/wall.vue';
import kbn from '../pages/kbn.vue';
import errors from '../pages/errors.vue';
import tsxtest from '../pages/tsxtest';
//admin下的页面
import dashboard from '../pages/admin/dashboard.vue';
import admin_index from '../pages/admin/index.vue';
//combo下的页面
import test from '../pages/combo/test.vue';
import introduce from '../pages/combo/introduce.vue';
import combo_index from '../pages/combo/index.vue';
//app 页面
import index_app from '../pages-app/index.vue';

// routes
const routes = [
  { path: '/login', component: login },
  {
    path: '/app',
    component: app,
    children: [{ path: '', component: index_app }],
  },
  {
    path: '/admin',
    component: admin,
    children: [
      { path: 'dashboard', component: dashboard },
      { path: '', component: admin_index },
      {
        path: ':pathMatch(.*)',
        component: errors,
        meta: { status: '404' },
      },
    ],
  },
  {
    path: '/combo',
    component: combo,
    children: [
      { path: 'introduce', component: introduce },
      { path: 'test', component: test },
      { path: '', component: combo_index },
      {
        path: ':pathMatch(.*)',
        component: errors,
        meta: { status: '404' },
      },
    ],
  },
  {
    path: '/top',
    component: top,
    children: [
      { path: 'wall', component: wall },
      { path: 'kbn', component: kbn },
      { path: 'tsxtest', component: tsxtest },
      { path: '', component: index },
      { path: ':pathMatch(.*)', component: errors, meta: { status: '404' } },
    ],
  },
  { path: '', redirect: '/top' },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
