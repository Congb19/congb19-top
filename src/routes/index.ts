import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from 'vue-router';

//layout
import top from '../layout/top.vue'
import app from '../layout/app.vue';

//top 主页下的页面
import index from '../pages/index.vue';
import wall from '../pages/wall.vue';
import kbn from '../pages/kbn.vue';
import errors from '../pages/errors.vue';
import test from '../pages/test.vue';
//top 主页下的页面 - 控制台
import admin from '../pages/admin/index.vue';
import dashboard from '../pages/admin/dashboard.vue';
//top 主页下的页面 - combo-ui文档页
import combo from '../pages/combo/index.vue';
import introduce from '../pages/combo/introduce.vue';

//app 页面
import index_app from '../pages-app/index.vue'


// routes
const routes = [
  {
    path: '/app',
    component: app,
    children: [{ path: '', component: index_app }],
  },
  {
    path: '/top',
    component: top,
    children: [
      {
        path: 'admin',
        component: admin,
        children: [
          { path: 'dashboard', component: dashboard },
          {
            path: ':pathMatch(.*)',
            component: errors,
            meta: { status: '404' },
          },
        ],
      },
      {
        path: 'combo',
        component: combo,
        children: [
          { path: 'introduce', component: introduce },
          {
            path: ':pathMatch(.*)',
            component: errors,
            meta: { status: '404' },
          },
        ],
      },
      { path: 'wall', component: wall },
      { path: 'kbn', component: kbn },
      { path: 'test', component: test },
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
