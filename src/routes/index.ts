import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from 'vue-router';

//login
const login = () => import( '../pages/login.vue');
//layout
const top = () => import( '../layout/top.vue');
const admin = () => import( '../layout/admin.vue');
const combo = () => import( '../layout/combo.vue');
const tools = () => import( '../layout/tools.vue');
const app = () => import('../layout/app.vue');

//top 主页下的页面
const index = () => import( '../pages/index.vue');
const wall = () => import( '../pages/wall.vue');
const kbn = () => import( '../pages/kbn.vue');
const errors = () => import( '../pages/errors.vue');
const tsxtest = () => import( '../pages/tsxtest');
//admin下的页面
const dashboard = () => import( '../pages/admin/dashboard.vue');
const admin_index = () => import( '../pages/admin/index.vue');
//combo下的页面
const introduce = () => import( '../pages/combo/introduce.vue');
const combo_index = () => import( '../pages/combo/index.vue');
//tools下的页面
const keyboard = () => import( '../pages/tools/keyboard.vue');
const sysinfo = () => import('../pages/tools/sysinfo.vue');
const screen = () => import('../pages/tools/screen.vue')
//app 页面
const index_app = () => import( '../pages-app/index.vue');
const article_app = () => import( '../pages-app/article.vue');
const main_app = () => import('../pages-app/index/main.vue');

// routes
const routes = [
  { path: '/login', component: login },
  {
    path: '/app',
    component: app,
    children: [
      {
        path: 'index',
        component: index_app,
        children: [
          {
            path: 'main',
            component: main_app,
          },
          { path: '', redirect: '/app/index/main' },
        ],
      },
      { path: 'article/:id', component: article_app },
      { path: '', redirect: '/app/index' },
    ],
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
  {
    path: '/tools',
    component: tools,
    children: [
      { path: 'keyboard', component: keyboard },
      { path: 'sysinfo', component: sysinfo },
      { path: 'screen', component: screen },
      { path: '', redirect: '/tools/keyboard' },
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
