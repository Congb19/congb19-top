import { createRouter, createWebHistory } from 'vue-router';

// import HelloWorld from '../components/HelloWorld.vue';

import index from '../pages/index.vue';
import game from '../pages/game.vue';
import diary from '../pages/diary.vue';
const About = { template: '<div>About page</div>' };

// routes
const routes = [
  { path: '/', component: index },
  { path: '/game', component: game },
  { path: '/diary', component: diary },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
