import { createRouter, createWebHistory } from 'vue-router';

// import HelloWorld from '../components/HelloWorld.vue';

import index from '../pages/index.vue';
import game from '../pages/game.vue';
const About = { template: '<div>About page</div>' };

// routes
const routes = [
	{ path: '/', component: index },
	{ path: '/about', component: About },
	{ path: '/game', component: game },
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
