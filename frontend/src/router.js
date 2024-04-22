import { createRouter, createWebHistory } from 'vue-router';
import MainComponent from './components/MainComponent.vue';
import LostComponent from './components/LostComponent.vue';
import CodeComponent from './components/CodeComponent.vue';
import NotFoundComponent from './components/NotFoundComponent.vue';

const routes = [
    { 
      path: '/',
      name: 'Home',
      component: MainComponent, 
    },
    {
      path: '/lost',
      name: 'Lost',
      component: LostComponent,
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFoundComponent,
    },
    {
      path: '/:http_code',
      name: 'Code',
      component: CodeComponent,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
